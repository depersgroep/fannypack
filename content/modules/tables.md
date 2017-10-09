+++
title = "Tables"
date = 2017-10-06T14:38:47+02:00
[menu.main]
parent = "Modules"
+++

# Tables

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis, numquam. Deleniti minima veniam maxime sit eius, delectus necessitatibus, doloremque maiores!

<div class="fp-example">
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
				<td scope="row">1</td>
				<td>Gwendolyn</td>
				<td>Matthys</td>
				<td>Visual designer</td>
			</tr>
			<tr>
				<td scope="row">2</td>
				<td>Yannick</td>
				<td>Van Avermaet</td>
				<td>Frontend Architect</td>
			</tr>
			<tr>
				<td scope="row">3</td>
				<td>Jochen</td>
				<td>Vandendriessche</td>
				<td>Frontend developer</td>
			</tr>
			<tr>
				<td scope="row">4</td>
				<td>Gregory </td>
				<td>Van Looy</td>
				<td>Frontend developer</td>
			</tr>
		</tbody>
	</table>
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
			<td scope="row">1</td>
			<td>Gwendolyn</td>
			<td>Matthys</td>
			<td>Visual designer</td>
		</tr>
		...
	</tbody>
</table>
```

## Borders everywhere

<div class="fp-example">
	<table class="table table--bordered">
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
				<td scope="row">1</td>
				<td>Gwendolyn</td>
				<td>Matthys</td>
				<td>Visual designer</td>
			</tr>
			<tr>
				<td scope="row">2</td>
				<td>Yannick</td>
				<td>Van Avermaet</td>
				<td>Frontend Architect</td>
			</tr>
			<tr>
				<td scope="row">3</td>
				<td>Jochen</td>
				<td>Vandendriessche</td>
				<td>Frontend developer</td>
			</tr>
			<tr>
				<td scope="row">4</td>
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
				<td scope="row">1</td>
				<td>Gwendolyn</td>
				<td>Matthys</td>
				<td>Visual designer</td>
			</tr>
			<tr>
				<td scope="row">2</td>
				<td>Yannick</td>
				<td>Van Avermaet</td>
				<td>Frontend Architect</td>
			</tr>
			<tr>
				<td scope="row">3</td>
				<td>Jochen</td>
				<td>Vandendriessche</td>
				<td>Frontend developer</td>
			</tr>
			<tr>
				<td scope="row">4</td>
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
				<td scope="row">1</td>
				<td>Gwendolyn</td>
				<td>Matthys</td>
				<td>Visual designer</td>
			</tr>
			<tr>
				<td scope="row">2</td>
				<td>Yannick</td>
				<td>Van Avermaet</td>
				<td>Frontend Architect</td>
			</tr>
			<tr>
				<td scope="row">3</td>
				<td>Jochen</td>
				<td>Vandendriessche</td>
				<td>Frontend developer</td>
			</tr>
			<tr>
				<td scope="row">4</td>
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
				<td scope="row">Status</td>
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
	<td scope="row">Status</td>
	<td>Draft</td>
</tr>
```

## Responsive tables

We have two solutions. Either your table scrolls `.table--responsive` or it transforms in to blocks
with the content stacked on top of each other `.table--transformer`.

### Responsive

Resize your browser to see the result.

<div class="fp-example">
	<table class="table table--bordered table--responsive">
		<caption>Responsive table</caption>
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
				<td scope="row">1</td>
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
				<td scope="row">2</td>
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
				<td scope="row">3</td>
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
				<td scope="row">4</td>
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
				<td scope="row">5</td>
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
				<td scope="row">6</td>
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

```html
<table class="table table--bordered table--responsive">
	...
</table>
```

## Transforming responsive table

This requires a little more work than just css. You need to add the required
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
				<td scope="row" data-title="No.">1</td>
				<td data-title="First name">Gwendolyn</td>
				<td data-title="Last name">Matthys</td>
				<td data-title="Role">Visual designer</td>
			</tr>
			<tr>
				<td scope="row" data-title="No.">2</td>
				<td data-title="First name">Yannick</td>
				<td data-title="Last name">Van Avermaet</td>
				<td data-title="Role">Frontend Architect</td>
			</tr>
			<tr>
				<td scope="row" data-title="No.">3</td>
				<td data-title="First name">Jochen</td>
				<td data-title="Last name">Vandendriessche</td>
				<td data-title="Role">Frontend developer</td>
			</tr>
			<tr>
				<td scope="row" data-title="No.">4</td>
				<td data-title="First name">Gregory </td>
				<td data-title="Last name">Van Looy</td>
				<td data-title="Role">Frontend developer</td>
			</tr>
		</tbody>
	</table>
</div>

```html
<table class="table table--striped table--transformer">
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
			<td scope="row" data-title="No.">1</td>
			<td data-title="First name">Gwendolyn</td>
			<td data-title="Last name">Matthys</td>
			<td data-title="Role">Visual designer</td>
		</tr>
		...
	</tbody>
</table>
```
