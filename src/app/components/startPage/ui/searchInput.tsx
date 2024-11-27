import { Input } from '@nextui-org/react'

export default function SearchInput() {
	return (
		<Input
			color='secondary'
			type='text'
			label='serch'
			defaultValue='balenciaga'
			className='max-w-xs'
			variant='flat'
		/>
	)
}
