<script>
</script>

<svelte:head>
	<title>404 Not Found</title>
</svelte:head>

<div class="nginx-error">
	<h1>404 Not Found</h1>
	<hr />
	<p>nginx/1.18.0 (Ubuntu)</p>
</div>

<style>
	/* Mimic default Nginx error page styles strictly */
	:global(body) {
		margin: 0;
		padding: 0;
		background-color: #fff !important;
		color: #000 !important;
		font-family: serif; /* Nginx defaults often use Times New Roman */
	}

	.nginx-error {
		width: 100%;
		max-width: 100%;
		padding: 0;
		margin: 0;
		text-align: center;
		margin-top: 100px;
	}

	h1 {
		font-size: 2em; /* Browser default for h1 */
		margin: 0.67em 0;
		font-weight: bold;
		font-family: serif;
	}

	hr {
		margin-top: 20px;
		margin-bottom: 20px;
		border: 0;
		border-top: 1px solid #000;
		width: 50%;
		margin-left: auto;
		margin-right: auto;
	}

	p {
		margin: 1em 0;
	}
</style>
