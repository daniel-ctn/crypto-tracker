import {
  createContext,
  Dispatch,
  FC,
  SetStateAction,
  useContext,
  useState
} from "react";

export type Currency = "USD" | "VND"

interface CryptoContextInterface {
  currency: Currency;
  setCurrency?: Dispatch<SetStateAction<Currency>>;
}

const initialContextValue: CryptoContextInterface = {
  currency: "VND"
};

const CryptoCtx = createContext<CryptoContextInterface>(initialContextValue);

export const CryptoContext: FC = ({ children }) => {
  const [currency, setCurrency] = useState<Currency>("VND");

  return (
    <CryptoCtx.Provider value={{ currency, setCurrency }}>
      {children}
    </CryptoCtx.Provider>
  );
};

export const CryptoState = () => useContext(CryptoCtx);
