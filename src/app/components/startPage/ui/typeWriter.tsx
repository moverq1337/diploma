'use client'

import Typewriter from 'typewriter-effect'

export const Writer = () => {
	return (
		<div>
			<h5 className='text-5xl'>
				<Typewriter
					options={{
						strings: ['для вас', 'для всех', 'для людей', 'для гуманоидов'],
						autoStart: true,
						loop: true,
					}}
				/>
			</h5>
		</div>
	)
}
