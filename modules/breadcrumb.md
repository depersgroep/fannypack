---
title: Breadcrumb
description: Breadcrumb is a graphical control element used as a navigational aid in user interfaces.
---

<div class="fp-example">
	<nav class="breadcrumb" role="navigation" aria-label="Breadcrumb">
		<ol class="breadcrumb__list">
			<li class="breadcrumb__item">
				<a href="#" class="breadcrumb__link">Home</a>
			</li>
			<li class="breadcrumb__item">
				<a href="#" class="breadcrumb__link">Brands</a>
			</li>
			<li class="breadcrumb__item" aria-current="page">Lee</li>
		</ol>
	</nav>
</div>

{% highlight html %}
<nav class="breadcrumb" role="navigation" aria-label="Breadcrumb">
	<ol class="breadcrumb__list">
		<li class="breadcrumb__item">
			<a href="#" class="breadcrumb__link">Home</a>
		</li>
		<li class="breadcrumb__item">
			<a href="#" class="breadcrumb__link">Brands</a>
		</li>
		<li class="breadcrumb__item" aria-current="page">Lee</li>
	</ol>
</nav>
{% endhighlight %}

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
			<td><code>role="navigation"</code></td>
			<td><span class="label label--warning">Required</span></td>
			<td>On <code>.breadcrumb</code>. For a11y</td>
		</tr>
		<tr>
			<td><code>aria-label="Breadcrumb"</code></td>
			<td><span class="label label--warning">Required</span></td>
			<td>On <code>.breadcrumb</code>. For a11y. A translatable string. So for the Dutch this can be <code>aria-label="kruimelpad"</code>.</td>
		</tr>
		<tr>
			<td><code>aria-current="page"</code></td>
			<td><span class="label label--warning">Required</span></td>
			<td>On <code>.breadcrumb__item</code>. For a11y. A token with value: <code>page</code>.</td>
		</tr>
	</tbody>
</table>

## On dark backgrounds

<div class="fp-example fp-example--dark">
	<nav class="breadcrumb breadcrumb--light" role="navigation" aria-label="Breadcrumb">
		<ol class="breadcrumb__list">
			<li class="breadcrumb__item">
				<a href="#" class="breadcrumb__link">Home</a>
			</li>
			<li class="breadcrumb__item">
				<a href="#" class="breadcrumb__link">Brands</a>
			</li>
			<li class="breadcrumb__item" aria-current="page">Lee</li>
		</ol>
	</nav>
</div>

{% highlight html %}
<nav class="breadcrumb breadcrumb--light" role="navigation" aria-label="Breadcrumb">
	...
</nav>
{% endhighlight %}

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
			<td><code>.breadcrumb--light</code></td>
			<td><span class="label label--warning">Required</span></td>
			<td>Modifier. Changes the font color to a lighter one.</td>
		</tr>
	</tbody>
</table>

