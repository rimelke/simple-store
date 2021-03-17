import User from '../../entities/User'
import IHashProvider from '../../providers/IHashProvider'
import IUsersRepository from '../../repositories/IUsersRepository'
import ICreateUserDTO from './CreateUserDTO'

export default class CreateUserUseCase {
	constructor(
		private usersRepository: IUsersRepository,
		private hashProvider: IHashProvider
	) {}

	async execute(data: ICreateUserDTO): Promise<void> {
		const userAlreadyExists = await this.usersRepository.findByEmail(
			data.email
		)

		if (userAlreadyExists)
			throw new Error('An user with this email already exists.')

		const user = new User({
			...data,
			password: await this.hashProvider.hash(data.password),
		})

		await this.usersRepository.save(user)
	}
}
