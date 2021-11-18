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

<header style={{ backgroundColor: '#eaeaea' }}>
	<h1>Fake Store Home</h1>
</header>
<main>
	<slot />
</main>
<footer style={{ backgroundColor: '#eaeaea' }}>
	<h2>Store Footer</h2>
</footer>

<style>
</style>
