import React, { useState } from 'react';
import { DemoBanner } from '../../components/common/DemoBanner';
import { 
  SUMMIT_SERVICES, 
  SUMMIT_LOCATIONS, 
  SUMMIT_RESOURCE_PAGES, 
  SummitServiceDetail, 
  SummitLocationDetail 
} from '../../data/summitData';
import { 
  Building2, 
  ShieldCheck, 
  Phone, 
  MapPin, 
  CheckCircle2, 
  Clock, 
  ArrowRight, 
  Layers, 
  AlertTriangle, 
  Calendar, 
  FileText, 
  Briefcase, 
  DollarSign, 
  Wrench,
  Search,
  ExternalLink
} from 'lucide-react';

export const SummitMultiPageDemo: React.FC = () => {
  // Current active sub-page route within the Summit 21-page architecture
  const [currentRoute, setCurrentRoute] = useState<string>('overview');
  
  // Multi-Trade Dispatch Request Form State
  const [dispatchConfirmed, setDispatchConfirmed] = useState(false);
  const [selectedTrades, setSelectedTrades] = useState<string[]>(['hvac']);

  const toggleTrade = (slug: string) => {
    setSelectedTrades(prev => 
      prev.includes(slug) ? prev.filter(s => s !== slug) : [...prev, slug]
    );
  };

  // Helper to determine active content
  const activeService = SUMMIT_SERVICES.find(s => `service/${s.slug}` === currentRoute);
  const activeLocation = SUMMIT_LOCATIONS.find(l => `location/${l.slug}` === currentRoute);
  const activeResource = SUMMIT_RESOURCE_PAGES.find(r => r.slug === currentRoute);

  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen">
      {/* Demo Banner */}
      <DemoBanner
        conceptName="Summit Regional Multi-Trade Hub"
        categoryLabel="Enterprise Regional Multi-Trade Network"
        pageTierLabel="21 Unique Pages (No Duplicates)"
        specs={[
          '21 distinct, functional sub-routes with dedicated technical content',
          '8 master trade service silos with licensing and equipment specs',
          '5 localized city/suburb silos with dynamic crew dispatch response times',
          '7 compliance portals: License registry, warranty charter, financing',
          'Centralized multi-trade inspection coordinator'
        ]}
      />

      {/* Corporate Emergency & Regional Hotline Strip */}
      <div className="bg-slate-900 border-b border-slate-800 text-xs py-2 px-4 text-slate-300">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <span className="font-bold text-amber-400 flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4" /> Summit Regional Master Guild
            </span>
            <span className="text-slate-600 hidden sm:inline">|</span>
            <span className="text-slate-400 hidden sm:inline">Regional Dispatch Center · 54 Active Fleet Trucks</span>
          </div>
          <div className="flex items-center gap-4 text-xs font-mono">
            <span className="text-emerald-400 hidden md:inline">● All 5 Regional Depots Active</span>
            <a href="tel:18005557866" className="text-white font-bold hover:text-amber-400 flex items-center gap-1">
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span>(800) 555-SUMMIT</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Layout: Left Page Directory (21 Pages Index) + Right Content Viewport */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Top Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-800 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <div className="w-8 h-8 rounded bg-gradient-to-tr from-amber-500 to-amber-600 flex items-center justify-center text-slate-950 font-black">
                S
              </div>
              <h1 className="text-2xl font-bold text-white font-display tracking-tight">
                Summit Regional Multi-Trade & Home Services
              </h1>
            </div>
            <p className="text-xs text-slate-400">
              The Flagship 21-Page Regional Organic Search Moat Architecture
            </p>
          </div>

          {/* Quick Page Counter Badge */}
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 bg-amber-400/10 text-amber-400 border border-amber-500/30 rounded-lg text-xs font-mono font-bold">
              21 Unique Pages Indexed
            </span>
            <button
              onClick={() => setCurrentRoute('book-inspection')}
              className="px-4 py-2 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold rounded-lg text-xs transition-colors"
            >
              Book Multi-Trade Inspection
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT COLUMN: 21-Page Navigation Directory */}
          <aside aria-label="Summit 21-Page Directory Navigation" className="lg:col-span-4 bg-slate-900 border border-slate-800 rounded-2xl p-4 sm:p-5 space-y-6 sticky top-14 max-h-[85vh] overflow-y-auto">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-slate-500 block mb-2 font-bold">
                1. Central Hub Overview
              </span>
              <button
                onClick={() => setCurrentRoute('overview')}
                className={`w-full text-left px-3 py-2 rounded-lg text-xs transition-colors cursor-pointer flex items-center justify-between ${
                  currentRoute === 'overview'
                    ? 'bg-amber-400 text-slate-950 font-bold'
                    : 'text-slate-300 hover:bg-slate-800'
                }`}
              >
                <span>Regional Authority Home</span>
                <span className="text-[10px] font-mono opacity-80">Page 1</span>
              </button>
            </div>

            {/* 8 Trade Silos */}
            <div className="space-y-1">
              <span className="text-[10px] font-mono uppercase tracking-widest text-slate-500 block mb-2 font-bold">
                2. Master Trade Silos (8 Pages)
              </span>
              {SUMMIT_SERVICES.map((s, idx) => {
                const routeKey = `service/${s.slug}`;
                const isSelected = currentRoute === routeKey;
                return (
                  <button
                    key={s.slug}
                    onClick={() => setCurrentRoute(routeKey)}
                    className={`w-full text-left px-3 py-1.5 rounded-lg text-xs transition-colors cursor-pointer flex items-center justify-between ${
                      isSelected
                        ? 'bg-amber-400 text-slate-950 font-bold'
                        : 'text-slate-300 hover:bg-slate-800'
                    }`}
                  >
                    <span className="truncate pr-2">{s.name}</span>
                    <span className="text-[10px] font-mono opacity-70 shrink-0">P{idx + 2}</span>
                  </button>
                );
              })}
            </div>

            {/* 5 Suburb Catchment Pages */}
            <div className="space-y-1">
              <span className="text-[10px] font-mono uppercase tracking-widest text-slate-500 block mb-2 font-bold">
                3. Suburb Silos (5 Pages)
              </span>
              {SUMMIT_LOCATIONS.map((loc, idx) => {
                const routeKey = `location/${loc.slug}`;
                const isSelected = currentRoute === routeKey;
                return (
                  <button
                    key={loc.slug}
                    onClick={() => setCurrentRoute(routeKey)}
                    className={`w-full text-left px-3 py-1.5 rounded-lg text-xs transition-colors cursor-pointer flex items-center justify-between ${
                      isSelected
                        ? 'bg-amber-400 text-slate-950 font-bold'
                        : 'text-slate-300 hover:bg-slate-800'
                    }`}
                  >
                    <span className="truncate pr-2">{loc.name}</span>
                    <span className="text-[10px] font-mono opacity-70 shrink-0">P{idx + 10}</span>
                  </button>
                );
              })}
            </div>

            {/* 7 Governance & Compliance Pages */}
            <div className="space-y-1">
              <span className="text-[10px] font-mono uppercase tracking-widest text-slate-500 block mb-2 font-bold">
                4. Compliance & Support (7 Pages)
              </span>
              {SUMMIT_RESOURCE_PAGES.map((res, idx) => {
                const isSelected = currentRoute === res.slug;
                return (
                  <button
                    key={res.slug}
                    onClick={() => setCurrentRoute(res.slug)}
                    className={`w-full text-left px-3 py-1.5 rounded-lg text-xs transition-colors cursor-pointer flex items-center justify-between ${
                      isSelected
                        ? 'bg-amber-400 text-slate-950 font-bold'
                        : 'text-slate-300 hover:bg-slate-800'
                    }`}
                  >
                    <span className="truncate pr-2">{res.title}</span>
                    <span className="text-[10px] font-mono opacity-70 shrink-0">P{idx + 15}</span>
                  </button>
                );
              })}
            </div>
          </aside>

          {/* RIGHT COLUMN: The Unique Page Content Viewport */}
          <main className="lg:col-span-8 bg-slate-900/60 border border-slate-800 rounded-2xl p-6 sm:p-8 min-h-[600px]">
            
            {/* PAGE 1: OVERVIEW */}
            {currentRoute === 'overview' && (
              <div className="space-y-8 animate-fade-in">
                <div>
                  <span className="text-xs font-semibold text-amber-400 uppercase tracking-widest block mb-2">
                    Metropolitan Infrastructure Guild
                  </span>
                  <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display">
                    One Unified Regional SLA Across 8 Specialized Trades
                  </h2>
                  <p className="text-sm text-slate-300 leading-relaxed mt-3">
                    Summit Regional consolidates HVAC, electrical, plumbing, roofing, foundation, pest, commercial facility maintenance, and EV automation under one accountability charter.
                  </p>
                </div>

                {/* 8 Trade Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {SUMMIT_SERVICES.map((trade) => (
                    <div
                      key={trade.slug}
                      onClick={() => setCurrentRoute(`service/${trade.slug}`)}
                      className="p-4 bg-slate-950 border border-slate-800 hover:border-amber-400/50 rounded-xl cursor-pointer transition-all space-y-2"
                    >
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-bold text-white">{trade.name}</span>
                        <span className="text-[10px] text-amber-400 font-mono">View Silo →</span>
                      </div>
                      <p className="text-[11px] text-slate-400 line-clamp-2 leading-relaxed">{trade.headline}</p>
                      <div className="text-[10px] text-slate-500 font-mono pt-1">
                        Response: {trade.avgResponseTime}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Regional Depot Fleet Status */}
                <div className="p-5 bg-slate-950 rounded-xl border border-slate-800 space-y-3">
                  <h3 className="font-bold text-white text-sm">Active Metropolitan Depots</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                    {SUMMIT_LOCATIONS.slice(0, 3).map((loc) => (
                      <div
                        key={loc.slug}
                        onClick={() => setCurrentRoute(`location/${loc.slug}`)}
                        className="p-3 bg-slate-900 rounded-lg border border-slate-800 cursor-pointer hover:border-slate-700"
                      >
                        <span className="font-semibold text-white block">{loc.name}</span>
                        <span className="text-emerald-400 font-mono text-[11px]">{loc.activeCrews} Active Vans</span>
                        <span className="text-slate-500 block text-[10px] mt-0.5">Avg arrival: {loc.avgArrivalMinutes} mins</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* PAGES 2–9: INDIVIDUAL TRADE SILOS */}
            {activeService && (
              <div className="space-y-6 animate-fade-in">
                <div className="border-b border-slate-800 pb-4">
                  <span className="text-xs font-semibold text-amber-400 uppercase tracking-widest block mb-1">
                    Dedicated Trade Authority Silo
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-bold text-white font-display">
                    {activeService.name}
                  </h2>
                  <p className="text-xs font-mono text-slate-400 mt-1">
                    Division Director: {activeService.tradeHead}
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                  <div className="p-3 bg-slate-950 rounded-lg border border-slate-800">
                    <span className="text-slate-500 block text-[10px] uppercase font-mono">Guaranteed Response</span>
                    <span className="font-bold text-white text-sm">{activeService.avgResponseTime}</span>
                  </div>
                  <div className="p-3 bg-slate-950 rounded-lg border border-slate-800">
                    <span className="text-slate-500 block text-[10px] uppercase font-mono">Diagnostic Pricing</span>
                    <span className="font-bold text-amber-400 text-xs">{activeService.baseStartingPrice}</span>
                  </div>
                  <div className="p-3 bg-slate-950 rounded-lg border border-slate-800">
                    <span className="text-slate-500 block text-[10px] uppercase font-mono">Emergency Ready</span>
                    <span className={`font-bold text-xs ${activeService.emergencyAvailable ? 'text-emerald-400' : 'text-slate-400'}`}>
                      {activeService.emergencyAvailable ? '24/7 Priority Standby' : 'Standard Scheduled'}
                    </span>
                  </div>
                </div>

                <p className="text-sm text-slate-300 leading-relaxed">
                  {activeService.summary}
                </p>

                {/* Key Technical Procedures */}
                <div className="space-y-3 pt-2">
                  <h4 className="text-xs font-semibold text-white uppercase tracking-wider">
                    Core Technical Procedures & Turnarounds:
                  </h4>
                  <div className="space-y-2.5">
                    {activeService.keyServices.map((ks, i) => (
                      <div key={i} className="p-4 bg-slate-950 rounded-xl border border-slate-800/80 text-xs space-y-1">
                        <div className="flex items-center justify-between">
                          <span className="font-bold text-white">{ks.title}</span>
                          <span className="text-[10px] font-mono text-amber-400 bg-amber-950/40 px-2 py-0.5 rounded border border-amber-800/60">
                            {ks.standardTurnaround}
                          </span>
                        </div>
                        <p className="text-slate-400 leading-relaxed">{ks.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Equipment & Warranty specs */}
                <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 text-xs space-y-2">
                  <span className="font-bold text-white block">Commercial Equipment Specs:</span>
                  <div className="flex flex-wrap gap-2 text-[11px] text-slate-300">
                    {activeService.equipmentSpecs.map((spec, i) => (
                      <span key={i} className="px-2.5 py-1 bg-slate-900 rounded border border-slate-800 font-mono">
                        {spec}
                      </span>
                    ))}
                  </div>
                  <div className="pt-2 text-slate-400 text-[11px]">
                    <span className="text-amber-400 font-semibold">Warranty Terms:</span> {activeService.warrantyTerms}
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    onClick={() => setCurrentRoute('book-inspection')}
                    className="px-5 py-2.5 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold rounded-lg text-xs transition-colors"
                  >
                    Schedule {activeService.name} Inspection
                  </button>
                </div>
              </div>
            )}

            {/* PAGES 10–14: SUBURB SILOS */}
            {activeLocation && (
              <div className="space-y-6 animate-fade-in">
                <div className="border-b border-slate-800 pb-4">
                  <span className="text-xs font-semibold text-amber-400 uppercase tracking-widest block mb-1">
                    Regional Catchment Silo
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-bold text-white font-display">
                    {activeLocation.name}
                  </h2>
                  <p className="text-xs text-slate-400 mt-1">
                    Coverage: {activeLocation.coverageMetro} · Dispatch Depot: {activeLocation.depotAddress}
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                  <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
                    <span className="text-slate-500 font-mono text-[10px] uppercase">Active Fleet Vans on Patrol:</span>
                    <span className="text-xl font-bold text-emerald-400 font-mono block">{activeLocation.activeCrews} Trucks</span>
                    <span className="text-slate-400 text-[11px]">Average arrival to site: {activeLocation.avgArrivalMinutes} minutes</span>
                  </div>
                  <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
                    <span className="text-slate-500 font-mono text-[10px] uppercase">Local Dispatch Direct Line:</span>
                    <span className="text-xl font-bold text-white font-mono block">{activeLocation.servicePhone}</span>
                    <span className="text-slate-400 text-[11px]">Local permit coordinator on duty</span>
                  </div>
                </div>

                <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-3 text-xs">
                  <span className="font-bold text-white block">Key Neighborhood Catchments:</span>
                  <div className="flex flex-wrap gap-2">
                    {activeLocation.keyNeighborhoods.map((nb, i) => (
                      <span key={i} className="px-2.5 py-1 bg-slate-900 border border-slate-800 rounded text-slate-300">
                        {nb}
                      </span>
                    ))}
                  </div>

                  <div className="pt-2 border-t border-slate-800 text-[11px] text-slate-400 space-y-1">
                    <span className="font-semibold text-amber-400 block">Localized Geographical Conditions:</span>
                    <p>{activeLocation.specialtyLocalIssues}</p>
                  </div>
                </div>

                <button
                  onClick={() => setCurrentRoute('book-inspection')}
                  className="px-5 py-2.5 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold rounded-lg text-xs transition-colors"
                >
                  Request Dispatch in {activeLocation.name}
                </button>
              </div>
            )}

            {/* PAGES 15–20: COMPLIANCE & RESOURCE PORTALS */}
            {activeResource && (
              <div className="space-y-6 animate-fade-in">
                <div className="border-b border-slate-800 pb-4">
                  <span className="text-xs font-semibold text-amber-400 uppercase tracking-widest block mb-1">
                    {activeResource.category}
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-bold text-white font-display">
                    {activeResource.title}
                  </h2>
                  <p className="text-xs text-slate-400 mt-1">{activeResource.subtitle}</p>
                </div>

                {/* Sub-view per resource page */}
                {activeResource.slug === 'compliance-licensing' && (
                  <div className="space-y-4 text-xs text-slate-300">
                    <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-2">
                      <span className="font-bold text-white block">Public Trade Registry Numbers:</span>
                      <ul className="space-y-1 text-slate-400">
                        <li>• Master Mechanical License (HVAC): #TACLA88391E</li>
                        <li>• Master Electrical Contractor License: #TECL44910</li>
                        <li>• Responsible Master Plumber (RMP): #MP40219</li>
                        <li>• Commercial Building & Roofing Contractor: #CR19488</li>
                      </ul>
                    </div>
                    <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 text-slate-400 leading-relaxed">
                      All crews carry $5,000,000 commercial general liability insurance certificates and 100% statutory workers compensation. Certificates available upon request.
                    </div>
                  </div>
                )}

                {activeResource.slug === 'emergency-dispatch' && (
                  <div className="space-y-4 text-xs text-slate-300">
                    <div className="p-4 bg-rose-950/40 border border-rose-800/80 rounded-xl text-rose-200">
                      <strong>Priority Board:</strong> 4 on-call crews responding to emergency water leaks and commercial electrical alerts. Average arrival time 24 minutes.
                    </div>
                    <div className="p-4 bg-slate-950 rounded-xl border border-slate-800">
                      <span className="font-bold text-white block mb-2">Emergency Protocols Enforced:</span>
                      <p className="text-slate-400">Call (800) 555-SUMMIT for immediate telephone triage and valve shut-off guidance while a mobile unit is en route.</p>
                    </div>
                  </div>
                )}

                {activeResource.slug === 'financing' && (
                  <div className="space-y-4 text-xs text-slate-300">
                    <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-2">
                      <span className="font-bold text-white block">Zero Percent APR Programs:</span>
                      <p className="text-slate-400">12 and 24 month interest-free financing available through Synchrony Financial and GreenSky for HVAC heat pumps, roof replacements, and electrical heavy-ups.</p>
                    </div>
                  </div>
                )}

                {activeResource.slug === 'warranty-charter' && (
                  <div className="space-y-4 text-xs text-slate-300">
                    <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-2">
                      <span className="font-bold text-white block">Guild Non-Prorated Guarantee:</span>
                      <p className="text-slate-400">If any repair, installation, or structural component installed by a Summit Guild technician fails within contractual warranty periods, we repair or replace at zero customer cost.</p>
                    </div>
                  </div>
                )}

                {activeResource.slug === 'about-guild' && (
                  <div className="space-y-4 text-xs text-slate-300">
                    <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-2">
                      <span className="font-bold text-white block">The Guild Network Origin:</span>
                      <p className="text-slate-400">Founded in 2018 to eliminate homeowner frustration with unreliable subcontractors. We coordinate all mechanical, electrical, and structural crafts under a single SLA.</p>
                    </div>
                  </div>
                )}

                {activeResource.slug === 'careers' && (
                  <div className="space-y-4 text-xs text-slate-300">
                    <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-2">
                      <span className="font-bold text-white block">Master Journeyman Hiring:</span>
                      <p className="text-slate-400">Offering $42–$58/hour, company take-home vans, 100% paid health benefits, and tool allowances for certified licensed technicians.</p>
                    </div>
                  </div>
                )}

                {/* PAGE 21: BOOK MULTI-TRADE INSPECTION */}
                {activeResource.slug === 'book-inspection' && (
                  <div className="space-y-6 text-xs text-slate-300">
                    {dispatchConfirmed ? (
                      <div className="p-6 bg-slate-950 border border-emerald-500 rounded-xl text-center space-y-3">
                        <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto" />
                        <h4 className="font-bold text-white text-base">Multi-Trade Dispatch Requested!</h4>
                        <p className="text-slate-300">In this portfolio demo, your inspection window for {selectedTrades.length} trades has been simulated.</p>
                        <button onClick={() => setDispatchConfirmed(false)} className="px-3 py-1 bg-slate-800 text-white rounded text-xs">
                          Book Another Window
                        </button>
                      </div>
                    ) : (
                      <div className="space-y-4">
                        <div>
                          <label className="block text-slate-400 font-semibold mb-2">Select Trades to Coordinate in One Visit:</label>
                          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                            {SUMMIT_SERVICES.map(svc => (
                              <button
                                key={svc.slug}
                                type="button"
                                onClick={() => toggleTrade(svc.slug)}
                                className={`p-2 rounded text-left transition-colors border ${
                                  selectedTrades.includes(svc.slug)
                                    ? 'bg-amber-400/10 border-amber-400 text-amber-300 font-bold'
                                    : 'bg-slate-950 border-slate-800 text-slate-400'
                                }`}
                              >
                                {svc.name.split(',')[0]}
                              </button>
                            ))}
                          </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-slate-400 font-semibold mb-1">Property Location / Suburb</label>
                            <select className="w-full p-2.5 bg-slate-950 border border-slate-700 rounded text-white">
                              {SUMMIT_LOCATIONS.map(l => (
                                <option key={l.slug}>{l.name}</option>
                              ))}
                            </select>
                          </div>
                          <div>
                            <label className="block text-slate-400 font-semibold mb-1">Contact Phone</label>
                            <input type="tel" placeholder="+1 (555) 349-1100" className="w-full p-2.5 bg-slate-950 border border-slate-700 rounded text-white" />
                          </div>
                        </div>

                        <button
                          onClick={() => setDispatchConfirmed(true)}
                          className="w-full py-3 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold rounded-lg transition-colors cursor-pointer"
                        >
                          Confirm Coordinated Multi-Trade Arrival
                        </button>
                      </div>
                    )}
                  </div>
                )}
              </div>
            )}

          </main>
        </div>
      </div>
    </div>
  );
};
