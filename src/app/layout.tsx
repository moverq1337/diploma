import type { Metadata } from 'next'
import localFont from 'next/font/local'
import Header from './components/Header/Header'
import './globals.css'
import { Providers } from './providers'

const geistSans = localFont({
	src: './fonts/GeistVF.woff',
	variable: '--font-geist-sans',
	weight: '100 900',
})
const geistMono = localFont({
	src: './fonts/GeistMonoVF.woff',
	variable: '--font-geist-mono',
	weight: '100 900',
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
		<html lang='en' className='dark'>
			<body>
				<Providers>
					<Header />

					{children}
				</Providers>
			</body>
		</html>
	)
}
