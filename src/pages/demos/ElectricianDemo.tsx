import React, { useState } from 'react';
import { DemoBanner } from '../../components/common/DemoBanner';
import { Zap, BatteryCharging, Shield, CheckCircle2, Phone, Calculator } from 'lucide-react';

export const ElectricianDemo: React.FC = () => {
  const [panelAmps, setPanelAmps] = useState(100);
  const [hasEv, setHasEv] = useState(true);
  const [hasHeatPump, setHasHeatPump] = useState(false);
  const [diagnosticBooked, setDiagnosticBooked] = useState(false);

  const calculateRecommendation = () => {
    let needed = 100;
    if (hasEv) needed += 50;
    if (hasHeatPump) needed += 40;
    return needed > panelAmps;
  };

  const needsUpgrade = calculateRecommendation();

  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen">
      <DemoBanner
        conceptName="VoltMaster Electrical Services"
        categoryLabel="Licensed Master Electricians"
        pageTierLabel="5-Page Trade Architecture"
        specs={[
          'Interactive Electrical Panel & EV Load capacity diagnostic tool',
          'Level 2 EV charger installation pricing estimator',
          'Commercial LED retrofitting energy savings calculation',
          'Master Electrician safety compliance certification badges'
        ]}
      />

      <header className="bg-slate-900 border-b border-slate-800 py-4 px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded bg-yellow-500 text-slate-950 flex items-center justify-center font-bold">
            <Zap className="w-5 h-5 fill-current" />
          </div>
          <div>
            <span className="font-bold text-lg text-white">VoltMaster Electrical</span>
            <span className="text-[10px] text-yellow-400 block -mt-1 font-mono">Licensed Master Electricians #TECL-4921</span>
          </div>
        </div>
        <a
          href="tel:18005553532"
          className="px-4 py-2 bg-yellow-500 hover:bg-yellow-400 text-slate-950 font-bold text-xs rounded transition-colors"
        >
          Call Duty Electrician
        </a>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-12 space-y-12">
        <div className="max-w-3xl space-y-4">
          <span className="text-xs font-mono uppercase tracking-widest text-yellow-400 font-bold">Safe, Code-Compliant Power</span>
          <h1 className="text-4xl sm:text-5xl font-black font-display text-white">
            Main Panel Heavy-Ups & Smart EV Charger Installations
          </h1>
          <p className="text-sm text-slate-300 leading-relaxed">
            Eliminate fire hazards and prepare your home for electric vehicles, induction ranges, and heat pumps with a certified 200A service upgrade.
          </p>
        </div>

        {/* Interactive Load Calculator */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6">
          <div className="flex items-center gap-2 text-yellow-400 text-xs font-bold uppercase">
            <Calculator className="w-4 h-4" />
            <span>Interactive Electrical Panel Capacity Diagnostic</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs">
            <div>
              <label className="block text-slate-300 font-semibold mb-2">Current Main Service Amperage:</label>
              <div className="flex gap-2">
                {[60, 100, 150, 200].map(a => (
                  <button
                    key={a}
                    onClick={() => setPanelAmps(a)}
                    className={`flex-1 py-2 rounded font-mono font-bold transition-colors ${
                      panelAmps === a ? 'bg-yellow-500 text-slate-950' : 'bg-slate-950 text-slate-300'
                    }`}
                  >
                    {a}A
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-slate-300 font-semibold mb-2">High-Draw Appliances:</label>
              <div className="space-y-2">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={hasEv}
                    onChange={(e) => setHasEv(e.target.checked)}
                    className="accent-yellow-400 rounded"
                  />
                  <span>Electric Vehicle Charger (40A–50A draw)</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={hasHeatPump}
                    onChange={(e) => setHasHeatPump(e.target.checked)}
                    className="accent-yellow-400 rounded"
                  />
                  <span>Central Electric Heat Pump / HVAC (30A–40A)</span>
                </label>
              </div>
            </div>

            <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2 flex flex-col justify-between">
              <div>
                <span className="text-[10px] text-slate-400 uppercase font-mono">Panel Diagnostic Result:</span>
                <div className={`text-base font-bold mt-1 ${needsUpgrade ? 'text-amber-400' : 'text-emerald-400'}`}>
                  {needsUpgrade ? '⚠ 200A Upgrade Recommended' : '✓ Capacity Currently Sufficient'}
                </div>
                <p className="text-[11px] text-slate-400 mt-1">
                  {needsUpgrade 
                    ? 'Your current electrical service is approaching 80% continuous breaker load capacity.'
                    : 'Your panel can support current planned electrical draw.'}
                </p>
              </div>
              <button
                onClick={() => setDiagnosticBooked(true)}
                className="w-full py-2 bg-yellow-500 hover:bg-yellow-400 text-slate-950 font-bold rounded text-xs transition-colors"
              >
                Schedule On-Site Inspection
              </button>
            </div>
          </div>

          {diagnosticBooked && (
            <div className="p-4 bg-emerald-950/60 border border-emerald-800 rounded-lg text-emerald-300 text-xs">
              ✓ On-site safety audit booked (Demo Mode). Our master electrician dispatch will confirm your appointment.
            </div>
          )}
        </div>
      </main>
    </div>
  );
};
