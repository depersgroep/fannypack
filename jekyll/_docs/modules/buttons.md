---
title: Buttons
description: Styles for the available buttons.
---

<div class="fp-example">
	<button class="button button--default" type="button">Default</button>
	<button class="button button--primary" type="submit">Primary</button>
	<button class="button button--success" type="button">Success</button>
	<button class="button button--warning" type="submit">Warning</button>
	<button class="button button--error" type="submit">Error</button>
	<button class="button button--link" type="submit">Link</button>
</div>

{% highlight html %}
<button class="button button--default" type="button">Default</button>
<button class="button button--primary" type="submit">Primary</button>
<button class="button button--success" type="button">Success</button>
<button class="button button--warning" type="submit">Warning</button>
<button class="button button--error" type="submit">Error</button>
<button class="button button--link" type="submit">Link</button>
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

{% highlight html %}
<button class="button button--default has-success" type="button">Default has Success</button>
<button class="button button--primary js-has-warning" type="submit">Primary has Warning</button>
<button class="button button--primary js-has-error" type="submit">Primary has Error</button>
{% endhighlight %}

## Full width

<div class="fp-example">
	<button class="button button--block button--default" type="submit">Default</button>
	<button class="button button--block button--primary" type="submit">Primary</button>
</div>

{% highlight html %}
<button class="button button--block button--default" type="submit">Default</button>
<button class="button button--block button--primary" type="submit">Primary</button>
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
			<td><code>.button--block</code></td>
			<td><span class="label label--warning">Required</span></td>
			<td>Modifier class</td>
		</tr>
	</tbody>
</table>

## Links

Even links can be turned into buttons.

<div class="fp-example">
	<a href="#" class="button button--default">Default</a>
	<a href="#" class="button button--primary">Primary</a>
	<a href="#" class="button button--success">Success</a>
	<a href="#" class="button button--warning">Warning</a>
	<a href="#" class="button button--error">Error</a>
	<a href="#" class="button button--link">Link</a>
</div>


{% highlight html %}
<a href="#" class="button button--default">Default</a>
<a href="#" class="button button--primary">Primary</a>
<a href="#" class="button button--success">Success</a>
<a href="#" class="button button--warning">Warning</a>
<a href="#" class="button button--error">Error</a>
<a href="#" class="button button--link">Link</a>
{% endhighlight %}
