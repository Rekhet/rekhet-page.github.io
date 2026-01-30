import type { PageLoad } from './$types';

export const load: PageLoad = async () => {
	const paths = import.meta.glob('/src/posts/*.md', { eager: true });

	const posts = Object.entries(paths)
		.map(([path, file]) => {
			const slug = path.split('/').pop()?.replace('.md', '');
			const metadata = (file as { metadata: Record<string, unknown> }).metadata;
			return {
				slug,
				...metadata
			} as { slug: string; title: string; date: string; description: string; tags: string[] };
		})
		.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

	return {
		posts
	};
};
