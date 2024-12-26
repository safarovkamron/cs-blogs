import { IBlog } from '@/types'
import { format } from 'date-fns'
import { CalendarDays } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { DrawerClose } from '../ui/drawer'

function SearchBlogsCard(blog: IBlog) {
	return (
		<Link href={`/blogs/${blog.slug}`}>
			<DrawerClose className='flex flex-col space-y-2 text-start'>
				<Image
					src={blog.image.url}
					width={200}
					height={200}
					alt={blog.title}
					className='rounded-md shadow-xl dark:shadow-white/10'
				/>
				<div className='flex items-center gap-2'>
					<CalendarDays className='size-4' />
					<p className='text-sm'>
						{format(new Date(blog.createdAt), 'MMM dd, yyyy')}
					</p>
				</div>
				<h1 className='font-creteRound'>{blog.title}</h1>
			</DrawerClose>
		</Link>
	)
}

export default SearchBlogsCard
