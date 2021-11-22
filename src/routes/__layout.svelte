<script>
	import '../app.css';
</script>

<svelte:head>
    <!-- CSS Reset -->
    <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.css"
    />
    <!-- Milligram CSS -->
    <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/milligram/1.4.1/milligram.css"
    />
</svelte:head>

<header>
	<h1 style="text-align: center;">Fake Store</h1>
</header>
<main>
	<slot />
</main>
<footer style="text-align: center;">
	{new Date().getFullYear()} &copy; Fake Store
</footer>

<style>
</style>
