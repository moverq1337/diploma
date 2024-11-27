import Image from 'next/image'
import bg from '../../../public/Group 10.jpg'

export default function Background() {
	return (
		<Image
			z-index={100}
			alt='Mountains'
			src={bg}
			placeholder='blur'
			quality={100}
			fill
			sizes='100vw'
			style={{
				objectFit: 'cover',
			}}
		/>
	)
}
