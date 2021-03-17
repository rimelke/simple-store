import { Column, Entity, PrimaryColumn } from 'typeorm'
import genId from '../utils/genId'

@Entity('products')
export default class Product {
	@PrimaryColumn()
	readonly id: string

	@Column()
	name: string

	@Column({ type: 'decimal' })
	price: number

	@Column({ nullable: true, type: 'decimal' })
	offer: number | null

	@Column()
	image_url: string

	@Column({ default: 0 })
	popularity: number

	constructor(props: Omit<Product, 'id'>) {
		Object.assign(this, props)
		if (!this.id) this.id = genId()
	}
}
