<h1 class="pt-20 font-bold">What Are Route Parameters Used For ?</h1>

<a class="block" target="_blank" rel="noreferrer" href="https://learn.svelte.dev/tutorial/page-data"
	>https://learn.svelte.dev/tutorial/page-data</a
>

<p class="pt-12">The route parameter is used to get the data needed by the route.</p>

<p class="pt-12">
	Let's assume the public API endpoint is "https://storycoder.dev/wp-json/wp/v2/posts/".
</p>

<a class="block" target="_blank" rel="noreferrer" href="https://storycoder.dev/wp-json/wp/v2/posts/"
	>https://storycoder.dev/wp-json/wp/v2/posts/</a
>

<p class="pt-12">
	To get the post with Id of "1" we supply this parameter in the request to the API.
</p>

<a
	class="block"
	target="_blank"
	rel="noreferrer"
	href="https://developer.wordpress.org/rest-api/reference/posts/#definition-example-request"
	>https://developer.wordpress.org/rest-api/reference/posts/#definition-example-request</a
>

<pre class="pt-12">{`https://storycoder.dev/wp-json/wp/v2/posts/<id>`}</pre>

<pre class="pt-3">{`https://storycoder.dev/wp-json/wp/v2/posts/1`}</pre>

<pre class="pt-12">git checkout slide-5</pre>
