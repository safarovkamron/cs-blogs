import CategoriesTagsCard from '@/components/cards/categories-tags'
import { getAllTags } from '@/service/tags.service'
import { Dot, Home } from 'lucide-react'
import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
	title: 'Tags',
	description:
		'Browse all tags on CS-Blog to explore programming topics, tutorials, and resources. Find content related to JavaScript, React, AI, web development, and much more.',
	keywords:
		'tags, programming tags, coding topics, JavaScript tags, React tags, AI tags, web development tags, software development tags, learn to code, programming blog, CS-Blog',
	robots: 'index, follow',
	openGraph: {
		title: 'Tags',
		description:
			'Explore all programming tags on CS-Blog. Easily find content on various coding topics such as JavaScript, React, Node.js, AI, web development, and more.',
		type: 'website',
		url: 'https://your-domain.com/tags',
	},
}

async function TagsPage() {
	const tags = await getAllTags()
	return (
		<div className='max-w-6xl mx-auto'>
			<div className='relative min-h-[40vh] flex items-center justify-center flex-col'>
				<h2 className='text-center text-4xl section-title font-creteRound'>
					<span>Tags</span>
				</h2>

				<div className='flex gap-1 items-center mt-4'>
					<Home className='w-5 h-5' />
					<Link
						href={'/'}
						className='opacity-90 hover:underline hover:opacity-100'
					>
						Home
					</Link>
					<Dot />
					<p className='text-muted-foreground'>Categories</p>
				</div>
			</div>

			<div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-10 mt-20'>
				{tags.map(tag => (
					<CategoriesTagsCard key={tag.slug} {...tag} type='tags' />
				))}
			</div>
		</div>
	)
}

export default TagsPage
