import ISymbol from './ISymbol'

export default interface ISymbolService {
  store(name: string, price: string): Promise<ISymbol>
  getByName(name: string): Promise<ISymbol>
  list(page: number, perPage: number): Promise<Array<object>>
  updateById(id: number, update: object)
}
