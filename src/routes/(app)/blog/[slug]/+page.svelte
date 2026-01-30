<script lang="ts">
	let { data } = $props();
</script>

<svelte:head>
	<title>{data.meta.title} - [Your Name]</title>
</svelte:head>

<article class="max-w-3xl mx-auto py-8">
	<header class="mb-10 text-center">
		<div class="text-slate-500 dark:text-slate-400 font-mono mb-2">
			{new Date(data.meta.date).toLocaleDateString(undefined, {
				year: 'numeric',
				month: 'long',
				day: 'numeric'
			})}
		</div>
		<h1
			class="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-5xl font-serif mb-4"
		>
			{data.meta.title}
		</h1>
		<div class="flex justify-center gap-2">
			{#each data.meta.tags as tag (tag)}
				<span
					class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-slate-100 text-slate-800 dark:bg-slate-700 dark:text-slate-200"
				>
					#{tag}
				</span>
			{/each}
		</div>
	</header>

	<div class="prose prose-slate dark:prose-invert max-w-none mx-auto">
		<data.content />
	</div>
</article>
