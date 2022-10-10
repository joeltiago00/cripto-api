import Symbols from 'App/Models/Symbols'
import ISymbolStore from 'App/Services/Symbol/Contracts/ISymbolStore'
import ISymbolReporsitory from './Contracts/ISymbolRepository'

export default class SymbolRepository implements ISymbolReporsitory {
  private _model

  constructor() {
    this._model = Symbols
  }

  async store(symbolStore: ISymbolStore): Promise<Symbols> {
    return await this._model.create(symbolStore.toObject())
  }

  async update(id: number, update: object): Promise<void> {
    await this._model.query().where('id', id).update(update)
  }

  async getByName(name: string): Promise<Symbols> {
    return await this._model.findBy('name', name)
  }

  async list(page: number, perPage: number) {
    return await this._model.query().paginate(page, perPage)
  }
}
