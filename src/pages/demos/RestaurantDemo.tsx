import React, { useState } from 'react';
import { DemoBanner } from '../../components/common/DemoBanner';
import { Utensils, Calendar, Clock, Users, CheckCircle2, MapPin, Sparkles, Phone } from 'lucide-react';

interface MenuItem {
  name: string;
  desc: string;
  price: string;
  tags: string[];
}

export const RestaurantDemo: React.FC = () => {
  const [activeMenuCategory, setActiveMenuCategory] = useState<'primi' | 'pasta' | 'secondi' | 'dolci'>('pasta');
  const [dietaryFilter, setDietaryFilter] = useState<'all' | 'veg' | 'gf'>('all');
  
  // Table reservation state
  const [reservationDate, setReservationDate] = useState('Today, 7:30 PM');
  const [partySize, setPartySize] = useState(2);
  const [tableReserved, setTableReserved] = useState(false);

  const menuItems: Record<string, MenuItem[]> = {
    primi: [
      { name: 'Burrata Pugliese', desc: 'Creamy heirloom burrata, roasted winter figs, aged Modena balsamic, toasted sourdough.', price: '£14', tags: ['veg'] },
      { name: 'Carpaccio di Manzo', desc: 'Thinly sliced dry-aged beef fillet, wild rocket, 24-month Parmigiano-Reggiano, truffle emulsion.', price: '£16', tags: ['gf'] },
      { name: 'Arancini al Tartufo', desc: 'Crispy carnaroli rice balls filled with wild foraged porcini and smoked scamorza cheese.', price: '£12', tags: ['veg'] },
    ],
    pasta: [
      { name: 'Tagliolini al Tartufo Nero', desc: 'Hand-extruded egg tagliolini, cultured butter, shaved fresh Norcia black winter truffle.', price: '£26', tags: ['veg'] },
      { name: 'Pappardelle al Cinghiale', desc: 'Broad ribbon pasta, slow-braised Tuscan wild boar ragù, juniper berries, rosemary.', price: '£22', tags: [] },
      { name: 'Spaghetti alle Vongole', desc: 'Gragnano bronze-die spaghetti, fresh Palourde clams, garlic, white wine, chili, parsley.', price: '£24', tags: [] },
      { name: 'Ravioli di Zucca', desc: 'Delica pumpkin ravioli, browned butter, crispy sage, crushed amaretto, toasted pine nuts.', price: '£20', tags: ['veg', 'gf'] },
    ],
    secondi: [
      { name: 'Ossobuco alla Milanese', desc: 'Slow-braised veal shank, saffron carnaroli risotto, fresh lemon gremolata.', price: '£32', tags: ['gf'] },
      { name: 'Branzino in Crosta di Sale', desc: 'Line-caught sea bass baked in Sicilian sea salt crust, braised fennel, salsa verde.', price: '£28', tags: ['gf'] },
      { name: 'Melanzane alla Parmigiana', desc: 'Layered baked Sicilian aubergine, rich San Marzano tomato reduction, basil, fior di latte.', price: '£19', tags: ['veg', 'gf'] },
    ],
    dolci: [
      { name: 'Tiramisù Tradizionale', desc: 'Savoiardi ladyfingers soaked in dark Illy espresso & Marsala, mascarpone cream, Valrhona cocoa.', price: '£9', tags: ['veg'] },
      { name: 'Panna Cotta alla Vaniglia', desc: 'Tahitian vanilla bean cream, wild berry compote, almond tuile.', price: '£8', tags: ['veg', 'gf'] },
    ]
  };

  const currentList = menuItems[activeMenuCategory].filter(item => {
    if (dietaryFilter === 'all') return true;
    return item.tags.includes(dietaryFilter);
  });

  return (
    <div className="bg-stone-950 text-stone-100 min-h-screen">
      {/* Demo Banner */}
      <DemoBanner
        conceptName="Osteria Rustica Italian Bistro"
        categoryLabel="Artisan Food & Hospitality"
        pageTierLabel="5-Page Hospitality Architecture"
        specs={[
          'Interactive table reservation engine with confirmation',
          'Categorized digital seasonal menu with dietary filters (GF, Veg)',
          'Chef sourcing ethos & Italian wine list integration',
          'Private dining banquet inquiry pipeline',
          'High mobile engagement & Google Maps venue optimization'
        ]}
      />

      {/* Restaurant Header */}
      <header className="bg-stone-900/90 border-b border-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-8 h-8 rounded-full bg-red-900/40 border border-red-700/60 flex items-center justify-center text-red-400 font-serif font-black text-lg">
              O
            </span>
            <div>
              <span className="text-xl font-serif font-bold text-white tracking-wide">Osteria Rustica</span>
              <span className="text-[10px] text-stone-400 block -mt-1 uppercase tracking-widest font-mono">Bistrot & Vini</span>
            </div>
          </div>

          <div className="flex items-center gap-4 text-xs">
            <span className="text-stone-400 hidden sm:inline flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-amber-500" /> Marylebone High St, London
            </span>
            <a
              href="#book"
              className="px-4 py-2 bg-red-800 hover:bg-red-700 text-white font-serif font-bold rounded text-xs transition-colors"
            >
              Reserve a Table
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden">
        <div className="max-w-3xl mx-auto space-y-5">
          <span className="text-xs uppercase tracking-widest text-amber-400 font-serif font-semibold">
            Authentic Regional Italian Cooking
          </span>
          <h1 className="text-4xl sm:text-6xl font-serif font-bold text-white tracking-tight leading-tight">
            Hand-Rolled Pasta & Natural Italian Wines
          </h1>
          <p className="text-sm sm:text-base text-stone-300 leading-relaxed font-serif">
            Every morning our pastaioli hand-roll fresh egg pasta using heirloom flours imported from Emilia-Romagna and cold-pressed extra virgin olive oil from Umbria.
          </p>
        </div>
      </section>

      {/* Interactive Table Reservation Section */}
      <section id="book" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="bg-stone-900 border border-stone-800 rounded-2xl p-6 sm:p-8 shadow-2xl">
          <div className="border-b border-stone-800 pb-4 mb-6 flex items-center justify-between">
            <div>
              <h2 className="text-xl font-serif font-bold text-white">Online Table Reservations</h2>
              <p className="text-xs text-stone-400">Instant confirmation · Zero reservation booking fees</p>
            </div>
            <Users className="w-5 h-5 text-amber-500" />
          </div>

          {tableReserved ? (
            <div className="text-center py-6 space-y-3 animate-fade-in">
              <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto" />
              <h3 className="font-serif text-xl font-bold text-white">Table Reserved for {partySize} Guests!</h3>
              <p className="text-xs text-stone-300">
                In this concept demo, your table reservation for <strong>{reservationDate}</strong> has been logged.
              </p>
              <button
                onClick={() => setTableReserved(false)}
                className="px-4 py-1.5 bg-stone-800 text-stone-200 text-xs rounded hover:bg-stone-700"
              >
                Modify Reservation
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
              <div>
                <label className="block text-stone-400 font-semibold mb-1">Guests</label>
                <select
                  value={partySize}
                  onChange={(e) => setPartySize(Number(e.target.value))}
                  className="w-full p-2.5 bg-stone-950 border border-stone-700 rounded text-stone-200"
                >
                  {[1, 2, 3, 4, 5, 6, 8, 10].map(n => (
                    <option key={n} value={n}>{n} Guests</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-stone-400 font-semibold mb-1">Date & Time Slot</label>
                <select
                  value={reservationDate}
                  onChange={(e) => setReservationDate(e.target.value)}
                  className="w-full p-2.5 bg-stone-950 border border-stone-700 rounded text-stone-200"
                >
                  <option>Today, 6:00 PM</option>
                  <option>Today, 7:30 PM (Peak)</option>
                  <option>Today, 9:00 PM</option>
                  <option>Tomorrow, 1:00 PM (Lunch)</option>
                  <option>Tomorrow, 8:00 PM</option>
                </select>
              </div>

              <div className="flex items-end">
                <button
                  type="button"
                  onClick={() => setTableReserved(true)}
                  className="w-full py-2.5 bg-red-800 hover:bg-red-700 text-white font-serif font-bold rounded transition-colors cursor-pointer"
                >
                  Book Table Now
                </button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Categorized Digital Menu Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="text-center mb-8 space-y-2">
          <span className="text-xs uppercase tracking-widest text-amber-400 font-serif font-semibold">Seasonal Menu</span>
          <h2 className="text-3xl font-serif font-bold text-white">Piatti del Giorno</h2>
        </div>

        {/* Dietary Filters */}
        <div className="flex items-center justify-between border-b border-stone-800 pb-4 mb-6 text-xs">
          {/* Menu Categories */}
          <div className="flex gap-2">
            {[
              { id: 'primi', label: 'Antipasti' },
              { id: 'pasta', label: 'Primi Piatti' },
              { id: 'secondi', label: 'Secondi' },
              { id: 'dolci', label: 'Dolci' },
            ].map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveMenuCategory(cat.id as any)}
                className={`px-3 py-1.5 rounded font-serif transition-colors cursor-pointer ${
                  activeMenuCategory === cat.id
                    ? 'bg-red-900/60 text-white font-bold border border-red-700/80'
                    : 'text-stone-400 hover:text-white'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Dietary filters */}
          <div className="flex items-center gap-1.5">
            <button
              onClick={() => setDietaryFilter('all')}
              className={`px-2 py-1 rounded text-[11px] ${dietaryFilter === 'all' ? 'bg-stone-800 text-white' : 'text-stone-500'}`}
            >
              All
            </button>
            <button
              onClick={() => setDietaryFilter('veg')}
              className={`px-2 py-1 rounded text-[11px] ${dietaryFilter === 'veg' ? 'bg-emerald-950 text-emerald-300 border border-emerald-800' : 'text-stone-500'}`}
            >
              Vegetarian
            </button>
            <button
              onClick={() => setDietaryFilter('gf')}
              className={`px-2 py-1 rounded text-[11px] ${dietaryFilter === 'gf' ? 'bg-amber-950 text-amber-300 border border-amber-800' : 'text-stone-500'}`}
            >
              Gluten-Free
            </button>
          </div>
        </div>

        {/* Items List */}
        <div className="space-y-4">
          {currentList.map((item, idx) => (
            <div key={idx} className="p-4 bg-stone-900/60 border border-stone-800/80 rounded-xl flex items-start justify-between gap-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <h3 className="font-serif font-bold text-white text-base">{item.name}</h3>
                  {item.tags.includes('veg') && (
                    <span className="text-[10px] text-emerald-400 font-mono">· Veg</span>
                  )}
                  {item.tags.includes('gf') && (
                    <span className="text-[10px] text-amber-400 font-mono">· GF</span>
                  )}
                </div>
                <p className="text-xs text-stone-400 leading-relaxed font-serif">{item.desc}</p>
              </div>
              <span className="font-serif font-bold text-amber-400 text-base shrink-0">{item.price}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
