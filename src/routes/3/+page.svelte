<h1 class="pt-20 font-bold">Using URL data</h1>

<a
	class="block text-3xl"
	target="_blank"
	rel="noreferrer"
	href="https://kit.svelte.dev/docs/load#using-url-data"
	>https://kit.svelte.dev/docs/load#using-url-data</a
>

<p class="pt-8">Often the load function depends on the URL in one way or another.</p>
<p>For this, the load function provides you with url, route and params.</p>

<ol class="text-2xl leading-[1.7] pt-4">
	<li>
		1. URL - An instance of URL, containing properties like the origin, hostname, pathname and
		searchParams.
	</li>
	<li>2. ROUTE - Contains the name of the current route directory, relative to src/routes.</li>
	<li>3. PARAMS - params is derived from url.pathname and route.id.</li>
</ol>

<pre class="pt-20 text-2xl">git checkout slide-3</pre>
