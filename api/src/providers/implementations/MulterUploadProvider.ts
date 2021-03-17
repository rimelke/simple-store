import IUploadProvider, { ISingleUploadConfig } from '../IUploadProvider'
import multer, { Multer } from 'multer'
import IMulterStorageProvider from '../IMulterStorageProvider'

export default class MulterUploadProvider implements IUploadProvider {
	multerInstance: Multer

	constructor(
		private multerStorageProvider: IMulterStorageProvider,
		private filePath: string
	) {
		this.multerInstance = multer({
			dest: this.filePath,
			storage: this.multerStorageProvider.instance,
			limits: {
				fileSize: 20 * 1024 * 1024,
			},
			fileFilter: (req, file, cb) => {
				const allowedMimes = [
					'image/jpeg',
					'image/pjpeg',
					'image/png',
					'image/gif',
				]

				if (allowedMimes.includes(file.mimetype)) cb(null, true)
				else cb(new Error('Invalid file type.'))
			},
		})
	}

	single(data: ISingleUploadConfig): Promise<void> {
		return new Promise((resolve, reject) => {
			this.multerInstance.single(data.field)(data.req, data.res, err => {
				if (err) {
					if (err.code && err.code === 'LIMIT_UNEXPECTED_FILE') {
						reject(new Error(`"${err.field}" is not allowed.`))
					} else reject(err)
				} else if (!data.req.file) {
					if (data.isRequired)
						reject(new Error(`"${data.field}" is required.`))
					else resolve()
				} else {
					const fileInfo = this.multerStorageProvider.getInfoFromFile(
						data.req.file
					)

					for (const [info, field] of Object.entries(
						data.return_config
					))
						data.req.body[field] = fileInfo[info]

					resolve()
				}
			})
		})
	}
}
