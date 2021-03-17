import Product from '../../entities/Product'
import IProductsRepository from '../../repositories/IProductsRepository'

export default class GetOffersProductsUseCase {
	constructor(private productsRepository: IProductsRepository) {}

	async execute(): Promise<Product[]> {
		return this.productsRepository.findByField('offer', 'notNull')
	}
}
