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

  async updateById(id: number, update: object) {
    return this._symbolRepository.update(id, update)
  }

  async getByName(name: string): Promise<ISymbol> {
    const model = await this._symbolRepository.getByName(name)

    if (!model) return false

    return new Symbol(model.id, model.name, model.average_price)
  }

  async list(page: number, perPage: number): Promise<object[]> {
    const symbols = await this._symbolRepository.list(page, perPage)

    let list = Array()

    symbols.forEach((model) => {
      let symbol = new Symbol(model.id, model.name, model.average_price)
      list.push(symbol.toObject())
    })

    return list
  }
}
