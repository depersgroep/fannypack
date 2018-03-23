/*
* de Persgroep Frontend gulfile
*
* Commands:
	* gulp default
		* "copy" images
		* "copy" fonts
		* js: eslint
		* css: stylelint
		* WATCH FILES ABOVE
	* gulp deploy
		* "copy" images
		* "copy" fonts
		* js: eslint
		* css: stylelint
* Flags:
	* --imagemin=true|false: Null, empty or not true ==> no imagemin (default)
	* --sassoutput=<value>: Null, empty or not one of ['nested', 'expanded', 'compact', 'compressed'] ==> expanded (default)
	* --sourcemaps=true|false: Null, empty or not true ==> sourcemaps (default)
*/

/* do NOT change the order of the pipes as this could cause unwanted effects */
'use strict';
var pkg = require('./package.json'),
	del = require('del'),
	es = require('event-stream'),
	gulp = require('gulp'),
	autoprefixer = require('gulp-autoprefixer'),
	bless = require('gulp-bless'),
	cached = require('gulp-cached'),
	concat = require('gulp-concat'),
	copy = require('gulp-copy'),
	cssminify = require('gulp-clean-css'),
	eslint = require('gulp-eslint'),
	imagemin = require('gulp-imagemin'),
	notify = require('gulp-notify'),
	plumber = require('gulp-plumber'),
	sass = require('gulp-sass'),
	stylelint = require('gulp-stylelint'),
	sourcemaps = require('gulp-sourcemaps'),
	uglify = require('gulp-uglify'),
	gUtil = require('gulp-util'),
	rename = require('gulp-rename'),
	run = require('gulp-run-command').default,
	fileExists = require('file-exists'),
	imageminPngquant = require('imagemin-pngquant'),
	gitHookDestinationPath = pkg.git.hooks.precommit.dest.substring(0, pkg.git.hooks.precommit.dest.lastIndexOf('/') + 1),
	gitHookDestinationName = pkg.git.hooks.precommit.dest.substring(pkg.git.hooks.precommit.dest.lastIndexOf('/') + 1);

// helper functions
function onError(err) {
	gUtil.log('\n', gUtil.colors.bold(gUtil.colors.red('Error ocurred: ') + err.message + ' @ ' + err.fileName + ':' + err.lineNumber), '\n');
	gUtil.beep();
	this.emit('end');
}

function getArgument(key) {
	return gUtil.env[key] ? gUtil.env[key] : null;
}

// clean folders
gulp.task('clean', function(cb) {
	del(pkg.clean, {
		'force': true
	}).then(function() {
		cb(null);
	}, function() {
		cb('Something went wrong with the clean task.');
	});
});

//  Images
gulp.task('imgbuild', function() {
	var imageminArg = getArgument('imagemin');

	if (imageminArg === 'true') {
		return gulp.src(pkg.img.src)
			.pipe(plumber({
				'errorHandler': onError
			}))
			.pipe(imagemin({
				'progressive': true,
				'use': [imageminPngquant()]
			}))
			.pipe(gulp.dest(pkg.img.dest))
			.pipe(notify({
				'message': 'IMG build complete',
				'onLast': true // otherwise the notify will be fired for each file in the pipe
			}));
	}

	return gulp.src(pkg.img.src)
		.pipe(copy(pkg.img.dest, {
			'prefix': 1
		})) // needs to be copy, not just ".dest" as mac often throws errors when the folder doesn't exist
		.pipe(notify({
			'message': 'IMG build complete',
			'onLast': true // otherwise the notify will be fired for each file in the pipe
		}));
});

// Fonts
gulp.task('fontsbuild', function() {
	return gulp.src(pkg.fonts.src)
		.pipe(copy(pkg.fonts.dest, {
			'prefix': 1
		})) // needs to be copy, not just ".dest" as mac often throws errors when the folder doesn't exist
		.pipe(notify({
			'message': 'Fonts build complete',
			'onLast': true // otherwise the notify will be fired for each file in the pipe
		}));
});

// Javascript
gulp.task('eslint', function() {
	return gulp.src(pkg.js.hint.src)
		.pipe(plumber({
			'errorHandler': onError
		}))
		.pipe(eslint())
		.pipe(eslint.format())
		.pipe(eslint.failAfterError());
});

gulp.task('js', ['eslint'], function() {
	gulp.start('jsbuild');
});

gulp.task('jsbuild', function() {
	var sourcemapsArg = getArgument('sourcemaps'),
		writeSourcemaps = sourcemapsArg === null || sourcemapsArg === 'true';

	return es.merge(pkg.js.files.map(function(o) {
		return gulp.src(o.src)
			.pipe(plumber({
				'errorHandler': onError
			}))
			.pipe(writeSourcemaps ? sourcemaps.init() : gUtil.noop())
			.pipe(concat(o.file))
			.pipe(uglify({
				'compress': {
					'hoist_funs': false // hoist function declarations - otherwise functions are alphabetized, which can cause errors
				}
			}))
			.pipe(writeSourcemaps ? sourcemaps.write('maps') : gUtil.noop())
			.pipe(gulp.dest(o.dest))
			.pipe(notify({
				'message': 'JS: ' + o.file + ' build complete',
				'onLast': true // otherwise the notify will be fired for each file in the pipe
			}));
	}));
});

// CSS
gulp.task('style-lint', function() {
	return gulp.src(pkg.sass.hint.src)
		.pipe(cached('stylelint'))
		.pipe(plumber({
			'errorHandler': onError
		}))
		.pipe(stylelint({
			'reporters': [{
				'formatter': 'string',
				'console': true
			}],
			'failAfterError': false
		}))
		.pipe(notify({
			'message': 'style-lint complete',
			'onLast': true // otherwise the notify will be fired for each file in the pipe
		}));
});

gulp.task('sass', ['style-lint'], function() {
	return es.merge(pkg.sass.files.map(function(o) {
		return gulp.src(o.src)
			.pipe(plumber({
				'errorHandler': onError
			}))

			// no Sass options: we only need outputStyle and it doesn't work as it gets overwritten by Bless
			.pipe(sass())
			.pipe(autoprefixer({
				'browsers': pkg.sass.autoprefixer.browsers
			}))

			.pipe(bless())
			.pipe(gulp.dest(o.dest))
			.pipe(notify({
				'message': 'SASS: ' + o.file + ' build complete',
				'onLast': true // otherwise the notify will be fired for each file in the pipe
			}));
	}));
});

gulp.task('cssbuild', ['sass'], function() {
	return es.merge(pkg.sass.files.map(function(o) {
		return gulp.src(o.dest + '/**/*.css', {
			'base': './'
		})
			.pipe(plumber({
				'errorHandler': onError
			}))

			.pipe(cssminify())
			.pipe(gulp.dest('./'))
			.pipe(notify({
				'message': 'CSS: ' + o.file + ' minify complete',
				'onLast': true // otherwise the notify will be fired for each file in the pipe
			}));
	}));
});

// default task
gulp.task('default', ['hook', 'clean'], function() {
	// pay attention when upgrading gulp: https://github.com/gulpjs/gulp/issues/505#issuecomment-45379280
	gulp.start('imgbuild');
	gulp.start('fontsbuild');
	gulp.start('js');
	gulp.start('sass');

	// watch
	gulp.watch(pkg.img.watch, ['imgbuild']);
	gulp.watch(pkg.fonts.watch, ['fontsbuild']);
	gulp.watch(pkg.js.watch, ['js']);
	gulp.watch(pkg.sass.watch, ['sass']);
});

// build - before deploy
gulp.task('build', function() {
	// pay attention when upgrading gulp: https://github.com/gulpjs/gulp/issues/505#issuecomment-45379280
	gulp.start('imgbuild');
	gulp.start('fontsbuild');
	gulp.start('jsbuild');
	gulp.start('cssbuild');
});

// deploy task
gulp.task('deploy', run(['gulp build', 'bundle exec jekyll build']));

// pre-commit
// on Mac, make sure the folder exists
gulp.task('hook', function() {
	if (!fileExists(pkg.git.hooks.precommit.dest)) {
		gulp.src(pkg.git.hooks.precommit.src)
			.pipe(rename(gitHookDestinationName))
			.pipe(gulp.dest(gitHookDestinationPath))
			.on('error', function() {

				// Ignore silently
			})
			.pipe(notify({
				'message': 'HOOK: Copied scripts/.pre-commit to .git/hooks/pre-commit',
				'onLast': true // otherwise the notify will be fired for each file in the pipe
			}));
	}
});
