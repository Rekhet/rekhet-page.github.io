<script lang="ts">
	interface Talk {
		title: string;
		event: string;
		location: string;
		date: string; // ISO date string YYYY-MM-DD
		type: 'Talk' | 'Panel' | 'Poster';
		slides?: string;
	}

	interface Travel {
		event: string;
		location: string;
		startDate: string;
		endDate: string;
	}

	const upcomingTalks: Talk[] = [
		{
			title: 'The Future of Academic Websites',
			event: 'WebConf 2026',
			location: 'San Francisco, CA',
			date: '2026-05-15',
			type: 'Talk',
			slides: '#'
		}
	];

	const pastTalks: Talk[] = [
		{
			title: 'SvelteKit for Researchers',
			event: 'University Department Seminar',
			location: 'Boston, MA',
			date: '2025-11-10',
			type: 'Talk'
		}
	];

	const travelSchedule: Travel[] = [
		{
			event: 'WebConf 2026',
			location: 'San Francisco, CA',
			startDate: '2026-05-13',
			endDate: '2026-05-17'
		},
		{
			event: 'ICML 2026',
			location: 'Vienna, Austria',
			startDate: '2026-07-20',
			endDate: '2026-07-28'
		}
	];
</script>

<svelte:head>
	<title>Talks & Travel - [Your Name]</title>
</svelte:head>

<div class="space-y-12">
	<h1
		class="text-3xl font-bold font-serif text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-700 pb-4"
	>
		Talks & Travel
	</h1>

	<!-- Travel Schedule -->
	<section class="space-y-6">
		<h2 class="text-2xl font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="h-6 w-6 text-slate-500"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
				/>
			</svg>
			Where to Find Me
		</h2>
		<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
			{#each travelSchedule as trip (trip.event + trip.startDate)}
				<div
					class="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg p-4 shadow-sm"
				>
					<div class="font-bold text-slate-900 dark:text-slate-100">{trip.event}</div>
					<div class="text-slate-600 dark:text-slate-400 text-sm flex items-center gap-1 mt-1">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-4 w-4"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
							/>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
							/>
						</svg>
						{trip.location}
					</div>
					<div class="text-slate-500 dark:text-slate-500 text-xs mt-2 font-mono">
						{new Date(trip.startDate).toLocaleDateString(undefined, {
							month: 'short',
							day: 'numeric'
						})}
						-
						{new Date(trip.endDate).toLocaleDateString(undefined, {
							month: 'short',
							day: 'numeric',
							year: 'numeric'
						})}
					</div>
				</div>
			{/each}
		</div>
	</section>

	<!-- Upcoming Talks -->
	<section class="space-y-6">
		<h2 class="text-2xl font-bold text-slate-900 dark:text-slate-100">Upcoming Talks</h2>
		<div class="space-y-4">
			{#each upcomingTalks as talk (talk.title + talk.date)}
				<div
					class="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-4 border-l-2 border-blue-500 pl-4 py-1"
				>
					<div class="w-32 flex-shrink-0 text-sm text-slate-500 dark:text-slate-400 font-mono">
						{new Date(talk.date).toLocaleDateString(undefined, {
							month: 'short',
							day: 'numeric',
							year: 'numeric'
						})}
					</div>
					<div>
						<h3 class="font-bold text-lg text-slate-900 dark:text-slate-100">{talk.title}</h3>
						<p class="text-slate-700 dark:text-slate-300">
							{talk.type} at <span class="font-medium">{talk.event}</span>, {talk.location}
						</p>
					</div>
				</div>
			{/each}
			{#if upcomingTalks.length === 0}
				<p class="text-slate-500">No upcoming talks scheduled.</p>
			{/if}
		</div>
	</section>

	<!-- Past Talks -->
	<section class="space-y-6 pt-6 border-t border-slate-200 dark:border-slate-700">
		<h2 class="text-2xl font-bold text-slate-900 dark:text-slate-100">Selected Past Talks</h2>
		<div class="space-y-4">
			{#each pastTalks as talk (talk.title + talk.date)}
				<div
					class="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-4 border-l-2 border-slate-300 dark:border-slate-600 pl-4 py-1"
				>
					<div class="w-32 flex-shrink-0 text-sm text-slate-500 dark:text-slate-400 font-mono">
						{new Date(talk.date).toLocaleDateString(undefined, {
							month: 'short',
							day: 'numeric',
							year: 'numeric'
						})}
					</div>
					<div>
						<h3 class="font-medium text-lg text-slate-900 dark:text-slate-100">{talk.title}</h3>
						<p class="text-slate-600 dark:text-slate-400">
							{talk.type} at {talk.event}, {talk.location}
						</p>
						{#if talk.slides}
							<a
								href={talk.slides}
								class="text-sm text-blue-600 dark:text-blue-400 hover:underline mt-1 inline-block"
								>[Slides]</a
							>
						{/if}
					</div>
				</div>
			{/each}
		</div>
	</section>
</div>
