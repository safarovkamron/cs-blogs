import { IAuthor } from '@/types'
import request, { gql } from 'graphql-request'

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

export const getDetailedAuthor = async (id: string) => {
	const query = gql`
		query MyQuery($id: ID) {
			author(where: { id: $id }) {
				bio
				image {
					url
				}
				name
				blogs {
					archive
					id
					description
					author {
						name
						image {
							url
						}
						bio
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
		}
	`

	const { author } = await request<{
		author: IAuthor
	}>(graphqAPI, query, { id })
	return author
}
