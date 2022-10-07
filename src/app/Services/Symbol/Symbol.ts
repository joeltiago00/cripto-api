import ISymbol from './Contracts/ISymbol'

export default class Symbol implements ISymbol {
  constructor(readonly id: Number, readonly name: string, readonly average_price: string) {}

  toObject(): object {
    return {
      id: this.id,
      name: this.name,
      average_price: this.average_price,
    }
  }
}
