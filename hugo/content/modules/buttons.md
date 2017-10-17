+++
title = "Buttons"
date = 2017-10-05T16:29:36+02:00
[menu.docs]
parent = "Modules"
+++

# Buttons


<div class="fp-example">
	<button class="button button--default" type="button">Default</button>
	<button class="button button--primary" type="submit">Primary</button>
</div>

```html
<button class="button button--default" type="button">Default</button>
<button class="button button--primary" type="submit">Primary</button>
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
			<td><code>type=""</code></td>
			<td><span class="label label--warning">Required</span></td>
			<td>don't forget the <code>type</code> attribute. Requires one of the following values: <code>["submit", "button", "reset"]</code></td>
		</tr>
	</tbody>
</table>
