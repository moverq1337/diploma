import { User } from '@nextui-org/user'

type ProfileProps = {
	name?: string
	description?: string
	avatarSrc?: string
}

const Profile: React.FC<ProfileProps> = ({
	name = 'moverq',
	description = 'Product Designer',
	avatarSrc,
}) => {
	return (
		<User
			name={name}
			description={description}
			avatarProps={{
				src: avatarSrc || 'https://i.pravatar.cc/150?u=a04258114e29026702d',
			}}
		/>
	)
}

export default Profile
