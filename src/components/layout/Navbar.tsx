import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe, ChevronDown, Sparkles } from 'lucide-react';
import { useCurrency, CURRENCIES } from '../../context/CurrencyContext';
import { CurrencyCode } from '../../types';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currencyDropdownOpen, setCurrencyDropdownOpen] = useState(false);
  const { currency, setCurrencyCode } = useCurrency();
  const location = useLocation();

  const navLinks = [
    { label: 'Portfolio Demos', path: '/portfolio' },
    { label: 'Services', path: '/services' },
    { label: 'Pricing', path: '/pricing' },
    { label: 'Process', path: '/process' },
    { label: 'About', path: '/about' },
    { label: 'FAQ', path: '/faq' },
  ];

  const handleCurrencyChange = (code: CurrencyCode) => {
    setCurrencyCode(code);
    setCurrencyDropdownOpen(false);
  };

  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <header className="sticky top-0 z-40 bg-slate-950/90 backdrop-blur-md border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between gap-8">
        
        {/* Zone 1: Single text element wordmark */}
        <Link 
          to="/" 
          className="text-xl font-bold tracking-tight text-white hover:text-amber-400 transition-colors whitespace-nowrap shrink-0 flex items-center gap-2"
        >
          <span className="w-8 h-8 rounded-lg bg-gradient-to-tr from-amber-500 to-amber-300 flex items-center justify-center text-slate-950 font-black text-base shadow-sm">
            W
          </span>
          <span className="font-display tracking-tight">WebCraft <span className="text-amber-400 font-semibold">Pro</span></span>
        </Link>

        {/* Zone 2: 4–5 clean single-line text navigation links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-300">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`transition-colors whitespace-nowrap shrink-0 py-1 border-b-2 ${
                isActive(link.path)
                  ? 'text-amber-400 border-amber-400 font-semibold'
                  : 'text-slate-300 hover:text-white border-transparent'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Zone 3: 1 primary action + Currency Selector */}
        <div className="hidden sm:flex items-center gap-3 shrink-0">
          {/* Currency Switcher */}
          <div className="relative">
            <button
              onClick={() => setCurrencyDropdownOpen(!currencyDropdownOpen)}
              className="flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-medium text-slate-300 bg-slate-900 border border-slate-700/80 rounded-md hover:border-slate-600 transition-colors cursor-pointer"
              aria-label="Select currency for pricing"
              aria-expanded={currencyDropdownOpen}
            >
              <Globe className="w-3.5 h-3.5 text-slate-400" />
              <span>{currency.flag}</span>
              <span className="font-mono font-medium">{currency.code}</span>
              <ChevronDown className="w-3 h-3 text-slate-400" />
            </button>

            {currencyDropdownOpen && (
              <div 
                className="absolute right-0 mt-2 w-48 bg-slate-900 border border-slate-700 rounded-lg shadow-2xl py-1.5 z-50 animate-fade-in"
                role="menu"
              >
                <div className="px-3 py-1 text-[11px] font-semibold text-slate-400 uppercase tracking-wider border-b border-slate-800 mb-1">
                  Target Market Pricing
                </div>
                {(Object.keys(CURRENCIES) as CurrencyCode[]).map((code) => {
                  const item = CURRENCIES[code];
                  return (
                    <button
                      key={code}
                      onClick={() => handleCurrencyChange(code)}
                      className={`w-full text-left px-3 py-1.5 text-xs flex items-center justify-between transition-colors ${
                        currency.code === code ? 'bg-amber-400/10 text-amber-400 font-semibold' : 'text-slate-300 hover:bg-slate-800'
                      }`}
                      role="menuitem"
                    >
                      <span className="flex items-center gap-2">
                        <span>{item.flag}</span>
                        <span>{item.countryName}</span>
                      </span>
                      <span className="font-mono text-slate-400">{item.symbol}</span>
                    </button>
                  );
                })}
              </div>
            )}
          </div>

          {/* Primary CTA */}
          <Link
            to="/contact"
            className="px-4 py-2 text-xs font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-md transition-colors whitespace-nowrap shrink-0 shadow-sm flex items-center gap-1.5"
          >
            <Sparkles className="w-3.5 h-3.5 text-slate-950" />
            <span>Start Your Website</span>
          </Link>
        </div>

        {/* Mobile menu trigger button */}
        <div className="flex sm:hidden items-center gap-2">
          {/* Quick Currency indicator on mobile */}
          <button
            onClick={() => setCurrencyDropdownOpen(!currencyDropdownOpen)}
            className="px-2 py-1 text-xs bg-slate-900 border border-slate-800 rounded text-slate-300 flex items-center gap-1"
            aria-label="Toggle currency selector"
          >
            <span>{currency.flag}</span>
            <span className="font-mono text-[11px]">{currency.code}</span>
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-400 hover:text-white rounded-md focus:outline-none focus:ring-2 focus:ring-amber-400"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden border-t border-slate-800 bg-slate-950/98 px-4 pt-3 pb-6 space-y-3">
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-3 py-2 rounded-md text-sm font-medium ${
                  isActive(link.path)
                    ? 'bg-amber-400/10 text-amber-400 font-semibold'
                    : 'text-slate-200 hover:bg-slate-900'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="pt-3 border-t border-slate-800 flex flex-col gap-3">
            <div className="flex items-center justify-between text-xs text-slate-400 px-1">
              <span>Selected Currency:</span>
              <div className="flex gap-1.5">
                {(Object.keys(CURRENCIES) as CurrencyCode[]).map((code) => (
                  <button
                    key={code}
                    onClick={() => handleCurrencyChange(code)}
                    className={`px-2 py-0.5 rounded text-xs font-mono ${
                      currency.code === code ? 'bg-amber-400 text-slate-950 font-bold' : 'bg-slate-800 text-slate-300'
                    }`}
                  >
                    {code}
                  </button>
                ))}
              </div>
            </div>

            <Link
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-2.5 text-xs font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-md transition-colors"
            >
              Get Free Strategy & Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
