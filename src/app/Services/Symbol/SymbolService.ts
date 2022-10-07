import ISymbolReporsitory from 'App/Repositories/Contracts/ISymbolRepository'
import ISymbol from './Contracts/ISymbol'
import ISymbolService from './Contracts/ISymbolService'
import Symbol from './Symbol'
import SymbolStore from './SymbolStore'

export default class SymbolService implements ISymbolService {
  private _symbolRepository: ISymbolReporsitory

  constructor(symbolRepository: ISymbolReporsitory) {
    this._symbolRepository = symbolRepository
  }

  async store(name: string, averagePrice: string): Promise<ISymbol> {
    const symbol = new SymbolStore(name, averagePrice)

    const model = await this._symbolRepository.store(symbol)

    return new Symbol(model.id, model.name, model.average_price)
  }
}
