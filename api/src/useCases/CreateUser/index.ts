import BcryptHashProvider from '../../providers/implementations/BcryptHashProvider'
import TypeormUsersRepository from '../../repositories/implementations/TypeormUsersRepository'
import CreateUserController from './CreateUserController'
import CreateUserUseCase from './CreateUserUseCase'
import CreateUserValidator from './CreateUserValidator'

const usersRepository = new TypeormUsersRepository()
const hashProvider = new BcryptHashProvider()

const createUserValidator = new CreateUserValidator()
const createUserUseCase = new CreateUserUseCase(usersRepository, hashProvider)

const createUserController = new CreateUserController(
	createUserValidator,
	createUserUseCase
)

export {
	createUserController,
	createUserUseCase,
	createUserValidator,
	hashProvider,
	usersRepository,
}
