---
title: Boxes
description: Sometimes you just need a box.
---

<div class="fp-example">
	<div class="box">
		<p>This is a box. Anything can be its content. The box only gives <code>padding</code> and some extra styling.</p>
	</div>
</div>

{% highlight html %}
<div class="box">
	...
</div>
{% endhighlight %}

## Bordered boxes

<div class="fp-example">
	<div class="box box--bordered">
		<p>This is a bordered box. Anything can be its content.</p>
	</div>
</div>

{% highlight html %}
<div class="box box--bordered">
	...
</div>
{% endhighlight %}

## Colored boxes

<div class="fp-example">
	{% include box.html colorgroup="additional" %}
</div>

{% highlight html %}
<div class="box box--bordered box--primary">
	...
</div>
<div class="box box--bordered box--lightishgreen">
	...
</div>
{% endhighlight %}

{% comment %}
More colors are available, see [color]({% link _docs/style/color.md %}) for all available color names
{% endcomment %}

