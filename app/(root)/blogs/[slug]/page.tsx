import { getFormatDate, getReadingTime } from '@/lib/utils'
import { getDetailedBlog } from '@/service/blog.service'
import { IParams } from '@/types'
import parse from 'html-react-parser'
import { ArrowUpRight, Calendar, Clock, Minus } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import ShareBtns from '../../_components/share-btns'

export async function generateMetadata({ params }: IParams) {
	const { slug } = params
	const blog = await getDetailedBlog(slug)

	return {
		title: blog.title,
		description: blog.description,
		openGraph: {
			images: blog.image.url,
		},
	}
}

async function SlugPage({ params }: IParams) {
	const { slug } = params
	const blog = await getDetailedBlog(slug)
	return (
		<div className='pt-[12vh] max-w-5xl mx-auto'>
			<h1 className='lg:text-5xl md:text-4xl text-3xl font-creteRound max-md:text-center'>
				{blog.title}
			</h1>

			<div className='flex items-center flex-wrap max-md:justify-center gap-4 mt-4'>
				<div className='flex items-center gap-2'>
					<Image
						src={blog.author.image.url}
						alt='author'
						width={30}
						height={30}
						className='object-cover rounded-sm'
					/>
					<p>by {blog.author.name}</p>
				</div>

				<Minus />
				<div className='flex items-center gap-2'>
					<Clock className='w-5 h-5' />
					<p>{getReadingTime(blog.content.text)} min read</p>
				</div>
				<Minus />

				<div className='flex items-center gap-2'>
					<Calendar className='w-5 h-5' />
					<p>{getFormatDate(blog.createdAt)}</p>
				</div>
			</div>

			<Image
				src={blog.image.url}
				alt='blog-image'
				width={1120}
				height={595}
				className='mt-4 rounded-md'
			/>

			<div className='flex md:gap-12 max-md:flex-col-reverse mt-12 relative'>
				<div className='flex flex-col space-y-3'>
					<div className='md:ml-4 sticky top-36'>
						<p className='text-lg uppercase text-muted-foreground '>Share</p>
						<ShareBtns />
					</div>
				</div>

				<div className='flex-1 prose dark:prose-invert'>
					{parse(blog.content.text)}
				</div>
			</div>

			<div className='flex mt-6 gap-6 items-center max-md:flex-col'>
				<Image
					src={blog.author.image.url}
					alt='author'
					width={155}
					height={155}
					className='rounded-md max-md:self-start'
				/>

				<div className='flex-1  flex flex-col space-y-4 '>
					<h2 className='text-3xl font-creteRound'>{blog.author.name}</h2>
					<p className='line-clamp-2 text-muted-foreground'>
						{blog.author.bio}
					</p>
					<Link
						href={`/authors/${blog.author.id}`}
						className='flex items-center gap-2 hover:text-blue-500 underline transition-colors'
					>
						<span>See all posts by this author.</span>
						<ArrowUpRight />
					</Link>
				</div>
			</div>
		</div>
	)
}

export default SlugPage
