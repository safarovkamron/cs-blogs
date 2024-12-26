import BlogCard from '@/components/cards/blog-card'
import { getDetailedAuthor } from '@/service/author.service'
import Image from 'next/image'
import { FC } from 'react'

interface IPageProps {
	params: {
		slug: string
	}
}

const AuthorsPage: FC<IPageProps> = async ({ params }) => {
	const author = await getDetailedAuthor(params.slug)
	return (
		<div className='max-w-6xl mx-auto pt-28'>
			<div className='flex mt-6 gap-6 items-center max-md:flex-col'>
				<Image
					src={author.image.url}
					alt={author.name}
					width={200}
					height={200}
					className='rounded-md max-md:self-start'
				/>

				<div className='flex-1  flex flex-col space-y-4 '>
					<p className='text-muted-foreground'>
						<span className='font-bold text-white'>
							{author.blogs.length < 10
								? `0${author.blogs.length}`
								: `${author.blogs.length}`}
						</span>{' '}
						Published posts
					</p>
					<h2 className='text-3xl font-creteRound'>{author.name}</h2>
					<p className='line-clamp-4 text-muted-foreground max-w-4xl'>
						{author.bio}
					</p>
				</div>
			</div>

			<h2 className='text-center text-3xl section-title font-creteRound my-12'>
				<span>Published posts</span>
			</h2>

			<div className='flex flex-col space-y-24 mt-20'>
				{author.blogs.map(blog => (
					<BlogCard key={blog.title} {...blog} />
				))}
			</div>
		</div>
	)
}

export default AuthorsPage
