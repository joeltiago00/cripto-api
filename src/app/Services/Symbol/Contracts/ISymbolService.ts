import ISymbol from './ISymbol'

export default interface ISymbolService {
  store(name: string, price: string): Promise<ISymbol>
}
