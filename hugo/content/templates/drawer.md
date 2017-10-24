+++
title = "Drawer"
date = 2017-10-23T09:19:17+02:00
type = "templates"
layout = "drawer"
[menu.docs]
parent = "Templates"
+++

# Drawer template

Example template with a **drawer**. A drawer is an (auto-) collapsible sidebar with navigational elements. You see this pattern often in dashboards. Toggling the drawer is done with the checkbox hack

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
			<td><code>.layout--drawer</code></td>
			<td><span class="label label--warning">Required</span></td>
			<td>On the <code>html</code> tag</td>
		</tr>
		<tr>
			<td><code>.drawer__checkbox</code></td>
			<td><span class="label label--warning">Required</span></td>
			<td>The checkbox hack</code></td>
		</tr>
		<tr>
			<td><code>.drawer__menu</code></td>
			<td><span class="label label--warning">Required</span></td>
			<td>The clickbale region that holds the hamburger icon</code></td>
		</tr>
		<tr>
			<td><code>.drawer</code></td>
			<td><span class="label label--warning">Required</span></td>
			<td>First child in <code>.main-container</code></td>
		</tr>
		<tr>
			<td><code>.drawer__section</code></td>
			<td><span class="label label--default">Optional</span></td>
			<td>Place your navigational elements in here.</td>
		</tr>
	</tbody>
</table>


```html
<!DOCTYPE html>
<html lang="en" class="no-js layout--drawer">
<head>...</head>
<body>
	<header class="site-header">...</header>
	<main class="main-container" role="main">
		<input type="checkbox" class="drawer__checkbox" id="drawer__checkbox" />
		<label for="drawer__checkbox" class="drawer__menu" role="button" aria-label="Menu">
			<span class="drawer__menu-line" role="none"></span>
			<span class="drawer__menu-line" role="none"></span>
			<span class="drawer__menu-line" role="none"></span>
		</label>
		<div class="drawer">
			<div class="drawer__section">
				<div class="drawer__section-title">...</div>
				<!-- navigational elements here -->
			</div>
		</div>
		<div class="main-content">
			...
		</div>
	</main>
</body>
</html>
```

## Long filler text

Some lomg filler text to demo the scrolling behaviour. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam explicabo, eos inventore tempora eveniet facere minus iste soluta nulla nobis molestias veritatis, autem distinctio nam maiores non ullam vel laborum unde quisquam harum quidem. Commodi veritatis, vitae, nisi quidem porro aliquam soluta necessitatibus voluptatibus ex repellat deserunt molestiae neque sapiente laboriosam sequi! Architecto numquam suscipit, ex ipsa beatae.

Neque pariatur asperiores quidem natus provident voluptas expedita, architecto, officiis necessitatibus iure explicabo non mollitia quas voluptatum sunt commodi illo sequi, itaque nihil hic eaque tempore. Repudiandae ratione accusamus repellat necessitatibus quia aliquam, possimus. Amet voluptatibus delectus nostrum aperiam nulla dolorum cum saepe magnam adipisci consectetur numquam placeat voluptate ratione corporis odit necessitatibus fugiat autem, aspernatur quas, error, rerum a voluptatem iure!

Illum inventore doloremque, quas sit ad iusto aspernatur dicta autem, illo dolorum odio dolore similique laudantium consequuntur quasi sapiente facere pariatur possimus! Natus, repudiandae ea hic nemo nisi aliquid. Ad unde adipisci beatae quia! Animi voluptatem recusandae autem porro error dicta quas inventore. Dolorem laudantium ad quo temporibus tempore sunt omnis pariatur, exercitationem sint ipsum facilis modi commodi nam reiciendis consectetur velit dicta aliquid accusantium minima, repudiandae deleniti debitis porro enim! Minus corporis qui necessitatibus, consequatur, fugiat reprehenderit nam nihil.
