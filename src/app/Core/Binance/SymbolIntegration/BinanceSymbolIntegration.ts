import SymbolRepository from '../../../Repositories/SymbolRepository'
import BinanceService from '../../../Services/Binance/BinanceService'
import IBinanceService from '../../../Services/Binance/Contracts/IBinanceService'
import ISymbolService from '../../../Services/Symbol/Contracts/ISymbolService'
import SymbolService from '../../../Services/Symbol/SymbolService'
import IBinanceSymbolIntegration from './Contracts/IBinanceSymbolIntegration'

export default class BinanceSymbolIntegration implements IBinanceSymbolIntegration {
  private _binanceService: IBinanceService
  private _symbolService: ISymbolService

  constructor() {
    this._binanceService = new BinanceService()
    this._symbolService = new SymbolService(new SymbolRepository())
  }

  async syncSymbols(): Promise<void> {
    const symbols = await this._binanceService.getSymbols()

    if (symbols.length === 0) {
      return
    }

    this.save(symbols)
  }

  private async save(symbols: Array<string>): Promise<void> {
    for (const symbol of symbols) {
      try {
        const price = await this._binanceService.getSymbolPrice(symbol)

        const model = await this._symbolService.getByName(symbol)

        if (model) {
          this._symbolService.updateById(model.id, { average_price: price })

          console.log(`update: ${symbol}: ${price}`)

          continue
        }

        this._symbolService.store(symbol, price)

        console.log(`synced: ${symbol}: ${price}`)
      } catch (err) {
        console.log(`erro in save: ${err}`)
      }
    }
  }
}
