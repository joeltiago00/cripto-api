import ISymbolStore from '../../Services/Symbol/Contracts/ISymbolStore'

export default interface ISymbolReporsitory {
  store(symbolStore: ISymbolStore)
}
