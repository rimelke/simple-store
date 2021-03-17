export default interface IHashProvider {
	hash(data: string): Promise<string>
	compare(source: string, value: string): Promise<boolean>
}
