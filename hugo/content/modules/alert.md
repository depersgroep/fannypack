+++
title = "Alerts"
date = 2017-10-09T11:39:15+02:00
[menu.main]
parent = "Modules"
+++
# Alerts

Be brief in your description text, one paragraph should be more than enought to get your feedback across to the user.

<div class="fp-example">
	<div class="alert alert--error" role="alert" aria-describedby="alertdescription1" aria-live="assertive">
		<h3 class="alert__title">Error</h3>
		<p class="alert__text" id="alertdescription1">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque error perferendis eveniet laborum, a iure ex odio asperiores eos placeat.</p>
	</div>
	<div class="alert alert--warning" role="alert" aria-describedby="alertdescription2" aria-live="assertive">
		<h3 class="alert__title">Warning</h3>
		<p class="alert__text" id="alertdescription2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque error perferendis eveniet laborum, a iure ex odio asperiores eos placeat.</p>
	</div>
	<div class="alert alert--success" role="alert" aria-describedby="alertdescription3" aria-live="polite">
		<h3 class="alert__title">Success</h3>
		<p class="alert__text" id="alertdescription3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque error perferendis eveniet laborum, a iure ex odio asperiores eos placeat.</p>
	</div>
</div>

```html
<!-- ERROR -->
<div class="alert alert--error" role="alert" aria-describedby="alertdescription1" aria-live="assertive">
	<h3 class="alert__title">Error</h3>
	<p class="alert__text" id="alertdescription1">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque error perferendis eveniet laborum, a iure ex odio asperiores eos placeat.</p>
</div>

<!-- WARNING -->
<div class="alert alert--warning" role="alert" aria-describedby="alertdescription2" aria-live="polite">
	<h3 class="alert__title">Warning</h3>
	<p class="alert__text" id="alertdescription2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque error perferendis eveniet laborum, a iure ex odio asperiores eos placeat.</p>
</div>

<!-- SUCCESS -->
<div class="alert alert--success" role="alert" aria-describedby="alertdescription3" aria-live="polite">
	<h3 class="alert__title">Success</h3>
	<p class="alert__text" id="alertdescription3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque error perferendis eveniet laborum, a iure ex odio asperiores eos placeat.</p>
</div>
```


