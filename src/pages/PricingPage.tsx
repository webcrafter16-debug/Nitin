import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight, ShieldCheck, HelpCircle, Sparkles, CreditCard, Clock } from 'lucide-react';
import { PRICING_PLANS } from '../data/portfolioData';
import { useCurrency } from '../context/CurrencyContext';

export const PricingPage: React.FC = () => {
  const { formatPrice, currency, setCurrencyCode } = useCurrency();

  // Interactive Project Cost Estimator state
  const [estimatedPages, setEstimatedPages] = useState<number>(5);
  const [needBookingEngine, setNeedBookingEngine] = useState<boolean>(true);
  const [needCopywriting, setNeedCopywriting] = useState<boolean>(false);
  const [needMultiLocation, setNeedMultiLocation] = useState<boolean>(false);
  const [needEcommerce, setNeedEcommerce] = useState<boolean>(false);

  // Dynamic cost calculation
  const calculateCustomEstimate = () => {
    let base = 350; // base setup
    base += estimatedPages * 110; // per page
    if (needBookingEngine) base += 180;
    if (needCopywriting) base += 220;
    if (needMultiLocation) base += 350;
    if (needEcommerce) base += 450;
    return base;
  };

  const calculatedUSD = calculateCustomEstimate();

  return (
    <div className="space-y-20 py-12">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto">
          <span className="text-xs font-semibold text-amber-400 uppercase tracking-widest block mb-2">
            Transparent Pricing Guidance
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white font-display tracking-tight mb-6">
            Fixed-Scope Packages With Zero Surprises
          </h1>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8">
            No hourly billing creep, no monthly hosting markups, and no lock-in contracts. You get complete transparency in your local currency.
          </p>

          {/* Quick Currency Selector on Pricing Page */}
          <div className="inline-flex items-center gap-2 p-1.5 bg-slate-900 border border-slate-800 rounded-xl">
            <span className="text-xs text-slate-400 pl-2 font-medium">Currency:</span>
            {(['USD', 'GBP', 'CAD', 'AUD'] as const).map((code) => (
              <button
                key={code}
                onClick={() => setCurrencyCode(code)}
                className={`px-3 py-1 rounded-lg text-xs font-mono font-semibold transition-all cursor-pointer ${
                  currency.code === code
                    ? 'bg-amber-400 text-slate-950 shadow-sm'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                {code}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Cards Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PRICING_PLANS.slice(0, 3).map((plan) => (
            <div
              key={plan.id}
              className={`bg-slate-900 border rounded-2xl p-6 sm:p-8 flex flex-col justify-between relative transition-all ${
                plan.popular
                  ? 'border-amber-400 shadow-xl shadow-amber-400/5'
                  : 'border-slate-800 hover:border-slate-700'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-amber-400 text-slate-950 text-[11px] font-black uppercase tracking-wider px-3 py-0.5 rounded-full shadow-sm">
                  Recommended For Most Trades
                </div>
              )}

              <div>
                <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
                  <span>{plan.pageCount}</span>
                  <span className="flex items-center gap-1 font-medium text-slate-300">
                    <Clock className="w-3.5 h-3.5 text-amber-400" />
                    {plan.timeline}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-white font-display mb-2">{plan.name}</h3>
                <p className="text-xs text-slate-400 leading-relaxed mb-6">{plan.tagline}</p>

                <div className="mb-6 pb-6 border-b border-slate-800">
                  <div className="text-4xl font-black text-white font-mono tracking-tight">
                    {formatPrice(plan.basePriceUSD)}
                    <span className="text-xs font-normal text-slate-400 ml-1.5">{currency.code}</span>
                  </div>
                  <span className="text-[11px] text-slate-400 block mt-1">
                    One-time fixed investment · 50/50 milestone payment
                  </span>
                </div>

                {/* Deliverables */}
                <div className="space-y-3 mb-8">
                  <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block">
                    What You Receive:
                  </span>
                  {plan.deliverables.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Link
                to="/contact"
                className={`w-full py-3 px-4 rounded-lg text-xs font-bold text-center transition-all flex items-center justify-center gap-2 ${
                  plan.popular
                    ? 'bg-amber-400 hover:bg-amber-300 text-slate-950 shadow-md'
                    : 'bg-slate-800 hover:bg-slate-700 text-white'
                }`}
              >
                <span>Select {plan.name}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>

        {/* Large Scale Enterprise & E-Commerce Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          {PRICING_PLANS.slice(3).map((plan) => (
            <div
              key={plan.id}
              className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
                  <span>{plan.pageCount}</span>
                  <span className="flex items-center gap-1 font-medium text-slate-300">
                    <Clock className="w-3.5 h-3.5 text-amber-400" />
                    {plan.timeline}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-white font-display mb-2">{plan.name}</h3>
                <p className="text-xs text-slate-400 leading-relaxed mb-6">{plan.tagline}</p>

                <div className="mb-6 pb-6 border-b border-slate-800">
                  <div className="text-3xl font-black text-white font-mono tracking-tight">
                    {formatPrice(plan.basePriceUSD)}
                    <span className="text-xs font-normal text-slate-400 ml-1.5">{currency.code}</span>
                  </div>
                </div>

                <div className="space-y-2.5 mb-8">
                  {plan.deliverables.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Link
                to="/contact"
                className="w-full py-3 px-4 rounded-lg text-xs font-bold text-center bg-slate-800 hover:bg-slate-700 text-white transition-colors flex items-center justify-center gap-2"
              >
                <span>Inquire About {plan.name}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Interactive Custom Project Cost Estimator */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900/90 border border-amber-500/30 rounded-2xl p-6 sm:p-10 shadow-2xl">
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-semibold text-amber-400 uppercase tracking-widest block mb-2">
              Interactive Scope & Price Estimator
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white font-display mb-3">
              Configure Your Custom Website Requirements
            </h2>
            <p className="text-sm text-slate-400 leading-relaxed">
              Need something between a standard 5-page site and a 20-page regional directory? Adjust the sliders and modules below for an immediate ballpark estimate.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Controls */}
            <div className="lg:col-span-7 space-y-6">
              {/* Page count */}
              <div>
                <div className="flex justify-between items-center text-xs font-semibold text-slate-300 mb-2">
                  <span>Number of Unique Custom Pages:</span>
                  <span className="font-mono text-amber-400 text-sm font-bold">{estimatedPages} Pages</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="25"
                  value={estimatedPages}
                  onChange={(e) => setEstimatedPages(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-400"
                  aria-label="Number of unique custom pages"
                />
                <div className="flex justify-between text-[11px] text-slate-500 mt-1 font-mono">
                  <span>1 Page (Lander)</span>
                  <span>10 Pages</span>
                  <span>25 Pages (Regional)</span>
                </div>
              </div>

              {/* Add-on Toggles */}
              <div className="space-y-3 pt-2">
                <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">
                  Select High-Conversion Modules:
                </span>

                <label className="flex items-center justify-between p-3 bg-slate-950/80 rounded-lg border border-slate-800 cursor-pointer hover:border-slate-700">
                  <div className="text-xs">
                    <span className="text-white font-semibold block">Online Booking / Appointment Calendar</span>
                    <span className="text-slate-400">Integrated appointment slot selector or cleaning quote engine</span>
                  </div>
                  <input
                    type="checkbox"
                    checked={needBookingEngine}
                    onChange={(e) => setNeedBookingEngine(e.target.checked)}
                    className="w-4 h-4 accent-amber-400 rounded cursor-pointer"
                  />
                </label>

                <label className="flex items-center justify-between p-3 bg-slate-950/80 rounded-lg border border-slate-800 cursor-pointer hover:border-slate-700">
                  <div className="text-xs">
                    <span className="text-white font-semibold block">Professional Copywriting & Headline Crafting</span>
                    <span className="text-slate-400">We research your competitors and write high-converting copy</span>
                  </div>
                  <input
                    type="checkbox"
                    checked={needCopywriting}
                    onChange={(e) => setNeedCopywriting(e.target.checked)}
                    className="w-4 h-4 accent-amber-400 rounded cursor-pointer"
                  />
                </label>

                <label className="flex items-center justify-between p-3 bg-slate-950/80 rounded-lg border border-slate-800 cursor-pointer hover:border-slate-700">
                  <div className="text-xs">
                    <span className="text-white font-semibold block">Multi-Location Suburb Silos (Local SEO Moat)</span>
                    <span className="text-slate-400">Dedicated catchment pages with localized response guarantees</span>
                  </div>
                  <input
                    type="checkbox"
                    checked={needMultiLocation}
                    onChange={(e) => setNeedMultiLocation(e.target.checked)}
                    className="w-4 h-4 accent-amber-400 rounded cursor-pointer"
                  />
                </label>

                <label className="flex items-center justify-between p-3 bg-slate-950/80 rounded-lg border border-slate-800 cursor-pointer hover:border-slate-700">
                  <div className="text-xs">
                    <span className="text-white font-semibold block">E-Commerce Product Catalog & Cart Engine</span>
                    <span className="text-slate-400">Online store with checkout, shipping zones, and inventory</span>
                  </div>
                  <input
                    type="checkbox"
                    checked={needEcommerce}
                    onChange={(e) => setNeedEcommerce(e.target.checked)}
                    className="w-4 h-4 accent-amber-400 rounded cursor-pointer"
                  />
                </label>
              </div>
            </div>

            {/* Price Output */}
            <div className="lg:col-span-5 bg-slate-950 border border-slate-800 rounded-xl p-6 text-center space-y-4">
              <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-widest block">
                Estimated Project Investment
              </span>
              <div className="text-4xl sm:text-5xl font-black text-amber-400 font-mono tracking-tight">
                {formatPrice(calculatedUSD)}
              </div>
              <span className="text-xs text-slate-400 block">
                Estimated in {currency.name} ({currency.code})
              </span>

              <div className="p-3 bg-slate-900 rounded-lg text-xs text-slate-300 text-left space-y-1.5 border border-slate-800/80">
                <div className="flex justify-between text-slate-400">
                  <span>50% Project Kickoff Deposit:</span>
                  <span className="font-mono text-white">{formatPrice(Math.round(calculatedUSD * 0.5))}</span>
                </div>
                <div className="flex justify-between text-slate-400">
                  <span>50% Final Upon Approval:</span>
                  <span className="font-mono text-white">{formatPrice(Math.round(calculatedUSD * 0.5))}</span>
                </div>
              </div>

              <Link
                to="/contact"
                className="w-full py-3 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold rounded-lg text-xs flex items-center justify-center gap-2 transition-colors shadow-md"
              >
                <span>Request Formal Proposal with this Scope</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Payment Milestones & Guarantees */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-slate-300">
          <div className="p-6 bg-slate-900/60 rounded-xl border border-slate-800 space-y-2">
            <CreditCard className="w-5 h-5 text-amber-400 mb-2" />
            <span className="font-bold text-white block text-sm">50/50 Milestone Protection</span>
            <p className="text-slate-400 leading-relaxed">
              You only pay a 50% deposit to start. The remaining 50% is due only when you review and approve the live working staging site on your own phone.
            </p>
          </div>

          <div className="p-6 bg-slate-900/60 rounded-xl border border-slate-800 space-y-2">
            <ShieldCheck className="w-5 h-5 text-emerald-400 mb-2" />
            <span className="font-bold text-white block text-sm">30-Day Post-Launch Warranty</span>
            <p className="text-slate-400 leading-relaxed">
              Every build comes with 30 days of free technical adjustments, bug fixes, text updates, and support to ensure your launch goes smoothly.
            </p>
          </div>

          <div className="p-6 bg-slate-900/60 rounded-xl border border-slate-800 space-y-2">
            <HelpCircle className="w-5 h-5 text-sky-400 mb-2" />
            <span className="font-bold text-white block text-sm">Zero Surprise Monthly Retainers</span>
            <p className="text-slate-400 leading-relaxed">
              We configure your site on free-tier high-speed edge hosting (Vercel/Cloudflare). You pay for your domain (~$12/year) and nothing else unless you request ongoing retainers.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
