import ButtonStart from './ui/buttonStart'
import { Writer } from './ui/typeWriter'

const StartInfo = () => {
	return (
		<div className='flex flex-col'>
			<h4 className='text-2xl font-bold'>Будь всегда в тренде</h4>
			<h1 className='text-9xl font-black text-extra text-purple-900 '>MVP*</h1>
			<div className='flex text-5xl gap-4'>
				<h5 className=''>Люксовый </h5>
				<h5 className=' text-purple-900'>бутик </h5>
				<Writer />
			</div>
			<div>
				<ButtonStart />
			</div>
		</div>
	)
}

export default StartInfo
