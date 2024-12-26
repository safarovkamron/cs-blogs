import { IChildProps } from '@/types'
import Footer from './_components/footer'
import Navbar from './_components/navbar'

function Layout({ children }: IChildProps) {
	return (
		<main>
			<Navbar />
			<div className='container mx-auto mt-20'>{children}</div>
			<Footer />
		</main>
	)
}

export default Layout
