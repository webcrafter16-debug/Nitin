import React, { useState } from 'react';
import { DemoBanner } from '../../components/common/DemoBanner';
import { Sparkles, Calendar, Clock, CheckCircle2, ShieldCheck, Heart, ArrowRight, UserCheck } from 'lucide-react';

type DentalTab = 'home' | 'treatments' | 'gallery' | 'insurance' | 'booking';

export const DentalDemo: React.FC = () => {
  const [activeTab, setActiveTab] = useState<DentalTab>('home');
  // Draggable Before/After Slider percentage
  const [sliderPos, setSliderPos] = useState(50);
  const [bookingDone, setBookingDone] = useState(false);

  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen">
      {/* Demo Banner */}
      <DemoBanner
        conceptName="Lumina Modern Dental Studio"
        categoryLabel="Cosmetic & Family Dentistry"
        pageTierLabel="5-Page Signature Authority"
        specs={[
          'Interactive Draggable Before/After smile transformation slider',
          '5 comprehensive patient navigation routes',
          'Treatment fee guide & private insurance claim support',
          'Frictionless new-patient booking wizard',
          'Calming aesthetic eliminating dental phobia'
        ]}
      />

      {/* Lumina Top Bar */}
      <header className="bg-slate-900/90 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-18 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-8 h-8 rounded-full bg-teal-500/20 border border-teal-500 flex items-center justify-center text-teal-400 font-bold">
                L
              </span>
              <div>
                <span className="text-lg font-bold text-white tracking-tight">Lumina Dental</span>
                <span className="text-[10px] text-teal-400 block -mt-1 uppercase tracking-widest font-mono">Boutique Oral Studio</span>
              </div>
            </div>

            <nav className="hidden md:flex items-center gap-6 text-xs font-medium text-slate-300">
              {[
                { id: 'home', label: 'Practice' },
                { id: 'treatments', label: 'Treatments' },
                { id: 'gallery', label: 'Smile Gallery (Interactive)' },
                { id: 'insurance', label: 'Fees & Insurance' },
                { id: 'booking', label: 'Book Visit' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as DentalTab)}
                  className={`transition-colors cursor-pointer py-1 border-b-2 ${
                    activeTab === tab.id
                      ? 'text-teal-400 border-teal-400 font-semibold'
                      : 'text-slate-300 hover:text-white border-transparent'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </nav>

            <button
              onClick={() => setActiveTab('booking')}
              className="px-4 py-2 bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold rounded-lg text-xs transition-colors cursor-pointer"
            >
              New Patient Booking
            </button>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        
        {/* TAB 1: PRACTICE HOME */}
        {activeTab === 'home' && (
          <div className="space-y-12 animate-fade-in">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-6">
                <span className="text-xs font-semibold text-teal-400 uppercase tracking-widest block">
                  Boutique Cosmetic & Restorative Dentistry
                </span>
                <h1 className="text-4xl sm:text-5xl font-extrabold text-white font-display leading-tight">
                  Gentle, Precision Dentistry Designed Around Your Comfort
                </h1>
                <p className="text-sm text-slate-300 leading-relaxed">
                  We blend digital 3D intraoral scanning, noise-canceling headphones, and sedation options to craft luminous, natural-looking smiles without fear or judgment.
                </p>

                <div className="flex flex-wrap gap-4 pt-2">
                  <button
                    onClick={() => setActiveTab('gallery')}
                    className="px-5 py-2.5 bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold rounded-lg text-xs transition-colors flex items-center gap-1.5 cursor-pointer"
                  >
                    <span>Try Before & After Slider</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={() => setActiveTab('treatments')}
                    className="px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 font-semibold rounded-lg text-xs transition-colors cursor-pointer"
                  >
                    View Treatment Menu
                  </button>
                </div>
              </div>

              {/* Trust Card */}
              <div className="lg:col-span-5 bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-4">
                <h3 className="font-bold text-white text-base font-display">Dr. Elena Sterling, DDS, FAGD</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Fellow of the Academy of General Dentistry with over 14 years specializing in porcelain veneer artistry and minimally invasive Invisalign alignment.
                </p>
                <div className="space-y-2 pt-2 border-t border-slate-800 text-xs text-slate-300">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-teal-400" />
                    <span>Itero 3D Element scanner (Zero gagging putty impressions)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-teal-400" />
                    <span>Same-day porcelain restorations & digital smile design</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-teal-400" />
                    <span>Zero-interest patient payment plans available</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: TREATMENTS */}
        {activeTab === 'treatments' && (
          <div className="space-y-8 max-w-5xl animate-fade-in">
            <div>
              <span className="text-xs font-semibold text-teal-400 uppercase tracking-wider block mb-1">Curated Treatment Suite</span>
              <h2 className="text-3xl font-bold text-white font-display">Minimally Invasive Dental Procedures</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
              <div className="p-6 bg-slate-900 border border-slate-800 rounded-xl space-y-2">
                <span className="text-teal-400 font-semibold block text-sm">Porcelain Ceramic Veneers</span>
                <p className="text-slate-400 leading-relaxed">Handcrafted ultra-thin feldspathic porcelain facings correcting chips, discoloration, and irregular proportions.</p>
                <span className="text-slate-300 font-mono block pt-2">Typical investment: $1,100 – $1,600 per tooth</span>
              </div>

              <div className="p-6 bg-slate-900 border border-slate-800 rounded-xl space-y-2">
                <span className="text-teal-400 font-semibold block text-sm">Invisalign® Clear Aligners</span>
                <p className="text-slate-400 leading-relaxed">Virtually invisible custom aligners discreetly guiding teeth into harmonious alignment in 6 to 12 months.</p>
                <span className="text-slate-300 font-mono block pt-2">Complete treatment: from $3,800 (with $150/mo plans)</span>
              </div>

              <div className="p-6 bg-slate-900 border border-slate-800 rounded-xl space-y-2">
                <span className="text-teal-400 font-semibold block text-sm">In-Studio Laser Whitening</span>
                <p className="text-slate-400 leading-relaxed">Philips Zoom WhiteSpeed laser system lifting up to 8 shades in a single 60-minute relaxing session.</p>
                <span className="text-slate-300 font-mono block pt-2">Single appointment package: $450</span>
              </div>

              <div className="p-6 bg-slate-900 border border-slate-800 rounded-xl space-y-2">
                <span className="text-teal-400 font-semibold block text-sm">Titanium Dental Implants</span>
                <p className="text-slate-400 leading-relaxed">Permanent root replacement crowned with bespoke zirconia lifelike teeth that look, feel, and chew like originals.</p>
                <span className="text-slate-300 font-mono block pt-2">Implants from $2,400</span>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: INTERACTIVE BEFORE/AFTER SLIDER */}
        {activeTab === 'gallery' && (
          <div className="space-y-8 max-w-4xl animate-fade-in">
            <div>
              <span className="text-xs font-semibold text-teal-400 uppercase tracking-wider block mb-1">Clinical Proof of Artistry</span>
              <h2 className="text-3xl font-bold text-white font-display">Interactive Smile Transformation Slider</h2>
              <p className="text-xs text-slate-400 mt-1">
                Drag the slider handle horizontally to compare patient pre-treatment alignment with post-veneer restoration.
              </p>
            </div>

            {/* Draggable Transformation Visualizer */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6">
              <div className="relative w-full h-80 sm:h-96 rounded-xl overflow-hidden select-none border border-slate-800">
                {/* AFTER IMAGE (Full Background) */}
                <div className="absolute inset-0 bg-gradient-to-r from-teal-950 to-slate-900 flex items-center justify-center p-8">
                  <div className="text-center space-y-3">
                    <span className="px-3 py-1 bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 rounded-full text-xs font-bold uppercase tracking-wider">
                      ✦ AFTER: 8 Porcelain Veneers & Whitening
                    </span>
                    <h4 className="text-xl sm:text-2xl font-bold text-white font-display">
                      Harmonious Luminous Symmetry
                    </h4>
                    <p className="text-xs text-slate-300 max-w-md mx-auto">
                      Natural translucency matching facial tone, closed midline diastema, and perfect arch progression.
                    </p>
                  </div>
                </div>

                {/* BEFORE IMAGE (Clipped Layer based on sliderPos) */}
                <div
                  className="absolute inset-y-0 left-0 bg-gradient-to-r from-stone-900 to-amber-950/80 border-r-2 border-white flex items-center justify-center overflow-hidden p-8"
                  style={{ width: `${sliderPos}%` }}
                >
                  <div className="min-w-[320px] text-center space-y-3">
                    <span className="px-3 py-1 bg-amber-500/20 text-amber-300 border border-amber-500/30 rounded-full text-xs font-bold uppercase tracking-wider">
                      BEFORE: Stained & Chipped Enamel
                    </span>
                    <h4 className="text-xl sm:text-2xl font-bold text-white font-display">
                      Uneven Margins & Tetracycline Staining
                    </h4>
                    <p className="text-xs text-slate-400 max-w-md mx-auto">
                      Significant incisal wear, chipped lateral incisor, and uneven gum height prior to treatment.
                    </p>
                  </div>
                </div>

                {/* Vertical Divider Line & Handle */}
                <div
                  className="absolute top-0 bottom-0 w-0.5 bg-white pointer-events-none"
                  style={{ left: `${sliderPos}%` }}
                >
                  <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-white text-slate-950 font-bold text-xs flex items-center justify-center shadow-2xl">
                    ⇄
                  </div>
                </div>
              </div>

              {/* Slider Control */}
              <div>
                <input
                  type="range"
                  min="5"
                  max="95"
                  value={sliderPos}
                  onChange={(e) => setSliderPos(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-ew-resize accent-teal-400"
                  aria-label="Drag to compare before and after transformation"
                />
                <div className="flex justify-between text-xs text-slate-400 mt-2">
                  <span>← Show Before Condition</span>
                  <span className="font-mono text-teal-400 font-bold">{sliderPos}% Comparison Ratio</span>
                  <span>Show Post-Treatment →</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 4: FEES & INSURANCE */}
        {activeTab === 'insurance' && (
          <div className="space-y-6 max-w-4xl animate-fade-in">
            <span className="text-xs font-semibold text-teal-400 uppercase tracking-wider block">Financial Transparency</span>
            <h2 className="text-3xl font-bold text-white font-display">Transparent Fees & Direct Insurance Claiming</h2>
            <p className="text-sm text-slate-300 leading-relaxed">
              We process claims instantly via on-site digital health fund terminals (HICAPS / Delta Dental / Sun Life). You only pay the out-of-pocket gap fee.
            </p>
          </div>
        )}

        {/* TAB 5: BOOKING */}
        {activeTab === 'booking' && (
          <div className="space-y-6 max-w-xl animate-fade-in">
            <span className="text-xs font-semibold text-teal-400 uppercase tracking-wider block">Welcome New Patients</span>
            <h2 className="text-3xl font-bold text-white font-display">Reserve Your Smile Consultation</h2>
            {bookingDone ? (
              <div className="p-6 bg-slate-900 border border-teal-500 rounded-xl text-center space-y-3">
                <CheckCircle2 className="w-10 h-10 text-teal-400 mx-auto" />
                <h3 className="font-bold text-white text-lg">Consultation Requested!</h3>
                <p className="text-xs text-slate-300">Our patient coordinator will contact you to confirm appointment details.</p>
                <button
                  onClick={() => setBookingDone(false)}
                  className="px-4 py-2 bg-slate-800 text-white rounded text-xs"
                >
                  Book Another Time
                </button>
              </div>
            ) : (
              <div className="p-6 bg-slate-900 border border-slate-800 rounded-xl space-y-4 text-xs">
                <div>
                  <label className="block text-slate-300 font-semibold mb-1">Full Name</label>
                  <input type="text" placeholder="Dr. Jennifer Ross" className="w-full p-2.5 bg-slate-950 border border-slate-700 rounded text-white" />
                </div>
                <div>
                  <label className="block text-slate-300 font-semibold mb-1">Contact Phone</label>
                  <input type="tel" placeholder="+61 400 123 456" className="w-full p-2.5 bg-slate-950 border border-slate-700 rounded text-white" />
                </div>
                <div>
                  <label className="block text-slate-300 font-semibold mb-1">Primary Interest</label>
                  <select className="w-full p-2.5 bg-slate-950 border border-slate-700 rounded text-white">
                    <option>Cosmetic Smile Consultation (Veneers / Whitening)</option>
                    <option>Invisalign Digital Alignment</option>
                    <option>Routine Checkup, Clean & X-Rays</option>
                    <option>Emergency Toothache or Broken Tooth</option>
                  </select>
                </div>
                <button
                  onClick={() => setBookingDone(true)}
                  className="w-full py-3 bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold rounded-lg transition-colors cursor-pointer"
                >
                  Confirm Preferred Visit Window
                </button>
              </div>
            )}
          </div>
        )}

      </main>
    </div>
  );
};
