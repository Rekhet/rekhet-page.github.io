<script lang="ts">
	import '../../app.css';
	import ThemeToggle from '$lib/components/ThemeToggle.svelte';
	import { base } from '$app/paths';

	let { children } = $props();

	const navLinks = [
		{ name: 'Home', href: '/' },
		{ name: 'Research', href: '/research' },
		{ name: 'Publications', href: '/publications' },
		{ name: 'Talks', href: '/talks' },
		{ name: 'Teaching', href: '/teaching' },
		{ name: 'Blog', href: '/blog' },
		{ name: 'CV', href: '/cv' }
	];
</script>

<div
	class="flex min-h-screen flex-col bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 transition-colors duration-300"
>
	<header
		class="bg-white shadow-sm dark:bg-slate-800 dark:border-b dark:border-slate-700 transition-colors duration-300"
	>
		<div class="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
			<div class="flex items-center">
				<a
					href="{base}/"
					class="text-xl font-bold font-serif tracking-tight text-slate-900 dark:text-white"
					>[Your Name]</a
				>
			</div>
			<nav class="hidden md:flex items-center space-x-8">
				<ul class="flex space-x-8">
					{#each navLinks as link (link.name)}
						<li>
							<a
								href="{base}{link.href}"
								class="text-sm font-medium text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white transition-colors"
							>
								{link.name}
							</a>
						</li>
					{/each}
				</ul>
				<div class="pl-4 border-l border-slate-200 dark:border-slate-700">
					<ThemeToggle />
				</div>
			</nav>
			<!-- Mobile menu button placeholder (simple implementation) -->
			<div class="flex items-center gap-4 md:hidden">
				<ThemeToggle />
				<!-- Implement mobile menu if needed -->
				<span class="text-xs text-gray-500 dark:text-gray-400">[Menu]</span>
			</div>
		</div>
	</header>

	<main class="flex-grow">
		<div class="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
			{@render children()}
		</div>
	</main>

	<footer
		class="bg-white border-t border-slate-200 mt-auto dark:bg-slate-800 dark:border-slate-700 transition-colors duration-300"
	>
		<div class="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
			<p class="text-center text-sm text-slate-500 dark:text-slate-400">
				&copy; {new Date().getFullYear()} [Your Name]. All rights reserved.
			</p>
		</div>
	</footer>
</div>
