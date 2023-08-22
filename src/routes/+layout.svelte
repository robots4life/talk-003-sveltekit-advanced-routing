<script>
	import '../app.css';
	import Nav from '$components/Nav.svelte';
	import PageTransition from '$components/PageTransition.svelte';
	export let data;
</script>

<div>
	<Nav />
	<PageTransition key={data.url} duration={300}>
		<slot />
	</PageTransition>
</div>
