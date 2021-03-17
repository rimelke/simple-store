import { Request, Response } from 'express'
import IUploadProvider from '../../providers/IUploadProvider'
import CreateProductUseCase from './CreateProductUseCase'
import CreateProductValidator from './CreateProductValidator'

export default class CreateProductController {
	constructor(
		private uploadProvider: IUploadProvider,
		private createProductValidator: CreateProductValidator,
		private createProductUseCase: CreateProductUseCase
	) {}

	async handle(req: Request, res: Response): Promise<void> {
		try {
			await this.uploadProvider.single({
				field: 'image',
				req,
				res,
				return_config: { location: 'image_url' },
				isRequired: true,
			})

			const data = this.createProductValidator.validate(req.body)

			await this.createProductUseCase.execute(data)

			res.status(201).send()
		} catch (e) {
			res.status(400).json({ message: e.message || 'Unexpected error.' })
		}
	}
}
