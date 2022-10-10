import Symbols from 'App/Models/Symbols'
import ISymbolStore from '../../Services/Symbol/Contracts/ISymbolStore'

export default interface ISymbolReporsitory {
  update(id: number, update: object): Promise<void>
  store(symbolStore: ISymbolStore): Promise<Symbols>
  getByName(name: string): Promise<Symbols>
  list(page: number, perPage: number)
}
