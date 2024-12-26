import { Badge } from '@/components/ui/badge'
import { cn, getFormatDate, getReadingTime } from '@/lib/utils'
import { IBlog } from '@/types'
import {
	Archive,
	CalendarDays,
	Clock,
	Dot,
	LibraryBig,
	Minus,
	Tags,
} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

interface IProps extends IBlog {
	isVertical?: boolean
}

function BlogCard(blog: IProps) {
	return (
		<div
			className={cn(
				'grid gap-4 group',
				blog.isVertical ? 'grid-cols-1' : 'grid-cols-1 md:grid-cols-2 '
			)}
		>
			<Link href={`/blogs/${blog.slug}`}>
				<div className='relative bg-secondary rounded-md'>
					<Image
						src={blog.image.url}
						alt={blog.title}
						width={650}
						height={200}
						className='px-2 md:px-7 rounded-md group-hover:-translate-y-7 -translate-y-6 transition-all object-cover grayscale group-hover:grayscale-0 max-md:-translate-y-2 max-md:group-hover:-translate-y-3 max-h-[260px]'
					/>
				</div>
			</Link>

			<div className='flex flex-col space-y-4 justify-between'>
				<Link href={`/blogs/${blog.slug}`}>
					<div className='flex items-center gap-4'>
						<div className='flex items-center gap-2'>
							<CalendarDays className='w-5 h-5' />
							<p>{getFormatDate(blog.createdAt)}</p>
						</div>
						<Minus />
						<div className='flex items-center gap-2'>
							<Clock className='w-5 h-5' />
							<p>{getReadingTime(blog.content.text)} min read</p>
						</div>
					</div>

					{/* Title */}
					<h2 className='text-3xl max-md:text-2xl font-creteRound group-hover:text-blue-500 transition-colors line-clamp-2'>
						{blog.title}
					</h2>
					<p className='text-muted-foreground line-clamp-3'>
						{blog.description}
					</p>
				</Link>
				{/* Author */}
				<div className='flex items-center gap-4'>
					<Link href={`/authors/${blog.author.id}`}>
						<div className='flex items-center gap-2 hover:text-blue-600'>
							<Image
								src={blog.author.image.url}
								alt='author'
								width={30}
								height={30}
								className='object-cover rounded-sm'
							/>
							<p>by {blog.author.name}</p>
						</div>
					</Link>

					<Dot />

					<div className='flex items-center gap-2'>
						<Link href={`/categories/${blog.category.slug}`}>
							<Badge variant={'outline'} role='button'>
								<LibraryBig className='size-3 mr-2' />
								{blog.category.title}
							</Badge>
						</Link>

						<Link href={`/tags/${blog.tag.slug}`}>
							<Badge variant={'secondary'} role='button'>
								<Tags className='size-3 mr-2' />
								{blog.tag.title}
							</Badge>
						</Link>

						{blog.archive && (
							<Link href={`/blogs/archive/`}>
								<Badge variant={'secondary'} role='button'>
									<Archive className='size-3 mr-2' />
									Archived
								</Badge>
							</Link>
						)}
					</div>
				</div>
			</div>
		</div>
	)
}

export default BlogCard
