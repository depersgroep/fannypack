+++
title = "Header"
date = 2017-10-05T16:29:36+02:00
description = "The site's header"
modifiers = ["theme--fp", "layout--fixed-header", "layout--sidebar"]
[menu.docs]
parent = "Modules"
+++

Your site's main header. A place for your app logo and maybe some navigation.

Layout is done with `flexbox`. Flexbox is made for handling vertical alignment and dividing elements across the available space without the need of floats.

<div class="fp-example">
	<header class="site-header" role="banner">
		<div class="site-header__section">
			<a href="/" class="app-icon app-icon--lavender-blue" role="img" aria-labelledby="app-icon-name">
				<div class="app-icon__logo" aria-hidden="true">
					<span class="app-icon__character">J</span>
					<span class="app-icon__character">D</span>
				</div>
				<span class="app-icon__name" id="app-icon-name">Your App Name</span>
			</a>
		</div>
	</header>
</div>

```html
<header class="site-header" role="banner">
	<div class="site-header__section">
		<a href="/" class="app-icon app-icon--lavender-blue" role="img" aria-labelledby="app-icon-name">
			<div class="app-icon__logo" aria-hidden="true">
				<span class="app-icon__character">J</span>
				<span class="app-icon__character">D</span>
			</div>
			<span class="app-icon__name" id="app-icon-name">Your App Name</span>
		</a>
	</div>
</header>
```

<table class="table table--horizontal-borders">
	<thead>
		<tr>
			<th>Selector</th>
			<th></th>
			<th>Description</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td><code>role="banner"</code></td>
			<td><span class="label label--warning">Required</span></td>
			<td>For a11y</td>
		</tr>
		<tr>
			<td><code>.site-header__section</code></td>
			<td></td>
			<td>Place your modules in this element. You can use multiple sections in a header.</td>
		</tr>
	</tbody>
</table>

## With navigation

<div class="fp-example">
	<header class="site-header" role="banner">
		<div class="site-header__section">
			<a href="/" class="app-icon app-icon--lavender-blue" role="img"  aria-labelledby="app-icon-name">
				<div class="app-icon__logo" aria-hidden="true">
					<span class="app-icon__character">J</span>
					<span class="app-icon__character">D</span>
				</div>
				<span class="app-icon__name" id="app-icon-name">Your App Name</span>
			</a>
		</div>
		<div class="site-header__section">
			<nav class="nav" role="navigation">
				<ul class="nav__list">
					<li class="nav__item" role="none">
						<a href="#" class="nav__link">About</a>
					</li>
					<li class="nav__item" role="none">
						<a href="#" class="nav__link">Services</a>
					</li>
					<li class="nav__item" role="none">
						<a href="#" class="nav__link">Contact</a>
					</li>
				</ul>
			</nav>
		</div>
	</header>
</div>

```html
<header class="site-header" role="banner">
	<div class="site-header__section">
		<!-- logo here -->
	</div>
	<div class="site-header__section">
		<nav class="nav" role="navigation">
			<ul class="nav__list">
				<li class="nav__item" role="none">
					<a href="#" class="nav__link">About</a>
				</li>
				<li class="nav__item" role="none">
					<a href="#" class="nav__link">Services</a>
				</li>
				<li class="nav__item" role="none">
					<a href="#" class="nav__link">Contact</a>
				</li>
			</ul>
		</nav>
	</div>
</header>
```

## Alignment options

You can place sections at the opposite site of the header.

<div class="fp-example">
	<header class="site-header" role="banner">
		<div class="site-header__section">
			<a href="/" class="app-icon app-icon--lavender-blue" role="img" aria-labelledby="app-icon-name">
				<div class="app-icon__logo" aria-hidden="true">
					<span class="app-icon__character">J</span>
					<span class="app-icon__character">D</span>
				</div>
				<span class="app-icon__name" id="app-icon-name">Your App Name</span>
			</a>
		</div>
		<div class="site-header__section site-header__section--last">
			<a href="#">Log out</a>
		</div>
	</header>
</div>

```html
<header class="site-header" role="banner">
	<div class="site-header__section">
		<!-- logo here -->
	</div>
	<div class="site-header__section site-header__section--last">
		<a href="#">Log out</a>
	</div>
</header>
```

<table class="table table--horizontal-borders">
	<thead>
		<tr>
			<th>Selector</th>
			<th></th>
			<th>Description</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td><code>.site-header__section--last</code></td>
			<td><span class="label label--info">Optional</span></td>
			<td>If you want it at the end of the header</td>
		</tr>
	</tbody>
</table>

## Fixed header

This is actually [layout issue]({{< ref "templates/fixed-header.md" >}}). You can't solve this with a modifier on `.site-header` but with a modifier on `<html>`. This is because we also add additional styling to other modules.

```html
<html lang="en" class="no-js layout--fixed-header">
	<head>...</head>
	<body>
		<header class="site-header" role="banner">
			...
		</header>
		...
	</body>
</html>
```

## Vertical header

A fixed vertical header on the left side of your page. On mobile this wil transform to a horizontal header with an optional hamburger to show the menu.

```html
<!DOCTYPE html>
<html lang="en" class="no-js layout--vertical-header">
<head>...</head>
<body>
	<header class="site-header site-header--vertical">
		<div class="site-header__section">
			<!-- app icon here -->
		</div>
		<input type="checkbox" class="hamburger__checkbox" id="nav-toggle">
		<label for="nav-toggle" class="hamburger" role="button" aria-label="Toggle the menu">
			<span class="hamburger__line" role="none presentation"></span>
			<span class="hamburger__line" role="none presentation"></span>
			<span class="hamburger__line" role="none presentation"></span>
		</label>
		<nav class="nav nav--vertical">...</nav>
	</header>
	<main class="main-container" role="main">
		<div class="main-content">
			<div class="container">
				...
			</div>
		</div>
	</main>
</body>
</html>
```

<table class="table table--horizontal-borders">
	<thead>
		<tr>
			<th>Selector</th>
			<th></th>
			<th>Description</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td><code>.layout--vertical-header</code></td>
			<td><span class="label label--warning">Required</span></td>
			<td>On the <code>html</code> tag</code></td>
		</tr>
		<tr>
			<td><code>.site-header--vertical</code></td>
			<td><span class="label label--warning">Required</span></td>
			<td>Modifier on <code>.site-header</code></code></td>
		</tr>
		<tr>
			<td><code>.nav--vertical</code></td>
			<td><span class="label label--info">Optional</span></td>
			<td>Only if you need navigation in the vertical header</td>
		</tr>
		<tr>
			<td><code>.hamburger</code></td>
			<td><span class="label label--info">Optional</span></td>
			<td>Only if you need navigation in the vertical header. This is for the mobile view only.</td>
		</tr>
	</tbody>
</table>




