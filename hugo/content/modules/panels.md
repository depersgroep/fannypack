+++
title = "Panels"
date = 2017-10-09T11:39:15+02:00
description = "Boxes that hold content"
modifiers = ["theme--fp", "layout--fixed-header", "layout--sidebar"]
[menu.docs]
parent = "Modules"
+++

Containers, or boxes, that can hold any information.

<div class="fp-example">
	<div class="panel">
		<div class="panel__heading">
			<h3 class="panel__title">General</h3>
		</div>
		<div class="panel__body">
			<p>This is the <code>panel__body</code></p>
		</div>
	</div>
</div>

```html
<div class="panel">
	<div class="panel__heading">
		<h3 class="panel__title">General</h3>
	</div>
	<div class="panel__body">
		...
	</div>
</div>

```

## Using panels in forms

Panels is something we use regularly in forms, when building CRUD applications, but we use the semantically correct `fieldset` and `legend`.

<div class="fp-example">
	<fieldset class="panel">
		<legend class="panel__title">General</legend>
		<div class="panel__body">
			<div class="form__group">
				<label for="panelinputid" class="form__label">Name</label>
				<input id="panelinputid" name="panelinputname" type="text" class="form__field" />
			</div>
			<div class="form__group">
				<label for="paneltextareid" class="form__label">Comment <span class="form__label-meta">(optional)</span></label>
				<span class="form__helptext" id="paneltextareahelptext">A short help text for a textarea.</span>
				<textarea name="textareaname" id="paneltextareaid" class="form__textarea" aria-describedby="paneltextareahelptext"></textarea>
			</div>
			<div class="form__actions">
				<button class="button button--default" type="reset">Reset</button>
				<button class="button button--primary" type="submit">Send</button>
			</div>
		</div>
	</fieldset>

	<fieldset class="panel">
		<legend class="panel__title">General</legend>
		<div class="panel__body">
			<div class="form__group">
				<label for="panelinputid" class="form__label">Name</label>
				<input id="panelinputid" name="panelinputname" type="text" class="form__field" />
			</div>
			<div class="form__group">
				<label for="paneltextareid" class="form__label">Comment <span class="form__label-meta">(optional)</span></label>
				<span class="form__helptext" id="paneltextareahelptext">A short help text for a textarea.</span>
				<textarea name="textareaname" id="paneltextareaid" class="form__textarea" aria-describedby="paneltextareahelptext"></textarea>
			</div>
			<div class="form__actions">
				<button class="button button--default" type="reset">Reset</button>
				<button class="button button--primary" type="submit">Send</button>
			</div>
		</div>
	</fieldset>
</div>

```html
<fieldset class="panel">
	<legend class="panel__title">General</legend>
	<div class="panel__body">
		...
	</div>
</fieldset>
```


