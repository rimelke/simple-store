import IHashProvider from '../IHashProvider'
import bcrypt from 'bcrypt'

export default class BcryptHashProvider implements IHashProvider {
	async hash(data: string): Promise<string> {
		const hashed = await bcrypt.hash(data, 12)

		return hashed
	}

	async compare(source: string, value: string): Promise<boolean> {
		const result = await bcrypt.compare(value, source)

		return result
	}
}
