<h1 class="pt-20 font-bold">Using URL data</h1>

<a
	class="block"
	target="_blank"
	rel="noreferrer"
	href="https://kit.svelte.dev/docs/load#using-url-data"
	>https://kit.svelte.dev/docs/load#using-url-data</a
>

<p class="pt-12">Often the load function depends on the URL in one way or another.</p>
<p>For this, the load function provides you with url, route and params.</p>

<ol class="leading-[1.7] pt-4">
	<li>
		1. URL - An instance of <a
			target="_blank"
			rel="noreferrer"
			href="https://developer.mozilla.org/en-US/docs/Web/API/URL">URL.</a
		>
	</li>
	<li>2. ROUTE - Contains the name of the current route directory.</li>
	<li>3. PARAMS - params is derived from url.pathname and route.id.</li>
</ol>

<pre class="pt-20">git checkout slide-3</pre>
