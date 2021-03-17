import { Router } from 'express'
import { createProductController } from './useCases/CreateProduct'

import { createUserController } from './useCases/CreateUser'
import { getOffersProductsController } from './useCases/GetOffersProducts'
import { loginUserController } from './useCases/LoginUser'
import { showProductController } from './useCases/ShowProduct'

const routes = Router()

routes.post('/users', (req, res) => createUserController.handle(req, res))
routes.post('/users/login', (req, res) => loginUserController.handle(req, res))

routes.get('/products/offers', (req, res) =>
	getOffersProductsController.handle(req, res)
)
routes.get('/products/:product_id', (req, res) =>
	showProductController.handle(req, res)
)
routes.post('/products', (req, res) => createProductController.handle(req, res))

export default routes
