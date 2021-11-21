<script>
	import { onMount } from 'svelte';
	import axios from 'axios';

	let products = [];

	onMount(async function () {
		try {
			const response = await axios.get('https://fakestoreapi.com/products');
			products = response.data;
		} catch (error) {
			console.error(error);
		}
	});
</script>

<div class="container">
	<ul>
		{#each products as product}
			<li>
				<div>{product.id}</div>
				<div>{product.title}</div>
				<div>{product.price}</div>
				<div>{product.description}</div>
				<div>{product.category}</div>
				<img alt="" src={product.image} />
			</li>
		{/each}
	</ul>
</div>
