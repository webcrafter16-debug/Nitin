import React, { useState } from 'react';
import { DemoBanner } from '../../components/common/DemoBanner';
import { Phone, AlertCircle, Wrench, Flame, Droplets, Shield, Clock, CheckCircle2, MapPin, Calculator, ArrowRight } from 'lucide-react';

type PlumbingPageTab = 
  | 'home'
  | 'emergency'
  | 'boilers'
  | 'drains'
  | 'relining'
  | 'commercial'
  | 'service-areas'
  | 'pricing'
  | 'financing'
  | 'contact';

export const PlumbingDemo: React.FC = () => {
  const [activeTab, setActiveTab] = useState<PlumbingPageTab>('home');
  const [postcode, setPostcode] = useState('');
  const [postcodeStatus, setPostcodeStatus] = useState<string | null>(null);

  // Financing calculator state
  const [boilerCost, setBoilerCost] = useState(2800);
  const [financeMonths, setFinanceMonths] = useState(24);

  const calculateMonthly = () => {
    return (boilerCost / financeMonths).toFixed(2);
  };

  const handlePostcodeCheck = (e: React.FormEvent) => {
    e.preventDefault();
    if (!postcode.trim()) return;
    setPostcodeStatus(`✓ Area Confirmed: Technician Crew #4 is currently on standby near ${postcode.toUpperCase()}. Estimated emergency arrival: 28–35 minutes.`);
  };

  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen">
      {/* Persistent Demo Navigation Bar */}
      <DemoBanner
        conceptName="Apex Flow Plumbing & Heating"
        categoryLabel="Licensed Master Contractors"
        pageTierLabel="10-Page Trade Dominance Architecture"
        specs={[
          '10 dedicated service & location authority sub-pages',
          'Instant 24/7 emergency dispatch tap-to-call bar',
          'Interactive postcode / ZIP territory eligibility tool',
          'Interactive 0% interest boiler financing calculator',
          'Local Gas Safe & Master Plumber trust framework'
        ]}
      />

      {/* 24/7 Emergency Dispatch Strip */}
      <div className="bg-rose-950 border-b border-rose-800 text-rose-200 py-2.5 px-4 text-xs font-semibold">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500 animate-pulse" />
            <span className="text-white font-bold">24/7 EMERGENCY LEAK & BOILER HOTLINE:</span>
            <span className="hidden sm:inline text-rose-300">Average London & Metro arrival under 45 minutes</span>
          </div>
          <a
            href="tel:0800123456"
            className="bg-rose-600 hover:bg-rose-500 text-white font-black px-3.5 py-1 rounded text-xs transition-colors flex items-center gap-1.5 shadow-sm"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>DISPATCH AN ENGINEER NOW</span>
          </a>
        </div>
      </div>

      {/* Apex Flow Brand Header & 10-Page Navigation */}
      <header className="bg-slate-900 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-16 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded bg-cyan-600 flex items-center justify-center text-white font-black">
                <Droplets className="w-5 h-5" />
              </div>
              <div>
                <span className="text-lg font-bold text-white tracking-tight">Apex Flow</span>
                <span className="text-xs text-cyan-400 block -mt-1 font-mono">Plumbing & Heating Ltd</span>
              </div>
            </div>

            <div className="hidden lg:flex items-center gap-4 text-xs">
              <span className="text-slate-400">Gas Safe Reg #583921</span>
              <span className="text-slate-600">·</span>
              <span className="text-slate-400">CIPHE Master Guild Member</span>
            </div>
          </div>

          {/* 10-Page Sub-Navigation Tabs */}
          <nav className="flex items-center gap-1 overflow-x-auto pb-3 text-xs font-medium no-scrollbar">
            {[
              { id: 'home', label: '1. Overview' },
              { id: 'emergency', label: '2. 24/7 Emergency' },
              { id: 'boilers', label: '3. Boilers & Heating' },
              { id: 'drains', label: '4. Drain Jetting' },
              { id: 'relining', label: '5. Pipe Relining' },
              { id: 'commercial', label: '6. Commercial' },
              { id: 'service-areas', label: '7. Service Areas' },
              { id: 'pricing', label: '8. Flat-Rate Pricing' },
              { id: 'financing', label: '9. 0% Financing' },
              { id: 'contact', label: '10. Book Engineer' },
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id as PlumbingPageTab)}
                className={`px-3 py-1.5 rounded-lg whitespace-nowrap transition-colors cursor-pointer ${
                  activeTab === tab.id
                    ? 'bg-cyan-600 text-white font-bold'
                    : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </nav>
        </div>
      </header>

      {/* Dynamic 10-Page Content Switcher */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        
        {/* PAGE 1: HOME */}
        {activeTab === 'home' && (
          <div className="space-y-12 animate-fade-in">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-5">
                <span className="text-xs font-semibold text-cyan-400 uppercase tracking-widest block">
                  Trusted By 4,200+ Local Homeowners & Businesses
                </span>
                <h1 className="text-3xl sm:text-5xl font-black text-white font-display leading-tight">
                  Transparent Flat-Rate Plumbing & Heating Engineers
                </h1>
                <p className="text-sm text-slate-300 leading-relaxed">
                  No hidden call-out charges. We diagnose your issue upfront, give you a fixed quote before starting work, and guarantee all labor for a full 12 months.
                </p>

                {/* Postcode Eligibility Tool */}
                <form onSubmit={handlePostcodeCheck} className="p-4 bg-slate-900 border border-slate-800 rounded-xl space-y-3">
                  <span className="text-xs font-semibold text-white block">
                    Check Real-Time Van Availability Near You:
                  </span>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={postcode}
                      onChange={(e) => setPostcode(e.target.value)}
                      placeholder="Enter Postcode / ZIP (e.g. SW1 or 75001)"
                      className="px-3 py-2 bg-slate-950 border border-slate-700 rounded-lg text-xs text-white uppercase focus:outline-none focus:ring-2 focus:ring-cyan-500 flex-1"
                    />
                    <button
                      type="submit"
                      className="px-4 py-2 bg-cyan-600 hover:bg-cyan-500 text-white font-bold text-xs rounded-lg transition-colors cursor-pointer whitespace-nowrap"
                    >
                      Check Availability
                    </button>
                  </div>
                  {postcodeStatus && (
                    <p className="text-xs text-emerald-400 font-medium bg-emerald-950/60 p-2.5 rounded border border-emerald-900/60">
                      {postcodeStatus}
                    </p>
                  )}
                </form>
              </div>

              {/* Service Cards Triad */}
              <div className="lg:col-span-5 space-y-4">
                <div 
                  onClick={() => setActiveTab('emergency')} 
                  className="p-5 bg-slate-900 border border-slate-800 hover:border-cyan-500/50 rounded-xl cursor-pointer transition-all"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <Clock className="w-5 h-5 text-rose-400" />
                    <h3 className="font-bold text-white text-base">Emergency 24/7 Burst Pipes</h3>
                  </div>
                  <p className="text-xs text-slate-400">Rapid isolation and repair of catastrophic water leaks within 45 minutes.</p>
                </div>

                <div 
                  onClick={() => setActiveTab('boilers')} 
                  className="p-5 bg-slate-900 border border-slate-800 hover:border-cyan-500/50 rounded-xl cursor-pointer transition-all"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <Flame className="w-5 h-5 text-amber-400" />
                    <h3 className="font-bold text-white text-base">Boiler Replacements & Service</h3>
                  </div>
                  <p className="text-xs text-slate-400">Worcester Bosch & Vaillant accredited installers with 10-year guarantees.</p>
                </div>

                <div 
                  onClick={() => setActiveTab('drains')} 
                  className="p-5 bg-slate-900 border border-slate-800 hover:border-cyan-500/50 rounded-xl cursor-pointer transition-all"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <Droplets className="w-5 h-5 text-cyan-400" />
                    <h3 className="font-bold text-white text-base">High-Pressure Hydro Drain Jetting</h3>
                  </div>
                  <p className="text-xs text-slate-400">4,000 PSI commercial scouring and HD CCTV camera surveys.</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* PAGE 2: EMERGENCY */}
        {activeTab === 'emergency' && (
          <div className="space-y-6 max-w-4xl animate-fade-in">
            <span className="text-xs font-semibold text-rose-400 uppercase tracking-wider block">Priority Emergency Division</span>
            <h2 className="text-3xl font-bold text-white font-display">24-Hour Emergency Dispatch Protocol</h2>
            <p className="text-sm text-slate-300 leading-relaxed">
              Plumbing disasters do not adhere to business hours. Our on-call engineers are equipped with mobile stock warehouses capable of solving 90% of emergencies on the first visit.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              <div className="p-4 bg-slate-900 border border-slate-800 rounded-xl space-y-2">
                <span className="font-bold text-white block text-sm">Burst Pipes & Flooding</span>
                <p className="text-slate-400">Immediate mechanical isolation, water extraction advisory, and rapid copper/PEX pipe splicing.</p>
              </div>
              <div className="p-4 bg-slate-900 border border-slate-800 rounded-xl space-y-2">
                <span className="font-bold text-white block text-sm">Dangerous Gas Leaks</span>
                <p className="text-slate-400">Certified Gas Safe tracing, pressure testing, and certified leak repairs to make appliances safe.</p>
              </div>
            </div>
          </div>
        )}

        {/* PAGE 3: BOILERS */}
        {activeTab === 'boilers' && (
          <div className="space-y-6 max-w-4xl animate-fade-in">
            <span className="text-xs font-semibold text-cyan-400 uppercase tracking-wider block">Heating Division</span>
            <h2 className="text-3xl font-bold text-white font-display">A-Rated Energy Efficient Boiler Upgrades</h2>
            <p className="text-sm text-slate-300 leading-relaxed">
              Cut your monthly heating bills by up to 35% with a modern condensing combi-boiler. We provide next-day installations with 10-year manufacturer warranties.
            </p>
            <div className="p-5 bg-slate-900 border border-slate-800 rounded-xl text-xs space-y-3">
              <h4 className="font-bold text-white text-sm">Standard Installation Inclusions:</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-slate-300">
                <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-cyan-400" /> Magnetic system power-flush</span>
                <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-cyan-400" /> Wireless smart thermostat install</span>
                <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-cyan-400" /> Old boiler decommissioning & removal</span>
                <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-cyan-400" /> Gas Safe building regulations certificate</span>
              </div>
            </div>
          </div>
        )}

        {/* PAGE 4: DRAINS */}
        {activeTab === 'drains' && (
          <div className="space-y-6 max-w-4xl animate-fade-in">
            <span className="text-xs font-semibold text-cyan-400 uppercase tracking-wider block">Drainage Engineering</span>
            <h2 className="text-3xl font-bold text-white font-display">High-Pressure Hydro Drain Jetting</h2>
            <p className="text-sm text-slate-300 leading-relaxed">
              When standard rods fail, our 4,000 PSI high-velocity water jetting clears stubborn grease, fatbergs, scale, and intrusive tree roots permanently.
            </p>
          </div>
        )}

        {/* PAGE 5: RELINING */}
        {activeTab === 'relining' && (
          <div className="space-y-6 max-w-4xl animate-fade-in">
            <span className="text-xs font-semibold text-cyan-400 uppercase tracking-wider block">Trenchless Technology</span>
            <h2 className="text-3xl font-bold text-white font-display">No-Dig CIPP Epoxy Sewer Relining</h2>
            <p className="text-sm text-slate-300 leading-relaxed">
              Save thousands on digging up your driveway or garden patio. We insert an epoxy resin bladder that creates a brand new, impervious pipe inside your old broken line.
            </p>
          </div>
        )}

        {/* PAGE 6: COMMERCIAL */}
        {activeTab === 'commercial' && (
          <div className="space-y-6 max-w-4xl animate-fade-in">
            <span className="text-xs font-semibold text-cyan-400 uppercase tracking-wider block">Commercial Facilities</span>
            <h2 className="text-3xl font-bold text-white font-display">Commercial Plant Rooms & Restaurants</h2>
            <p className="text-sm text-slate-300 leading-relaxed">
              Tailored service level agreements for commercial kitchens, high-density residential buildings, and office parks with guaranteed response windows.
            </p>
          </div>
        )}

        {/* PAGE 7: SERVICE AREAS */}
        {activeTab === 'service-areas' && (
          <div className="space-y-6 max-w-4xl animate-fade-in">
            <span className="text-xs font-semibold text-cyan-400 uppercase tracking-wider block">Territory Catchment</span>
            <h2 className="text-3xl font-bold text-white font-display">Regional Service Areas & Suburbs</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
              {['Central District', 'North Metro Corridors', 'West Valley Estates', 'South County Suburbs', 'East Logistics Park', 'Riverside Quays', 'Highland Commons', 'Old Town Heritage'].map((area) => (
                <div key={area} className="p-3 bg-slate-900 border border-slate-800 rounded-lg text-slate-300 flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                  <span>{area}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* PAGE 8: PRICING */}
        {activeTab === 'pricing' && (
          <div className="space-y-6 max-w-4xl animate-fade-in">
            <span className="text-xs font-semibold text-cyan-400 uppercase tracking-wider block">Zero Surprise Guarantee</span>
            <h2 className="text-3xl font-bold text-white font-display">Transparent Flat-Rate Price Guide</h2>
            <div className="space-y-3 text-xs">
              <div className="flex justify-between items-center p-3.5 bg-slate-900 rounded-lg border border-slate-800">
                <span className="font-semibold text-white">Standard Diagnostic & Small Repair (Up to 1 hour)</span>
                <span className="font-mono font-bold text-cyan-400">$95 / £80 fixed</span>
              </div>
              <div className="flex justify-between items-center p-3.5 bg-slate-900 rounded-lg border border-slate-800">
                <span className="font-semibold text-white">Hydro Drain Jetting & CCTV Diagnostic Survey</span>
                <span className="font-mono font-bold text-cyan-400">$190 / £160 fixed</span>
              </div>
              <div className="flex justify-between items-center p-3.5 bg-slate-900 rounded-lg border border-slate-800">
                <span className="font-semibold text-white">Complete Combi-Boiler Replacement (Supply & Fit)</span>
                <span className="font-mono font-bold text-cyan-400">From $2,200 / £1,850</span>
              </div>
            </div>
          </div>
        )}

        {/* PAGE 9: FINANCING */}
        {activeTab === 'financing' && (
          <div className="space-y-6 max-w-4xl animate-fade-in">
            <span className="text-xs font-semibold text-cyan-400 uppercase tracking-wider block">Affordable Payment Plans</span>
            <h2 className="text-3xl font-bold text-white font-display">0% APR Heating & Boiler Financing</h2>
            <p className="text-sm text-slate-300 leading-relaxed">
              Spread the cost of your new boiler or major plumbing repair over 12, 24, or 36 months with zero interest.
            </p>

            <div className="p-6 bg-slate-900 border border-slate-800 rounded-xl space-y-5">
              <div>
                <div className="flex justify-between text-xs font-semibold mb-2">
                  <span className="text-slate-300">Total System Estimate:</span>
                  <span className="font-mono text-cyan-400 font-bold">${boilerCost}</span>
                </div>
                <input
                  type="range"
                  min="1500"
                  max="6000"
                  step="100"
                  value={boilerCost}
                  onChange={(e) => setBoilerCost(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded appearance-none cursor-pointer accent-cyan-400"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-2">Repayment Period:</label>
                <div className="flex gap-2">
                  {[12, 24, 36].map((months) => (
                    <button
                      key={months}
                      onClick={() => setFinanceMonths(months)}
                      className={`flex-1 py-2 text-xs rounded font-bold transition-colors cursor-pointer ${
                        financeMonths === months ? 'bg-cyan-600 text-white' : 'bg-slate-950 text-slate-300 hover:bg-slate-800'
                      }`}
                    >
                      {months} Months
                    </button>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                <div>
                  <span className="text-[11px] text-slate-400 block uppercase">Monthly Installment</span>
                  <div className="text-3xl font-black text-cyan-400 font-mono">${calculateMonthly()} <span className="text-xs font-normal text-slate-400">/ mo</span></div>
                </div>
                <button
                  onClick={() => setActiveTab('contact')}
                  className="px-4 py-2 bg-cyan-600 hover:bg-cyan-500 text-white font-bold text-xs rounded-lg transition-colors cursor-pointer"
                >
                  Apply Online (Soft Check)
                </button>
              </div>
            </div>
          </div>
        )}

        {/* PAGE 10: CONTACT */}
        {activeTab === 'contact' && (
          <div className="space-y-6 max-w-2xl animate-fade-in">
            <span className="text-xs font-semibold text-cyan-400 uppercase tracking-wider block">Direct Booking</span>
            <h2 className="text-3xl font-bold text-white font-display">Schedule a Certified Engineer</h2>
            <p className="text-sm text-slate-300 leading-relaxed">
              Book a guaranteed two-hour arrival window. You will receive an SMS when the engineer is 20 minutes away.
            </p>
            <div className="p-6 bg-slate-900 border border-slate-800 rounded-xl space-y-4 text-xs">
              <div>
                <label className="block text-slate-300 font-semibold mb-1">Your Full Name</label>
                <input type="text" placeholder="Sarah Jenkins" className="w-full p-2.5 bg-slate-950 border border-slate-700 rounded text-white" />
              </div>
              <div>
                <label className="block text-slate-300 font-semibold mb-1">Phone Number</label>
                <input type="tel" placeholder="+44 7700 900077" className="w-full p-2.5 bg-slate-950 border border-slate-700 rounded text-white" />
              </div>
              <div>
                <label className="block text-slate-300 font-semibold mb-1">Service Required</label>
                <select className="w-full p-2.5 bg-slate-950 border border-slate-700 rounded text-white">
                  <option>Boiler Service / Breakdown</option>
                  <option>Blocked Drain / Bad Odor</option>
                  <option>Emergency Water Leak</option>
                  <option>Bathroom Plumbing Rough-In</option>
                </select>
              </div>
              <button
                type="button"
                onClick={() => alert('Demo booking confirmed for Apex Flow Plumbing!')}
                className="w-full py-3 bg-cyan-600 hover:bg-cyan-500 text-white font-bold rounded-lg transition-colors cursor-pointer"
              >
                Confirm Engineer Arrival Window
              </button>
            </div>
          </div>
        )}

      </main>
    </div>
  );
};
