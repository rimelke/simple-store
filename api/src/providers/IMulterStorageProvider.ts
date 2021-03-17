import { StorageEngine } from 'multer'

export interface IFileInfo {
	filename: string
	location: string
	size: number
	mimetype: string
}

export default interface IMulterStorageProvider {
	instance: StorageEngine
	getInfoFromFile(file: unknown): IFileInfo
}
