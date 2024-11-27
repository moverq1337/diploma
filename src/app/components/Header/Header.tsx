import Profile from './ui/profile'

const Header = () => {
	return (
		<div className='flex justify-between px-10 py-5'>
			<h1 className=''>МВП</h1>
			<div className='flex justify-center gap-8'>
				<a href=''>Мужское</a>
				<a href=''>Женское</a>
				<a href=''>Новая коллекция</a>
			</div>
			<div className='flex justify-center gap-8'>
				<p>cart</p>
				<Profile />
			</div>
		</div>
	)
}

export default Header
