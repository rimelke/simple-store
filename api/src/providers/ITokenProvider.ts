export interface ITokenObject {
	id: string
}

export default interface ITokenProvider {
	hash(tokenObject: ITokenObject): Promise<string>
	verify(token: string): Promise<ITokenObject>
}
