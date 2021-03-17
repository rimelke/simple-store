import Product from '../../entities/Product'
import IProductsRepository from '../../repositories/IProductsRepository'
import { IShowProductDTO } from './ShowProductDTO'

export default class ShowProductUseCase {
	constructor(private productsRepository: IProductsRepository) {}

	async execute(data: IShowProductDTO): Promise<Product> {
		const product = await this.productsRepository.findById(data.product_id)

		if (!product) throw new Error('Product not found.')

		return product
	}
}
