+++
title = "Typography"
date = 2017-10-09T13:02:58+02:00
[menu.docs]
parent = "Layout"
+++

# Typography

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit veniam totam quos odit nulla ab pariatur dolorem id quasi dicta.

## Font

The base font-family for Fannypack is [Source Sans Pro](https://fonts.google.com/specimen/Source+Sans+Pro) in 3 styles: regular, <span style="font-weight: 600;">semi-bold</span> and <strong>bold</strong>.

## Kitchen sink

<div class="fp-example fp-example--kitchen-sink">
	<h1>H1 heading</h1>
	<h2>H2 heading</h2>
	<h3>H3 heading</h3>
	<h4>H4 heading</h4>
	<h5>H5 heading</h5>
	<h6>H6 heading</h6>

	<h3>Unordered list</h3>
	<ul>
		<li>list item</li>
		<li>list item</li>
		<li>list item
			<ul>
				<li>nested list item</li>
			</ul>
		</li>
		<li>list item</li>
	</ul>

	<h3>Ordered list</h3>
	<ol>
		<li>list item</li>
		<li>list item</li>
		<li>list item
			<ol>
				<li>nested list item</li>
			</ol>
		</li>
		<li>list item</li>
	</ol>

	<h3>Mixed nested lists</h3>
	<ul>
		<li>list item</li>
		<li>list item</li>
		<li>list item
			<ol>
				<li>nested list item</li>
			</ol>
		</li>
		<li>list item</li>
	</ul>

	<ol>
		<li>list item</li>
		<li>list item</li>
		<li>list item
			<ul>
				<li>nested list item</li>
			</ul>
		</li>
		<li>list item</li>
	</ol>

	<p>Paragraph text with <strong>lorem ipsum</strong> dolor sit amet, m<sup>2</sup> consectetur <a href="#">adipisicing</a> elit<sub>8</sub>. Aliquid <em>accusamus</em> quod cum dicta numquam, <small>similique</small> iure quibusdam <mark>repudiandae</mark> deleniti <code>asperiores</code>.</p>

<pre><code>.kitchen-sink {
	display: block;
}</code></pre>

	<h3>Horizontal rule</h3>
	<hr/>
</div>

## Contextual helper classes

If you want to style certain parts that are not a specific part of a module, we have helper classes available to make your development life easier.

<div class="fp-example">
	<p class="text--success">Text in <strong>success</strong> color. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, excepturi.</p>
	<p>Text in <strong>success</strong> color. Lorem ipsum dolor sit amet, <span class="text--success">consectetur</span> adipisicing elit. Dolore, excepturi.</p>
	<p class="text--warning">Text in <strong>warning</strong> color. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, excepturi.</p>
	<p>Text in <strong>warning</strong> color. <span class="text--warning">Lorem ipsum</span> dolor sit amet, consectetur adipisicing elit. Dolore, excepturi.</p>
	<p class="text--error">Text in <strong>error</strong> color. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, excepturi.</p>
	<p>Text in <strong>error</strong> color. Lorem ipsum dolor sit amet, consectetur <span class="text--error">adipisicing</span> elit. Dolore, excepturi.</p>
	<p class="text--muted">Text in <strong>muted</strong> color. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, excepturi.</p>
	<p>Text in <strong>muted</strong> color. Lorem ipsum dolor sit amet, consectetur <span class="text--muted">adipisicing</span> elit. Dolore, excepturi.</p>
</div>

```html
<p class="text--success">...</p>
<p>... <span class="text--success">consectetur</span> ...</p>
<p class="text--warning">...</p>
<p>... <span class="text--warning">Lorem ipsum</span> ...</p>
<p class="text--error">...</p>
<p>... <span class="text--error">adipisicing</span> ...</p>
<p class="text--muted">...</p>
<p>... <span class="text--muted">adipisicing</span> ...</p>
```
