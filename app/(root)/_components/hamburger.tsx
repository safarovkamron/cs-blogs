import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import {
	Sheet,
	SheetContent,
	SheetTitle,
	SheetTrigger,
} from '@/components/ui/sheet'
import { NavLinks } from '@/constants'
import { cn } from '@/lib/utils'
import { Menu } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

function HamburgerMenu() {
	const pathName = usePathname()

	return (
		<Sheet>
			<SheetTrigger asChild className='flex md:hidden'>
				<Button size={'icon'} variant={'ghost'}>
					<Menu />
				</Button>
			</SheetTrigger>
			<SheetContent side={'left'}>
				<Link href='/'>
					<SheetTitle className='text-4xl font-creteRound'>CLS</SheetTitle>
				</Link>
				<Separator className='my-3' />
				<div className='flex flex-col space-y-3'>
					{NavLinks.map(link => (
						<Link
							key={link.route}
							href={link.route}
							className={cn(
								'hover:bg-blue-400/20 py-2 px-3 cursor-pointer rounded-sm transition-colors flex items-center gap-2',
								pathName === link.route && 'text-blue-400 bg-blue-400/20'
							)}
						>
							<link.icon className='w-5 h-5' />
							{link.name}
						</Link>
					))}
				</div>
			</SheetContent>
		</Sheet>
	)
}

export default HamburgerMenu
