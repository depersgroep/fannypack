+++
title = "Typography"
date = 2017-10-09T13:02:58+02:00
[menu.main]
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
