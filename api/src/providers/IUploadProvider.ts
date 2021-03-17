import { Request, Response } from 'express'

export interface IReturnUploadConfig {
	filename?: string
	location?: string
	size?: string
	mimetype?: string
}

export interface ISingleUploadConfig {
	field: string
	req: Request
	res: Response
	isRequired: boolean
	return_config: IReturnUploadConfig
}

export default interface IUploadProvider {
	single(data: ISingleUploadConfig): Promise<void>
}
