import { ThemeProvider } from '@/components/providers/theme-provider'
import { Toaster } from '@/components/ui/sonner'
import { IChildProps } from '@/types'
import type { Metadata } from 'next'
import { Crete_Round, Work_Sans } from 'next/font/google'
import NextTopLoader from 'nextjs-toploader'
import './globals.css'

const creteRound = Crete_Round({
	weight: '400',
	subsets: ['latin'],
	variable: '--font-creteRound',
})
const workSans = Work_Sans({
	weight: ['500', '600'],
	variable: '--font-workSans',
	subsets: ['latin'],
})

export const metadata: Metadata = {
	metadataBase: new URL('https://seo-test-blog.ac'),
	title: 'CS-BLOG',
	description:
		"CS-Blog is your go-to platform for insightful programming blogs, tutorials, and articles. Explore expert tips, coding best practices, and the latest trends in software development, web technologies, and artificial intelligence. Whether you're a beginner or an experienced developer, CS-Blog provides valuable content to enhance your skills and stay updated in the ever-evolving tech world.",
	authors: { name: 'Kamron Safarov', url: 'https://t.me/Safarov_Kamron' },
	icons: { icon: '/cs.png' },
	keywords:
		'Programming blogs, Coding tutorials, Software development tips, Web development articles, JavaScript guides, Frontend development blogs, Backend development insights, AI in programming, Learn to code, Full-stack programming tips, React tutorials, Next.js blogs, Node.js articles, Best programming practices, Modern coding techniques',
	openGraph: {
		title: 'CS-BLOG',
		description:
			"CS-Blog is your go-to platform for insightful programming blogs, tutorials, and articles. Explore expert tips, coding best practices, and the latest trends in software development, web technologies, and artificial intelligence. Whether you're a beginner or an experienced developer, CS-Blog provides valuable content to enhance your skills and stay updated in the ever-evolving tech world.",
		type: 'website',
		url: 'https://seo-test-blog.ac',
		locale: 'en_US',
		images: '/seo/blogs.jpg',
	},
}

function RootLayout({ children }: IChildProps) {
	return (
		<html lang='en' suppressHydrationWarning>
			<body
				className={`${creteRound.variable} ${workSans.variable} overflow-x-hidden`}
			>
				<ThemeProvider
					attribute='class'
					defaultTheme='system'
					enableSystem
					disableTransitionOnChange
				>
					<NextTopLoader showSpinner={false} />
					{children}
					<Toaster position='top-center' />
				</ThemeProvider>
			</body>
		</html>
	)
}

export default RootLayout
