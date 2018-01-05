+++
title = "Grid"
date = 2017-10-09T10:08:25+02:00
description = "Reusable grid build with CSS Grid Layout and fallbacks"
modifiers = ["theme--fp", "layout--fixed-header", "layout--sidebar"]
[menu.docs]
parent = "Layout"
+++

We have a standard **12 column grid** for you available. You can do **any combination of columns** as long as the total of each (virtual) row is 12.


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
		<div class="col-2">.col-2</div>
		<div class="col-2">.col-2</div>
		<div class="col-2">.col-2</div>
		<div class="col-2">.col-2</div>
		<div class="col-2">.col-2</div>
		<div class="col-2">.col-2</div>
	</div>
	<div class="grid">
		<div class="col-3">.col-3</div>
		<div class="col-3">.col-3</div>
		<div class="col-3">.col-3</div>
		<div class="col-3">.col-3</div>
	</div>
	<div class="grid">
		<div class="col-4">.col-4</div>
		<div class="col-4">.col-4</div>
		<div class="col-4">.col-4</div>
	</div>
	<div class="grid">
		<div class="col-5">.col-5</div>
		<div class="col-5">.col-5</div>
		<div class="col-2">.col-2</div>
	</div>
	<div class="grid">
		<div class="col-6">.col-6</div>
		<div class="col-6">.col-6</div>
	</div>
	<div class="grid">
		<div class="col-7">.col-7</div>
		<div class="col-5">.col-5</div>
	</div>
	<div class="grid">
		<div class="col-8">.col-8</div>
		<div class="col-4">.col-4</div>
	</div>
	<div class="grid">
		<div class="col-9">.col-9</div>
		<div class="col-3">.col-3</div>
	</div>
	<div class="grid">
		<div class="col-10">.col-10</div>
		<div class="col-2">.col-2</div>
	</div>
	<div class="grid">
		<div class="col-11">.col-11</div>
		<div class="col-1">.col-1</div>
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
<div class="grid">
	<div class="col-7">.col-7</div>
	<div class="col-1">.col-1</div>
	<div class="col-4">.col-4</div>
</div>
```

## Containers

When using grid for page layout, your grid will usually be nested inside a `.container` but you can also use grids in other modules without the `.container`.
It will calculate the widths based on the available width of its wrapper.

```html
<div class="container">
	<div class="grid">
		<div class="col-4">...</div>
		<div class="col-4">...</div>
		<div class="col-4">...</div>
	</div>
</div>
<!-- or -->
<div class="some-random-module">
	<div class="grid">
		<div class="col-4">...</div>
		<div class="col-4">...</div>
		<div class="col-4">...</div>
	</div>
</div>
```

## Grid vs. float-based columns

Back in the old days we used a `.container` with `.row`'s (to clear the floats). This is no longer needed.

### Old school example code

Don't use this example

```html
<div class="container">
	<div class="row">
		<div class="col-6">...</div>
		<div class="col-3">...</div>
		<div class="col-3">...</div>
	</div>
	<div class="row">
		<div class="col-4">...</div>
		...
	</div>
</div>
```
With **CSS Grid Layout** there's no need to clear the floats and also no need to think one-dimensional with **rows**

### Modern example

Use this instead

```html
<div class="grid">
	<div class="col-4">...</div>
	<div class="col-4">...</div>
	<div class="col-4">...</div>
</div>
```

This is done with pure CSS magic

```css
@supports (display: grid) {
	.grid {
		display: grid;
		grid-gap: 20px;
		grid-template-columns: repeat(12, minmax(0, 1fr));
	}

	[class^="col-"] {
		grid-colum-start: auto;
	}

	/* col dimensions */
	.col-2 {
		grid-column-end: span 2;
	}

	.col-3 {
		grid-column-end: span 3;
	}
	...
}
```

### Fallbacks for older browsers

If your browser doesn't support `display: grid;` we automatically fall back to float based layout. Just make sure the total of columns, on each virtual row, is 12 so they wrap.

Only pitfall is when your columns don't have equal heights, which happens quite regularly. With wrapping floats you can end up with a column being stuck by another one that's higher.

**Intentionally broken layout to emulate floats**

<div class="fp-example fp-example--grid fp-example--grid-float">
	<div class="grid">
		<div class="col-1">.col-1</div>
		<div class="col-1">.col-1</div>
		<div class="col-1">.col-1</div>
		<div class="col-1">higher col breaks layout</div>
		<div class="col-1">.col-1</div>
		<div class="col-1">.col-1</div>
		<div class="col-1">.col-1</div>
		<div class="col-1">.col-1</div>
		<div class="col-1">.col-1</div>
		<div class="col-1">.col-1</div>
		<div class="col-1">.col-1</div>
		<div class="col-1">.col-1</div>
		<div class="col-8">.col-8</div>
		<div class="col-4">.col-4</div>
	</div>
</div>

If you want to prevent this you need to add class `.col--clear` to each **13th** col

**Emulating floats:** this grid doesn't use `display: grid;` in the example below.

<div class="fp-example fp-example--grid fp-example--grid-float">
	<div class="grid">
		<div class="col-1">.col-1</div>
		<div class="col-1">.col-1</div>
		<div class="col-1">.col-1</div>
		<div class="col-1">higher col doesn't break layout</div>
		<div class="col-1">.col-1</div>
		<div class="col-1">.col-1</div>
		<div class="col-1">.col-1</div>
		<div class="col-1">.col-1</div>
		<div class="col-1">.col-1</div>
		<div class="col-1">.col-1</div>
		<div class="col-1">.col-1</div>
		<div class="col-1">.col-1</div>
		<div class="col-8 col--clear">.col-8.col--clear</div>
		<div class="col-4">.col-4</div>
		<div class="col-3 col--clear">.col-3.col--clear</div>
		<div class="col-3">.col-3</div>
		<div class="col-3">another higher col that doesn't break layout</div>
		<div class="col-3">.col-3</div>
		<div class="col-5 col--clear">.col-5.col--clear</div>
		<div class="col-5">.col-5</div>
		<div class="col-2">.col-2</div>
	</div>
</div>

```html
<div class="grid">
	<div class="col-1">.col-1</div>
	<div class="col-1">.col-1</div>
	<div class="col-1">.col-1</div>
	<div class="col-1">higher col doesn't break layout</div>
	<!-- repeat until you got 12 cols -->
	<!-- float clearer fallback because this is col 13 (1 + 1 + ...) -->
	<div class="col-8 col--clear">.col-8.col--clear</div>
	<div class="col-4">.col-4</div>
	<!-- another float clearer fallback because this is col 13 (8 + 4 = 12) -->
	<div class="col-3 col--clear">.col-3.col--clear</div>
	<div class="col-3">.col-3</div>
	<div class="col-3">another higher col that doesn't break layout</div>
	<div class="col-3">.col-3</div>
	<!-- another float clearer fallback because this is col 13 (3 + 3 + 3 + 3 = 12) -->
	<div class="col-5 col--clear">.col-5.col--clear</div>
	<div class="col-5">.col-5</div>
	<div class="col-2">.col-2</div>
</div>
```

## Grids and breakpoints

The default grid is completely fluid and has no breakpoints. If you need different behaviour across breakpoints add modifiers to `.grid`.

<table class="table table--bordered">
	<thead>
		<tr>
			<th>Selector</th>
			<th>Breakpoint</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td><code>.grid</code></td>
			<td>Fully fluid across all breakpoints, even on small screens</td>
		</tr>
		<tr>
			<td><code>.grid--small</code> </td>
			<td>Stacked blocks on really small screens, fluid grid from <strong>small</strong> breakpoint</td>
		</tr>
		<tr>
			<td><code>.grid--medium</code> </td>
			<td>Stacked blocks on smaller screens, fluid grid from <strong>medium </strong> breakpoint</td>
		</tr>
	</tbody>
</table>

<div class="fp-example fp-example--grid">
	<div class="grid grid--small">
		<div class="col-6">.col-6</div>
		<div class="col-6">.col-6</div>
	</div>
	<div class="grid grid--medium">
		<div class="col-6">.col-6</div>
		<div class="col-6">.col-6</div>
	</div>
</div>

```html
<div class="grid grid--small">
	...
</div>
<div class="grid grid--medium">
	...
</div>
```

## Offsetting columns

Offsetting columns in a CSS Grid is tricky. It works the other way around. Instead of defining how many cols there are between adjacent columns, the offset determines how many columns (starting from the outer left edge) should be skipped. So you'll have to do some math yourself, knowing we have a total of 12 columns.

So if you give an offset of 8 with `.col--offset-8`, your column will start on the 9th grid item, no matter if there are any other columns preceding. See example below.


<div class="fp-example fp-example--grid fp-example--grid-visible">
	<div class="grid">
		<div class="col-1 col--dashed">1</div>
		<div class="col-1 col--dashed">2</div>
		<div class="col-1 col--dashed">3</div>
		<div class="col-6">.col-6.col--offset-3</div>
		<div class="col-3">.col-3</div>
		<div class="col-1 col--dashed col--clear">1</div>
		<div class="col-1 col--dashed">2</div>
		<div class="col-4 col--grid-offset-2">.col-4.col--offset-2</div>
		<div class="col-1 col--dashed">7</div>
		<div class="col-1 col--dashed">8</div>
		<div class="col-3 col--grid-offset-8">.col-3.col--offset-8</div>
		<div class="col-1 col--dashed">12</div>
	</div>
</div>

```html
<div class="grid">
	<div class="col-6 col--offset-3">.col-6.col--offset-3</div>
	<div class="col-3">.col-3</div>
	<div class="col-4 col--offset-2 col--clear">.col-4.col--offset-2</div>
	<div class="col-3 col--offset-8">.col-3.col--offset-8</div>
</div>
```

If your math doesn't work out and your offsets collide with grid items that are already occupied, the faulty one will wrap to a new row.

E.g. the 6th column is alreay occupied by the first box, and your second box has an offset of 5 ( = starting on the 6th column). He can't construct that grid row, so he starts a new one. See example below

<div class="fp-example fp-example--grid fp-example--grid-visible">
	<div class="grid">
		<div class="col-1 col--dashed">1</div>
		<div class="col-1 col--dashed">2</div>
		<div class="col-4 col--grid-offset-2">.col-4.col--offset-2</div>
		<div class="col-1 col--dashed">7</div>
		<div class="col-1 col--dashed">8</div>
		<div class="col-1 col--dashed">9</div>
		<div class="col-1 col--dashed">10</div>
		<div class="col-1 col--dashed">11</div>
		<div class="col-1 col--dashed">12</div>
		<div class="col-1 col--dashed col--clear">1</div>
		<div class="col-1 col--dashed">2</div>
		<div class="col-1 col--dashed">3</div>
		<div class="col-1 col--dashed">4</div>
		<div class="col-1 col--dashed">5</div>
		<div class="col-3 col--grid-offset-5">.col-3.col--offset-5</div>
		<div class="col-1 col--dashed">9</div>
		<div class="col-1 col--dashed">10</div>
		<div class="col-1 col--dashed">11</div>
		<div class="col-1 col--dashed">12</div>
	</div>
</div>

```html
<div class="grid">
	<div class="col-4 col--grid-offset-2">.col-4.col--offset-2</div>
	<div class="col-3 col--grid-offset-5">.col-3.col--offset-5</div>
</div>
```

### Offsets and float-based grids

If you have to support browsers that don't understand CSS Grid Layout, you have to add an extra class. The offset calculation with this class is done the old-fashioned way. If you want an offset of 2 columns, you add `.col--float-offset-2`. No special math needed here.

<div class="fp-example fp-example--grid fp-example--grid-visible">
	<div class="grid">
		<div class="col-1 col--dashed">1</div>
		<div class="col-1 col--dashed">2</div>
		<div class="col-1 col--dashed">3</div>
		<div class="col-6">.col-6.col--offset-3</div>
		<div class="col-3">.col-3</div>
		<div class="col-1 col--dashed col--clear">1</div>
		<div class="col-1 col--dashed">2</div>
		<div class="col-4">.col-4.col--grid-offset-2.col--float-offset-2</div>
		<div class="col-1 col--dashed">7</div>
		<div class="col-1 col--dashed">8</div>
		<div class="col-3">.col-3.col--grid-offset-8.col--float-offset-2</div>
		<div class="col-1 col--dashed">12</div>
	</div>
</div>

```html
<div class="grid">
	<div class="col-6 col--grid-offset-3 col--float-offset-3">...</div>
	<div class="col-3">...</div>
	<div class="col-4 col--grid-offset-2 col--float-offset-2 col--clear">...</div>
	<div class="col-3 col--grid-offset-8 col--float-offset-2">...</div>
</div>
```

## Nested grids

Nested grids are supported. Go nuts!

<div class="fp-example fp-example--grid">
	<div class="grid">
		<div class="col-6">
			.col-6 with a nested grid
			<div class="grid">
				<div class="col-4">.col-4</div>
				<div class="col-4">.col-4</div>
				<div class="col-4">.col-4</div>
			</div>
		</div>
		<div class="col-6">.col-6</div>
	</div>
</div>

```html
<div class="grid">
	<div class="col-6">
		.col-6 with a nested grid
		<div class="grid">
			<div class="col-4">.col-4</div>
			<div class="col-4">.col-4</div>
			<div class="col-4">.col-4</div>
		</div>
	</div>
	<div class="col-6">.col-6</div>
</div>
```

## Conclusion:

This is production ready code. Please use this in your project.

<div class="fp-example fp-example--grid">
	<div class="grid">
		<div class="col-2">.col-2</div>
		<div class="col-2">.col-2</div>
		<div class="col-2">.col-2</div>
		<div class="col-2">higher col doesn't break layout</div>
		<div class="col-2">.col-2</div>
		<div class="col-2">.col-2</div>
		<div class="col-8 col--clear">.col-8.col--clear</div>
		<div class="col-4">.col-4</div>
		<div class="col-3 col--clear">.col-3.col--clear</div>
		<div class="col-3">.col-3</div>
		<div class="col-3">another higher col that doesnt'break layout</div>
		<div class="col-3">.col-3</div>
		<div class="col-5 col--clear">.col-5.col--clear</div>
		<div class="col-5">.col-5</div>
		<div class="col-2">.col-2</div>
		<div class="col-4 col--grid-offset-2 col--float-offset-2 col--clear">.col-4.col--grid-offset-2.col--float-offset-2.col--clear</div>
		<div class="col-3 col--grid-offset-8 col--float-offset-2">.col-3.col--grid-offset-8.col--float-offset-2</div>
	</div>
</div>

```html
<div class="grid">
	<div class="col-2">.col-2</div>
	<div class="col-2">.col-2</div>
	<div class="col-2">.col-2</div>
	<div class="col-2">higher col doesn't break layout</div>
	<div class="col-2">.col-2</div>
	<div class="col-2">.col-2</div>
	<div class="col-8 col--clear">.col-8.col--clear</div>
	<div class="col-4">.col-4</div>
	<div class="col-3 col--clear">.col-3.col--clear</div>
	<div class="col-3">.col-3</div>
	<div class="col-3">another higher col that doesnt'break layout</div>
	<div class="col-3">.col-3</div>
	<div class="col-5 col--clear">.col-5.col--clear</div>
	<div class="col-5">.col-5</div>
	<div class="col-2">.col-2</div>
	<div class="col-4 col--grid-offset-2 col--float-offset-2 col--clear">.col-4.col--grid-offset-2.col--float-offset-2.col--clear</div>
	<div class="col-3 col--grid-offset-8 col--float-offset-2">.col-3.col--grid-offset-8.col--float-offset-2</div>
</div>
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
			<td><code>.col--clear</code></td>
			<td><span class="label label--warning">Required</span></td>
			<td>On every <strong>13th</strong> col</td>
		</tr>
	</tbody>
</table>
