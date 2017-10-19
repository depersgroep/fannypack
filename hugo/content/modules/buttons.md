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
	<button class="button button--success" type="button">Success</button>
	<button class="button button--warning" type="submit">Warning</button>
	<button class="button button--error" type="submit">Error</button>
</div>

```html
<button class="button button--default" type="button">Default</button>
<button class="button button--primary" type="submit">Primary</button>
<button class="button button--success" type="button">Success</button>
<button class="button button--warning" type="submit">Warning</button>
<button class="button button--error" type="submit">Error</button>
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

## States

If the states are toggled with extra classes you can add `.has-`, or with JavaScript `.js-has-` state classes.

<div class="fp-example">
	<button class="button button--default has-success" type="button">Default has Success</button>
	<button class="button button--primary js-has-warning" type="submit">Primary has Warning</button>
	<button class="button button--primary js-has-error" type="submit">Primary has Error</button>
</div>

```html
<button class="button button--default has-success" type="button">Default has Success</button>
<button class="button button--primary js-has-warning" type="submit">Primary has Warning</button>
<button class="button button--primary js-has-error" type="submit">Primary has Error</button>
```

