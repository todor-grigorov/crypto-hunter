import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from 'react';

export interface ICryptoContext {
  children: ReactNode;
}

const Crypto = createContext({
  currency: '',
  symbol: '',
  setCurrency: Function as React.Dispatch<React.SetStateAction<string>>,
});

const CryptoContext = ({ children }: ICryptoContext) => {
  const [currency, setCurrency] = useState('USD');
  const [symbol, setSymbol] = useState('$');

  useEffect(() => {
    if (currency === 'USD') setSymbol('$');
    else if (currency === 'EUR') setSymbol('€');
  }, [currency]);

  return (
    <Crypto.Provider value={{ currency, symbol, setCurrency }}>
      {children}
    </Crypto.Provider>
  );
};

export default CryptoContext;

export const CryptoState = () => {
  return useContext(Crypto);
};
