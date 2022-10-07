import BinanceSymbolIntegration from '../app/Core/Binance/SymbolIntegration/BinanceSymbolIntegration'
import { BaseCommand } from '@adonisjs/core/build/standalone'

export default class SaveSymbolsFromBinance extends BaseCommand {
  /**
   * Command name is used to run the command
   */
  public static commandName = 'sync:symbols_from_binance'

  /**
   * Command description is displayed in the "help" output
   */
  public static description =
    'This command get symbols from Binance and save informations (name and average price).'

  public static settings = {
    /**
     * Set the following value to true, if you want to load the application
     * before running the command. Don't forget to call `node ace generate:manifest`
     * afterwards.
     */
    loadApp: false,

    /**
     * Set the following value to true, if you want this command to keep running until
     * you manually decide to exit the process. Don't forget to call
     * `node ace generate:manifest` afterwards.
     */
    stayAlive: false,
  }

  public async run() {
    const symbolIntegration = new BinanceSymbolIntegration()

    await symbolIntegration.syncSymbols()
  }
}
