import ContactForm from '@/components/forms/contact-form'
import { Dot, Home, Mail, Phone } from 'lucide-react'
import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
	title: 'Contact Us',
	description:
		'Get in touch with the CS-Blog team. Whether you have questions, feedback, or partnership inquiries, we are here to help. Reach out to us today!',
	keywords:
		'contact us, get in touch, CS-Blog contact, programming blog inquiries, feedback, partnership inquiries, support, contact page',
	robots: 'index, follow',
	openGraph: {
		title: 'Contact Us - CS-Blog',
		description:
			'Contact the CS-Blog team for any inquiries or feedback. We value your input and are ready to assist with any questions about our programming content or services.',
		type: 'website',
		url: 'https://your-domain.com/contact',
	},
}

function ContactPage() {
	return (
		<div className='max-w-6xl mx-auto'>
			<div className='relative min-h-[40vh] flex items-center justify-center flex-col'>
				<h2 className='text-center text-4xl section-title font-creteRound'>
					<span>Blogs</span>
				</h2>

				<div className='flex gap-1 items-center mt-4'>
					<Home className='w-5 h-5' />
					<Link
						href={'/'}
						className='opacity-90 hover:underline hover:opacity-100'
					>
						Home
					</Link>
					<Dot />
					<p className='text-muted-foreground'>Contact</p>
				</div>
			</div>

			<div className='grid grid-cols-2 gap-4 mt-6 max-md:grid-cols-1'>
				<div className='flex  flex-col'>
					<h1 className='text-4xl font-creteRound'>Contact CS</h1>
					<p className='mt-2 text-muted-foreground'>
						I am here to help and answer any question you might have. I look
						forward to hearing from you.
					</p>

					<div className='mt-12 flex items-center gap-3'>
						<Mail className='w-4 h-4' />
						<p className='text-sm'>safarov.kamron.05@gmail.com</p>
					</div>

					<div className='flex items-center gap-3'>
						<Phone className='w-4 h-4' />
						<p className='text-sm'>+987 654 321</p>
					</div>
				</div>

				<div>
					<h1 className='text-4xl font-creteRound mb-2'>Contact form</h1>

					<ContactForm />
				</div>
			</div>
		</div>
	)
}

export default ContactPage
