import {
  createContext,
  Dispatch,
  FC,
  SetStateAction,
  useContext,
  useState,
} from 'react'

export interface Currency {
  value: string
  symbol: string
}

interface CryptoContextInterface {
  currency: Currency;
  setCurrency?: Dispatch<SetStateAction<Currency>>;
}

const initialContextValue: CryptoContextInterface = {
  currency: {
    value: 'vnd',
    symbol: 'VND ',
  },
}

const CryptoCtx = createContext<CryptoContextInterface>(initialContextValue)

export const CryptoContext: FC = ({ children }) => {
  const [currency, setCurrency] = useState<Currency>(initialContextValue.currency)

  return (
    <CryptoCtx.Provider value={{ currency, setCurrency }}>
      {children}
    </CryptoCtx.Provider>
  )
}

export const CryptoState = () => useContext(CryptoCtx)
