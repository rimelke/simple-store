import IHashProvider from '../../providers/IHashProvider'
import { ITokenObject } from '../../providers/ITokenProvider'
import IUsersRepository from '../../repositories/IUsersRepository'
import ILoginUserDTO from './LoginUserDTO'

export default class LoginUserUseCase {
	constructor(
		private usersRepository: IUsersRepository,
		private hashProvider: IHashProvider
	) {}

	async execute(data: ILoginUserDTO): Promise<ITokenObject> {
		const user = await this.usersRepository.findByEmail(data.email)

		if (!user) throw new Error('User not found.')

		const isCorrect = await this.hashProvider.compare(
			user.password,
			data.password
		)

		if (!isCorrect) throw new Error('Invalid password.')

		return {
			id: user.id,
		}
	}
}
