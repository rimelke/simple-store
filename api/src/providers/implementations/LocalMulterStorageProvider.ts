import multer, { StorageEngine } from 'multer'
import genId from '../../utils/genId'
import IMulterStorageProvider, { IFileInfo } from '../IMulterStorageProvider'

interface ILocalStorageFileInfo {
	filename: string
	size: number
	mimetype: string
}

export default class LocalMulterStorageProvider
	implements IMulterStorageProvider {
	instance: StorageEngine

	constructor(private filePath: string) {
		this.instance = multer.diskStorage({
			destination: (req, file, cb) => {
				cb(null, this.filePath)
			},
			filename: (req, file, cb) => {
				console.log('filename')
				const key = genId()
				const extension = file.originalname.substring(
					file.originalname.lastIndexOf('.')
				)

				const filename = key + extension

				cb(null, filename)
			},
		})
	}

	getInfoFromFile(file: ILocalStorageFileInfo): IFileInfo {
		return {
			filename: file.filename,
			mimetype: file.mimetype,
			location: `${
				process.env.APP_URL || 'http://localhost:3333'
			}/uploads/${file.filename}`,
			size: file.size,
		}
	}
}
