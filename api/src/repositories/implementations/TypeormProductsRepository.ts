import { getRepository, Not, IsNull, Like, Equal, FindOperator } from 'typeorm'
import Product from '../../entities/Product'
import IProductsRepository, { IFindType } from '../IProductsRepository'

export default class TypeormProductsRepository implements IProductsRepository {
	private whereMethods: Record<
		IFindType,
		(value: string | number) => FindOperator<string | number>
	> = {
		equal: Equal,
		like: Like,
		notNull: () => Not(IsNull()),
		isNull: () => IsNull(),
	}

	async save(product: Product): Promise<void> {
		const productsRepository = getRepository(Product)

		await productsRepository.save(product)
	}

	async findById(id: string): Promise<Product> {
		const productsRepository = getRepository(Product)

		return productsRepository.findOne(id)
	}

	async findByField(
		field: string,
		type: IFindType,
		value?: string | number
	): Promise<Product[]> {
		const productsRepository = getRepository(Product)

		return productsRepository.find({
			where: { [field]: this.whereMethods[type](value) },
		})
	}
}
