import { getArchiveBlogs } from '@/service/blog.service'
import { format } from 'date-fns'
import { Archive, Dot, Home } from 'lucide-react'
import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
	title: 'Archived Blogs',
	description:
		'Access archived programming blogs and tutorials on CS-Blog. Explore older articles, timeless coding tips, and evergreen insights in software development, web technologies, and artificial intelligence.',
	keywords:
		'Archived blogs, programming archives, timeless coding tips, evergreen programming articles, software development archives, web development history, AI insights, JavaScript tutorials, React archives, tech blog history',
	robots: 'index, follow',
	openGraph: {
		title: 'Archived Blogs on CS-Blog',
		description:
			'Discover archived programming blogs and tutorials on CS-Blog. Access timeless coding tips and explore older articles on software development, web technologies, and artificial intelligence.',
		type: 'website',
		url: 'https://your-domain.com/archives',
		images: '/seo/archive.jpg',
	},
}

async function ArchivePage() {
	const blogs = await getArchiveBlogs()
	return (
		<div className='max-w-6xl mx-auto'>
			<div className='relative flex items-center justify-center min-h-[40vh] flex-col'>
				<p className='text-lg text-muted-foreground '>Showing posts from</p>
				<h2 className='section-title text-center text-4xl font-creteRound mt-2'>
					Archive
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
					<Link
						href={'/blogs'}
						className='opacity-90 hover:underline hover:opacity-100'
					>
						Blogs
					</Link>
					<Dot />
					<p className='text-muted-foreground'>Archive</p>
				</div>
			</div>

			{blogs.map(blog => (
				<>
					<div className='flex flex-col space-y-3 mt-8' key={blog.year}>
						<div className='relative'>
							<span className='text-5xl font-creteRound relative z-20'>
								{blog.year}
							</span>
							<Archive className='absolute w-16 h-16 -translate-x-4 -translate-y-12 opacity-10' />
						</div>
					</div>

					<div className='flex flex-col space-y-2 mt-8'>
						{blog.blogs.map(item => (
							<div key={item.slug} className='flex flex-col space-y-2 mt-8'>
								<div className='flex gap-2 text-lg text-muted-foreground'>
									<p>{format(new Date(item.createdAt), 'dd MMM')}</p>
									<Dot className='text-white size-8' />
									<Link
										href={`/blogs/${item.slug}`}
										className='hover:text-white hover:underline cursor-pointer'
									>
										{item.title}
									</Link>
								</div>
							</div>
						))}
					</div>
				</>
			))}
		</div>
	)
}

export default ArchivePage
