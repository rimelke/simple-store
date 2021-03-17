import { Request, Response } from 'express'
import CreateUserUseCase from './CreateUserUseCase'
import CreateUserValidator from './CreateUserValidator'

export default class CreateUserController {
	constructor(
		private createUserValidator: CreateUserValidator,
		private createUserUseCase: CreateUserUseCase
	) {}

	async handle(req: Request, res: Response): Promise<void> {
		try {
			const data = this.createUserValidator.validate(req.body)

			await this.createUserUseCase.execute(data)

			res.status(201).send()
		} catch (e) {
			res.status(400).json({ message: e.message || 'Unexpected error.' })
		}
	}
}
