<script>
	import Nav from '../components/Nav.svelte';

	export let segment;
</script>

<style>
	main {
		position: relative;
		max-width: 56em;
		background-color: white;
		margin: 0 auto;
		box-sizing: border-box;
		margin-top: 60px;
	}
</style>

<Nav {segment}/>

<main>
	<slot></slot>
</main>
