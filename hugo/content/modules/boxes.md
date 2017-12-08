+++
title = "Boxes"
date = 2017-10-09T11:39:15+02:00
description = "Sometimes you just need a box."
modifiers = ["theme--fp", "layout--fixed-header", "layout--sidebar"]
[menu.docs]
parent = "Modules"
+++


<div class="fp-example">
	<div class="box">
		<p>This is a box. Anything can be its content. The box anly gives <code>padding</code> and some extra styling.</p>
	</div>
</div>

```html
<div class="box">
	...
</div>
```

## Bordered boxes



<div class="fp-example">
	<div class="box box--bordered">
		<p>This is a bordered box. Anything can be its content. The box anly gives <code>padding</code> and some extra styling.</p>
	</div>
</div>

```html
<div class="box box--bordered">
	...
</div>
```

## Colored boxes


<div class="fp-example">
	{{< boxes colorgroup="additional" >}}
</div>

```html
<div class="box box--bordered box--primary">
	...
</div>
<div class="box box--bordered box--lightishgreen">
	...
</div>
```

More colors are available, see [color]({{< relref "color.md" >}}) for all available color names

