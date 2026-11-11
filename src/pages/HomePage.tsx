import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, ShieldCheck, Zap, Globe, Smartphone, Gauge, MapPin, Sparkles } from 'lucide-react';
import { PORTFOLIO_ITEMS } from '../data/portfolioData';
import { RoiCalculator } from '../components/tools/RoiCalculator';
import { AuditEstimator } from '../components/tools/AuditEstimator';
import { useCurrency } from '../context/CurrencyContext';

export const HomePage: React.FC = () => {
  const { formatPrice, currency } = useCurrency();

  // Featured 4 portfolio demos for the homepage showcase
  const featuredDemos = PORTFOLIO_ITEMS.slice(0, 4);

  return (
    <div className="space-y-24 pb-20">
      {/* Hero Section */}
      <section className="relative pt-12 sm:pt-20 lg:pt-24 overflow-hidden">
        {/* Subtle background ambient lighting */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl">
            {/* Editorial Kicker */}
            <div className="text-xs font-semibold text-amber-400 uppercase tracking-widest mb-4 flex items-center gap-2">
              <span>Bespoke Web Development For Contractors & Local Services</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight font-display mb-6 leading-[1.1] text-balance">
              Websites Engineered to Turn Local Searchers Into <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500">Booked Clients</span>
            </h1>

            {/* Value Proposition */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8 max-w-2xl">
              Custom-built, ultra-fast websites designed for small business owners in the USA, UK, Canada, and Australia. No slow WordPress plugins, no bloated Wix templates, and no middleman markups.
            </p>

            {/* Primary Actions */}
            <div className="flex flex-wrap items-center gap-4 mb-12">
              <Link
                to="/portfolio"
                className="px-6 py-3.5 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold rounded-lg text-sm transition-all shadow-lg hover:shadow-amber-400/20 flex items-center gap-2"
              >
                <span>Explore Working Demos</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/pricing"
                className="px-6 py-3.5 bg-slate-900 hover:bg-slate-800 text-white font-semibold rounded-lg text-sm border border-slate-700 transition-colors"
              >
                <span>Transparent Pricing from {formatPrice(499)}</span>
              </Link>
            </div>

            {/* Target Market Trust Bar */}
            <div className="pt-8 border-t border-slate-900 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <span className="text-base">🇺🇸</span>
                <span>United States</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-base">🇬🇧</span>
                <span>United Kingdom</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-base">🇨🇦</span>
                <span>Canada</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-base">🇦🇺</span>
                <span>Australia</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-semibold text-amber-400 uppercase tracking-widest block mb-2">
            Engineered For Commercial Outcomes
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white font-display mb-4">
            Why Generic Templates Lose Local Service Calls
          </h2>
          <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
            When a homeowner has a burst pipe, leaking roof, or dental toothache on their phone, every second of load time cuts conversion in half. We build fast, distraction-free architectures.
          </p>
        </div>

        {/* Asymmetric Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: 95+ PageSpeed */}
          <div className="md:col-span-2 bg-slate-900/90 border border-slate-800 rounded-2xl p-8 relative overflow-hidden">
            <div className="max-w-md">
              <div className="w-10 h-10 rounded-lg bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-amber-400 mb-6">
                <Gauge className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-white font-display mb-3">
                01. 95+ Mobile Google PageSpeed Architecture
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed mb-6">
                Most DIY templates load 4MB of unused JavaScript, slow Google fonts, and uncompressed graphics. Our sites are hand-coded with clean modern React and Tailwind, loading in under 0.8 seconds on 4G cellular connections.
              </p>
              <div className="grid grid-cols-3 gap-3 text-center border-t border-slate-800/80 pt-4">
                <div>
                  <div className="text-2xl font-black text-emerald-400 font-mono">0.6s</div>
                  <div className="text-[11px] text-slate-400">First Contentful Paint</div>
                </div>
                <div>
                  <div className="text-2xl font-black text-emerald-400 font-mono">99/100</div>
                  <div className="text-[11px] text-slate-400">Mobile Lighthouse</div>
                </div>
                <div>
                  <div className="text-2xl font-black text-emerald-400 font-mono">0 kb</div>
                  <div className="text-[11px] text-slate-400">Plugin Bloat</div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Click-to-Call Frictionless UI */}
          <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-8 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-lg bg-sky-400/10 border border-sky-400/20 flex items-center justify-center text-sky-400 mb-6">
                <Smartphone className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-white font-display mb-3">
                02. Mobile-First Click to Call
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed mb-4">
                Sticky emergency phone headers, thumb-zone tap targets, and streamlined quote forms that prompt instant customer action without friction.
              </p>
            </div>
            <div className="text-xs text-amber-400 font-semibold flex items-center gap-1.5 pt-2">
              <CheckCircle2 className="w-4 h-4" />
              <span>Tested on real iOS and Android devices</span>
            </div>
          </div>

          {/* Card 3: Local Area Schema */}
          <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-8 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-lg bg-teal-400/10 border border-teal-400/20 flex items-center justify-center text-teal-400 mb-6">
                <MapPin className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-white font-display mb-3">
                03. Local Catchment SEO
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed mb-4">
                Structured LocalBusiness JSON-LD schema, suburb silo pages, and opening-hour markup engineered for Google Maps 3-Pack placement.
              </p>
            </div>
            <div className="text-xs text-teal-400 font-semibold flex items-center gap-1.5 pt-2">
              <CheckCircle2 className="w-4 h-4" />
              <span>Full geographic metadata tagging</span>
            </div>
          </div>

          {/* Card 4: Total Ownership */}
          <div className="md:col-span-2 bg-slate-900/90 border border-slate-800 rounded-2xl p-8">
            <div className="w-10 h-10 rounded-lg bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-amber-400 mb-6">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-bold text-white font-display mb-3">
              04. 100% Code & Asset Ownership
            </h3>
            <p className="text-sm text-slate-400 leading-relaxed max-w-xl mb-4">
              You own your code, domain, and graphics completely. Never get locked into proprietary website builders charging $40/month plus transaction cuts, or agencies holding your credentials hostage.
            </p>
            <div className="flex flex-wrap gap-4 text-xs text-slate-300">
              <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Free Git repository handover</span>
              <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Zero hosting lock-in (Vercel, Netlify, Cloudflare)</span>
              <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Clean commented TypeScript</span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Working Concepts Portfolio Preview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-xs font-semibold text-amber-400 uppercase tracking-widest block mb-2">
              Proof Over Promises
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white font-display">
              Working Portfolio Concept Demonstrations
            </h2>
          </div>
          <Link
            to="/portfolio"
            className="text-sm font-semibold text-amber-400 hover:text-amber-300 flex items-center gap-1.5 transition-colors whitespace-nowrap"
          >
            <span>View All 10 Concept Demos</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Portfolio Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featuredDemos.map((item) => (
            <div
              key={item.id}
              className="group bg-slate-900 border border-slate-800 hover:border-slate-700 rounded-2xl p-6 sm:p-8 flex flex-col justify-between transition-all"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-slate-400 mb-3">
                  <span>{item.categoryLabel}</span>
                  <span className="text-amber-400 font-mono font-medium">{item.pageCountLabel}</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white font-display mb-2 group-hover:text-amber-400 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-6">
                  {item.description}
                </p>

                {/* Key Features */}
                <div className="space-y-2 mb-6">
                  {item.features.slice(0, 3).map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                <span className="text-[11px] text-slate-400">Target: {item.targetMarket}</span>
                <Link
                  to={item.demoRoute}
                  className="px-4 py-2 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold rounded-lg text-xs flex items-center gap-1.5 transition-colors shadow-sm"
                >
                  <span>Launch Live Demo</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Interactive ROI Calculator Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <RoiCalculator />
      </section>

      {/* Instant Website Audit Tool Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AuditEstimator />
      </section>

      {/* 4-Stage Transparent Process Preview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12">
          <span className="text-xs font-semibold text-amber-400 uppercase tracking-widest block mb-2">
            No Guesswork Methodology
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white font-display mb-4">
            How Your Website Gets Built & Launched in 14 Days
          </h2>
          <p className="text-sm text-slate-400 leading-relaxed">
            Transparent milestones, staging previews where you test on your own phone before paying the final balance, and zero technical jargon.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-slate-900/60 border border-slate-800/80 rounded-xl p-6">
            <span className="text-xs font-mono text-amber-400 font-bold block mb-3">01. Days 1–2</span>
            <h3 className="font-bold text-white text-base mb-2 font-display">Discovery & Wireframe</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              We review your top services, pricing, competitors, and map out high-converting page architecture.
            </p>
          </div>

          <div className="bg-slate-900/60 border border-slate-800/80 rounded-xl p-6">
            <span className="text-xs font-mono text-amber-400 font-bold block mb-3">02. Days 3–7</span>
            <h3 className="font-bold text-white text-base mb-2 font-display">Interactive Build</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Full-code development with responsive mobile layout, custom copy, and fast asset optimization.
            </p>
          </div>

          <div className="bg-slate-900/60 border border-slate-800/80 rounded-xl p-6">
            <span className="text-xs font-mono text-amber-400 font-bold block mb-3">03. Days 8–11</span>
            <h3 className="font-bold text-white text-base mb-2 font-display">Review & Revisions</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Private staging link shared. We adjust content, tweak colors, and verify forms on your devices.
            </p>
          </div>

          <div className="bg-slate-900/60 border border-slate-800/80 rounded-xl p-6">
            <span className="text-xs font-mono text-amber-400 font-bold block mb-3">04. Days 12–14</span>
            <h3 className="font-bold text-white text-base mb-2 font-display">Domain DNS & Launch</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              We connect your custom domain, install free SSL, submit Google sitemaps, and hand over source code.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 rounded-2xl p-8 sm:p-12 text-slate-950 relative overflow-hidden shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-xl">
            <span className="text-xs font-bold uppercase tracking-widest text-slate-900 block mb-2">
              Ready to Upgrade Your Local Reach?
            </span>
            <h2 className="text-3xl sm:text-4xl font-black font-display tracking-tight text-slate-950 mb-3">
              Request Your Free Strategy & Fixed Quote
            </h2>
            <p className="text-sm font-medium text-slate-900 leading-relaxed">
              Tell us about your business. We will review your current presence and provide a clear scope, timeline, and fixed price quote in {currency.code} within 24 hours.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <Link
              to="/contact"
              className="px-6 py-3.5 bg-slate-950 hover:bg-slate-900 text-white font-bold rounded-lg text-sm transition-colors text-center shadow-md flex items-center justify-center gap-2"
            >
              <span>Request Free Scope</span>
              <ArrowRight className="w-4 h-4 text-amber-400" />
            </Link>
            <Link
              to="/pricing"
              className="px-6 py-3.5 bg-white/30 hover:bg-white/40 text-slate-950 font-bold rounded-lg text-sm transition-colors text-center"
            >
              <span>View Packages</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
