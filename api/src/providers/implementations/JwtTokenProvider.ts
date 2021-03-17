import ITokenProvider, { ITokenObject } from '../ITokenProvider'
import jwt from 'jsonwebtoken'

export default class JwtTokenProvider implements ITokenProvider {
	async hash(tokenObject: ITokenObject): Promise<string> {
		return new Promise((resolve, reject) => {
			jwt.sign(
				tokenObject,
				process.env.SECRET || 'SECRET_EXAMPLE',
				(err, token) => {
					if (err) reject(err)
					else resolve(token)
				}
			)
		})
	}

	async verify(token: string): Promise<ITokenObject> {
		return new Promise((resolve, reject) => {
			jwt.verify(
				token,
				process.env.SECRET || 'SECRET_EXAMPLE',
				(err, decoded) => {
					if (err) reject(err)
					else {
						const { id } = <ITokenObject>decoded
						resolve({ id })
					}
				}
			)
		})
	}
}
