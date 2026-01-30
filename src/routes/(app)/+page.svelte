<script lang="ts">
	import { base } from '$app/paths';
	// Page specific logic if any
</script>

<div class="space-y-12">
	<!-- Hero Section -->
	<div class="flex flex-col md:flex-row gap-8 items-start">
		<div class="flex-shrink-0">
			<!-- Profile Image Placeholder -->
			<div
				class="w-48 h-48 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden shadow-md mx-auto md:mx-0"
			>
				<div
					class="w-full h-full flex items-center justify-center text-slate-400 dark:text-slate-500"
				>
					<span class="text-sm">Photo</span>
				</div>
				<!-- <img src="/path/to/profile.jpg" alt="Profile" class="w-full h-full object-cover" /> -->
			</div>
		</div>
		<div class="flex-grow space-y-4">
			<div>
				<h1
					class="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-5xl font-serif"
				>
					[Your Name]
				</h1>
				<p class="text-xl text-slate-600 dark:text-slate-400 font-medium">
					[Your Title / Position]
				</p>
				<p class="text-lg text-slate-500 dark:text-slate-500">[Your Institution]</p>
			</div>

			<div class="prose text-slate-600 dark:text-slate-300">
				<!-- Biography content goes here -->
				<p>[Short biography about your background, research interests, and current role.]</p>
				<p>[Additional details about your education or specific focus areas.]</p>
			</div>

			<div class="flex space-x-4 pt-2">
				<a
					href="mailto:your-email@example.com"
					class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-slate-800 hover:bg-slate-700 dark:bg-slate-700 dark:hover:bg-slate-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-500"
				>
					Contact Me
				</a>
			</div>
		</div>
	</div>

	<!-- News Section -->
	<section>
		<h2
			class="text-2xl font-bold text-slate-900 dark:text-white mb-6 pb-2 border-b border-slate-200 dark:border-slate-700"
		>
			News
		</h2>
		<div class="space-y-6">
			<!-- News Item Template -->
			<article class="flex flex-col sm:flex-row gap-2 sm:gap-6">
				<div class="w-32 flex-shrink-0 text-sm text-slate-500 dark:text-slate-400 font-mono pt-1">
					[Date]
				</div>
				<div>
					<p class="text-slate-800 dark:text-slate-200">
						[News item description with optional <a
							href="{base}/"
							class="text-blue-600 dark:text-blue-400 hover:underline">links</a
						>.]
					</p>
				</div>
			</article>
		</div>
	</section>
</div>
