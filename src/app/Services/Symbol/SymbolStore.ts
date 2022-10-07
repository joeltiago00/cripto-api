import ISymbolStore from './Contracts/ISymbolStore'

export default class SymbolStore implements ISymbolStore {
  constructor(private readonly name: string, private readonly averagePrice: string) {}

  toObject(): object {
    return {
      name: this.name,
      average_price: this.averagePrice,
    }
  }
}
