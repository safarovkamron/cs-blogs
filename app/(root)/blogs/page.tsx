import BlogCard from '@/components/cards/blog-card'
import { getBlogs } from '@/service/blog.service'
import { Dot, Home } from 'lucide-react'
import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
	title: 'All Blogs',
	description:
		'Explore all programming blogs and tutorials on CS-Blog. Discover expert insights, best practices, and the latest trends in software development, web technologies, and artificial intelligence.',
	keywords:
		'CS-Blog, programming blogs, coding tutorials, software development, web development, AI blogs, JavaScript articles, React guides, full-stack programming, tech insights',
	robots: 'index, follow',
	openGraph: {
		title: 'All Blogs on CS-Blog',
		description:
			'Browse all blogs and tutorials on CS-Blog, your go-to platform for programming insights and the latest trends in software development, web technologies, and artificial intelligence.',
		type: 'website',
		url: 'https://your-domain.com/blogs',
		images: '/seo/blogs.jpg',
	},
}

async function BlogsPage() {
	const blogs = await getBlogs()
	return (
		<div className='max-w-6xl mx-auto'>
			<div className='relative min-h-[40vh] flex items-center justify-center flex-col'>
				<h2 className='text-center text-4xl section-title font-creteRound'>
					<span>Blogs</span>
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
					<p className='text-muted-foreground'>Blogs</p>
				</div>
			</div>

			<div className='grid grid-cols-2 max-md:grid-cols-1 gap-x-4 gap-y-24 mt-20'>
				{blogs.map(blog => (
					<BlogCard key={blog.title} {...blog} isVertical={true} />
				))}
			</div>
		</div>
	)
}

export default BlogsPage
