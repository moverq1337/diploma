import type { Metadata } from 'next'
import { Montserrat, Tulpen_One } from 'next/font/google'
import localFont from 'next/font/local'
import Header from './components/Header/Header'
import './globals.css'

const geistSans = localFont({
	src: './fonts/GeistVF.woff',
	variable: '--font-geist-sans',
	weight: '100 900',
})

const tulpen_one = Tulpen_One({
	weight: '400',
	subsets: ['latin'],
	variable: '--font-tulpen',
})

const geistMono = localFont({
	src: './fonts/GeistMonoVF.woff',
	variable: '--font-geist-mono',
	weight: '100 900',
})

const montserrat = Montserrat({
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-montserrat-mono',
})

export const metadata: Metadata = {
	title: 'Люксовый бутик',
	description: 'Бутик, который поднимет вам настроение!',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='en'>
			<body className={montserrat.className}>
				<Header />
				{children}
			</body>
		</html>
	)
}
