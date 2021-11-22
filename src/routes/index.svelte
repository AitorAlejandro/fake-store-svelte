<script>
	import ProductList from '$lib/ProductList.svelte';
</script>

<svelte:head>
	<title>Fake Store Svelte - Aitor Alejandro</title>
</svelte:head>

<div>
	<h2 class="page-title">Welcome to Fake Store</h2>
	<ProductList />
</div>

<style>
.page-title {
	text-align: center;
}
</style>
