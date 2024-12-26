import CategoriesTagsCard from '@/components/cards/categories-tags'
import { getAllCategories } from '@/service/categories.service'
import { Dot, Home } from 'lucide-react'
import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
	title: 'Categories',
	description:
		'Explore a wide range of programming tutorials and resources on CS-Blog. Stay ahead with expert insights on software development, web technologies, JavaScript, React, Node.js, AI, and more.',
	keywords:
		'programming tutorials, software development resources, JavaScript guides, React tutorials, Node.js resources, AI programming, web development, full-stack development, coding best practices, learn to code, programming blog, CS-Blog',
	robots: 'index, follow',
	openGraph: {
		title: 'Categories',
		description:
			'Discover in-depth programming tutorials and resources on CS-Blog. Enhance your coding skills with articles on software development, web technologies, JavaScript, React, Node.js, AI, and much more.',
		type: 'website',
		url: 'https://your-domain.com/category/programming-tutorials',
		images: '/seo/categories.jpg',
	},
}

async function CategoriesPage() {
	const categories = await getAllCategories()
	return (
		<div className='max-w-6xl mx-auto'>
			<div className='relative min-h-[40vh] flex items-center justify-center flex-col'>
				<h2 className='text-center text-4xl section-title font-creteRound'>
					<span>Categories</span>
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
				{categories.map(category => (
					<CategoriesTagsCard
						key={category.slug}
						{...category}
						type='categories'
					/>
				))}
			</div>
		</div>
	)
}

export default CategoriesPage
