import { createConnection } from 'typeorm'
import { createUserUseCase, hashProvider, usersRepository } from '.'

beforeAll(async () => {
	const conn = await createConnection()
	await conn.runMigrations()
})

it('should create a new user', async () => {
	const data = {
		email: 'rikelmegriep1@gmail.com',
		name: 'Rikelme griep',
		password: 'rikelme2001',
	}

	await createUserUseCase.execute(data)

	const user = await usersRepository.findByEmail(data.email)

	expect(user).not.toBeUndefined()
})

it('should not create a user that already exists', async () => {
	const data = {
		email: 'rikelmegriep2@gmail.com',
		name: 'Rikelme griep',
		password: 'rikelme2001',
	}

	await createUserUseCase.execute(data)

	expect(createUserUseCase.execute(data)).rejects.toThrow(
		'An user with this email already exists.'
	)
})

it('should hash password', async () => {
	const data = {
		email: 'rikelmegriep3@gmail.com',
		name: 'Rikelme griep',
		password: 'rikelme2001',
	}

	await createUserUseCase.execute(data)

	const user = await usersRepository.findByEmail(data.email)

	expect(user).toHaveProperty('password')
	expect(await hashProvider.compare(user.password, data.password)).toBe(true)
})
