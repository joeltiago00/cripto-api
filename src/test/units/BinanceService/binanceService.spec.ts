import BinanceService from 'App/Services/Binance/BinanceService'
import test from 'japa'

const binanceService = new BinanceService()

test.group('Binance Service Tests', () => {
  test('when_getSymbols_OK', async (assert) => {
    const symbols = await binanceService.getSymbols()

    assert.isArray(symbols)
  }).timeout(10000)

  test('when_getSymbolPrice_OK', async (assert) => {
    const price = await binanceService.getSymbolPrice('BNBUSDT')

    assert.isString(price)
  })
})
