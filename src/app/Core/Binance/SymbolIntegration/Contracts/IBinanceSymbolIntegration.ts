export default interface IBinanceSymbolIntegration {
  syncSymbols(): Promise<void>
}
