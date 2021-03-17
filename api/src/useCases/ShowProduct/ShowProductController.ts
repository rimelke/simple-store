import { Request, Response } from 'express'
import ShowProductUseCase from './ShowProductUseCase'
import ShowProductValidator from './ShowProductValidator'

export default class ShowProductController {
	constructor(
		private showProductValidator: ShowProductValidator,
		private showProductUseCase: ShowProductUseCase
	) {}

	async handle(req: Request, res: Response): Promise<void> {
		try {
			const data = this.showProductValidator.validate(req.params)

			const product = await this.showProductUseCase.execute(data)

			res.json(product)
		} catch (e) {
			res.status(400).json({ message: e.message || 'Unexpected error.' })
		}
	}
}
