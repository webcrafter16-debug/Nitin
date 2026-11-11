import React, { useState } from 'react';
import { DollarSign, TrendingUp, Sparkles, ArrowRight } from 'lucide-react';
import { useCurrency } from '../../context/CurrencyContext';
import { Link } from 'react-router-dom';

interface IndustryPreset {
  name: string;
  defaultTicketUSD: number;
  typicalNewLeadsPerMonth: number;
}

const PRESETS: IndustryPreset[] = [
  { name: 'Emergency Plumber / HVAC', defaultTicketUSD: 650, typicalNewLeadsPerMonth: 5 },
  { name: 'Roofing & Storm Restoration', defaultTicketUSD: 4500, typicalNewLeadsPerMonth: 2 },
  { name: 'Cosmetic & Family Dentist', defaultTicketUSD: 850, typicalNewLeadsPerMonth: 6 },
  { name: 'Residential & Commercial Cleaning', defaultTicketUSD: 240, typicalNewLeadsPerMonth: 8 },
  { name: 'Licensed Electrician / EV Tech', defaultTicketUSD: 520, typicalNewLeadsPerMonth: 4 },
  { name: 'Landscaping & Hardscape Patio', defaultTicketUSD: 2200, typicalNewLeadsPerMonth: 3 },
  { name: 'Boutique Salon / Aesthetician', defaultTicketUSD: 160, typicalNewLeadsPerMonth: 12 },
];

export const RoiCalculator: React.FC = () => {
  const { formatPrice, convertAmount, currency } = useCurrency();
  const [selectedIndustry, setSelectedIndustry] = useState(PRESETS[0].name);
  const [ticketPriceUSD, setTicketPriceUSD] = useState(PRESETS[0].defaultTicketUSD);
  const [newLeadsPerMonth, setNewLeadsPerMonth] = useState(PRESETS[0].typicalNewLeadsPerMonth);

  const handleIndustryChange = (name: string) => {
    setSelectedIndustry(name);
    const found = PRESETS.find(p => p.name === name);
    if (found) {
      setTicketPriceUSD(found.defaultTicketUSD);
      setNewLeadsPerMonth(found.typicalNewLeadsPerMonth);
    }
  };

  const monthlyExtraUSD = ticketPriceUSD * newLeadsPerMonth;
  const annualExtraUSD = monthlyExtraUSD * 12;

  // Assume WebCraft Pro signature 5-page site cost ($899 USD)
  const websiteCostUSD = 899;
  const daysToBreakeven = Math.max(1, Math.round((websiteCostUSD / (monthlyExtraUSD / 30))));

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-xl">
      <div className="max-w-3xl mb-8">
        <span className="text-amber-400 text-xs font-semibold uppercase tracking-wider block mb-2">
          Interactive ROI Estimation Tool
        </span>
        <h3 className="text-2xl sm:text-3xl font-bold text-white font-display mb-3">
          Calculate Your Projected Client Acquisition Return
        </h3>
        <p className="text-sm text-slate-400 leading-relaxed">
          Most small business websites fail because they look dated, load sluggishly, and bury phone numbers. See what happens to your balance sheet when just a few extra monthly leads convert through a bespoke WebCraft Pro build.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Controls */}
        <div className="lg:col-span-7 space-y-6">
          {/* Industry Preset Selector */}
          <div>
            <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
              Select Your Trade or Service Category
            </label>
            <select
              value={selectedIndustry}
              onChange={(e) => handleIndustryChange(e.target.value)}
              className="w-full bg-slate-950 border border-slate-700 text-slate-100 rounded-lg px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400"
            >
              {PRESETS.map((preset) => (
                <option key={preset.name} value={preset.name}>
                  {preset.name}
                </option>
              ))}
            </select>
          </div>

          {/* Average Ticket Size Slider */}
          <div>
            <div className="flex justify-between items-center text-xs font-semibold mb-2">
              <span className="text-slate-300">Average Revenue Per Job / Client:</span>
              <span className="font-mono text-amber-400 text-sm font-bold">
                {formatPrice(ticketPriceUSD)} {currency.code}
              </span>
            </div>
            <input
              type="range"
              min="100"
              max="5000"
              step="50"
              value={ticketPriceUSD}
              onChange={(e) => setTicketPriceUSD(Number(e.target.value))}
              className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-400"
              aria-label="Average ticket size in USD"
            />
            <div className="flex justify-between text-[11px] text-slate-500 mt-1 font-mono">
              <span>{formatPrice(100)}</span>
              <span>{formatPrice(2500)}</span>
              <span>{formatPrice(5000)}</span>
            </div>
          </div>

          {/* Additional Monthly Leads Slider */}
          <div>
            <div className="flex justify-between items-center text-xs font-semibold mb-2">
              <span className="text-slate-300">Modest New Monthly Bookings from Modern Website:</span>
              <span className="font-mono text-amber-400 text-sm font-bold">
                +{newLeadsPerMonth} jobs / month
              </span>
            </div>
            <input
              type="range"
              min="1"
              max="20"
              step="1"
              value={newLeadsPerMonth}
              onChange={(e) => setNewLeadsPerMonth(Number(e.target.value))}
              className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-400"
              aria-label="Additional monthly bookings"
            />
            <div className="flex justify-between text-[11px] text-slate-500 mt-1 font-mono">
              <span>+1 booking</span>
              <span>+10 bookings</span>
              <span>+20 bookings</span>
            </div>
          </div>
        </div>

        {/* Output Card */}
        <div className="lg:col-span-5 bg-gradient-to-b from-slate-950 to-slate-900 border border-amber-500/30 rounded-xl p-6 relative overflow-hidden">
          <div className="text-xs text-amber-400 font-semibold mb-1 flex items-center gap-1.5">
            <TrendingUp className="w-4 h-4" />
            <span>Projected Growth Impact</span>
          </div>
          
          <div className="my-4 pb-4 border-b border-slate-800">
            <span className="text-[11px] uppercase tracking-wider text-slate-400 block mb-1">
              Estimated Extra Monthly Revenue
            </span>
            <div className="text-3xl font-black text-white font-mono tracking-tight">
              +{formatPrice(monthlyExtraUSD)}
              <span className="text-xs font-normal text-slate-400 ml-1.5">/ mo</span>
            </div>
          </div>

          <div className="my-4 pb-4 border-b border-slate-800">
            <span className="text-[11px] uppercase tracking-wider text-slate-400 block mb-1">
              Estimated Annual Revenue Lift
            </span>
            <div className="text-2xl font-bold text-amber-400 font-mono tracking-tight">
              +{formatPrice(annualExtraUSD)}
              <span className="text-xs font-normal text-slate-400 ml-1.5">/ yr</span>
            </div>
          </div>

          <div className="bg-slate-900/90 rounded-lg p-3 text-xs text-slate-300 mb-5 flex items-center justify-between">
            <span>Est. Payback Timeline:</span>
            <span className="font-mono font-bold text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800/60">
              ~{daysToBreakeven} Days
            </span>
          </div>

          <Link
            to="/contact"
            className="w-full py-2.5 px-4 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold rounded-lg text-xs flex items-center justify-center gap-2 transition-colors shadow-md"
          >
            <span>Lock In Your Discovery Call</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};
