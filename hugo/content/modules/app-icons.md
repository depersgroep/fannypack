+++
title = "App Icons"
date = 2017-10-06T08:16:56+02:00
[menu.docs]
parent = "Modules"
+++

# App icons

Representation of an internal application **without** the application name visible. Because this has `role="img"` you **must provide** `aria-label=""` with a description of the application. App icons are usually created by combining color and minimal type. If needed, the app icon can be a [simple graphic logo](#graphic-logo).

<div class="fp-example fp-example--app-icons">
	<div class="app-icon app-icon--lumberjack-red" role="img" aria-label="Temptation Editor">
		<div class="app-icon__logo" aria-hidden="true">
			<span class="app-icon__character">T</span>
			<span class="app-icon__character">E</span>
		</div>
	</div>
	<div class="app-icon app-icon--spring-green" role="img" aria-label="Article Editor">
		<div class="app-icon__logo" aria-hidden="true">
			<span class="app-icon__character">A</span>
			<span class="app-icon__character">E</span>
		</div>
	</div>
	<div class="app-icon app-icon--lavender-blue" role="img" aria-label="Workflow">
		<div class="app-icon__logo" aria-hidden="true">
			<span class="app-icon__character">W</span>
		</div>
	</div>
	<div class="app-icon app-icon--turquoise-blue" role="img" aria-label="Timey Mc Timeface">
		<div class="app-icon__logo" aria-hidden="true">
			<span class="app-icon__character">T</span>
			<span class="app-icon__character">T</span>
		</div>
	</div>
	<div class="app-icon app-icon--steel-blue" role="img" aria-label="Site Management">
		<div class="app-icon__logo" aria-hidden="true">
			<span class="app-icon__character">S</span>
			<span class="app-icon__character">M</span>
		</div>
	</div>
	<div class="app-icon app-icon--green-yellow" role="img" aria-label="Search">
		<div class="app-icon__logo" aria-hidden="true">
			<span class="app-icon__character">S</span>
		</div>
	</div>
</div>

```html
<div class="app-icon app-icon--lumberjack-red" role="img" aria-label="Temptation Editor">
	<div class="app-icon__logo" aria-hidden="true">
		<span class="app-icon__character">T</span>
		<span class="app-icon__character">E</span>
	</div>
</div>
<div class="app-icon app-icon--spring-green" role="img" aria-label="Article Editor">
	<div class="app-icon__logo" aria-hidden="true">
		<span class="app-icon__character">A</span>
		<span class="app-icon__character">E</span>
	</div>
</div>
<div class="app-icon app-icon--lavender-blue" role="img" aria-label="Workflow">
	<div class="app-icon__logo" aria-hidden="true">
		<span class="app-icon__character">W</span>
	</div>
</div>
<div class="app-icon app-icon--turquoise-blue" role="img" aria-label="Timey Mc Timeface">
	<div class="app-icon__logo" aria-hidden="true">
		<span class="app-icon__character">T</span>
		<span class="app-icon__character">T</span>
	</div>
</div>
<div class="app-icon app-icon--steel-blue" role="img" aria-label="Site Management">
	<div class="app-icon__logo" aria-hidden="true">
		<span class="app-icon__character">S</span>
		<span class="app-icon__character">M</span>
	</div>
</div>
<div class="app-icon app-icon--green-yellow" role="img" aria-label="Search">
	<div class="app-icon__logo" aria-hidden="true">
		<span class="app-icon__character">S</span>
	</div>
</div>
```

<table class="table table--horizontal-borders">
	<thead>
		<tr>
			<th>Attribute</th>
			<th></th>
			<th>Description</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td><code>role="img</code></td>
			<td><span class="label label--warning">Required</span></td>
			<td>It looks like an image but it's not.</td>
		</tr>
		<tr>
			<td><code>aria-label</code></td>
			<td><span class="label label--warning">Required</span></td>
			<td>Only when there's <strong>no visible</strong> title. Short title or name on <code>.app-icon</code></td>
		</tr>
		<tr>
			<td><code>aria-hidden="true"</code></td>
			<td><span class="label label--warning">Required</span></td>
			<td>On <code>.app-icon__logo</code></td>
		</tr>
	</tbody>
</table>

## Sizing

<div class="fp-example fp-example--app-icons">
	<div class="app-icon app-icon--lumberjack-red" role="img" aria-label="Temptation Editor">
		<div class="app-icon__logo">
			<span class="app-icon__character">T</span>
			<span class="app-icon__character">E</span>
		</div>
	</div>
	<div class="app-icon app-icon--large app-icon--lumberjack-red" role="img" aria-label="Temptation Editor">
		<div class="app-icon__logo" aria-hidden="true">
			<span class="app-icon__character">T</span>
			<span class="app-icon__character">E</span>
		</div>
	</div>
	<div class="app-icon app-icon--xlarge app-icon--lumberjack-red" role="img" aria-label="Temptation Editor">
		<div class="app-icon__logo" aria-hidden="true">
			<span class="app-icon__character">T</span>
			<span class="app-icon__character">E</span>
		</div>
	</div>
</div>

```html
<div class="app-icon app-icon--lumberjack-red" role="img" aria-label="Temptation Editor">
	<div class="app-icon__logo">
		<span class="app-icon__character">T</span>
		<span class="app-icon__character">E</span>
	</div>
</div>
<div class="app-icon app-icon--large app-icon--lumberjack-red" role="img" aria-label="Temptation Editor">
	<div class="app-icon__logo" aria-hidden="true">
		<span class="app-icon__character">T</span>
		<span class="app-icon__character">E</span>
	</div>
</div>
<div class="app-icon app-icon--xlarge app-icon--lumberjack-red" role="img" aria-label="Temptation Editor">
	<div class="app-icon__logo" aria-hidden="true">
		<span class="app-icon__character">T</span>
		<span class="app-icon__character">E</span>
	</div>
</div>
```

## With application names

As we provide visible description of the logo, the way the **aria** attributes are arranged has changed.

<div class="fp-example fp-example-app-icons-stacked">
	<div class="app-icon app-icon--lumberjack-red" aria-labelledby="app-icon-name1">
		<div class="app-icon__logo" role="img">
			<span class="app-icon__character">T</span>
			<span class="app-icon__character">E</span>
		</div>
		<span class="app-icon__name" id="app-icon-name1">Temptation Editor</span>
	</div>
	<div class="app-icon app-icon--spring-green" aria-labelledby="app-icon-name5">
		<div class="app-icon__logo" role="img">
			<span class="app-icon__character">A</span>
			<span class="app-icon__character">E</span>
		</div>
		<span class="app-icon__name" id="app-icon-name5">Article Editor</span>
	</div>
	<div class="app-icon app-icon--lavender-blue" aria-labelledby="app-icon-name1">
		<div class="app-icon__logo" role="img">
			<span class="app-icon__character">W</span>
		</div>
		<span class="app-icon__name" id="app-icon-name1">Workflow</span>
	</div>
	<div class="app-icon app-icon--turquoise-blue" aria-labelledby="app-icon-name2">
		<div class="app-icon__logo" role="img">
			<span class="app-icon__character">T</span>
			<span class="app-icon__character">T</span>
		</div>
		<span class="app-icon__name" id="app-icon-name2">Timey Mc Timeface</span>
	</div>
	<div class="app-icon app-icon--steel-blue" aria-labelledby="app-icon-name3">
		<div class="app-icon__logo" role="img">
			<span class="app-icon__character">S</span>
			<span class="app-icon__character">M</span>
		</div>
		<span class="app-icon__name" id="app-icon-name3">Site Management</span>
	</div>
	<div class="app-icon app-icon--green-yellow" aria-labelledby="app-icon-name4">
		<div class="app-icon__logo" role="img">
			<span class="app-icon__character">S</span>
		</div>
		<span class="app-icon__name" id="app-icon-name4">Search</span>
	</div>
</div>

```html
<div class="app-icon app-icon--lumberjack-red" role="img" aria-labelledby="app-icon-name1">
	<div class="app-icon__logo" aria-hidden="true">
		<span class="app-icon__character">T</span>
		<span class="app-icon__character">E</span>
	</div>
	<span class="app-icon__name" id="app-icon-name1">Temptation Editor</span>
</div>
```

<table class="table table--horizontal-borders">
	<thead>
		<tr>
			<th>Attribute</th>
			<th></th>
			<th>Description</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td><code>aria-labelledby</code></td>
			<td><span class="label label--warning">Required</span></td>
			<td>Matches the <code>id</code> of <code>.app-icon__name</code></td>
		</tr>
		<tr>
			<td><code>aria-hidden="true"</code></td>
			<td><span class="label label--warning">Required</span></td>
			<td>On <code>.app-icon__logo</code></td>
		</tr>
	</tbody>
</table>

## With a link

Simply replace the `<div class="app-icon">` with `<a href="#" class="app-icon">` to make the icon clickable.

If for some reason you aren't able to swap the module element with a link you can nest a link inside the module wrapper.

<div class="fp-example fp-example-app-icons-stacked">
	<a href="#" class="app-icon app-icon--lumberjack-red" role="img" aria-labelledby="app-icon-link-name1">
		<div class="app-icon__logo" aria-hidden="true">
			<span class="app-icon__character">T</span>
			<span class="app-icon__character">E</span>
		</div>
		<span class="app-icon__name" id="app-icon-link-name1">Temptation Editor</span>
	</a>

	<div class="app-icon app-icon--lumberjack-red" role="img" aria-labelledby="app-icon-link-name2">
		<a href="#" class="app-icon__link">
			<div class="app-icon__logo" aria-hidden="true">
				<span class="app-icon__character">T</span>
				<span class="app-icon__character">E</span>
			</div>
			<span class="app-icon__name" id="app-icon-link-name2">Temptation Editor</span>
		</a>
	</div>
</div>

```html
<a href="#" class="app-icon app-icon--lumberjack-red" role="img" aria-labelledby="app-icon-link-name1">
	<div class="app-icon__logo" aria-hidden="true">
		<span class="app-icon__character">T</span>
		<span class="app-icon__character">E</span>
	</div>
	<span class="app-icon__name" id="app-icon-link-name1">Temptation Editor</span>
</a>

<!-- or -->

<div class="app-icon app-icon--lumberjack-red" role="img" aria-labelledby="app-icon-link-name2">
	<a href="#" class="app-icon__link">
		<div class="app-icon__logo" aria-hidden="true">
			<span class="app-icon__character">T</span>
			<span class="app-icon__character">E</span>
		</div>
		<span class="app-icon__name" id="app-icon-link-name2">Temptation Editor</span>
	</a>
</div>
```

## Graphic logo

The graphic logo has to be white. If you want to put a little bit of contrast in the logo, the darker area's should be black with an opacity of 25%.
Its dimensions should be 100x100. We only show it at 50x50 but this way it's high dpi ready.

The original image:

<div class="fp-transparent-bg">
	<img src="/img/timeymctimeface-clock.png" alt="a simplistic clock in white and transparent black" />
</div>

In its processed state:

<div class="fp-example fp-example--app-icons">
	<div class="app-icon app-icon--turquoise-blue" role="img" aria-label="Timey Mc Timeface">
		<div class="app-icon__logo" aria-hidden="true">
			<img src="/img/timeymctimeface-clock.png" class="app-icon__img" alt=""/>
		</div>
	</div>
	<div class="app-icon app-icon--large app-icon--turquoise-blue" role="img" aria-label="Timey Mc Timeface">
		<div class="app-icon__logo" aria-hidden="true">
			<img src="/img/timeymctimeface-clock.png" class="app-icon__img" alt=""/>
		</div>
	</div>
	<div class="app-icon app-icon--xlarge app-icon--turquoise-blue" role="img" aria-label="Timey Mc Timeface">
		<div class="app-icon__logo" aria-hidden="true">
			<img src="/img/timeymctimeface-clock.png" class="app-icon__img" alt=""/>
		</div>
	</div>
</div>

```html
<div class="app-icon app-icon--turquoise-blue" role="img" aria-label="Timey Mc Timeface">
	<div class="app-icon__logo" aria-hidden="true">
		<img src="/img/timeymctimeface-clock.png" class="app-icon__img" alt=""/>
	</div>
</div>
<!-- large -->
<div class="app-icon app-icon--large app-icon--turquoise-blue" role="img" aria-label="Timey Mc Timeface">
	<div class="app-icon__logo" aria-hidden="true">
		<img src="/img/timeymctimeface-clock.png" class="app-icon__img" alt=""/>
	</div>
</div>
<!--  xlarge -->
<div class="app-icon app-icon--xlarge app-icon--turquoise-blue" role="img" aria-label="Timey Mc Timeface">
	<div class="app-icon__logo" aria-hidden="true">
		<img src="/img/timeymctimeface-clock.png" class="app-icon__img" alt=""/>
	</div>
</div>
```


