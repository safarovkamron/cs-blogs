'use client'

import { Button } from '@/components/ui/button'
import { Facebook, Link2, Linkedin, Send, Twitter } from 'lucide-react'
import { usePathname } from 'next/navigation'
import { toast } from 'sonner'

function ShareBtns() {
	const pathName = usePathname()
	const url = process.env.NEXT_PUBLIC_BASE_URL

	const onCopy = () => {
		const link = `${url}${pathName}`
		navigator.clipboard.writeText(link).then(() => toast.success('Link Copyed'))
	}

	return (
		<div className='flex flex-col max-md:flex-row md:space-y-3 max-md:space-x-3 mt-4'>
			<Button variant={'outline'} size={'icon'} onClick={onCopy}>
				<Twitter />
			</Button>
			<Button variant={'outline'} size={'icon'} onClick={onCopy}>
				<Facebook />
			</Button>
			<Button variant={'outline'} size={'icon'} onClick={onCopy}>
				<Linkedin />
			</Button>
			<Button variant={'outline'} size={'icon'} onClick={onCopy}>
				<Send />
			</Button>
			<Button variant={'outline'} size={'icon'} onClick={onCopy}>
				<Link2 />
			</Button>
		</div>
	)
}

export default ShareBtns
