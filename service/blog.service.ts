import { IBlog } from '@/types'
import request, { gql } from 'graphql-request'
import { cache } from 'react'
import { IArchivedBlog } from './../types/index'

const graphqAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT!

export const getBlogs = async () => {
	const query = gql`
		query MyQuery {
			blogs(where: { archive: false }) {
				title

				slug
				description
				createdAt
				image {
					url
				}
				content {
					text
				}
				author {
					name
					image {
						url
					}
					id
				}
				category {
					title
					slug
				}
				tag {
					title
					slug
				}
			}
		}
	`

	const result = await request<{ blogs: IBlog[] }>(graphqAPI, query)

	return result.blogs
}

export const getHomeBlogs = async () => {
	const query = gql`
		query MyQuery {
			blogs(where: { archive: false }, first: 4) {
				title

				slug
				description
				createdAt
				image {
					url
				}
				content {
					text
				}
				author {
					name
					image {
						url
					}
					id
				}
				category {
					title
					slug
				}
				tag {
					title
					slug
				}
			}
		}
	`

	const result = await request<{ blogs: IBlog[] }>(graphqAPI, query)

	return result.blogs
}

export const getDetailedBlog = cache(async (slug: string) => {
	const query = gql`
		query MyQuery($slug: String!) {
			blog(where: { slug: $slug }) {
				author {
					name
					image {
						url
					}
					bio
					id
				}
				content {
					text
				}
				createdAt
				image {
					url
				}
				slug
				tag {
					title
					slug
				}
				category {
					title
					slug
				}
				title
			}
		}
	`

	const result = await request<{ blog: IBlog }>(graphqAPI, query, { slug })

	return result.blog
})

export const getSearchBlogs = async (title: string) => {
	const query = gql`
		query MyQuery($title: String!) {
			blogs(where: { title_contains: $title }) {
				title
				slug
				image {
					url
				}
				createdAt
			}
		}
	`

	const result = await request<{ blogs: IBlog[] }>(graphqAPI, query, { title })

	return result.blogs
}

export const getArchiveBlogs = async () => {
	const query = gql`
		query MyQuery {
			blogs(where: { archive: true }) {
				title
				slug
				createdAt
			}
		}
	`

	const { blogs } = await request<{ blogs: IBlog[] }>(graphqAPI, query)

	const filteredBlogs = blogs.reduce(
		(acc: { [year: string]: IArchivedBlog }, blog: IBlog) => {
			const year = blog.createdAt.substring(0, 4)
			if (!acc[year]) {
				acc[year] = { year, blogs: [] }
			}

			acc[year].blogs.push(blog)
			return acc
		},
		{}
	)

	const results: IArchivedBlog[] = Object.values(filteredBlogs)

	return results
}
