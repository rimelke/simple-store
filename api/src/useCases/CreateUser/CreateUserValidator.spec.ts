import { createUserValidator } from '.'

it('should validate and return valid data', () => {
	const data = {
		name: 'Rikelme Griep',
		email: 'rikelmegriep1@gmail.com',
		password: 'rikelme2001',
	}

	expect(() => createUserValidator.validate(data)).not.toThrow()
	expect(createUserValidator.validate(data)).toEqual(data)
})

describe('name validation', () => {
	it('should not validate if name is missing', () => {
		const data = {
			email: 'rikelmegriep1@gmail.com',
			password: 'rikelme2001',
		}

		expect(() => createUserValidator.validate(data)).toThrow(
			'"name" is required'
		)
	})

	it('should not validate if name is not a string', () => {
		const data = {
			name: 4,
			email: 'rikelmegriep1@gmail.com',
			password: 'rikelme2001',
		}

		expect(() => createUserValidator.validate(data)).toThrow(
			'"name" must be a string'
		)
	})
})

describe('email validation', () => {
	it('should not validate if email is missing', () => {
		const data = {
			name: 'Rikelme griep',
			password: 'rikelme2001',
		}

		expect(() => createUserValidator.validate(data)).toThrow(
			'"email" is required'
		)
	})

	it('should not validate if email is not a string', () => {
		const data = {
			name: 'Rikelme griep',
			email: 4,
			password: 'rikelme2001',
		}

		expect(() => createUserValidator.validate(data)).toThrow(
			'"email" must be a string'
		)
	})

	it('should not validate if email is not a valid email', () => {
		const data = {
			name: 'Rikelme griep',
			email: 'f0kfvorl',
			password: 'rikelme2001',
		}

		expect(() => createUserValidator.validate(data)).toThrow(
			'"email" must be a valid email'
		)
	})
})

describe('password validation', () => {
	it('should not validate if password is missing', () => {
		const data = {
			name: 'Rikelme Griep',
			email: 'rikelmegriep1@gmail.com',
		}

		expect(() => createUserValidator.validate(data)).toThrow(
			'"password" is required'
		)
	})

	it('should not validate if password is not a string', () => {
		const data = {
			name: 'Rikelme Griep',
			email: 'rikelmegriep1@gmail.com',
			password: 4,
		}

		expect(() => createUserValidator.validate(data)).toThrow(
			'"password" must be a string'
		)
	})

	it('should not validate if password length is smaller than 8 chars', () => {
		const data = {
			name: 'Rikelme griep',
			email: 'rikelmegriep1@gmail.com',
			password: '34',
		}

		expect(() => createUserValidator.validate(data)).toThrow(
			'"password" length must be at least 8 characters long'
		)
	})
})
