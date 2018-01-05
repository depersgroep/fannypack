+++
title = "Alerts"
date = 2017-10-09T11:39:15+02:00
description = "Provide visual feedback about a recent action of the user."
modifiers = ["theme--fp", "layout--fixed-header", "layout--sidebar"]
[menu.docs]
parent = "Modules"
+++


<div class="fp-example">
	<div class="alert alert--condensed alert--error" role="alert" aria-describedby="alertdescription1" aria-live="assertive">
		<div class="alert__body">
			<h3 class="alert__title">Error!</h3>
			<p class="alert__text" id="alertdescription1">Major alert. <a href="#">Click here</a></p>
		</div>
	</div>
	<div class="alert alert--condensed alert--warning" role="alert" aria-describedby="alertdescription2" aria-live="assertive">
		<div class="alert__body">
			<h3 class="alert__title">Warning!</h3>
			<p class="alert__text" id="alertdescription2">Something's up. <a href="#">Click here</a></p>
		</div>
	</div>
	<div class="alert alert--condensed alert--success" role="alert" aria-describedby="alertdescription3" aria-live="polite">
		<div class="alert__body">
			<h3 class="alert__title">Success!</h3>
			<p class="alert__text" id="alertdescription3">You successfully did something. <a href="#">Click here</a></p>
		</div>
	</div>
	<div class="alert alert--condensed alert--info" role="alert" aria-describedby="alertdescription4" aria-live="polite">
		<div class="alert__body">
			<h3 class="alert__title">Attention!</h3>
			<p class="alert__text" id="alertdescription4"> This alert needs your attention. <a href="#">Click here</a></p>
		</div>
	</div>
</div>

```html
<!-- ERROR -->
<div class="alert alert--condensed alert--error" role="alert" aria-describedby="alertdescription1" aria-live="assertive">
	<div class="alert__body">
		<h3 class="alert__title">Error</h3>
		<p class="alert__text" id="alertdescription1">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque error perferendis eveniet laborum, a iure ex odio asperiores eos placeat.</p>
	</div>
</div>
<!-- WARNING -->
<div class="alert alert--condensed alert--warning" role="alert" aria-describedby="alertdescription2" aria-live="assertive">
	<div class="alert__body">
		<h3 class="alert__title">Warning</h3>
		<p class="alert__text" id="alertdescription2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque error perferendis eveniet laborum, a iure ex odio asperiores eos placeat.</p>
	</div>
</div>
<!-- SUCCESS -->
<div class="alert alert--condensed alert--success" role="alert" aria-describedby="alertdescription3" aria-live="polite">
	<div class="alert__body">
		<h3 class="alert__title">Success</h3>
		<p class="alert__text" id="alertdescription3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque error perferendis eveniet laborum, a iure ex odio asperiores eos placeat.</p>
	</div>
</div>
<!-- INFORMATIVE -->
<div class="alert alert--condensed alert--info" role="alert" aria-describedby="alertdescription4" aria-live="polite">
	<div class="alert__body">
		<h3 class="alert__title">Attention</h3>
		<p class="alert__text" id="alertdescription4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque error perferendis eveniet laborum, a iure ex odio asperiores eos placeat.</p>
	</div>
</div>
```

## With a description

Be brief in your description text, one paragraph should be more than enough to get your feedback across to the user.

<div class="fp-example">
	<div class="alert alert--error" role="alert" aria-describedby="alertdescription1" aria-live="assertive">
		<div class="alert__body">
			<h3 class="alert__title">Error</h3>
			<p class="alert__text" id="alertdescription1">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque error perferendis eveniet laborum, a iure ex odio asperiores eos placeat.</p>
		</div>
	</div>
	<div class="alert alert--warning" role="alert" aria-describedby="alertdescription2" aria-live="assertive">
		<div class="alert__body">
			<h3 class="alert__title">Warning</h3>
			<p class="alert__text" id="alertdescription2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque error perferendis eveniet laborum, a iure ex odio asperiores eos placeat.</p>
		</div>
	</div>
	<div class="alert alert--success" role="alert" aria-describedby="alertdescription3" aria-live="polite">
		<div class="alert__body">
			<h3 class="alert__title">Success</h3>
			<p class="alert__text" id="alertdescription3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque error perferendis eveniet laborum, a iure ex odio asperiores eos placeat.</p>
		</div>
	</div>
	<div class="alert alert--info" role="alert" aria-describedby="alertdescription4" aria-live="polite">
		<div class="alert__body">
			<h3 class="alert__title">Attention</h3>
			<p class="alert__text" id="alertdescription4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque error perferendis eveniet laborum, a iure ex odio asperiores eos placeat.</p>
		</div>
	</div>
</div>

```html
<!-- ERROR -->
<div class="alert alert--error" role="alert" aria-describedby="alertdescription1" aria-live="assertive">
	<div class="alert__body">
		<h3 class="alert__title">Error</h3>
		<p class="alert__text" id="alertdescription1">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque error perferendis eveniet laborum, a iure ex odio asperiores eos placeat.</p>
	</div>
</div>
<!-- WARNING -->
<div class="alert alert--warning" role="alert" aria-describedby="alertdescription2" aria-live="assertive">
	<div class="alert__body">
		<h3 class="alert__title">Warning</h3>
		<p class="alert__text" id="alertdescription2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque error perferendis eveniet laborum, a iure ex odio asperiores eos placeat.</p>
	</div>
</div>
<!-- SUCCESS -->
<div class="alert alert--success" role="alert" aria-describedby="alertdescription3" aria-live="polite">
	<div class="alert__body">
		<h3 class="alert__title">Success</h3>
		<p class="alert__text" id="alertdescription3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque error perferendis eveniet laborum, a iure ex odio asperiores eos placeat.</p>
	</div>
</div>
<!-- INFORMATIVE -->
<div class="alert alert--info" role="alert" aria-describedby="alertdescription4" aria-live="polite">
	<div class="alert__body">
		<h3 class="alert__title">Attention</h3>
		<p class="alert__text" id="alertdescription4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque error perferendis eveniet laborum, a iure ex odio asperiores eos placeat.</p>
	</div>
</div>
```

## Dismissible alerts

You can click these alerts away. Needs Javascript to work!

<div class="fp-example">
	<div class="alert alert--condensed alert--dismissible alert--error" role="alert" aria-describedby="alertdescription1" aria-live="assertive">
		<div class="alert__body">
			<h3 class="alert__title">Error!</h3>
			<p class="alert__text" id="alertdescription1">Major alert. <a href="#">Click here</a></p>
		</div>
		<button class="alert__dismiss" type="button">&times;<span class="sr-only">Close</span></button>
	</div>
	<div class="alert alert--dismissible alert--error" role="alert" aria-describedby="alertdescription1" aria-live="assertive">
		<div class="alert__body">
			<h3 class="alert__title">Error!</h3>
			<p class="alert__text" id="alertdescription1">Major alert. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id, nesciunt?. <a href="#">Click here</a></p>
		</div>
		<button class="alert__dismiss" type="button">&times;<span class="sr-only">Close</span></button>
	</div>
</div>

```html
<div class="alert alert--condensed alert--dismissible alert--error" role="alert" aria-describedby="alertdescription1" aria-live="assertive">
	<div class="alert__body">
		<h3 class="alert__title">Error!</h3>
		<p class="alert__text" id="alertdescription1">Major alert. <a href="#">Click here</a></p>
	</div>
	<button class="alert__dismiss" type="button">&times;<span class="sr-only">Close</span></button>
</div>

<div class="alert alert--dismissible alert--error" role="alert" aria-describedby="alertdescription1" aria-live="assertive">
	<div class="alert__body">
		<h3 class="alert__title">Error!</h3>
		<p class="alert__text" id="alertdescription1">Major alert. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id, nesciunt?. <a href="#">Click here</a></p>
	</div>
	<button class="alert__dismiss" type="button">&times;<span class="sr-only">Close</span></button>
</div>
```

