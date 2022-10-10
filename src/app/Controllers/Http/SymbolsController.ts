// import { Symbols } from 'App/Models/Symbols'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import SymbolRepository from 'App/Repositories/SymbolRepository'
import ISymbolService from 'App/Services/Symbol/Contracts/ISymbolService'
import SymbolService from 'App/Services/Symbol/SymbolService'
import BinanceSymbolIntegration from 'App/Core/Binance/SymbolIntegration/BinanceSymbolIntegration'

export default class SymbolsController {
  private _symbolService: ISymbolService

  constructor() {
    this._symbolService = new SymbolService(new SymbolRepository())
  }

  async show({ request, response }: HttpContextContract) {
    const symbol = await this._symbolService.getByName(request.param('symbol'))

    if (!symbol) return response.notFound({ message: 'Symbol not found.' })

    return response.ok(symbol.toObject())
  }

  async index({ request, response }: HttpContextContract) {
    const symbols = await this._symbolService.list(+request.all().page, +request.all().per_page)

    return response.ok(symbols)
  }

  async sync({ response }: HttpContextContract) {
    const symbolIntegration = new BinanceSymbolIntegration()

    await symbolIntegration.syncSymbols()

    return response.ok({ message: 'Syncing started' })
  }
}
