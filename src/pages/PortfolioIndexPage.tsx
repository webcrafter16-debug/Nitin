import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Search, Filter, ArrowRight, CheckCircle2, ShieldCheck, Sparkles, Layers } from 'lucide-react';
import { PORTFOLIO_ITEMS } from '../data/portfolioData';
import { ProjectCategory, PageTier } from '../types';

export const PortfolioIndexPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('all');
  const [selectedTier, setSelectedTier] = useState<string>('all');

  const categories: { label: string; value: ProjectCategory }[] = [
    { label: 'All Industries', value: 'all' },
    { label: 'Trades & Contractors', value: 'trades' },
    { label: 'Healthcare & Dental', value: 'healthcare' },
    { label: 'Food & Hospitality', value: 'hospitality' },
    { label: 'Local Services', value: 'services' },
    { label: 'Regional Multi-Page', value: 'multi-page' },
    { label: 'E-Commerce Storefront', value: 'ecommerce' },
  ];

  const tiers: { label: string; value: string }[] = [
    { label: 'All Architectures', value: 'all' },
    { label: '1-Page Lead Funnel', value: '1-page' },
    { label: '5-Page Signature', value: '5-page' },
    { label: '10-Page Authority', value: '10-page' },
    { label: '20+ Page Regional Hub', value: '20-plus-page' },
    { label: 'Full E-Commerce', value: 'ecommerce' },
  ];

  const filteredItems = useMemo(() => {
    return PORTFOLIO_ITEMS.filter((item) => {
      const matchesSearch =
        searchTerm === '' ||
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.industry.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.targetMarket.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesCategory =
        selectedCategory === 'all' || item.category === selectedCategory;

      const matchesTier =
        selectedTier === 'all' || item.pageTier === selectedTier;

      return matchesSearch && matchesCategory && matchesTier;
    });
  }, [searchTerm, selectedCategory, selectedTier]);

  return (
    <div className="space-y-16 py-12">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <span className="text-xs font-semibold text-amber-400 uppercase tracking-widest block mb-2">
            Showcase of Specialized Architectures
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white font-display tracking-tight mb-6">
            Working Portfolio Concept Demonstrations
          </h1>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-6">
            Explore live, interactive websites designed to solve specific client-acquisition challenges for trades and service businesses across the USA, UK, Canada, and Australia.
          </p>

          {/* Honest Portfolio Disclaimer */}
          <div className="p-3.5 bg-slate-900 border border-amber-500/30 rounded-xl text-xs text-slate-300 flex items-start gap-3">
            <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
            <div>
              <strong className="text-white block mb-0.5">Transparent Concept Attribution:</strong>
              <span className="text-slate-400">
                To respect trademark integrity and client privacy, all demonstrations below are original concept models engineered by WebCraft Pro to prove domain layout, mobile conversion workflows, and speed standards.
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Filter and Search Bar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
        <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between">
          {/* Search Input */}
          <div className="relative flex-1 max-w-md">
            <Search className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search by trade, city, feature, or keyword..."
              className="w-full pl-10 pr-4 py-2 bg-slate-900 border border-slate-800 rounded-lg text-xs text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-400"
            />
          </div>

          {/* Tier dropdown selector */}
          <div className="flex items-center gap-2 text-xs">
            <span className="text-slate-400 font-medium whitespace-nowrap">Architecture Scale:</span>
            <select
              value={selectedTier}
              onChange={(e) => setSelectedTier(e.target.value)}
              className="bg-slate-900 border border-slate-800 text-slate-200 text-xs rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400"
            >
              {tiers.map((t) => (
                <option key={t.value} value={t.value}>
                  {t.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Category Pills/Buttons (Interactive filter controls complying with constitution) */}
        <div className="flex flex-wrap items-center gap-2 pt-2">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setSelectedCategory(cat.value)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
                selectedCategory === cat.value
                  ? 'bg-amber-400 text-slate-950 font-bold shadow-sm'
                  : 'bg-slate-900 text-slate-300 hover:bg-slate-800'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </section>

      {/* Concept Portfolio Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {filteredItems.length === 0 ? (
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-12 text-center text-slate-400 space-y-3">
            <Layers className="w-8 h-8 text-amber-400 mx-auto" />
            <h3 className="text-lg font-bold text-white">No concept demos matched your filter criteria</h3>
            <p className="text-xs max-w-sm mx-auto">
              Try adjusting your search terms or clearing the selected industry filter.
            </p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
                setSelectedTier('all');
              }}
              className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-lg text-xs font-semibold"
            >
              Reset All Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="group bg-slate-900 border border-slate-800 hover:border-slate-700 rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all"
              >
                <div>
                  {/* Clean unboxed metadata with dot separator */}
                  <div className="flex items-center gap-2 text-xs text-slate-400 mb-3">
                    <span className="text-slate-300 font-medium">{item.categoryLabel}</span>
                    <span aria-hidden="true">·</span>
                    <span className="text-amber-400 font-mono font-medium">{item.pageCountLabel}</span>
                  </div>

                  <h3 className="text-xl font-bold text-white font-display mb-2 group-hover:text-amber-400 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs text-slate-400 leading-relaxed mb-4 line-clamp-3">
                    {item.description}
                  </p>

                  {/* Features list */}
                  <div className="space-y-1.5 mb-6">
                    {item.features.slice(0, 3).map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* Metrics preview */}
                  <div className="grid grid-cols-2 gap-2 p-2.5 bg-slate-950/80 rounded-lg border border-slate-800/80 mb-6 text-center text-xs">
                    {item.metrics.slice(0, 2).map((m, idx) => (
                      <div key={idx}>
                        <div className="font-mono font-bold text-amber-400 text-sm">{m.value}</div>
                        <div className="text-[10px] text-slate-400">{m.label}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-xs">
                  <span className="text-slate-500 truncate max-w-[140px]">{item.targetMarket}</span>
                  <Link
                    to={item.demoRoute}
                    className="px-3.5 py-1.5 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold rounded text-xs flex items-center gap-1.5 transition-colors shadow-sm whitespace-nowrap"
                  >
                    <span>Launch Concept</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
};
