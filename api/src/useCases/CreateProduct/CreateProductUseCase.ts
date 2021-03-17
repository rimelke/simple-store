import Product from '../../entities/Product'
import IProductsRepository from '../../repositories/IProductsRepository'
import ICreateProductDTO from './CreateProductDTO'

export default class CreateProductUseCase {
	constructor(private productsRepository: IProductsRepository) {}

	async execute(data: ICreateProductDTO): Promise<void> {
		const product = new Product(data)

		await this.productsRepository.save(product)
	}
}
