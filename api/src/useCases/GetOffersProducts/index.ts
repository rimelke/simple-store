import TypeormProductsRepository from '../../repositories/implementations/TypeormProductsRepository'
import GetOffersProductsController from './GetOffersProductsController'
import GetOffersProductsUseCase from './GetOffersProductsUseCase'

const typeormProductsRepository = new TypeormProductsRepository()

const getOffersProductsUseCase = new GetOffersProductsUseCase(
	typeormProductsRepository
)

const getOffersProductsController = new GetOffersProductsController(
	getOffersProductsUseCase
)

export { getOffersProductsController, getOffersProductsUseCase }
