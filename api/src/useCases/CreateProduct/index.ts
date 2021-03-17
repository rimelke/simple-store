import LocalMulterStorageProvider from '../../providers/implementations/LocalMulterStorageProvider'
import MulterUploadProvider from '../../providers/implementations/MulterUploadProvider'
import CreateProductController from './CreateProductController'
import path from 'path'
import CreateProductValidator from './CreateProductValidator'
import CreateProductUseCase from './CreateProductUseCase'
import TypeormProductsRepository from '../../repositories/implementations/TypeormProductsRepository'

const filePath = path.resolve(__dirname, '..', '..', '..', 'tmp', 'uploads')

const localMulterStorageProvider = new LocalMulterStorageProvider(filePath)
const multerUploadProvider = new MulterUploadProvider(
	localMulterStorageProvider,
	filePath
)
const typeormProductsRepository = new TypeormProductsRepository()

const createProductValidator = new CreateProductValidator()
const createProductUseCase = new CreateProductUseCase(typeormProductsRepository)

const createProductController = new CreateProductController(
	multerUploadProvider,
	createProductValidator,
	createProductUseCase
)

export { createProductController, createProductUseCase, createProductValidator }
