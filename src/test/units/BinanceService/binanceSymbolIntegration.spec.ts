import BinanceSymbolIntegration from 'App/Core/Binance/SymbolIntegration/BinanceSymbolIntegration'
import Symbols from 'App/Models/Symbols'
import BinanceService from 'App/Services/Binance/BinanceService'
import test from 'japa'

const binanceService = new BinanceService()

const symbolIntegration = new BinanceSymbolIntegration()

test.group('Binance Symbol Integration Tests', () => {
  test('when_sync_OK', async (assert) => {
    await symbolIntegration.syncSymbols()

    const symbols = await binanceService.getSymbols()

    const model = Boolean(await Symbols.findByOrFail('name', symbols[0]))

    assert.isTrue(model)
  }).timeout(600000)
})
