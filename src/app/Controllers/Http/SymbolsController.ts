// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import BinanceService from 'App/Services/Binance/BinanceService'

export default class SymbolsController {
  // private _symbolService: ISymbolService

  // constructor() {
  //   this._symbolService = new SymbolService(new SymbolRepository())
  // }

  async store() {
    const binanceService = new BinanceService()

    const symbols = await binanceService.getSymbols()

    console.log(symbols)
  }
}
