import React, { useState } from 'react';
import { DemoBanner } from '../../components/common/DemoBanner';
import { Sparkles, Phone, CheckCircle2, ShieldCheck, Star, Calendar, Clock, ArrowRight } from 'lucide-react';

export const CleaningDemo: React.FC = () => {
  // Quote Calculator State
  const [bedrooms, setBedrooms] = useState(2);
  const [bathrooms, setBathrooms] = useState(2);
  const [cleanType, setCleanType] = useState<'standard' | 'deep' | 'move'>('standard');
  const [frequency, setFrequency] = useState<'onetime' | 'biweekly' | 'monthly'>('biweekly');
  const [bookingConfirmed, setBookingConfirmed] = useState(false);

  // Client-side instant pricing formula
  const calculatePrice = () => {
    let base = 85;
    base += bedrooms * 25;
    base += bathrooms * 35;
    if (cleanType === 'deep') base += 65;
    if (cleanType === 'move') base += 95;
    if (frequency === 'biweekly') base = base * 0.85; // 15% discount
    if (frequency === 'monthly') base = base * 0.90; // 10% discount
    return Math.round(base);
  };

  const calculatedQuote = calculatePrice();

  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen">
      {/* Persistent Demo Navigation Bar */}
      <DemoBanner
        conceptName="SparkleCraft Pro Cleaners"
        categoryLabel="Local Home Cleaning"
        pageTierLabel="1-Page Lead Funnel"
        specs={[
          'Instant interactive price calculation engine',
          'Single-page zero-distraction conversion layout',
          'Sticky tap-to-call emergency dispatch bar',
          'Clean checklist comparison (Standard vs Deep vs Move-Out)',
          '99/100 Mobile Google Lighthouse speed score'
        ]}
      />

      {/* Top Trade Bar */}
      <div className="bg-slate-900 border-b border-slate-800 text-xs py-2 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between text-slate-300">
          <div className="flex items-center gap-3">
            <span className="text-amber-400 font-semibold flex items-center gap-1">
              <ShieldCheck className="w-4 h-4" /> 100% Bonded & Background Checked
            </span>
            <span className="hidden sm:inline text-slate-600">|</span>
            <span className="hidden sm:inline text-slate-400">Serving Greater Metro & Surrounding Suburbs</span>
          </div>
          <a
            href="tel:18005550199"
            className="flex items-center gap-1.5 font-bold text-amber-400 hover:text-amber-300"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>(800) 555-0199</span>
          </a>
        </div>
      </div>

      {/* Hero with Instant Quote Engine */}
      <section className="relative py-12 sm:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-semibold text-amber-400 uppercase tracking-widest block">
              Residential & Commercial Cleaning Experts
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white font-display tracking-tight leading-tight">
              Hospital-Grade Cleanliness For Your Home & Office
            </h1>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Vetted cleaners, non-toxic eco supplies, and a 100% Sparkle Guarantee. Calculate your fixed quote in 30 seconds and book your preferred arrival window.
            </p>

            <div className="space-y-3 pt-2 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>All equipment & eco-friendly detergents provided at zero extra cost</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Zero lock-in contracts: Skip, reschedule, or cancel anytime with 24h notice</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Backed by $2,000,000 commercial liability & property bond</span>
              </div>
            </div>
          </div>

          {/* Right Column: Instant Quote & Booking Engine */}
          <div className="lg:col-span-6 bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-2xl">
            {bookingConfirmed ? (
              <div className="text-center py-8 space-y-4 animate-fade-in">
                <div className="w-14 h-14 rounded-full bg-emerald-950 border border-emerald-500 flex items-center justify-center text-emerald-400 mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-white font-display">Quote Reserved!</h3>
                <p className="text-xs text-slate-300 max-w-sm mx-auto leading-relaxed">
                  In this working concept demonstration, your customized quote of <strong>${calculatedQuote}</strong> has been saved. Your local dispatch crew will reach out within 15 minutes.
                </p>
                <button
                  onClick={() => setBookingConfirmed(false)}
                  className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-lg text-xs font-semibold"
                >
                  Adjust Quote Parameters
                </button>
              </div>
            ) : (
              <div className="space-y-6">
                <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                  <div>
                    <h3 className="text-lg font-bold text-white font-display">Instant Online Quote</h3>
                    <p className="text-xs text-slate-400">No hidden fees, no home visit required</p>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] text-slate-400 block uppercase font-mono">Estimated Rate</span>
                    <span className="text-2xl font-black text-amber-400 font-mono">${calculatedQuote}</span>
                  </div>
                </div>

                {/* Bedrooms & Bathrooms */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Bedrooms: {bedrooms}
                    </label>
                    <div className="flex gap-1.5">
                      {[1, 2, 3, 4, 5].map((num) => (
                        <button
                          key={num}
                          type="button"
                          onClick={() => setBedrooms(num)}
                          className={`flex-1 py-1.5 text-xs rounded font-bold cursor-pointer transition-colors ${
                            bedrooms === num ? 'bg-amber-400 text-slate-950' : 'bg-slate-950 text-slate-300 hover:bg-slate-800'
                          }`}
                        >
                          {num}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Bathrooms: {bathrooms}
                    </label>
                    <div className="flex gap-1.5">
                      {[1, 2, 3, 4].map((num) => (
                        <button
                          key={num}
                          type="button"
                          onClick={() => setBathrooms(num)}
                          className={`flex-1 py-1.5 text-xs rounded font-bold cursor-pointer transition-colors ${
                            bathrooms === num ? 'bg-amber-400 text-slate-950' : 'bg-slate-950 text-slate-300 hover:bg-slate-800'
                          }`}
                        >
                          {num}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Clean Type */}
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Service Scope
                  </label>
                  <div className="grid grid-cols-3 gap-2 text-xs">
                    {[
                      { id: 'standard', label: 'Standard Recurring' },
                      { id: 'deep', label: 'Deep Spring Clean' },
                      { id: 'move', label: 'Move In / Move Out' }
                    ].map((type) => (
                      <button
                        key={type.id}
                        type="button"
                        onClick={() => setCleanType(type.id as any)}
                        className={`p-2 rounded-lg text-left transition-colors cursor-pointer border ${
                          cleanType === type.id
                            ? 'bg-amber-400/10 border-amber-400 text-amber-300 font-semibold'
                            : 'bg-slate-950 border-slate-800 text-slate-300 hover:border-slate-700'
                        }`}
                      >
                        <span className="block text-xs font-bold leading-tight">{type.label}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Frequency */}
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Cleaning Schedule
                  </label>
                  <div className="grid grid-cols-3 gap-2 text-xs">
                    {[
                      { id: 'biweekly', label: 'Bi-Weekly (Save 15%)' },
                      { id: 'monthly', label: 'Monthly (Save 10%)' },
                      { id: 'onetime', label: 'One-Time Clean' }
                    ].map((freq) => (
                      <button
                        key={freq.id}
                        type="button"
                        onClick={() => setFrequency(freq.id as any)}
                        className={`p-2 rounded text-center transition-colors cursor-pointer border ${
                          frequency === freq.id
                            ? 'bg-amber-400 text-slate-950 font-bold border-amber-400'
                            : 'bg-slate-950 text-slate-400 border-slate-800 hover:text-white'
                        }`}
                      >
                        {freq.label}
                      </button>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => setBookingConfirmed(true)}
                  className="w-full py-3 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold rounded-lg text-xs flex items-center justify-center gap-2 transition-colors shadow-md cursor-pointer"
                >
                  <span>Book Cleaning Slot for ${calculatedQuote}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Cleaning Checklist Comparison */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t border-slate-900">
        <div className="max-w-2xl mb-8">
          <h2 className="text-2xl font-bold text-white font-display">
            Comprehensive Cleaning Checklist
          </h2>
          <p className="text-xs text-slate-400">
            Every room is inspected against our 48-point quality audit checklist before our cleaners depart.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-slate-300">
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 space-y-3">
            <h3 className="font-bold text-white text-sm">Kitchens & Dining</h3>
            <ul className="space-y-1.5 text-slate-400">
              <li>• Countertop degreasing & disinfection</li>
              <li>• Exterior & interior microwave scrubbing</li>
              <li>• Stovetop and burner grate polishing</li>
              <li>• Chrome sink polishing & drain sanitization</li>
            </ul>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 space-y-3">
            <h3 className="font-bold text-white text-sm">Bathrooms & Washrooms</h3>
            <ul className="space-y-1.5 text-slate-400">
              <li>• Tile grout mildew mitigation & scrubbing</li>
              <li>• Glass shower screen limescale removal</li>
              <li>• Porcelain toilet bowl sanitization inside & out</li>
              <li>• Vanity mirrors & faucet chrome buffing</li>
            </ul>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 space-y-3">
            <h3 className="font-bold text-white text-sm">Living & Bedrooms</h3>
            <ul className="space-y-1.5 text-slate-400">
              <li>• HEPA vacuuming under accessible furniture</li>
              <li>• Baseboard, ceiling fan & blinds wet dusting</li>
              <li>• Linen changing & mattress freshening</li>
              <li>• Hardwood floor mopping with eco neutral wash</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};
