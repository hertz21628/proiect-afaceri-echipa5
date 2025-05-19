import React from 'react';
import { useCurrency } from '../../contexts/CurrencyContext';
import { Currency } from '../../types';

const CurrencySelector: React.FC = () => {
  const { currency, setCurrency, exchangeRates } = useCurrency();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCurrency(e.target.value as Currency);
  };

  return (
    <select
      value={currency}
      onChange={handleChange}
      className="bg-transparent border border-amber-400 text-amber-900 text-sm rounded-md focus:ring-amber-500 focus:border-amber-500 p-1"
    >
      {exchangeRates.map((rate) => (
        <option key={rate.currency} value={rate.currency}>
          {rate.currency}
        </option>
      ))}
    </select>
  );
};

export default CurrencySelector;