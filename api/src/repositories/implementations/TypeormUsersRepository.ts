import { getRepository } from 'typeorm'
import User from '../../entities/User'
import IUsersRepository from '../IUsersRepository'

class TypeormUsersRepository implements IUsersRepository {
	async findByEmail(email: string): Promise<User | undefined> {
		const usersRepository = getRepository(User)

		return usersRepository.findOne({ where: { email } })
	}

	async save(user: User): Promise<void> {
		const usersRepository = getRepository(User)

		await usersRepository.save(user)
	}
}

export default TypeormUsersRepository
