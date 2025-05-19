import React, { createContext, useContext, useState, useEffect } from 'react';
import { Currency, ExchangeRate } from '../types';
import { exchangeRates } from '../data/products';

interface CurrencyContextType {
  currency: Currency;
  setCurrency: (currency: Currency) => void;
  formatPrice: (price: number) => string;
  convertPrice: (price: number) => number;
  exchangeRates: ExchangeRate[];
}

const CurrencyContext = createContext<CurrencyContextType | undefined>(undefined);

export const CurrencyProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currency, setCurrency] = useState<Currency>('RON');
  
  // Load currency preference from localStorage on initial render
  useEffect(() => {
    const savedCurrency = localStorage.getItem('currency') as Currency;
    if (savedCurrency) {
      setCurrency(savedCurrency);
    }
  }, []);

  // Save currency preference to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('currency', currency);
  }, [currency]);

  const getCurrentRate = () => {
    return exchangeRates.find(rate => rate.currency === currency)?.rate || 1;
  };

  const getCurrentSymbol = () => {
    return exchangeRates.find(rate => rate.currency === currency)?.symbol || 'Lei';
  };

  const convertPrice = (price: number) => {
    const rate = getCurrentRate();
    return price * rate;
  };

  const formatPrice = (price: number) => {
    const convertedPrice = convertPrice(price);
    const symbol = getCurrentSymbol();
    
    // Format the price according to the current currency
    if (currency === 'RON') {
      return `${convertedPrice.toFixed(2)} ${symbol}`;
    } else {
      return `${symbol}${convertedPrice.toFixed(2)}`;
    }
  };

  return (
    <CurrencyContext.Provider value={{
      currency,
      setCurrency,
      formatPrice,
      convertPrice,
      exchangeRates
    }}>
      {children}
    </CurrencyContext.Provider>
  );
};

export const useCurrency = () => {
  const context = useContext(CurrencyContext);
  if (context === undefined) {
    throw new Error('useCurrency must be used within a CurrencyProvider');
  }
  return context;
};