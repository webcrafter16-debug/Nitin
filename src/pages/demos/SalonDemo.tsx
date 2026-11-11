import React, { useState } from 'react';
import { DemoBanner } from '../../components/common/DemoBanner';
import { Sparkles, Scissors, Clock, Star, CheckCircle2, ArrowRight } from 'lucide-react';

export const SalonDemo: React.FC = () => {
  const [selectedStylist, setSelectedStylist] = useState('All');
  const [bookedSlot, setBookedSlot] = useState(false);

  const stylists = [
    { name: 'Chloe Laurent', role: 'Master Balayage Specialist', bio: 'Trained at Vidal Sassoon London with 12 years perfecting sun-kissed French balayage.' },
    { name: 'Marcus Sterling', role: 'Precision Hair Sculptor', bio: 'Specialist in geometric bobs, textured razor cuts, and high-contrast editorial styling.' },
    { name: 'Aria Chen', role: 'Organic Color & Keratin Specialist', bio: 'Expert in non-toxic ammonia-free color formulations and deep bond-restoring therapies.' },
  ];

  const services = [
    { name: 'Signature Hand-Painted Balayage & Gloss', duration: '3 hrs 15 mins', price: '£185', stylist: 'Chloe Laurent' },
    { name: 'Precision Cut, Scalp Massage & Blowdry', duration: '60 mins', price: '£78', stylist: 'Marcus Sterling' },
    { name: 'Organic Keratin Smoothing Infusion', duration: '2 hrs 30 mins', price: '£210', stylist: 'Aria Chen' },
    { name: 'Full Head Platinum Foil Blonding', duration: '4 hrs', price: '£240', stylist: 'Chloe Laurent' },
    { name: 'Express Moisture Recovery & Blowout', duration: '45 mins', price: '£55', stylist: 'Marcus Sterling' },
  ];

  const filteredServices = selectedStylist === 'All'
    ? services
    : services.filter(s => s.stylist === selectedStylist);

  return (
    <div className="bg-stone-950 text-stone-100 min-h-screen">
      <DemoBanner
        conceptName="Velvet & Sage Hair & Brow Studio"
        categoryLabel="Boutique Personal Services"
        pageTierLabel="5-Page Salon Architecture"
        specs={[
          'Stylist lookbooks with transparent duration & pricing',
          'Interactive stylist specialization filter',
          'Online appointment slot reservation engine',
          'Bridal party bespoke styling inquiry pipeline'
        ]}
      />

      <header className="bg-stone-900 border-b border-stone-800 py-4 px-6 flex justify-between items-center">
        <div>
          <span className="font-serif text-xl font-bold tracking-wider text-rose-200">Velvet & Sage</span>
          <span className="text-[10px] text-stone-400 block uppercase tracking-widest">Hair & Brow Atelier · Manchester</span>
        </div>
        <button
          onClick={() => setBookedSlot(true)}
          className="px-4 py-2 bg-rose-900 hover:bg-rose-800 text-rose-100 font-serif text-xs rounded transition-colors"
        >
          Book An Appointment
        </button>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-12 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs uppercase tracking-widest text-rose-300 font-serif">Artisanal Haircraft</span>
          <h1 className="text-4xl font-serif font-bold text-white">Quiet Luxury For Your Crown</h1>
          <p className="text-xs text-stone-400 font-serif leading-relaxed">
            Personalized 1-on-1 consultations with complimentary organic herbal infusions and acoustic ambient soundscapes.
          </p>
        </div>

        {/* Stylist Filter */}
        <div className="flex justify-center gap-2">
          {['All', 'Chloe Laurent', 'Marcus Sterling', 'Aria Chen'].map(name => (
            <button
              key={name}
              onClick={() => setSelectedStylist(name)}
              className={`px-3 py-1.5 rounded text-xs font-serif transition-colors ${
                selectedStylist === name ? 'bg-rose-900 text-white font-bold' : 'bg-stone-900 text-stone-400 hover:text-white'
              }`}
            >
              {name}
            </button>
          ))}
        </div>

        {/* Services List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredServices.map((svc, idx) => (
            <div key={idx} className="p-5 bg-stone-900/60 border border-stone-800/80 rounded-xl flex items-center justify-between">
              <div>
                <h3 className="font-serif font-bold text-white text-sm">{svc.name}</h3>
                <div className="flex items-center gap-3 text-xs text-stone-400 mt-1">
                  <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5 text-rose-400" /> {svc.duration}</span>
                  <span>·</span>
                  <span>{svc.stylist}</span>
                </div>
              </div>
              <div className="text-right">
                <span className="font-serif font-bold text-rose-200 block text-base">{svc.price}</span>
                <button
                  onClick={() => setBookedSlot(true)}
                  className="text-[11px] text-rose-400 hover:text-rose-300 font-serif underline mt-0.5"
                >
                  Reserve Slot
                </button>
              </div>
            </div>
          ))}
        </div>

        {bookedSlot && (
          <div className="p-6 bg-stone-900 border border-rose-800 rounded-xl text-center space-y-3 max-w-md mx-auto">
            <CheckCircle2 className="w-8 h-8 text-rose-400 mx-auto" />
            <h4 className="font-serif font-bold text-white text-base">Salon Slot Reserved (Demo)!</h4>
            <p className="text-xs text-stone-300">In this portfolio demo, your consultation booking has been simulated.</p>
            <button onClick={() => setBookedSlot(false)} className="px-3 py-1 text-xs bg-stone-800 rounded text-stone-300">Close</button>
          </div>
        )}
      </main>
    </div>
  );
};
