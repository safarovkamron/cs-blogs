import React from 'react'

export interface IChildProps {
	children: React.ReactNode
}

export interface IBlog {
	title: string
	slug: string
	description: string
	createdAt: string
	image: {
		url: string
	}
	content: { text: string }
	author: IAuthor
	category: ICategoryAndTag
	tag: ICategoryAndTag
	archive: boolean
}

export interface IAuthor {
	name: string
	bio: string
	image: {
		url: string
	}
	id: string
	blogs: IBlog[]
}

export interface ICategoryAndTag {
	title: string
	slug: string
	blogs: IBlog[]
}

export interface IArchivedBlog {
	year: string
	blogs: IBlog[]
}

export interface IParams {
	params: {
		slug: string
	}
}
