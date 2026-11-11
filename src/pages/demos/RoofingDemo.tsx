import React, { useState } from 'react';
import { DemoBanner } from '../../components/common/DemoBanner';
import { Shield, CloudRain, CheckCircle2, Phone, ArrowRight, Camera } from 'lucide-react';

export const RoofingDemo: React.FC = () => {
  const [inspectionRequested, setInspectionRequested] = useState(false);
  const [roofType, setRoofType] = useState('Architectural Asphalt Shingle');

  return (
    <div className="bg-stone-950 text-stone-100 min-h-screen">
      <DemoBanner
        conceptName="IronPeak Roofing & Restoration"
        categoryLabel="Exterior Trades & Contractors"
        pageTierLabel="5-Page Construction Architecture"
        specs={[
          'Drone roof storm damage inspection booking flow',
          'Material comparison (Architectural Shingle vs Standing Seam Metal)',
          'Insurance claim assistance guide for homeowners',
          'Lifetime workmanship warranty verification charter'
        ]}
      />

      <header className="bg-stone-900 border-b border-stone-800 py-4 px-6 flex justify-between items-center">
        <div>
          <span className="font-display font-black text-xl text-amber-500 tracking-wide">IronPeak</span>
          <span className="text-[10px] text-stone-400 block -mt-1 uppercase tracking-wider">Roofing & Exterior Contractors</span>
        </div>
        <a
          href="tel:18005557663"
          className="flex items-center gap-1.5 px-4 py-2 bg-amber-600 hover:bg-amber-500 text-stone-950 font-bold text-xs rounded transition-colors"
        >
          <Phone className="w-3.5 h-3.5" />
          <span>(800) 555-ROOF</span>
        </a>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-12 space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-mono uppercase tracking-widest text-amber-400 font-bold">
              GAF Master Elite Certified Contractor
            </span>
            <h1 className="text-4xl sm:text-5xl font-black font-display text-white leading-tight">
              Roofs Engineered For 130 MPH Hurricane & Hail Strikes
            </h1>
            <p className="text-sm text-stone-300 leading-relaxed">
              We specialize in insurance-covered hail restoration and lifetime metal roofing. We deploy 4K thermal drone scans to provide indisputable photographic proof for your insurance adjuster.
            </p>

            <div className="space-y-2.5 text-xs text-stone-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Zero out-of-pocket costs beyond your standard insurance deductible</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Class 4 impact-rated shingles qualifying for 20%+ insurance discounts</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>50-Year non-prorated manufacturer warranty on all complete roof replacements</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 bg-stone-900 border border-stone-800 rounded-2xl p-6 sm:p-8 space-y-5">
            <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase">
              <Camera className="w-4 h-4" />
              <span>Free 24-Point Drone Roof Scan</span>
            </div>

            {inspectionRequested ? (
              <div className="text-center py-6 space-y-3 animate-fade-in">
                <CheckCircle2 className="w-10 h-10 text-amber-400 mx-auto" />
                <h3 className="font-bold text-white text-lg">Drone Inspection Scheduled!</h3>
                <p className="text-xs text-stone-300">In this demo, our flight team has logged your address for an inspection slot.</p>
                <button onClick={() => setInspectionRequested(false)} className="px-3 py-1 bg-stone-800 rounded text-xs">Reset</button>
              </div>
            ) : (
              <div className="space-y-4 text-xs">
                <div>
                  <label className="block text-stone-300 font-semibold mb-1">Property Address</label>
                  <input type="text" placeholder="1244 Maple Ridge Blvd, Dallas TX" className="w-full p-2.5 bg-stone-950 border border-stone-700 rounded text-white" />
                </div>
                <div>
                  <label className="block text-stone-300 font-semibold mb-1">Current Roof Material</label>
                  <select
                    value={roofType}
                    onChange={(e) => setRoofType(e.target.value)}
                    className="w-full p-2.5 bg-stone-950 border border-stone-700 rounded text-white"
                  >
                    <option>Architectural Asphalt Shingle</option>
                    <option>Standing Seam Metal</option>
                    <option>Spanish Clay / Concrete Tile</option>
                    <option>Commercial Flat TPO Membrane</option>
                  </select>
                </div>
                <button
                  onClick={() => setInspectionRequested(true)}
                  className="w-full py-3 bg-amber-600 hover:bg-amber-500 text-stone-950 font-bold rounded transition-colors cursor-pointer"
                >
                  Schedule Drone Inspection
                </button>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};
