export default interface IBinanceService {
  getSymbols(): Promise<Array<string>>

  getSymbolPrice(symbol: string)
}
//Promise<string[]>
