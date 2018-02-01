---
title: Tabs
description: Provide visual feedback about a recent action of the user.
menus: Modules
---

<p class="lead">Tabs purely with html and css, no JavaScript required. <code>Flexbox</code> to the rescue!</p>

Active states are styled using the `:checked` pseudo selector on the `input[type="radio"]` and the adjacent sibling combinator `.tabs__trigger:checked + .tabs__label {...}`.


<div class="fp-example">
	<div class="tabs tabs--primary" role="tablist">
		<input type="radio" class="tabs__trigger" name="primary" id="home" checked="checked" />
		<label for="home" class="tabs__label" id="home-tab" role="tab" aria-controls="home-pane">Home</label>
		<div class="tabs__pane" id="home-pane" role="tabpanel" aria-labelledby="home-tab">
			<p>Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.</p>
		</div>
		<input type="radio" class="tabs__trigger" name="primary" id="profile" />
		<label for="profile" class="tabs__label" id="profile-tab" role="tab" aria-controls="profile-pane">Profile</label>
		<div class="tabs__pane" id="profile-pane" role="tabpanel" aria-labelledby="profile-tab">
			<p>Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid. Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus mollit. Keytar helvetica VHS salvia yr, vero magna velit sapiente labore stumptown. Vegan fanny pack odio cillum wes anderson 8-bit, sustainable jean shorts beard ut DIY ethical culpa terry richardson biodiesel. Art party scenester stumptown, tumblr butcher vero sint qui sapiente accusamus tattooed echo park.</p>
		</div>
		<input type="radio" class="tabs__trigger" name="primary" id="settings" />
		<label for="settings" class="tabs__label" id="settings-tab" role="tab" aria-controls="settings-pane">Settings</label>
		<div class="tabs__pane" id="settings-pane" role="tabpanel" aria-labelledby="settings-tab">
			<p>Etsy mixtape wayfarers, ethical wes anderson tofu before they sold out mcsweeney's organic lomo retro fanny pack lo-fi farm-to-table readymade. Messenger bag gentrify pitchfork tattooed craft beer, iphone skateboard locavore carles etsy salvia banksy hoodie helvetica. DIY synth PBR banksy irony. Leggings gentrify squid 8-bit cred pitchfork. Williamsburg banh mi whatever gluten-free, carles pitchfork biodiesel fixie etsy retro mlkshk vice blog. Scenester cred you probably haven't heard of them, vinyl craft beer blog stumptown. Pitchfork sustainable tofu synth chambray yr.</p>
		</div>
	</div>
</div>

{% highlight html %}
<div class="tabs tabs--primary" role="tablist">
	<input type="radio" class="tabs__trigger" name="tabs__trigger" id="home" checked="checked" />
	<label for="home" class="tabs__label" id="home-tab" role="tab" aria-controls="home-pane">Home</label>
	<div class="tabs__pane" id="home-pane" role="tabpanel" aria-labelledby="home-tab">
		...
	</div>
	<input type="radio" class="tabs__trigger" name="tabs__trigger" id="profile" />
	<label for="profile" class="tabs__label" id="profile-tab" role="tab" aria-controls="profile-pane">Profile</label>
	<div class="tabs__pane" id="profile-pane" role="tabpanel" aria-labelledby="profile-tab">
		...
	</div>
	<input type="radio" class="tabs__trigger" name="tabs__trigger" id="settings" />
	<label for="settings" class="tabs__label" id="settings-tab" role="tab" aria-controls="settings-pane">Settings</label>
	<div class="tabs__pane" id="settings-pane" role="tabpanel" aria-labelledby="settings-tab">
		...
	</div>
</div>
{% endhighlight %}

<table class="table table--horizontal-borders">
	<thead>
		<tr>
			<th>Selector / Attribute</th>
			<th></th>
			<th>Description</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td><code>&lt;input type="radio" id=""&gt;</code> &amp; <code>&lt;label for=""&gt;</code></td>
			<td><span class="label label--warning">Required</span></td>
			<td>The <code>id</code> of the radio button <strong>must</strong> match the <code>for</code> attribute of the label</td>
		</tr>
		<tr>
			<td><code>&lt;input type="radio" name=""&gt;</code></td>
			<td><span class="label label--warning">Required</span></td>
			<td>All radio buttons must have the same <code>name</code> value</td>
		</tr>
		<tr>
			<td><code>id</code> &amp; <code>name</code></td>
			<td><span class="label label--warning">Required</span></td>
			<td>Also make sure you don't have any duplicate <code>id</code>'s and no duplicate <code>name=""</code> values on other tabs components in the page</td>
		</tr>
		<tr>
			<td>WAI-ARIA</td>
			<td><span class="label label--warning">Required</span></td>
			<td>Please add the WAI-ARIA attributes for improved accessibility</td>
		</tr>
	</tbody>
</table>

## A darker version

<div class="fp-example">
	<div class="tabs tabs--secondary" role="tablist">
		<input type="radio" class="tabs__trigger" name="secondary" id="homesecondary" checked="checked" />
		<label for="homesecondary" class="tabs__label" id="home-secondary-tab" role="tab" aria-controls="home-secondary-pane">Home</label>
		<div class="tabs__pane" id="home-secondary-pane" role="tabpanel" aria-labelledby="home-secondary-tab">
			<p>Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.</p>
		</div>
		<input type="radio" class="tabs__trigger" name="secondary" id="profilesecondary" />
		<label for="profilesecondary" class="tabs__label" id="profile-secondary-tab" role="tab" aria-controls="profile-secondary-pane">Profile</label>
		<div class="tabs__pane" id="profile-secondary-pane" role="tabpanel" aria-labelledby="profile-secondary-tab">
			<p>Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid. Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus mollit. Keytar helvetica VHS salvia yr, vero magna velit sapiente labore stumptown. Vegan fanny pack odio cillum wes anderson 8-bit, sustainable jean shorts beard ut DIY ethical culpa terry richardson biodiesel. Art party scenester stumptown, tumblr butcher vero sint qui sapiente accusamus tattooed echo park.</p>
		</div>
		<input type="radio" class="tabs__trigger" name="secondary" id="settingssecondary" />
		<label for="settingssecondary" class="tabs__label" id="settings-secondary-tab" role="tab" aria-controls="settings-secondary-pane">Settings</label>
		<div class="tabs__pane" id="settings-secondary-pane" role="tabpanel" aria-labelledby="settings-secondary-tab">
			<p>Etsy mixtape wayfarers, ethical wes anderson tofu before they sold out mcsweeney's organic lomo retro fanny pack lo-fi farm-to-table readymade. Messenger bag gentrify pitchfork tattooed craft beer, iphone skateboard locavore carles etsy salvia banksy hoodie helvetica. DIY synth PBR banksy irony. Leggings gentrify squid 8-bit cred pitchfork. Williamsburg banh mi whatever gluten-free, carles pitchfork biodiesel fixie etsy retro mlkshk vice blog. Scenester cred you probably haven't heard of them, vinyl craft beer blog stumptown. Pitchfork sustainable tofu synth chambray yr.</p>
		</div>
	</div>
</div>

{% highlight html %}
<div class="tabs tabs--secondary" role="tablist">
	...
</div>
{% endhighlight %}

## A minimal version

<div class="fp-example">
	<div class="tabs tabs--alt tabs--primary" role="tablist">
		<input type="radio" class="tabs__trigger" name="alt" id="homealt" checked="checked" />
		<label for="homealt" class="tabs__label" id="home-tab-alt" role="tab" aria-controls="home-pane-alt">Home</label>
		<div class="tabs__pane" id="home-pane-alt" role="tabpanel" aria-labelledby="home-tab-alt">
			<p>Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.</p>
		</div>
		<input type="radio" class="tabs__trigger" name="alt" id="profilealt" />
		<label for="profilealt" class="tabs__label" id="profile-tab-alt" role="tab" aria-controls="profile-pane-alt">Profile</label>
		<div class="tabs__pane" id="profile-pane-alt" role="tabpanel" aria-labelledby="profile-tab-alt">
			<p>Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid. Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus mollit. Keytar helvetica VHS salvia yr, vero magna velit sapiente labore stumptown. Vegan fanny pack odio cillum wes anderson 8-bit, sustainable jean shorts beard ut DIY ethical culpa terry richardson biodiesel. Art party scenester stumptown, tumblr butcher vero sint qui sapiente accusamus tattooed echo park.</p>
		</div>
		<input type="radio" class="tabs__trigger" name="alt" id="settingsalt" />
		<label for="settingsalt" class="tabs__label" id="settings-tab-alt" role="tab" aria-controls="settings-pane-alt">Settings</label>
		<div class="tabs__pane" id="settings-pane-alt" role="tabpanel" aria-labelledby="settings-tab-alt">
			<p>Etsy mixtape wayfarers, ethical wes anderson tofu before they sold out mcsweeney's organic lomo retro fanny pack lo-fi farm-to-table readymade. Messenger bag gentrify pitchfork tattooed craft beer, iphone skateboard locavore carles etsy salvia banksy hoodie helvetica. DIY synth PBR banksy irony. Leggings gentrify squid 8-bit cred pitchfork. Williamsburg banh mi whatever gluten-free, carles pitchfork biodiesel fixie etsy retro mlkshk vice blog. Scenester cred you probably haven't heard of them, vinyl craft beer blog stumptown. Pitchfork sustainable tofu synth chambray yr.</p>
		</div>
	</div>
</div>

{% highlight html %}
<div class="tabs tabs--alt tabs--primary" role="tablist">
	...
</div>
{% endhighlight %}

### And a minimal, darker version

<div class="fp-example">
	<div class="tabs tabs--alt tabs--secondary" role="tablist">
		<input type="radio" class="tabs__trigger" name="altsecondary" id="homealtsecondary" checked="checked" />
		<label for="homealtsecondary" class="tabs__label" id="home-tab-alt-secondary" role="tab" aria-controls="home-pane-alt-secondary">Home</label>
		<div class="tabs__pane" id="home-pane-alt-secondary" role="tabpanel" aria-labelledby="home-tab-alt-secondary">
			<p>Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.</p>
		</div>
		<input type="radio" class="tabs__trigger" name="altsecondary" id="profilealtsecondary" />
		<label for="profilealtsecondary" class="tabs__label" id="profile-tab-alt-secondary" role="tab" aria-controls="profile-pane-alt-secondary">Profile</label>
		<div class="tabs__pane" id="profile-pane-alt-secondary" role="tabpanel" aria-labelledby="profile-tab-alt-secondary">
			<p>Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid. Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus mollit. Keytar helvetica VHS salvia yr, vero magna velit sapiente labore stumptown. Vegan fanny pack odio cillum wes anderson 8-bit, sustainable jean shorts beard ut DIY ethical culpa terry richardson biodiesel. Art party scenester stumptown, tumblr butcher vero sint qui sapiente accusamus tattooed echo park.</p>
		</div>
		<input type="radio" class="tabs__trigger" name="altsecondary" id="settings-alt-secondary" />
		<label for="settings-alt-secondary" class="tabs__label" id="settings-tab-alt-secondary" role="tab" aria-controls="settings-pane-alt-secondary">Settings</label>
		<div class="tabs__pane" id="settings-pane-alt-secondary" role="tabpanel" aria-labelledby="settings-tab-alt-secondary">
			<p>Etsy mixtape wayfarers, ethical wes anderson tofu before they sold out mcsweeney's organic lomo retro fanny pack lo-fi farm-to-table readymade. Messenger bag gentrify pitchfork tattooed craft beer, iphone skateboard locavore carles etsy salvia banksy hoodie helvetica. DIY synth PBR banksy irony. Leggings gentrify squid 8-bit cred pitchfork. Williamsburg banh mi whatever gluten-free, carles pitchfork biodiesel fixie etsy retro mlkshk vice blog. Scenester cred you probably haven't heard of them, vinyl craft beer blog stumptown. Pitchfork sustainable tofu synth chambray yr.</p>
		</div>
	</div>
</div>

{% highlight html %}
<div class="tabs tabs--alt tabs--secondary" role="tablist">
	...
</div>
{% endhighlight %}
