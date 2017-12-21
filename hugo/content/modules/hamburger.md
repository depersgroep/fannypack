+++
title = "Hamburger"
date = 2017-10-09T11:39:15+02:00
description = "The hamburger menu icon"
modifiers = ["theme--fp", "layout--fixed-header", "layout--sidebar"]
[menu.docs]
parent = "Modules"
+++

We use this hamburger icon in the drawer and the vertical header but you can use it anywhere you need it. Styling is provided but if you need extras for positioning, you have to write it yourself.

<div class="fp-example">
	<input type="checkbox" class="hamburger__checkbox" id="nav-toggle">
	<label for="nav-toggle" class="hamburger" role="button" aria-label="Toggle the menu">
		<span class="hamburger__line" role="none presentation"></span>
		<span class="hamburger__line" role="none presentation"></span>
		<span class="hamburger__line" role="none presentation"></span>
	</label>
</div>

```html
<input type="checkbox" class="hamburger__checkbox" id="nav-toggle">
<label for="nav-toggle" class="hamburger" role="button" aria-label="Toggle the menu">
	<span class="hamburger__line" role="none presentation"></span>
	<span class="hamburger__line" role="none presentation"></span>
	<span class="hamburger__line" role="none presentation"></span>
</label>
```



