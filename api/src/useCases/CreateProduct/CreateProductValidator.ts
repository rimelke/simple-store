import Joi from 'joi'
import ICreateProductDTO from './CreateProductDTO'

export default class CreateProductValidator {
	validate(data: unknown): ICreateProductDTO {
		const schema = Joi.object().keys({
			name: Joi.string().required(),
			price: Joi.number().positive().required(),
			offer: Joi.number().positive(),
			image_url: Joi.string().uri().required(),
		})

		const { value, error } = schema.validate(data)

		if (error) throw error

		return value
	}
}
