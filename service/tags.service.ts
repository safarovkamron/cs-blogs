import { IBlog, ICategoryAndTag } from '@/types'
import request, { gql } from 'graphql-request'
import { cache } from 'react'

const graphqAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT!

export const getBlogsByTag = cache(async (slug: string) => {
	const query = gql`
		query MyQuery($slug: String!) {
			tag(where: { slug: $slug }) {
				blogs(where: { archive: false }) {
					slug
					image {
						url
					}
					title
					description
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
					content {
						text
					}
					tag {
						slug
						title
					}
					createdAt
					archive
				}
				title
			}
		}
	`

	const { tag } = await request<{ tag: { blogs: IBlog[]; title: string } }>(
		graphqAPI,
		query,
		{ slug }
	)

	return tag
})

export const getAllTags = async () => {
	const query = gql`
		query MyQuery {
			tags {
				title
				slug
				blogs(where: { archive: false }) {
					id
				}
			}
		}
	`
	const { tags } = await request<{ tags: ICategoryAndTag[] }>(graphqAPI, query)

	return tags
}
