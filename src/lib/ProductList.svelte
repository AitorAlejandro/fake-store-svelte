<script>
	import { onMount } from 'svelte';
	import { ProductService } from '../core/application';

	let products = [];

	onMount(async function () {
		products = await ProductService.GetProducts();
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
