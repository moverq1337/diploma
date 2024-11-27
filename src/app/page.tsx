import Image from 'next/image'
import StartInfo from './components/startPage/startInfo'

export default function Home() {
	return (
		<div>
			<div
				style={{
					zIndex: -1,
					position: 'fixed',
					width: '100vh',
					height: '100vh',
				}}
			>
				<Image
					src='/Group 10.jpg'
					alt='bg'
					fill
					style={{ objectFit: 'cover' }}
				/>
			</div>
			<StartInfo />
		</div>
	)
}
