<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
	import 'bootswatch/dist/zephyr/bootstrap.min.css';
	import '@fontsource/roboto';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<div class="container mt-5">
	{@render children()}
</div>

<style>
	:global(body) {
		font-family: 'Roboto' !important;
	}
</style>
