import { Column, Entity, PrimaryColumn } from 'typeorm'
import genId from '../utils/genId'

@Entity('users')
export default class User {
	@PrimaryColumn()
	readonly id: string

	@Column({ unique: true })
	email: string

	@Column()
	name: string

	@Column()
	password: string

	constructor(props: Omit<User, 'id'>) {
		Object.assign(this, props)
		if (!this.id) this.id = genId()
	}
}
