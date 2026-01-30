<script lang="ts">
	interface Publication {
		title: string;
		authors: string[];
		venue: string;
		year: number;
		pdf?: string;
		code?: string;
		abstract?: string;
		tags: string[]; // Added tags for filtering
		bibtex?: string; // Added BibTeX
	}

	// Add your publications here
	const allPublications: Publication[] = [
		{
			title: 'Paper Title',
			authors: ['Your Name', 'Co-author A'],
			venue: 'Conference/Journal Name',
			year: 2024,
			pdf: '#',
			code: '#',
			tags: ['AI', 'HCI'],
			bibtex: `@inproceedings{paper2024,
  title={Paper Title},
  author={Name, Your and A, Co-author},
  booktitle={Conference Name},
  year={2024}
}`
		},
		{
			title: 'Older Paper',
			authors: ['Your Name', 'Advisor B'],
			venue: 'Workshop Name',
			year: 2023,
			pdf: '#',
			tags: ['Systems'],
			bibtex: `@article{paper2023,
  title={Older Paper},
  author={Name, Your},
  journal={Journal Name},
  year={2023}
}`
		}
	];

	// State for filters
	let selectedTag = $state<string | null>(null);
	let selectedYear = $state<number | null>(null);
	let expandedBibtex = $state<string | null>(null); // Stores title of pub with expanded bibtex

	// Derived unique tags and years for filter dropdowns
	const uniqueTags = Array.from(new Set(allPublications.flatMap((p) => p.tags))).sort();
	const uniqueYears = Array.from(new Set(allPublications.map((p) => p.year))).sort((a, b) => b - a);

	// Derived filtered publications
	let filteredPublications = $derived(
		allPublications.filter((p) => {
			const matchTag = selectedTag ? p.tags.includes(selectedTag) : true;
			const matchYear = selectedYear ? p.year === selectedYear : true;
			return matchTag && matchYear;
		})
	);

	function toggleBibtex(title: string) {
		if (expandedBibtex === title) {
			expandedBibtex = null;
		} else {
			expandedBibtex = title;
		}
	}

	function copyBibtex(bibtex: string) {
		navigator.clipboard.writeText(bibtex);
		// Optional: Add a toast notification here
		alert('BibTeX copied to clipboard!');
	}
</script>

<svelte:head>
	<title>Publications - [Your Name]</title>
</svelte:head>

<div class="space-y-8">
	<div
		class="flex flex-col sm:flex-row sm:items-center justify-between border-b border-slate-200 dark:border-slate-700 pb-4 gap-4"
	>
		<h1 class="text-3xl font-bold font-serif text-slate-900 dark:text-white">Publications</h1>

		<!-- Filters -->
		<div class="flex flex-wrap gap-2">
			<select
				bind:value={selectedYear}
				class="bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-200 text-sm rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-slate-500 p-2"
			>
				<option value={null}>All Years</option>
				{#each uniqueYears as year (year)}
					<option value={year}>{year}</option>
				{/each}
			</select>

			<select
				bind:value={selectedTag}
				class="bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-200 text-sm rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-slate-500 p-2"
			>
				<option value={null}>All Topics</option>
				{#each uniqueTags as tag (tag)}
					<option value={tag}>{tag}</option>
				{/each}
			</select>

			{#if selectedYear || selectedTag}
				<button
					onclick={() => {
						selectedYear = null;
						selectedTag = null;
					}}
					class="text-sm text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200 underline"
				>
					Clear Filters
				</button>
			{/if}
		</div>
	</div>

	<div class="space-y-8">
		{#if filteredPublications.length === 0}
			<p class="text-slate-500 italic">No publications match the selected filters.</p>
		{/if}

		{#each filteredPublications as pub (pub.title)}
			<article class="flex flex-col gap-1 group">
				<h3 class="text-lg font-bold text-slate-900 dark:text-slate-100">
					{pub.title}
				</h3>
				<p class="text-slate-700 dark:text-slate-300">
					{#each pub.authors as author, i (author)}
						<span
							class={author === 'Your Name' ? 'font-semibold text-slate-900 dark:text-white' : ''}
						>
							{author}
						</span>{i < pub.authors.length - 1 ? ', ' : ''}
					{/each}
				</p>
				<p class="text-slate-600 dark:text-slate-400 italic">
					{pub.venue}, {pub.year}
				</p>

				<!-- Tags -->

				<div class="flex gap-2 mt-1 mb-1">
					{#each pub.tags as tag (tag)}
						<span
							class="text-xs bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 px-2 py-0.5 rounded-full"
						>
							{tag}
						</span>
					{/each}
				</div>

				<!-- Links -->
				<div class="flex flex-wrap gap-3 text-sm font-medium mt-1">
					{#if pub.pdf}
						<a
							href={pub.pdf}
							class="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 hover:underline"
							>[PDF]</a
						>
					{/if}
					{#if pub.code}
						<a
							href={pub.code}
							class="text-slate-600 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 hover:underline"
							>[Code]</a
						>
					{/if}
					{#if pub.bibtex}
						<button
							onclick={() => toggleBibtex(pub.title)}
							class="text-slate-600 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 hover:underline text-left"
						>
							[BibTeX]
						</button>
					{/if}
				</div>

				<!-- Expanded BibTeX -->
				{#if expandedBibtex === pub.title && pub.bibtex}
					<div
						class="mt-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded p-3 relative text-sm font-mono text-slate-800 dark:text-slate-200 overflow-x-auto"
					>
						<pre>{pub.bibtex}</pre>
						<button
							onclick={() => copyBibtex(pub.bibtex!)}
							class="absolute top-2 right-2 bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 px-2 py-1 text-xs rounded shadow-sm hover:bg-slate-50 dark:hover:bg-slate-600 transition-colors"
						>
							Copy
						</button>
					</div>
				{/if}
			</article>
		{/each}
	</div>
</div>
