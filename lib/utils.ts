import { clsx, type ClassValue } from 'clsx'
import { format } from 'date-fns'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs))
}

export function getReadingTime(content: string) {
	const WPS = 240 / 60

	let images = 0
	const regEx = /\w/

	const wordsCount = content.split(' ').filter(word => {
		if (word.includes('<img')) {
			images += 1
		}
		return regEx.test(word)
	}).length

	const imageAdjust = images * 4
	let imageSecs = 0,
		imageFactor = 12

	while (images) {
		imageSecs += imageFactor
		if (imageFactor > 3) {
			imageFactor -= 1
		}
		images -= 1
	}

	const minutes = Math.ceil(((wordsCount - imageAdjust) / WPS + imageSecs) / 60)

	if (minutes < 9) {
		return `0${minutes}`
	} else {
		return minutes
	}
}

export const getFormatDate = (date: string) => {
	return format(new Date(date), 'MMM-dd-yyyy')
}
