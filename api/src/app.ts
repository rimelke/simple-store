import 'reflect-metadata'
import express from 'express'
import './database'
import routes from './routes'
import path from 'path'

const app = express()

app.use(
	'/uploads',
	express.static(path.resolve(__dirname, '..', 'tmp', 'uploads'))
)
app.use(express.json())
app.use(routes)

export default app
