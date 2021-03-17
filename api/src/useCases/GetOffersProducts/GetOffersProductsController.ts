import { Request, Response } from 'express'
import GetOffersProductsUseCase from './GetOffersProductsUseCase'

export default class GetOffersProductsController {
	constructor(private getOffersProductsUseCase: GetOffersProductsUseCase) {}

	async handle(req: Request, res: Response): Promise<void> {
		try {
			const products = await this.getOffersProductsUseCase.execute()

			res.json(products)
		} catch (e) {
			res.status(400).json({ message: e.message || 'Unexpected error.' })
		}
	}
}
