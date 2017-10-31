+++
title = "Base"
date = 2017-10-23T09:19:17+02:00
description = "Default layout, header and a container for your content."
type = "templates"
[menu.docs]
parent = "Templates"
+++

# Base template

Default layout, header and a `.container` for your content.

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
			<td><code>.container</code></td>
			<td><span class="label label--warning">Required</span></td>
			<td>First child in <code>.main-content</code>. Has a <code>max-width</code>.</td>
		</tr>
	</tbody>
</table>


```html
<!DOCTYPE html>
<html lang="en" class="no-js">
<head>...</head>
<body>
	<header class="site-header">...</header>
	<main class="main-container" role="main">
		<div class="main-content">
			<div class="container">
				...
			</div>
		</div>
	</main>
</body>
</html>
```

