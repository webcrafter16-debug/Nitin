import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Zap, Layout, ShieldCheck, ShoppingBag, Globe, Database, Smartphone } from 'lucide-react';
import { useCurrency } from '../context/CurrencyContext';

export const ServicesPage: React.FC = () => {
  const { formatPrice, currency } = useCurrency();

  const services = [
    {
      id: 'one-page',
      title: '1-Page Lead Lander & Call Funnel',
      bestFor: 'Solo trades, emergency repair contractors, and single-offer local services',
      startingPriceUSD: 499,
      turnaround: '3 to 5 business days',
      demoRoute: '/portfolio/demo/sparklecraft-cleaning',
      demoLabel: 'SparkleCraft Cleaning Demo',
      features: [
        'Single-page friction-free conversion architecture',
        'Sticky emergency click-to-call mobile bar',
        'Interactive quote calculator or booking lead form',
        'Google Business Profile integration & Local Schema markup',
        '95+ Mobile Google PageSpeed score guaranteed',
        'Zero-maintenance hosting on modern edge CDN'
      ],
      description: 'Built for businesses where the majority of customers arrive on mobile with urgent intent (e.g., plumbers, towing, lockouts, or local cleaners). No multi-page maze—just immediate credibility, proof, and one-tap calling.'
    },
    {
      id: 'five-page',
      title: '5-Page Signature Service Authority',
      bestFor: 'Established local businesses (Dentists, Salons, Roofers, Landscapers)',
      startingPriceUSD: 899,
      turnaround: '7 to 10 business days',
      popular: true,
      demoRoute: '/portfolio/demo/lumina-dental',
      demoLabel: 'Lumina Dental Demo',
      features: [
        '5 Tailored pages: Home, Dedicated Services, About/Story, Gallery/Proof, Contact',
        'Interactive custom module (Before/After transformation slider, interactive menu)',
        'Local SEO foundation targeting your top 3 high-value keyword clusters',
        'Review syndication architecture (Google, Yelp, Checkatrade/BBB)',
        'Form spam protection & direct lead notifications to your email/SMS',
        'Complete client editor access or free 30-day post-launch support'
      ],
      description: 'Our most popular tier. Gives local homeowners and clients deep confidence that you are the premier, established professional in your city. Balances visual elegance with sharp commercial lead capture.'
    },
    {
      id: 'ten-page',
      title: '10-Page Trade Dominance Engine',
      bestFor: 'Growing contractors, HVAC firms, commercial plumbers, and remodelers',
      startingPriceUSD: 1499,
      turnaround: '12 to 16 business days',
      demoRoute: '/portfolio/demo/apex-plumbing',
      demoLabel: 'Apex Flow Plumbing Demo',
      features: [
        '10 Strategic pages: 4 specific service silos + 3 regional suburb landing pages',
        'Interactive financing calculator or multi-step quote wizard',
        'Deep Local Schema JSON-LD markup across all service areas',
        'High-resolution fast-loading project case study galleries',
        'Thumb-friendly callout triggers across every viewport',
        '60-day post-launch warranty and core web vitals SLA'
      ],
      description: 'Designed for contractors competing against heavy local competitors. Dedicated sub-pages for specific trades (e.g. Drain Jetting, Tankless Water Heaters, Boiler Replacements) allow you to rank for high-intent search terms.'
    },
    {
      id: 'twenty-page',
      title: '20+ Page Regional Multi-Location Hub',
      bestFor: 'Multi-crew contractors, regional service enterprises, and multi-suburb operations',
      startingPriceUSD: 2499,
      turnaround: '18 to 25 business days',
      demoRoute: '/portfolio/demo/summit-regional',
      demoLabel: 'Summit 21-Page Hub Demo',
      features: [
        '20+ Unique authority pages: 8 distinct trade silos + 5 city/suburb catchment pages',
        'Licensing registry, trade compliance proofs & warranty charters',
        'Centralized dispatch request system & emergency priority call board',
        'Comprehensive on-page technical SEO & structured cluster architecture',
        'Full technical documentation & video training walkthrough',
        '90-day ongoing growth monitoring and search engine indexing guarantee'
      ],
      description: 'A complete regional organic search moat. Captures search traffic across an entire metropolitan area by targeting individual suburbs and municipal jurisdictions with localized response times.'
    },
    {
      id: 'ecommerce',
      title: 'Artisan & Boutique E-Commerce Store',
      bestFor: 'Makers, lifestyle brands, specialty food & physical goods sellers',
      startingPriceUSD: 1899,
      turnaround: '14 to 20 business days',
      demoRoute: '/ecommerce-demo',
      demoLabel: 'Kōbo Artisanal Goods Demo',
      features: [
        'Curated product catalog with category filtering, search, and sorting',
        'High-impact Product Detail Pages with specifications & material details',
        'Frictionless shopping cart with slide-out drawer & quantity controls',
        'Secure payment gateway integration (Stripe, Apple Pay, PayPal / Shopify)',
        'Automated transactional emails (Order confirmation, tracking updates)',
        'Zero proprietary platform transaction penalties'
      ],
      description: 'Fast, minimalist storefront engineered for high conversion and high average order value. Completely eliminates the slow checkout bottlenecks common in overloaded e-commerce setups.'
    }
  ];

  return (
    <div className="space-y-20 py-12">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <span className="text-xs font-semibold text-amber-400 uppercase tracking-widest block mb-2">
            Engineering & Design Capabilities
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white font-display tracking-tight mb-6">
            Bespoke Web Solutions Scaled to Your Business Goals
          </h1>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Every website we construct is hand-crafted with clean, production-grade code. No cookie-cutter themes, no hidden licensing fees, and no hostage code. All packages priced clearly in {currency.code}.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {services.map((svc) => (
          <div
            key={svc.id}
            id={svc.id}
            className={`bg-slate-900 border rounded-2xl p-6 sm:p-10 transition-all ${
              svc.popular ? 'border-amber-500/50 shadow-xl shadow-amber-500/5' : 'border-slate-800'
            }`}
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left Column: Details */}
              <div className="lg:col-span-8 space-y-4">
                <div className="flex flex-wrap items-center gap-3">
                  <h2 className="text-2xl sm:text-3xl font-bold text-white font-display">
                    {svc.title}
                  </h2>
                  {svc.popular && (
                    <span className="px-2.5 py-0.5 rounded text-xs font-bold bg-amber-400 text-slate-950">
                      Most Popular
                    </span>
                  )}
                </div>

                <p className="text-xs text-amber-400 font-semibold uppercase tracking-wider">
                  Ideal For: {svc.bestFor}
                </p>

                <p className="text-sm text-slate-300 leading-relaxed">
                  {svc.description}
                </p>

                {/* Deliverables Checklist */}
                <div className="pt-4 border-t border-slate-800/80">
                  <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
                    What Is Included In Every Build:
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {svc.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Pricing & Demo CTA */}
              <div className="lg:col-span-4 bg-slate-950 rounded-xl p-6 border border-slate-800 flex flex-col justify-between h-full space-y-6">
                <div>
                  <span className="text-[11px] uppercase tracking-wider text-slate-400 block mb-1">
                    Investment Guidance
                  </span>
                  <div className="text-3xl font-black text-white font-mono tracking-tight">
                    {formatPrice(svc.startingPriceUSD)}
                    <span className="text-xs font-normal text-slate-400 ml-1.5">{currency.code}</span>
                  </div>
                  <div className="text-xs text-slate-400 mt-1">
                    Typical timeline: <span className="text-slate-200 font-medium">{svc.turnaround}</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <Link
                    to={svc.demoRoute}
                    className="w-full py-2.5 px-4 bg-slate-900 hover:bg-slate-800 text-amber-400 font-semibold rounded-lg text-xs border border-amber-500/30 flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <span>View Concept Demo ({svc.demoLabel})</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>

                  <Link
                    to="/contact"
                    className="w-full py-2.5 px-4 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold rounded-lg text-xs flex items-center justify-center gap-1.5 transition-colors shadow-sm"
                  >
                    <span>Request Proposal for This Tier</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Technical Quality Standards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-8 sm:p-10">
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-semibold text-amber-400 uppercase tracking-widest block mb-2">
              The WebCraft Pro Technical Standard
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white font-display mb-3">
              Standard Engineering Across Every Single Website
            </h2>
            <p className="text-sm text-slate-400 leading-relaxed">
              Regardless of package tier, we never cut corners on baseline architecture, security, or mobile compliance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-slate-300">
            <div className="space-y-2 p-4 bg-slate-950/60 rounded-xl border border-slate-800/80">
              <span className="font-bold text-white block text-sm">Performance First</span>
              <p className="text-slate-400 leading-relaxed">
                Zero bloated themes or unused CSS. Compressed modern WebP/AVIF graphics, lazy-loading, and static edge caching.
              </p>
            </div>
            <div className="space-y-2 p-4 bg-slate-950/60 rounded-xl border border-slate-800/80">
              <span className="font-bold text-white block text-sm">WCAG 2.1 AA Accessibility</span>
              <p className="text-slate-400 leading-relaxed">
                Audited color contrasts, descriptive ARIA attributes, semantic HTML elements, and keyboard navigability.
              </p>
            </div>
            <div className="space-y-2 p-4 bg-slate-950/60 rounded-xl border border-slate-800/80">
              <span className="font-bold text-white block text-sm">Clean Handoff & Git Source</span>
              <p className="text-slate-400 leading-relaxed">
                You receive full ownership of the clean TypeScript repository with zero hidden scripts or obfuscated code.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
