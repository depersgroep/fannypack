---
title: Buttons
description: Styles for the available buttons.
---

<div class="fp-example">
	<button class="button" type="button">Default</button>
	<button class="button button--primary" type="submit">Primary</button>
	<button class="button button--secondary" type="submit">Secondary</button>
	<button class="button button--link" type="submit">Link</button>
</div>

{% highlight html %}
<button class="button" type="button">Default</button>
<button class="button button--primary" type="submit">Primary</button>
<button class="button button--secondary" type="submit">Secondary</button>
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
	<div style="margin-bottom: 20px;">
		<button class="button has-success" type="button">Default has Success</button>
		<button class="button has-warning" type="button">Default has Warning</button>
		<button class="button has-error" type="button">Default has Error</button>
	</div>
	<div style="margin-bottom: 20px;">
		<button class="button button--primary has-success" type="submit">Primary has Success</button>
		<button class="button button--primary js-has-warning" type="submit">Primary has Warning</button>
		<button class="button button--primary js-has-error" type="submit">Primary has Error</button>
	</div>
	<div style="margin-bottom: 20px;">
		<button class="button button--secondary has-success" type="submit">Secondary has Success</button>
		<button class="button button--secondary js-has-warning" type="submit">Secondary has Warning</button>
		<button class="button button--secondary js-has-error" type="submit">Secondary has Error</button>
	</div>
	<div>
		<button class="button button--link has-success" type="submit">link has Success</button>
		<button class="button button--link js-has-warning" type="submit">link has Warning</button>
		<button class="button button--link js-has-error" type="submit">link has Error</button>
	</div>
</div>

{% highlight html %}
<button class="button has-success" type="button">Default has Success</button>
<button class="button has-warning" type="button">Default has Warning</button>
<button class="button has-error" type="button">Default has Error</button>
<button class="button button--primary has-success" type="submit">Primary has Success</button>
<button class="button button--primary js-has-warning" type="submit">Primary has Warning</button>
<button class="button button--primary js-has-error" type="submit">Primary has Error</button>
<button class="button button--secondary has-success" type="submit">Secondary has Success</button>
<button class="button button--secondary js-has-warning" type="submit">Secondary has Warning</button>
<button class="button button--secondary js-has-error" type="submit">Secondary has Error</button>
<button class="button button--link has-success" type="submit">link has Success</button>
<button class="button button--link js-has-warning" type="submit">link has Warning</button>
<button class="button button--link js-has-error" type="submit">link has Error</button>
{% endhighlight %}

## Full width

<div class="fp-example">
	<button class="button button--block" type="submit">Default</button>
	<button class="button button--block button--primary" type="submit">Primary</button>
	<button class="button button--block button--secondary" type="submit">Secondary</button>
</div>

{% highlight html %}
<button class="button button--block" type="submit">Default</button>
<button class="button button--block button--primary" type="submit">Primary</button>
<button class="button button--block button--secondary" type="submit">Secondary</button>
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
	<a href="#" class="button">Default</a>
	<a href="#" class="button button--primary">Primary</a>
	<a href="#" class="button button--secondary">Secondary</a>
	<a href="#" class="button button--link">Link</a>
</div>


{% highlight html %}
<a href="#" class="button">Default</a>
<a href="#" class="button button--primary">Primary</a>
<a href="#" class="button button--secondary">Secondary</a>
<a href="#" class="button button--link">Link</a>
{% endhighlight %}
