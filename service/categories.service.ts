import { IBlog, ICategoryAndTag } from '@/types'
import request, { gql } from 'graphql-request'
import { cache } from 'react'

const graphqAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT!

export const getBlogsByCategory = cache(async (slug: string) => {
	const query = gql`
		query MyQuery($slug: String!) {
			category(where: { slug: $slug }) {
				blogs(where: { archive: false }) {
					createdAt
					description
					title
					slug
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
					archive
				}
				title
			}
		}
	`

	const { category } = await request<{
		category: { blogs: IBlog[]; title: string }
	}>(graphqAPI, query, {
		slug,
	})

	return category
})

export const getAllCategories = async () => {
	const query = gql`
		query MyQuery {
			categories {
				title
				slug
				blogs(where: { archive: false }) {
					id
				}
			}
		}
	`
	const { categories } = await request<{ categories: ICategoryAndTag[] }>(
		graphqAPI,
		query
	)

	return categories
}
