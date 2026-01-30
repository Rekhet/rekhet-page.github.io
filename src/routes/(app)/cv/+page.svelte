<svelte:head>
	<title>CV - [Your Name]</title>
</svelte:head>

<div class="space-y-8">
	<h1
		class="text-3xl font-bold font-serif text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-700 pb-4"
	>
		Curriculum Vitae
	</h1>

	<div class="prose text-slate-700 dark:text-slate-300">
		<p>[Optional: Brief introductory text about your CV.]</p>
		<p>
			<!-- Link to your actual PDF CV file in the static folder -->
			<a
				href="/cv.pdf"
				class="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-slate-800 hover:bg-slate-700 dark:bg-slate-700 dark:hover:bg-slate-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-500"
			>
				<svg class="mr-2 -ml-1 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
					/>
				</svg>
				Download PDF
			</a>
		</p>

		<h2 class="text-2xl font-bold text-slate-900 dark:text-white mt-12">Education</h2>
		<ul class="list-none pl-0 space-y-4">
			<li>
				<strong>[Degree]</strong>, [University], [Year]
				<br /><span class="text-slate-600 dark:text-slate-400">Advisor: [Advisor Name]</span>
			</li>
		</ul>

		<h2 class="text-2xl font-bold text-slate-900 dark:text-white mt-8">Experience</h2>
		<ul class="list-none pl-0 space-y-4">
			<li>
				<strong>[Role]</strong>, [Institution/Company], [Dates]
			</li>
		</ul>
	</div>
</div>
