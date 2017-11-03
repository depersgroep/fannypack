# Fannypack

An open source HTML and CSS toolkit. With prebuilt modules and a responsive design you can build the most awesome sites and applications.

Built with **SMACSS, BEM and WAI-ARIA**.

## Development

Fannypack runs on [Hugo](https://gohugo.io/), a static site generator and [Gulp](https://gulpjs.com/) as task manager.

### Dependencies
- NodeJS v6.X & NPM: https://nodejs.org/dist/latest-v6.x/
- Hugo: https://gohugo.io/getting-started/installing/

### Run local

```bash
# start hugo server and build/watch static files with gulp
npm run develop
```

## Pushing code

Before you can push your code, you need to build the static site.

```bash
npm run build
```

Fannypack maintainers can now push the code to the remote `master` branch. This will trigger an auto-deploy.
