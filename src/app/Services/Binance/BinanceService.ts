import { Spot } from '@binance/connector'
import { binance_integration } from './../../../config/app'
import IBinanceService from './Contracts/IBinanceService'
import { Console } from 'console'
import TimerUtil from '../../Utils/TimerUtil'

export default class BinanceService implements IBinanceService {
  client: Spot
  callbacks

  constructor() {
    const logger = new Console({ stdout: process.stdout, stderr: process.stderr })
    this.client = new Spot(binance_integration.api_key, binance_integration.secret_key, { logger })
    this.callbacks = {
      open: () => logger.debug('Connected with Websocket server'),
      close: () => logger.debug('Disconnected with Websocket server'),
      message: (data) => logger.info(data),
    }
  }

  async getSymbols(): Promise<Array<string>> {
    const res = await this.client.exchangeInfo().then((response) => {
      return response.data
    })

    let symbols = Array()

    res.symbols.forEach((symbol) => {
      symbols.push(symbol.symbol)
    })

    return symbols
  }

  async getSymbolPrice(symbol: string) {
    await TimerUtil.delay(1000)

    return await this.client.avgPrice(symbol).then((response) => {
      return response.data.price
    })
  }
}
