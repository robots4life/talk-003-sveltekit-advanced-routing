<h1 class="pt-20 font-bold">How Do We Get Data Into The Page ?</h1>

<a class="block" target="_blank" rel="noreferrer" href="https://learn.svelte.dev/tutorial/page-data"
	>https://learn.svelte.dev/tutorial/page-data</a
>

<p class="pt-12">At its core, SvelteKit's job boils down to three things:</p>

<ol class="leading-[1.7] pt-4">
	<li>1. Routing — figure out which route matches an incoming request</li>
	<li>2. Loading — get the data needed by the route</li>
	<li>3. Rendering - generate some HTML (on the server) or update the DOM (in the browser)</li>
</ol>

<p class="pt-12">
	We've seen how routing and rendering work. Let's talk about the middle part — loading.
</p>

<p class="pt-12">
	Every page of your app can declare a load function in a +page.server.js file alongside the
	+page.svelte file.
</p>

<pre class="pt-20">git checkout slide-2</pre>
