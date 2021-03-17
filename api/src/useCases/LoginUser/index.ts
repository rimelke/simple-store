import BcryptHashProvider from '../../providers/implementations/BcryptHashProvider'
import JwtTokenProvider from '../../providers/implementations/JwtTokenProvider'
import TypeormUsersRepository from '../../repositories/implementations/TypeormUsersRepository'
import LoginUserController from './LoginUserController'
import LoginUserUseCase from './LoginUserUseCase'
import LoginUserValidator from './LoginUserValidator'

const typeormUsersRepository = new TypeormUsersRepository()
const bcryptHashProvider = new BcryptHashProvider()
const jwtTokenProvider = new JwtTokenProvider()

const loginUserValidator = new LoginUserValidator()
const loginUserUseCase = new LoginUserUseCase(
	typeormUsersRepository,
	bcryptHashProvider
)

const loginUserController = new LoginUserController(
	loginUserValidator,
	loginUserUseCase,
	jwtTokenProvider
)

export { loginUserController, loginUserUseCase, loginUserValidator }
