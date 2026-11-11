import React, { createContext, useContext, useState, useEffect } from 'react';
import { CurrencyCode, CurrencyConfig } from '../types';

export const CURRENCIES: Record<CurrencyCode, CurrencyConfig> = {
  USD: {
    code: 'USD',
    symbol: '$',
    name: 'US Dollar',
    rateFromUSD: 1.0,
    countryName: 'United States',
    flag: '🇺🇸',
  },
  GBP: {
    code: 'GBP',
    symbol: '£',
    name: 'British Pound',
    rateFromUSD: 0.79,
    countryName: 'United Kingdom',
    flag: '🇬🇧',
  },
  CAD: {
    code: 'CAD',
    symbol: 'CA$',
    name: 'Canadian Dollar',
    rateFromUSD: 1.38,
    countryName: 'Canada',
    flag: '🇨🇦',
  },
  AUD: {
    code: 'AUD',
    symbol: 'AU$',
    name: 'Australian Dollar',
    rateFromUSD: 1.52,
    countryName: 'Australia',
    flag: '🇦🇺',
  },
};

interface CurrencyContextType {
  currency: CurrencyConfig;
  setCurrencyCode: (code: CurrencyCode) => void;
  formatPrice: (usdAmount: number, roundToCleanHundreds?: boolean) => string;
  convertAmount: (usdAmount: number) => number;
}

const CurrencyContext = createContext<CurrencyContextType | undefined>(undefined);

export const CurrencyProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currencyCode, setCurrencyCodeState] = useState<CurrencyCode>('USD');

  useEffect(() => {
    try {
      const saved = localStorage.getItem('webcraft_currency') as CurrencyCode | null;
      if (saved && CURRENCIES[saved]) {
        setCurrencyCodeState(saved);
      }
    } catch {
      // ignore localStorage failures
    }
  }, []);

  const setCurrencyCode = (code: CurrencyCode) => {
    setCurrencyCodeState(code);
    try {
      localStorage.setItem('webcraft_currency', code);
    } catch {
      // ignore
    }
  };

  const currency = CURRENCIES[currencyCode];

  const convertAmount = (usdAmount: number): number => {
    return Math.round(usdAmount * currency.rateFromUSD);
  };

  const formatPrice = (usdAmount: number, roundToCleanHundreds = false): string => {
    const raw = usdAmount * currency.rateFromUSD;
    let finalAmount = Math.round(raw);
    if (roundToCleanHundreds && finalAmount > 300) {
      // Clean retail pricing ending in 9 or 5 for natural market feel
      finalAmount = Math.round(finalAmount / 10) * 10 - 1;
    }
    return `${currency.symbol}${finalAmount.toLocaleString()}`;
  };

  return (
    <CurrencyContext.Provider value={{ currency, setCurrencyCode, formatPrice, convertAmount }}>
      {children}
    </CurrencyContext.Provider>
  );
};

export const useCurrency = (): CurrencyContextType => {
  const context = useContext(CurrencyContext);
  if (!context) {
    throw new Error('useCurrency must be used within a CurrencyProvider');
  }
  return context;
};
