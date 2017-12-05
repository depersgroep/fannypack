+++
title = "Labels"
date = 2017-10-16T14:57:22+02:00
description = "Giving a visual representation to small pieces of content"
modifiers = ["theme--fp", "layout--fixed-header", "layout--sidebar"]
[menu.docs]
parent = "Modules"
+++

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo voluptatum corrupti tenetur neque ipsa delectus sapiente consequuntur reiciendis deserunt aspernatur.

<div class="fp-example">
	<span class="label">default</span>
	<span class="label label--success">success</span>
	<span class="label label--warning">warning</span>
	<span class="label label--error">error</span>
</div>

```html
<span class="label">default</span>
<span class="label label--success">success</span>
<span class="label label--warning">warning</span>
<span class="label label--error">error</span>
```

## Outline style

<div class="fp-example">
	<span class="label label--outline">default</span>
	<span class="label label--success label--outline">success</span>
	<span class="label label--warning label--outline">warning</span>
	<span class="label label--error label--outline">error</span>
</div>

```html
<span class="label label--outline">default</span>
<span class="label label--success label--outline">success</span>
<span class="label label--warning label--outline">warning</span>
<span class="label label--error label--outline">error</span>
```

## Links

Using the `.label` classes with the `<a>` element quickly provide *actionable* badges with hover and focus states.

<div class="fp-example">
	<div>
		<a href="#" class="label">default</a>
		<a href="#" class="label label--success">success</a>
		<a href="#" class="label label--warning">warning</a>
		<a href="#" class="label label--error">error</a>
	</div>
	<div style="margin-top: 10px;">
		<a href="#" class="label label--outline">default</a>
		<a href="#" class="label label--success label--outline">success</a>
		<a href="#" class="label label--warning label--outline">warning</a>
		<a href="#" class="label label--error label--outline">error</a>
	</div>
</div>

```html
<a href="#" class="label">default</a>
<a href="#" class="label label--success">success</a>
<a href="#" class="label label--warning">warning</a>
<a href="#" class="label label--error">error</a>

<a href="#" class="label label--outline">default</a>
<a href="#" class="label label--success label--outline">success</a>
<a href="#" class="label label--warning label--outline">warning</a>
<a href="#" class="label label--error label--outline">error</a>
```

