+++
title = "Breadcrumb"
date = 2017-10-06T10:13:41+02:00
[menu.main]
parent = "Modules"
+++

# Breadcrumb

<div class="fp-example">
	<nav class="breadcrumb" role="navigation" aria-label="Breadcrumb">
		<ol class="breadcrumb__list">
			<li class="breadcrumb__item">
				<a href="#" class="breadcrumb__link">Home</a>
			</li>
			<li class="breadcrumb__item">
				<a href="#" class="breadcrumb__link">Brands</a>
			</li>
			<li class="breadcrumb__item" aria-current="page">Lee</li>
		</ol>
	</nav>
</div>

```html
<nav class="breadcrumb" role="navigation" aria-label="Breadcrumb">
	<ol class="breadcrumb__list">
		<li class="breadcrumb__item">
			<a href="#" class="breadcrumb__link">Home</a>
		</li>
		<li class="breadcrumb__item">
			<a href="#" class="breadcrumb__link">Brands</a>
		</li>
		<li class="breadcrumb__item" aria-current="page">Lee</li>
	</ol>
</nav>
```

## On dark backgrounds

<div class="fp-example fp-example--dark">
	<nav class="breadcrumb breadcrumb--light" role="navigation" aria-label="Breadcrumb">
		<ol class="breadcrumb__list">
			<li class="breadcrumb__item">
				<a href="#" class="breadcrumb__link">Home</a>
			</li>
			<li class="breadcrumb__item">
				<a href="#" class="breadcrumb__link">Brands</a>
			</li>
			<li class="breadcrumb__item" aria-current="page">Lee</li>
		</ol>
	</nav>
</div>

```html
<nav class="breadcrumb breadcrumb--light" role="navigation" aria-label="Breadcrumb">
	...
</nav>
```

## Accessibility and internationalization

The `aria-label="Breadcrumb"` is a translatable string. So for the Dutch this can be `aria-label="kruimelpad"`.

`aria-current="page"` is this NOT. That's a fixed token.

