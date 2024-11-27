import ButtonStart from './ui/buttonStart'
import { ImageBg } from './ui/imageBg'
import SearchInput from './ui/searchInput'
import { Writer } from './ui/typeWriter'

const StartInfo = () => {
	return (
		<div className=' flex justify-between'>
			<div className='flex flex-col mx-12 h-screen  justify-center'>
				<h4 className='text-2xl font-bold text-gray-400'>
					Будь всегда в тренде
				</h4>
				<h1 className='text-9xl font-black text-extra'>MVP*</h1>
				<div className='flex font-bold text-5xl gap-4'>
					<h5 className=''>Люксовый </h5>
					<h5 className='text-purple-900'>бутик </h5>
					<Writer />
				</div>
				<div className='my-12 gap-8 flex flex-col'>
					<SearchInput />
					<ButtonStart />
				</div>
			</div>
			<div className='my-40 shrink-1 '>
				<ImageBg />
			</div>
		</div>
	)
}

export default StartInfo
