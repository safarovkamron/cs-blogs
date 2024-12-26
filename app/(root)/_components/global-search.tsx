'use client'

import SearchBlogsCard from '@/components/cards/search-blogs-card'
import { Badge } from '@/components/ui/badge'
import {
	Drawer,
	DrawerClose,
	DrawerContent,
	DrawerTitle,
	DrawerTrigger,
} from '@/components/ui/drawer'
import { Input } from '@/components/ui/input'
import { Separator } from '@/components/ui/separator'
import { PopularCategories, PopularTags } from '@/constants/index'
import { getSearchBlogs } from '@/service/blog.service'
import { IBlog } from '@/types'
import { debounce } from 'lodash'
import { Loader2Icon, Minus, Search } from 'lucide-react'
import Link from 'next/link'
import { ChangeEvent, useState } from 'react'

function GlobalSearch() {
	const [isLoading, setIsLoading] = useState(false)
	const [blogs, setBlogs] = useState<IBlog[]>([])

	const handleSearch = async (e: ChangeEvent<HTMLInputElement>) => {
		const text = e.target.value.toLowerCase()

		if (text.length >= 3 && text) {
			setIsLoading(true)
			const data = await getSearchBlogs(text)
			setBlogs(data)
			setIsLoading(false)
		} else {
			setIsLoading(false)
			setBlogs([])
		}
	}

	const debounceSearch = debounce(handleSearch, 500)

	return (
		<Drawer>
			<DrawerTrigger>
				<div className='hover:bg-blue-400/20 cursor-pointer rounded-sm transition-colors flex items-center gap-1 px-3 py-2'>
					<span className='hidden md:flex'>Search</span>
					<Search className='w-4 h-4' />
				</div>
			</DrawerTrigger>
			<DrawerContent>
				<div className='container max-w-6xl mx-auto py-12'>
					<DrawerTitle>Search</DrawerTitle>
					<Input
						className='bg-secondary mt-2'
						placeholder='Type to search blog...'
						onChange={debounceSearch}
					/>

					{isLoading && <Loader2Icon className='animate-spin' />}

					<div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 mt-4'>
						{blogs &&
							blogs.map(blog => <SearchBlogsCard {...blog} key={blog.slug} />)}
					</div>

					{blogs && <Separator className='my-2' />}

					<div className='flex flex-col space-y-2 mt-4'>
						<div className='flex items-center gap-2'>
							<p className='font-creteRound text-2xl'>
								See posts by categories
							</p>
							<Minus />
							<Link
								href={'/categories'}
								className='text-blue-500 underline hover:opacity-90'
							>
								<DrawerClose className='underline hover:opacity-90'>
									See all
								</DrawerClose>
							</Link>
						</div>

						<div className='flex flex-wrap gap-2'>
							{PopularCategories.map(item => (
								<Link href={`/categories/${item.slug}`} key={item.slug}>
									<DrawerClose>
										<Badge variant={'secondary'} role='button'>
											{item.name}
										</Badge>
									</DrawerClose>
								</Link>
							))}
						</div>
					</div>

					<div className='flex flex-col space-y-2 mt-4'>
						<div className='flex items-center gap-2'>
							<p className='font-creteRound text-2xl'>See posts by tags</p>
							<Minus />
							<Link
								href={'/tags'}
								className='text-blue-500 underline hover:opacity-90'
							>
								<DrawerClose className='underline hover:opacity-90'>
									See all
								</DrawerClose>
							</Link>
						</div>

						<div className='flex flex-wrap gap-2'>
							{PopularTags.map(item => (
								<Link href={`/tags/${item.slug}`} key={item.slug}>
									<DrawerClose>
										<Badge variant={'secondary'} role='button'>
											{item.name}
										</Badge>
									</DrawerClose>
								</Link>
							))}
						</div>
					</div>
				</div>
			</DrawerContent>
		</Drawer>
	)
}

export default GlobalSearch
