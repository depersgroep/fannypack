+++
title = "Drawer"
date = 2017-10-23T09:19:17+02:00
type = "templates"
layout = "drawer"
[menu.docs]
parent = "Templates"
+++

# Drawer template

Example template with a **drawer**. A drawer is an auto-collapsible sidebar with navigational elements. You see this pattern often in dashboards.

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
			<td><code>.layout--drawer</code></td>
			<td><span class="label label--warning">Required</span></td>
			<td>On the <code>html</code> tag</td>
		</tr>
		<tr>
			<td><code>.drawer</code></td>
			<td><span class="label label--warning">Required</span></td>
			<td>First child in <code>.main-container</code></td>
		</tr>
		<tr>
			<td><code>.drawer__section</code></td>
			<td><span class="label label--default">Optional</span></td>
			<td>Place your navigational elements in here.</td>
		</tr>
	</tbody>
</table>


```html
<!DOCTYPE html>
<html lang="en" class="no-js layout--drawer">
<head>...</head>
<body>
	<header class="site-header">...</header>
	<main class="main-container" role="main">
		<div class="drawer">
			<div class="drawer__section">
				<div class="drawer__section-title">...</div>
				<!-- navigational elements here -->
			</div>
		</div>
		<div class="main-content">
			...
		</div>
	</main>
</body>
</html>
```

