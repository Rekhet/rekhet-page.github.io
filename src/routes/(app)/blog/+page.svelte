<script lang="ts">
	import { base } from '$app/paths';
	let { data } = $props();
</script>

<svelte:head>
	<title>Blog - [Your Name]</title>
</svelte:head>

<div class="max-w-3xl mx-auto space-y-12">
	<h1
		class="text-3xl font-bold font-serif text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-700 pb-4"
	>
		Blog & Research Notes
	</h1>

	<div class="space-y-10">
		{#each data.posts as post (post.slug)}
			<article class="flex flex-col gap-2 group">
				<div class="text-sm text-slate-500 dark:text-slate-400 font-mono">
					{new Date(post.date).toLocaleDateString(undefined, {
						year: 'numeric',
						month: 'long',
						day: 'numeric'
					})}
				</div>
				<h2
					class="text-2xl font-bold text-slate-900 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors"
				>
					<a href="{base}/blog/{post.slug}/">{post.title}</a>
				</h2>
				<p class="text-slate-600 dark:text-slate-300">
					{post.description}
				</p>
				<div class="flex gap-2 mt-1">
					{#each post.tags as tag (tag)}
						<span
							class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-100 text-slate-800 dark:bg-slate-700 dark:text-slate-200"
						>
							#{tag}
						</span>
					{/each}
				</div>
			</article>
		{/each}
	</div>
</div>
