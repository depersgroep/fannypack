# Fannypack

An open source HTML and CSS toolkit. With prebuilt modules and a responsive design you can build the most awesome sites and applications.

Built with **SMACSS, BEM and WAI-ARIA**.

## Development

Fannypack runs on [Jekyll](https://jekyllrb.com/), a static site generator and [Gulp](https://gulpjs.com/) as task manager.

### Dependencies
- NodeJS v6.X (or newer) & NPM: https://nodejs.org/dist/latest-v6.x/
- Jekyll 3.7 or newer: https://jekyllrb.com/docs/installation/

### Run local

In your fannypack project folder:
```bash
# start jekyll server and watch html files
# with bundler you also install the required plugins
bundle exec jekyll serve

# if you don't have bundler installed
# make sure you also install jekyll-menus
jekyll serve
```
and in another Terminal window, in your fannypack project folder:
```bash
# watch assets
gulp
```

## Pushing code

Before you can push your code, you need to build the static site and minify the assets.
First, stop all running Jekyll and gulp commands, than in your fannypack project folder:
```bash
gulp deploy
```

Fannypack maintainers can now push the code to the remote `master` branch. This will trigger an auto-deploy.
