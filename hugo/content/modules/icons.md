+++
title = "Icons"
date = 2017-10-05T16:39:45+02:00
[menu.docs]
parent = "Modules"
+++

# Icons

We use [Material Icons](https://material.io/icons/) from Google. All available icons are listed there, click them to get the instructions.

**Note** instead of `<i>` we use `<span>` to wrap the icons. That's semantically more correct.

<div class="fp-example">
	<span class="material-icons">face</span>
	<span class="material-icons">favorite</span>
	<span class="material-icons">person</span>
	<span class="material-icons">notifications</span>
</div>

```html
<span class="material-icons">face</span>
<span class="material-icons">favorite</span>
<span class="material-icons">person</span>
<span class="material-icons">notifications</span>
```

## Sizing, states and coloring

These icons were designed to follow the material design guidelines and they look best when using the recommended icon sizes (24px) (**For Fannypack we use it mostly at 16px!**) and colors.

Icons inherit the style properties, like `color` and `font-size`, of their parent or ancestors. This makes it a lot easier to use and to control with css instead of using extra classes on the icon. But if you need to set a specific color without css we've got you covered.

The styles below make it easy to apply our recommended sizes, colors, and activity states.

<div class="fp-example">
	<span class="material-icons">face</span>
	<span class="material-icons mi--18">face</span>
	<span class="material-icons mi--24">face</span>
	<span class="material-icons mi--36">face</span>
	<span class="material-icons mi--48">face</span>
</div>

```html
<span class="material-icons">face</span>
<span class="material-icons mi--18">face</span>
<span class="material-icons mi--24">face</span>
<span class="material-icons mi--36">face</span>
<span class="material-icons mi--48">face</span>
```

<div class="fp-example">
	<span class="material-icons mi--24 mi--dark">face</span>
	<span class="material-icons mi--24 mi--dark is-inactive">face</span>
</div>

```html
<span class="material-icons mi--24 mi--dark">face</span>
<span class="material-icons mi--24 mi--dark is-inactive">face</span>
```

<div class="fp-example fp-example--dark">
	<span class="material-icons mi--24 mi--light">face</span>
	<span class="material-icons mi--24 mi--light is-inactive">face</span>
</div>

```html
<span class="material-icons mi--24 mi--light">face</span>
<span class="material-icons mi--24 mi--light is-inactive">face</span>
```

## A11y and i18n

With Material Icons the description of the icon is the text in the tag but that's English only. If you need i18n you need to add attributes and other elements.

When using the icon in a standalone situation, so no other descriptive text or label is available *(avoid this at all cost)*, you need to add `<span class="sr-only">` with the translated description.

```html
<span class="material-icons" aria-hidden="true">save</span>
<span class="sr-only">translation of "save" goes here</span>
```

`aria-hidden="true"` will hide the entire tag from screenreaders or other assistive technology. Screenreaders will read the content from `.sr-only` but that content is visually hidden for regular users.

<div class="fp-example">
	<span class="material-icons" aria-hidden="true">save</span>
	<span class="sr-only">translation of "save" goes here</span>
</div>

If the icon has a visible description you only need the `aria-hidden` on the icon.
Let's apply this to a button with a Dutch translation string.

<div class="fp-example">
	<button class="button button--primary" type="submit">
		<span class="material-icons" aria-hidden="true">save</span>
		Opslaan
	</button>
</div>

```html
<button class="button button--primary" type="submit">
	<span class="material-icons" aria-hidden="true">save</span>
	Opslaan
</button>
```

