+++
title = "Toolbar"
date = 2017-10-03T15:10:21+02:00
[menu.docs]
parent = "Modules"
+++
# Toolbar

Toolbars use flexbox the way it's meant to be, for UI layout and not for Grid layout.

<div class="fp-example">
	<div class="toolbar">
		<div class="toolbar__section">
			<nav class="breadcrumb" role="navigation" aria-label="Breadcrumb">
				<ol class="breadcrumb__list">
					<li class="breadcrumb__item">
						<a href="#" class="breadcrumb__link">Home</a>
					</li>
					<li class="breadcrumb__item">
						<a href="#" class="breadcrumb__link">Brands</a>
					</li>
					<li class="breadcrumb__item">Lee</li>
				</ol>
			</nav>
		</div>
		<div class="toolbar__section">
			<button class="button button--primary" type="submit">Save</button>
		</div>
	</div>
</div>

```html
<div class="toolbar">
	<div class="toolbar__section">
		<nav class="breadcrumb" role="navigation" aria-label="Breadcrumb">
			<ol class="breadcrumb__list">
				<li class="breadcrumb__item">
					<a href="#" class="breadcrumb__link">Home</a>
				</li>
				<li class="breadcrumb__item">
					<a href="#" class="breadcrumb__link">Brands</a>
				</li>
				<li class="breadcrumb__item">Lee</li>
			</ol>
		</nav>
	</div>
	<div class="toolbar__section">
		<button class="button button--primary" type="submit">Save</button>
	</div>
</div>
```

<table class="table table--horizontal-borders">
	<thead>
		<tr>
			<th>Selector</th>
			<th>Description</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td><code>.toolbar__section</code></td>
			<td>Place your components here. You can add as many of these sections as you want.</td>
		</tr>
	</tbody>
</table>

## Dark version

We only control the background-color with CSS. We have no styling control of the content. If you need
white text on this dark background, make sure you add the necessary modifiers on that module.

In the example below, we've included a [breadcrumb](/modules/breadcrumb) with a modifier: `.breadcrumb--light`

<div class="fp-example">
	<div class="toolbar toolbar--dark">
		<div class="toolbar__section">
			<nav class="breadcrumb breadcrumb--light" role="navigation" aria-label="Breadcrumb">
				<ol class="breadcrumb__list ">
					<li class="breadcrumb__item">
						<a href="#" class="breadcrumb__link">Home</a>
					</li>
					<li class="breadcrumb__item">
						<a href="#" class="breadcrumb__link">Brands</a>
					</li>
					<li class="breadcrumb__item">Lee</li>
				</ol>
			</nav>
		</div>
		<div class="toolbar__section">
			<button class="button button--primary" type="submit">Save</button>
		</div>
	</div>
</div>

```html
<div class="toolbar toolbar--dark">
	<div class="toolbar__section">
		<!-- some component here that has legible text on a dark background -->
	</div>
	<div class="toolbar__section">
		<!-- another component here with a modifier -->
	</div>
</div>
```
