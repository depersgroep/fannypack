---
title: Grid
date: 2017-10-09T10:08:25+02:00
menu:
  docs:
    parent: Layout
---

# Grid

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis nam illum corporis unde sequi placeat fugiat suscipit aliquam asperiores minima.


<div class="fp-example fp-example--grid">
	<div class="grid">
		<div class="col-1">.col-1</div>
		<div class="col-1">.col-1</div>
		<div class="col-1">.col-1</div>
		<div class="col-1">.col-1</div>
		<div class="col-1">.col-1</div>
		<div class="col-1">.col-1</div>
		<div class="col-1">.col-1</div>
		<div class="col-1">.col-1</div>
		<div class="col-1">.col-1</div>
		<div class="col-1">.col-1</div>
		<div class="col-1">.col-1</div>
		<div class="col-1">.col-1</div>
	</div>
	<div class="grid">
		<div class="col-8">.col-8</div>
		<div class="col-4">.col-4</div>
	</div>
	<div class="grid">
		<div class="col-4">.col-4</div>
		<div class="col-4">.col-4</div>
		<div class="col-4">.col-4</div>
	</div>
	<div class="grid">
		<div class="col-6">.col-6</div>
		<div class="col-6">.col-6</div>
	</div>
</div>

```html
<div class="grid">
	<div class="col-4">.col-4</div>
	<div class="col-4">.col-4</div>
	<div class="col-4">.col-4</div>
</div>
<div class="grid">
	<div class="col-6">.col-6</div>
	<div class="col-6">.col-6</div>
</div>
```

## Containers

When using grid for page layout, your grid will usually be nested inside a `.container` but you can also use grids in other modules without the `.container`.
It will calculate the widths based on the available width of its wrapper.

```html
<div class="container">
	<div class="grid">
		<div class="col-4">.col-4</div>
		<div class="col-4">.col-4</div>
		<div class="col-4">.col-4</div>
	</div>
</div>

<!-- or -->
<div class="some-random-module">
	<div class="grid">
		<div class="col-4">.col-4</div>
		<div class="col-4">.col-4</div>
		<div class="col-4">.col-4</div>
	</div>
</div>
```
