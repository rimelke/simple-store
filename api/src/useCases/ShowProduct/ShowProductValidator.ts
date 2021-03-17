import Joi from 'joi'
import { IShowProductDTO } from './ShowProductDTO'

export default class ShowProductValidator {
	validate(data: unknown): IShowProductDTO {
		const schema = Joi.object().keys({
			product_id: Joi.string().required(),
		})

		const { value, error } = schema.validate(data)

		if (error) throw error

		return value
	}
}
