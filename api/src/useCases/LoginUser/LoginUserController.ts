import { Request, Response } from 'express'
import ITokenProvider from '../../providers/ITokenProvider'
import LoginUserUseCase from './LoginUserUseCase'
import LoginUserValidator from './LoginUserValidator'

export default class LoginUserController {
	constructor(
		private loginUserValidator: LoginUserValidator,
		private loginUserUseCase: LoginUserUseCase,
		private tokenProvider: ITokenProvider
	) {}

	async handle(req: Request, res: Response): Promise<void> {
		try {
			const data = this.loginUserValidator.validate(req.body)

			const tokenObject = await this.loginUserUseCase.execute(data)

			const token = await this.tokenProvider.hash(tokenObject)

			res.json({ token })
		} catch (e) {
			res.status(400).json({ message: e.message || 'Unexpected error.' })
		}
	}
}
