---
title: Base
description: Default layout, header and a container for your content.
---

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


{% highlight html %}
<!DOCTYPE html>
<html lang="en" class="no-js">
<head>...</head>
<body>
	<header class="site-header">...</header>
	<main class="main-container">
		<div class="main-content">
			<div class="container">
				...
			</div>
		</div>
	</main>
</body>
</html>
{% endhighlight %}

