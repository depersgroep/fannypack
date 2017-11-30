+++
title = "Tables"
date = 2017-10-06T14:38:47+02:00
description = "Tabular data isn't dead!"
modifiers = ["theme--fp", "layout--fixed-header", "layout--sidebar"]
[menu.docs]
parent = "Modules"
+++

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga obcaecati alias molestiae voluptatem vitae architecto totam tempore ab necessitatibus ipsum?

<div class="fp-example">
	<div class="table-wrapper">
		<table class="table">
			<caption>Fannypack lovers</caption>
			<thead>
				<tr>
					<th scope="col">#</th>
					<th scope="col">First name</th>
					<th scope="col">Last name</th>
					<th scope="col">Role</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<th scope="row">1</th>
					<td>Gwendolyn</td>
					<td>Matthys</td>
					<td>Visual designer</td>
				</tr>
				<tr>
					<th scope="row">2</th>
					<td>Yannick</td>
					<td>Van Avermaet</td>
					<td>Frontend Architect</td>
				</tr>
				<tr>
					<th scope="row">3</th>
					<td>Jochen</td>
					<td>Vandendriessche</td>
					<td>Frontend developer</td>
				</tr>
				<tr>
					<th scope="row">4</th>
					<td>Gregory </td>
					<td>Van Looy</td>
					<td>Frontend developer</td>
				</tr>
			</tbody>
		</table>
	</div>
</div>

```html
<table class="table">
	<caption>Fannypack lovers</caption>
	<thead>
		<tr>
			<th scope="col">#</th>
			<th scope="col">First name</th>
			<th scope="col">Last name</th>
			<th scope="col">Role</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<th scope="row">1</th>
			<td>Gwendolyn</td>
			<td>Matthys</td>
			<td>Visual designer</td>
		</tr>
		...
	</tbody>
</table>
```

<table class="table table--horizontal-borders">
	<thead>
		<tr>
			<th>Selector / Attribute</th>
			<th></th>
			<th>Description</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td><code>&lt;th scope="col"&gt;</code></td>
			<td><span class="label label--warning">Required</span></td>
			<td>For a11y</td>
		</tr>
		<tr>
			<td><code>&lt;th scope="row"&gt;</code></td>
			<td><span class="label label--warning">Required</span></td>
			<td>For a11y. <code>&lt;td&gt;</code> with <code>scope=""</code> is <strong>obsolete in HTML5</strong>. Only use it on <code>th</code>. If the first cell of your row doesn't have a scope relation to the other cells, use <code>td</code> without <code>scope</code></td>
		</tr>
	</tbody>
</table>

## Borders everywhere

<div class="fp-example">
	<table class="table table--bordered">
		<caption>Fannypack lovers</caption>
		<thead>
			<tr>
				<th scope="col">ID</th>
				<th scope="col">First name</th>
				<th scope="col">Last name</th>
				<th scope="col">Role</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<th scope="row">1</th>
				<td>Gwendolyn</td>
				<td>Matthys</td>
				<td>Visual designer</td>
			</tr>
			<tr>
				<th scope="row">2</th>
				<td>Yannick</td>
				<td>Van Avermaet</td>
				<td>Frontend Architect</td>
			</tr>
			<tr>
				<th scope="row">3</th>
				<td>Jochen</td>
				<td>Vandendriessche</td>
				<td>Frontend developer</td>
			</tr>
			<tr>
				<th scope="row">4</th>
				<td>Gregory </td>
				<td>Van Looy</td>
				<td>Frontend developer</td>
			</tr>
		</tbody>
	</table>
</div>

```html
<table class="table table--bordered">
	...
</table>
```

## Only horizontal borders

<div class="fp-example">
	<table class="table table--horizontal-borders">
		<caption>Fannypack lovers</caption>
		<thead>
			<tr>
				<th scope="col">#</th>
				<th scope="col">First name</th>
				<th scope="col">Last name</th>
				<th scope="col">Role</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<th scope="row">1</th>
				<td>Gwendolyn</td>
				<td>Matthys</td>
				<td>Visual designer</td>
			</tr>
			<tr>
				<th scope="row">2</th>
				<td>Yannick</td>
				<td>Van Avermaet</td>
				<td>Frontend Architect</td>
			</tr>
			<tr>
				<th scope="row">3</th>
				<td>Jochen</td>
				<td>Vandendriessche</td>
				<td>Frontend developer</td>
			</tr>
			<tr>
				<th scope="row">4</th>
				<td>Gregory </td>
				<td>Van Looy</td>
				<td>Frontend developer</td>
			</tr>
		</tbody>
	</table>
</div>

```html
<table class="table table--horizontal-borders">
	...
</table>
```

## Striped

<div class="fp-example">
	<table class="table table--striped">
		<caption>Fannypack lovers</caption>
		<thead>
			<tr>
				<th scope="col">#</th>
				<th scope="col">First name</th>
				<th scope="col">Last name</th>
				<th scope="col">Role</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<th scope="row">1</th>
				<td>Gwendolyn</td>
				<td>Matthys</td>
				<td>Visual designer</td>
			</tr>
			<tr>
				<th scope="row">2</th>
				<td>Yannick</td>
				<td>Van Avermaet</td>
				<td>Frontend Architect</td>
			</tr>
			<tr>
				<th scope="row">3</th>
				<td>Jochen</td>
				<td>Vandendriessche</td>
				<td>Frontend developer</td>
			</tr>
			<tr>
				<th scope="row">4</th>
				<td>Gregory </td>
				<td>Van Looy</td>
				<td>Frontend developer</td>
			</tr>
		</tbody>
	</table>
</div>

```html
<table class="table table--striped">
	...
</table>
```

## Simple tables with key - value pairs

Sometimes all you need to display is a table with some key-value pairs as data.
With `.key` or `scope="row"` you can emphasize the key. If you need extra styling
 for the value , just add `.value` to that cell.

<div class="fp-example">
	<table class="table table--horizontal-borders">
		<tbody>
			<tr>
				<td class="key">ID</td>
				<td class="value">12345</td>
			</tr>
			<tr>
				<td class="key">Last change</td>
				<td class="value"><em>Not saved yet</em></td>
			</tr>
			<tr>
				<th scope="row">Status</th>
				<td>Draft</td>
			</tr>
		</tbody>
	</table>
</div>

```html
<tr>
	<td class="key">Last change</td>
	<td class="value"><em>Not saved yet</em></td>
</tr>
<!-- or -->
<tr>
	<th scope="row">Status</th>
	<td>Draft</td>
</tr>
```

## Responsive tables

Making a table responsive (with overflow) is very easy. Just add a `div.table__wrapper` around the <code>table</code>. If the content or the vast number of cells don't fit the container, you get horizontal scrollbars. This is done with `overflow`.

**Resize your browser to see the result.**

<div class="fp-example">
	<div class="table__wrapper">
		<table class="table table--bordered">
			<caption>Standard Responsive table</caption>
			<thead>
				<tr>
					<th>#</th>
					<th>table heading</th>
					<th>table heading</th>
					<th>table heading</th>
					<th>table heading</th>
					<th>table heading</th>
					<th>table heading</th>
					<th>table heading</th>
					<th>table heading</th>
					<th>table heading</th>
					<th>table heading</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<th scope="row">1</h>
					<td>table cell</td>
					<td>table cell</td>
					<td>table cell</td>
					<td>table cell</td>
					<td>table cell</td>
					<td>table cell</td>
					<td>table cell</td>
					<td>table cell</td>
					<td>table cell</td>
					<td>table cell</td>
				</tr>
				<tr>
					<th scope="row">2</th>
					<td>table cell</td>
					<td>table cell</td>
					<td>table cell</td>
					<td>table cell</td>
					<td>table cell</td>
					<td>table cell</td>
					<td>table cell</td>
					<td>table cell</td>
					<td>table cell</td>
					<td>table cell</td>
				</tr>
				<tr>
					<th scope="row">3</th>
					<td>table cell</td>
					<td>table cell</td>
					<td>table cell</td>
					<td>table cell</td>
					<td>table cell</td>
					<td>table cell</td>
					<td>table cell</td>
					<td>table cell</td>
					<td>table cell</td>
					<td>table cell</td>
				</tr>
				<tr>
					<th scope="row">4</th>
					<td>table cell</td>
					<td>table cell</td>
					<td>table cell</td>
					<td>table cell</td>
					<td>table cell</td>
					<td>table cell</td>
					<td>table cell</td>
					<td>table cell</td>
					<td>table cell</td>
					<td>table cell</td>
				</tr>
				<tr>
					<th scope="row">5</th>
					<td>table cell</td>
					<td>table cell</td>
					<td>table cell</td>
					<td>table cell</td>
					<td>table cell</td>
					<td>table cell</td>
					<td>table cell</td>
					<td>table cell</td>
					<td>table cell</td>
					<td>table cell</td>
				</tr>
				<tr>
					<th scope="row">6</th>
					<td>table cell</td>
					<td>table cell</td>
					<td>table cell</td>
					<td>table cell</td>
					<td>table cell</td>
					<td>table cell</td>
					<td>table cell</td>
					<td>table cell</td>
					<td>table cell</td>
					<td>table cell</td>
				</tr>
			</tbody>
		</table>
	</div>
</div>

```html
<div class="table__wrapper">
	<table class="table table--bordered">
		...
	</table>
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
			<td><code>.table__wrapper</code></td>
			<td><span class="label label--warning">Required</span></td>
			<td>Wrapping <code>div</code> that adds horizontal scrollbars with <code>overflow-x: auto</code></td>
		</tr>
	</tbody>
</table>

## Transforming responsive table

On smaller screens the table transforms to blocks that are stacked and with accessible titles.

This requires a little more work than just CSS. You need to add the required
attributes to make this work and be accessible.

<div class="fp-example">
	<table class="table table--bordered table--transformer">
		<caption>Transforming responsive table</caption>
		<thead>
			<tr>
				<th scope="col">#</th>
				<th scope="col">First name</th>
				<th scope="col">Last name</th>
				<th scope="col">Role</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<th scope="row" data-title="No.">1</th>
				<td data-title="First name">Gwendolyn</td>
				<td data-title="Last name">Matthys</td>
				<td data-title="Role">Visual designer</td>
			</tr>
			<tr>
				<th scope="row" data-title="No.">2</th>
				<td data-title="First name">Yannick</td>
				<td data-title="Last name">Van Avermaet</td>
				<td data-title="Role">Frontend Architect</td>
			</tr>
			<tr>
				<th scope="row" data-title="No.">3</th>
				<td data-title="First name">Jochen</td>
				<td data-title="Last name">Vandendriessche</td>
				<td data-title="Role">Frontend developer</td>
			</tr>
			<tr>
				<th scope="row" data-title="No.">4</th>
				<td data-title="First name">Gregory </td>
				<td data-title="Last name">Van Looy</td>
				<td data-title="Role">Frontend developer</td>
			</tr>
		</tbody>
	</table>
</div>

```html
<table class="table table--bordered table--transformer">
	<caption>Transforming responsive table</caption>
	<thead>
		<tr>
			<th scope="col">#</th>
			<th scope="col">First name</th>
			<th scope="col">Last name</th>
			<th scope="col">Role</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<th scope="row" data-title="No.">1</th>
			<td data-title="First name">Gwendolyn</td>
			<td data-title="Last name">Matthys</td>
			<td data-title="Role">Visual designer</td>
		</tr>
		...
	</tbody>
</table>
```

<table class="table table--horizontal-borders">
	<thead>
		<tr>
			<th>Selector / Attribute</th>
			<th></th>
			<th>Description</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td><code>.table--transformer</code></td>
			<td><span class="label label--warning">Required</span></td>
			<td>Modifier class</td>
		</tr>
		<tr>
			<td><code>data-title=""</code></td>
			<td><span class="label label--warning">Required</span></td>
			<td>Creates a label for the corresponding value. Needs to be the same as the matching <code>th</code></td>
		</tr>
	</tbody>
</table>

## Complex data tables with collapsibe, nested tables

<div class="fp-example">
	<table class="table table--bordered">
		<thead>
			<tr>
				<th scope="col">ID</th>
				<th scope="col">First name</th>
				<th scope="col">Last name</th>
				<th scope="col">Role</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<th scope="row">1</th>
				<td>Gwendolyn</td>
				<td>Matthys</td>
				<td>Visual designer</td>
			</tr>
			<tr>
				<th scope="row">2</th>
				<td>Yannick</td>
				<td>Van Avermaet</td>
				<td>Frontend Architect</td>
			</tr>
			<tr>
				<th scope="row">3</th>
				<td>Jochen</td>
				<td>Vandendriessche</td>
				<td>Frontend developer</td>
			</tr>
			<tr class="tr--collapsible">
				<td colspan="4">
					<table class="table table--bordered">
						<thead>
							<tr>
								<th scope="col">Timeframe</th>
								<th scope="col">Billable hours</th>
								<th scope="col">Budget</th>
								<th scope="col">Status</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>Week 38</td>
								<td>32</td>
								<td>&euro;812</td>
								<td><span class="label label--warning">in progress</span></td>
							</tr>
						</tbody>
					</table>
				</td>
			</tr>
			<tr>
				<th scope="row">4</th>
				<td>Gregory </td>
				<td>Van Looy</td>
				<td>Frontend developer</td>
			</tr>
		</tbody>
	</table>
</div>
