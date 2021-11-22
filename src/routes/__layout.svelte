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

<header class="main-header">
	<h1>Fake Store</h1>
</header>
<main>
	<slot />
</main>
<footer class="main-footer">
	{new Date().getFullYear()} &copy; Fake Store
</footer>

<style>
.main-header {
	background-color: #eaeaea;
	text-align: center;
}

.main-footer {
	background-color: #eaeaea;
	text-align: center;
}
</style>
