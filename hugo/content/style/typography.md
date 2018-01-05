+++
title = "Typography"
date = 2017-10-09T13:02:58+02:00
description = "Typographic information and kitchen sink for Fannypack"
modifiers = ["theme--fp", "layout--fixed-header", "layout--sidebar"]
[menu.docs]
parent = "Style"
+++

## Font

The font used is **Source Sans Pro**, a sans-serif typeface intended to work well in user interfaces. It's available for free [from the Google Fonts library](https://fonts.google.com/specimen/Source+Sans+Pro).

## Kitchen sink

<div class="fp-example fp-example--kitchen-sink">
	<p><small class="text--muted">h1</small></p>
	<h1>h1 heading</h1>
	<p><small class="text--muted">h2</small></p>
	<h2>h2 heading</h2>
	<p><small class="text--muted">h3</small></p>
	<h3>h3 heading</h3>
	<p><small class="text--muted">h4</small></p>
	<h4>h4 heading</h4>
	<p><small class="text--muted">h5</small></p>
	<h5>h5 heading</h5>
	<p><small class="text--muted">h6</small></p>
	<h6>h6 heading</h6>

	<p><small class="text--muted">Unordered list</small></p>
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

	<p><small class="text--muted">Ordered list</small></p>
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

	<p><small class="text--muted">Nested lists</small></p>
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

	<p><small class="text--muted">Large body text</small></p>

	<p class="lead">Paragraph text with <strong>lorem ipsum</strong> dolor sit amet, m<sup>2</sup> consectetur <a href="#">adipisicing</a> elit<sub>8</sub>. Aliquid <em>accusamus</em> quod cum dicta numquam, <small>similique</small> iure quibusdam <mark>repudiandae</mark> deleniti <code>asperiores</code>.</p>

	<p><small class="text--muted">Default body text</small></p>

	<p>Paragraph text with <strong>lorem ipsum</strong> dolor sit amet, m<sup>2</sup> consectetur <a href="#">adipisicing</a> elit<sub>8</sub>. Aliquid <em>accusamus</em> quod cum dicta numquam, <small>similique</small> iure quibusdam <mark>repudiandae</mark> deleniti <code>asperiores</code>.</p>

	<p><small class="text--muted">Blockquote</small></p>

	<blockquote cite="https://www.goodreads.com/quotes/tag/typography">
		<p>Type is a beautiful group of letters, not a group of beautiful letters.</p>
	</blockquote>

<pre>Some
	text in pre

</pre>

<pre><code>.kitchen-sink {
	display: block;
}</code></pre>

<code>&lt;code&gt;</code>

	<p><small class="text--muted">Horizontal rule</small></p>
	<hr/>
</div>

## Contextual helper classes

If you want to style certain parts that are not a specific part of a module, we have helper classes available to make your development life easier.

<div class="fp-example">
	<p class="text--success">Text in <strong>success</strong> color. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, excepturi.</p>
	<p class="text--warning">Text in <strong>warning</strong> color. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, excepturi.</p>
	<p class="text--error">Text in <strong>error</strong> color. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, excepturi.</p>
	<p class="text--muted">Text in <strong>muted</strong> color. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, excepturi.</p>
	<p class="text--large">Larger body text Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda officia excepturi itaque temporibus vitae consectetur consequatur, ipsum inventore facere? Fugit!</p>
	<p class="text--centered">Centered text Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse, maiores?</p>
	<p class="text--right">Right aligned text. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est, odit!</p>
</div>

```html
<p class="text--success">...</p>
<p class="text--warning">...</p>
<p class="text--error">...</p>
<p class="text--muted">...</p>
<p class="text--large">...</p>
<p class="text--centered">...</p>
<p class="text--right">...</p>
```
