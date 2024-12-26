import { ICategoryAndTag } from '@/types'
import { Layers2, Tags } from 'lucide-react'
import Link from 'next/link'

interface IProps extends ICategoryAndTag {
	type: 'categories' | 'tags'
}

function CategoriesTagsCard(item: IProps) {
	return (
		<Link
			href={`/${item.type}/${item.slug}`}
			className='bg-secondary p-4 md:p-8 rounded-md shadow-xl flex items-center justify-center gap-2 hover:opacity-90 transition-colors flex-col'
		>
			{item.type === 'tags' ? <Tags /> : <Layers2 />}
			<h1 className='text-xl font-creteRound'>{item.title}</h1>
			<p>
				{item.blogs.length > 0 && item.blogs.length < 10
					? `0${item.blogs.length}`
					: item.blogs.length}{' '}
				blogs
			</p>
		</Link>
	)
}

export default CategoriesTagsCard
