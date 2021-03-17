import Joi from 'joi'
import ICreateUserDTO from './CreateUserDTO'

export default class CreateUserValidator {
	validate(data: unknown): ICreateUserDTO {
		const schema = Joi.object().keys({
			name: Joi.string().required(),
			email: Joi.string().email().required(),
			password: Joi.string().min(8).required(),
		})

		const { value, error } = schema.validate(data)

		if (error) throw error

		return value
	}
}
