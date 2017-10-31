# Fannypack

An open source HTML and CSS toolkit. With prebuilt modules and a responsive design you can build the most awesome sites and applications.

Built with **SMACSS, BEM and WAI-ARIA**.

## Local development

Fannypack runs on [Hugo](https://gohugo.io/), a static site generator and [Gulp](https://gulpjs.com/) as task manager.

To run a local server and start developing, open up 2 teminal windows and run the following commands

```bash
# in window 1 - run a local developement server and watch the files for changes
$ cd fannypack && hugo server

# in window 2 - build & watch the assets for changes (css, fonts, img, ...)
$cd fannypack && gulp
```

## Pushing code

Before you can push your code, you need to build the static site.

The build command:

```bash
$ hugo
```

Fannypack maintainers can now push the code to the remote `master` branch. This will trigger an auto-deploy.
