import Product from '../entities/Product'

export type IFindType = 'isNull' | 'notNull' | 'equal' | 'like'

export default interface IProductsRepository {
	save(user: Product): Promise<void>
	findById(id: string): Promise<Product>
	findByField(field: string, type: 'isNull' | 'notNull'): Promise<Product[]>
	findByField(
		field: string,
		type: 'equal' | 'like',
		value: number | string
	): Promise<Product[]>
}
