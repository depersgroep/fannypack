---
title: Vertical header
description: When scrolling the page, your header wil be fixed at the left and always visible.
modifiers: layout--vertical-header
---

# Vertical header template

When scrolling the page, your header wil be fixed at the left and always visible.
On mobile this will transform to a horizontal header with a hamburger menu.

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
			<td><code>.layout--vertical-header</code></td>
			<td><span class="label label--warning">Required</span></td>
			<td>On the <code>html</code> tag</code></td>
		</tr>
		<tr>
			<td><code>.site-header--vertical</code></td>
			<td><span class="label label--warning">Required</span></td>
			<td>Modifier on <code>.site-header</code></code></td>
		</tr>
		<tr>
			<td><code>.nav--vertical</code></td>
			<td><span class="label label--info">Optional</span></td>
			<td>Only if you need navigation in the vertical header</td>
		</tr>
		<tr>
			<td><code>.hamburger</code></td>
			<td><span class="label label--info">Optional</span></td>
			<td>Only if you need navigation in the vertical header. This is for the mobile view only.</td>
		</tr>
	</tbody>
</table>

{% highlight html %}
<!DOCTYPE html>
<html lang="en" class="no-js layout--vertical-header">
<head>...</head>
<body>
	<header class="site-header site-header--vertical">
		<div class="site-header__section">
			<!-- app icon here -->
		</div>
		<input type="checkbox" class="hamburger__checkbox" id="nav-toggle">
		<label for="nav-toggle" class="hamburger" role="button" aria-label="Toggle the menu">
			<span class="hamburger__line" role="none presentation"></span>
			<span class="hamburger__line" role="none presentation"></span>
			<span class="hamburger__line" role="none presentation"></span>
		</label>
		<nav class="nav nav--vertical">...</nav>
	</header>
	<main class="main-container" role="main">
		<div class="main-content">
			<div class="container">
				...
			</div>
		</div>
	</main>
</body>
</html>
{% endhighlight %}

## Here's some text filler.

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima mollitia reprehenderit voluptatum nostrum ipsam et id, aliquid quasi, similique quaerat animi. Magnam, fugit. Facere repellat corrupti, ipsam. Ullam nihil aliquam molestiae sunt placeat cumque culpa explicabo exercitationem perferendis, nisi illo vel quibusdam, eaque doloremque soluta perspiciatis ad at sequi non eveniet fuga aperiam. Reiciendis, error. Totam, ut necessitatibus rerum voluptatibus. Eaque hic exercitationem vitae. Libero maiores doloribus quidem culpa sapiente, praesentium vero perferendis impedit sed. Aspernatur perferendis et repellat temporibus modi.

Itaque, soluta? Quod eligendi laudantium a, in vero libero aliquam nihil dolorem, dolorum debitis magnam, fugiat doloremque accusamus animi aut excepturi sapiente iste alias. Hic optio mollitia nam quidem nobis modi nisi qui officiis, perferendis ab. Cum, provident porro repellendus ipsam, consectetur a quae atque voluptate obcaecati neque asperiores assumenda earum adipisci rem ea et accusantium impedit hic itaque, dolores fugit aliquam! Aperiam sequi id corporis, a vel doloremque saepe quibusdam possimus quas nostrum quia repellat vero reiciendis, eos perferendis distinctio nam.

Repellendus aperiam, dicta minima fugit ullam similique. Voluptates dolorem fugiat ipsa perferendis velit ab, fugit quod praesentium illum nisi, laudantium consequuntur! Praesentium excepturi atque, alias nulla quod perspiciatis itaque omnis voluptate. Sapiente facilis adipisci optio et excepturi.

