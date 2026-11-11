import React, { useState } from 'react';
import { DemoBanner } from '../../components/common/DemoBanner';
import { Shovel, Trees, CheckCircle2, Phone, ArrowRight, Sun } from 'lucide-react';

export const LandscapingDemo: React.FC = () => {
  const [selectedPlan, setSelectedPlan] = useState<'essential' | 'estate' | 'master'>('estate');
  const [consultBooked, setConsultBooked] = useState(false);

  return (
    <div className="bg-stone-950 text-stone-100 min-h-screen">
      <DemoBanner
        conceptName="Verdant Craft Landscapes"
        categoryLabel="Landscape Architecture & Grounds"
        pageTierLabel="5-Page Aesthetic Trade"
        specs={[
          'Seasonal groundskeeping subscription tier comparison',
          'Hardscaping patio & outdoor masonry project gallery',
          'Online landscape consultation request with property size selector',
          'Drought-resistant sustainable native planting guide'
        ]}
      />

      <header className="bg-stone-900 border-b border-stone-800 py-4 px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded bg-emerald-700 text-stone-950 flex items-center justify-center font-bold">
            <Trees className="w-5 h-5 text-white" />
          </div>
          <div>
            <span className="font-serif font-bold text-lg text-white">Verdant Craft</span>
            <span className="text-[10px] text-emerald-400 block -mt-1 font-mono uppercase tracking-wider">Landscape Architecture & Grounds</span>
          </div>
        </div>
        <button
          onClick={() => setConsultBooked(true)}
          className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-stone-950 font-bold text-xs rounded transition-colors"
        >
          Request Site Consult
        </button>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-12 space-y-12">
        <div className="max-w-3xl space-y-4">
          <span className="text-xs font-serif uppercase tracking-widest text-emerald-400 font-semibold">Bespoke Outdoor Living</span>
          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-white">
            Natural Stone Patios, Native Gardens & Estate Maintenance
          </h1>
          <p className="text-sm text-stone-300 leading-relaxed font-serif">
            We transform ordinary suburban yards into private botanical sanctuaries featuring permeable pavers, custom fire pits, and smart drip irrigation.
          </p>
        </div>

        {/* Maintenance Subscription Tiers */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs">
          {[
            {
              id: 'essential',
              name: 'Essential Turf Care',
              price: '$180 / mo',
              desc: 'Weekly mowing, precision edging, seasonal fertilization, and spring weed prevention.',
              features: ['Weekly precision mowing & blade edging', '4x Seasonal fertilization treatments', 'Blowing off all hard surfaces', 'Organic weed mitigation']
            },
            {
              id: 'estate',
              name: 'Signature Estate Grounds',
              price: '$340 / mo',
              popular: true,
              desc: 'Complete seasonal groundskeeping for manicured garden beds, shrubs, and turf.',
              features: ['Everything in Essential Turf', 'Ornamental shrub pruning & shaping', 'Drip irrigation seasonal audit', 'Bark mulch replenishment (Spring)', 'Leaf removal in Autumn']
            },
            {
              id: 'master',
              name: 'Master Architectural Care',
              price: '$580 / mo',
              desc: 'Dedicated horticultural specialist managing rare botanicals, lighting, and stone care.',
              features: ['Everything in Signature Estate', 'Organic pest & fungal prevention', 'Low-voltage LED lighting repair', 'Annual color floral rotation', 'Priority weekend emergency storm cleanup']
            }
          ].map(tier => (
            <div
              key={tier.id}
              className={`p-6 rounded-2xl border flex flex-col justify-between transition-all ${
                tier.popular
                  ? 'bg-stone-900 border-emerald-500/60 shadow-xl'
                  : 'bg-stone-900/60 border-stone-800'
              }`}
            >
              <div className="space-y-4">
                {tier.popular && (
                  <span className="text-[10px] bg-emerald-500 text-stone-950 font-bold px-2 py-0.5 rounded uppercase">
                    Most Popular
                  </span>
                )}
                <h3 className="font-serif font-bold text-white text-lg">{tier.name}</h3>
                <div className="font-serif font-bold text-emerald-400 text-2xl">{tier.price}</div>
                <p className="text-stone-400 leading-relaxed">{tier.desc}</p>
                
                <div className="space-y-2 pt-2 border-t border-stone-800">
                  {tier.features.map((f, i) => (
                    <div key={i} className="flex items-center gap-2 text-stone-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={() => setConsultBooked(true)}
                className={`w-full mt-6 py-2.5 rounded font-serif font-bold text-xs transition-colors ${
                  tier.popular ? 'bg-emerald-600 hover:bg-emerald-500 text-stone-950' : 'bg-stone-800 hover:bg-stone-700 text-white'
                }`}
              >
                Enroll Property
              </button>
            </div>
          ))}
        </div>

        {consultBooked && (
          <div className="p-6 bg-stone-900 border border-emerald-500 rounded-xl text-center space-y-3 max-w-md mx-auto animate-fade-in text-xs">
            <CheckCircle2 className="w-8 h-8 text-emerald-400 mx-auto" />
            <h4 className="font-serif font-bold text-white text-base">Grounds Consultation Scheduled!</h4>
            <p className="text-stone-300">Our lead landscape architect will contact you for a site walk-through.</p>
            <button onClick={() => setConsultBooked(false)} className="px-3 py-1 bg-stone-800 rounded text-stone-300">Close</button>
          </div>
        )}
      </main>
    </div>
  );
};
