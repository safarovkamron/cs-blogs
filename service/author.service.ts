import { IAuthor } from '@/types'
import request, { gql } from 'graphql-request'
import { cache } from 'react'

const graphqAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT!

export const getAllAuthors = async () => {
	const query = gql`
		query MyQuery {
			authors {
				bio
				name
				image {
					url
				}
				id
				blogs {
					id
				}
			}
		}
	`

	const result = await request<{ authors: IAuthor[] }>(graphqAPI, query)

	return result.authors
}

export const getDetailedAuthor = cache(async (id: string) => {
	const query = gql`
		query MyQuery($id: ID) {
			author(where: { id: $id }) {
				name
				bio
				image {
					url
				}
				blogs {
					archive
					title
					slug
					description
					createdAt
					content {
						text
					}
					image {
						url
					}
					tag {
						title
						slug
					}
					category {
						title
						slug
					}
					author {
						name
						image {
							url
						}
						id
					}
				}
			}
		}
	`

	const { author } = await request<{
		author: IAuthor
	}>(graphqAPI, query, { id })

	return author
})
