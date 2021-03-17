import Joi from 'joi'
import ILoginUserDTO from './LoginUserDTO'

export default class LoginUserValidator {
	validate(data: unknown): ILoginUserDTO {
		const schema = Joi.object().keys({
			email: Joi.string().email().required(),
			password: Joi.string().required(),
		})

		const { value, error } = schema.validate(data)

		if (error) throw error

		return value
	}
}
