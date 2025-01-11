import BlogCard from '@/components/cards/blog-card'
import { getBlogsByCategory } from '@/service/categories.service'
import { Dot, Home } from 'lucide-react'
import Link from 'next/link'

export async function generateMetadata({
	params,
}: {
	params: Promise<{ slug: string }>
}) {
	const categorySlug = (await params).slug
	const category = await getBlogsByCategory(categorySlug)

	return {
		title: category.name,
	}
}

async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
	const categorySlug = (await params).slug
	const category = await getBlogsByCategory(categorySlug)

	return (
		<div className='max-w-6xl mx-auto'>
			<div className='relative min-h-[40vh] flex items-center justify-center flex-col'>
				<h2 className='text-center text-4xl section-title font-creteRound'>
					<span>{category.name}</span>
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

			{category.blogs.length > 0 ? (
				<div className='grid grid-cols-2 max-md:grid-cols-1 gap-x-4 gap-y-24 mt-20'>
					{category.blogs.map(blog => (
						<BlogCard key={blog.title} {...blog} isVertical={true} />
					))}
				</div>
			) : (
				<h2 className='font-bold text-2xl text-center font-creteRound'>
					no current blogs.
				</h2>
			)}
		</div>
	)
}

export default CategoryPage
