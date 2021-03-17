import TypeormProductsRepository from '../../repositories/implementations/TypeormProductsRepository'
import ShowProductController from './ShowProductController'
import ShowProductUseCase from './ShowProductUseCase'
import ShowProductValidator from './ShowProductValidator'

const typeormProductsRepository = new TypeormProductsRepository()

const showProductValidator = new ShowProductValidator()
const showProductUseCase = new ShowProductUseCase(typeormProductsRepository)

const showProductController = new ShowProductController(
	showProductValidator,
	showProductUseCase
)

export { showProductController, showProductUseCase, showProductValidator }
