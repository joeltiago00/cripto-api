import Symbol from 'App/Models/Symbols'
import ISymbolStore from 'App/Services/Symbol/Contracts/ISymbolStore'
import ISymbolReporsitory from './Contracts/ISymbolRepository'

export default class SymbolRepository implements ISymbolReporsitory {
  async store(symbolStore: ISymbolStore) {
    return await Symbol.create(symbolStore.toObject())
  }
}
