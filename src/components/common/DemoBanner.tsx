import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Sparkles, X, Layers, CheckCircle2 } from 'lucide-react';

interface DemoBannerProps {
  conceptName: string;
  categoryLabel: string;
  pageTierLabel: string;
  specs?: string[];
}

export const DemoBanner: React.FC<DemoBannerProps> = ({
  conceptName,
  categoryLabel,
  pageTierLabel,
  specs = []
}) => {
  const [showSpecsModal, setShowSpecsModal] = useState(false);

  return (
    <>
      <aside aria-label="Portfolio Demonstration Notice" className="sticky top-0 z-50 bg-slate-950/95 backdrop-blur-md border-b border-amber-500/30 text-xs text-slate-300 py-2.5 px-4 shadow-lg">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <Link
              to="/portfolio"
              className="inline-flex items-center gap-1.5 font-semibold text-amber-400 hover:text-amber-300 transition-colors whitespace-nowrap"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to WebCraft Pro</span>
            </Link>
            <span className="text-slate-600 hidden sm:inline" aria-hidden="true">|</span>
            <div className="flex items-center gap-2">
              <span className="font-medium text-slate-200">{conceptName}</span>
              <span className="text-slate-500 hidden md:inline">·</span>
              <span className="text-slate-400 hidden md:inline">{categoryLabel}</span>
              <span className="text-slate-500 hidden lg:inline">·</span>
              <span className="text-amber-400/90 font-mono hidden lg:inline">{pageTierLabel} Concept</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {specs.length > 0 && (
              <button
                type="button"
                onClick={() => setShowSpecsModal(true)}
                className="hidden sm:inline-flex items-center gap-1 text-slate-400 hover:text-slate-200 transition-colors cursor-pointer"
              >
                <Layers className="w-3.5 h-3.5 text-amber-400" />
                <span>Architecture Specs</span>
              </button>
            )}
            <Link
              to="/contact"
              className="bg-amber-400 hover:bg-amber-300 text-slate-950 font-semibold px-3 py-1 rounded text-xs transition-colors whitespace-nowrap shadow-sm"
            >
              Get a Website Like This
            </Link>
          </div>
        </div>
      </aside>

      {/* Architecture Specs Modal */}
      {showSpecsModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fade-in">
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 max-w-md w-full shadow-2xl relative text-left">
            <button
              onClick={() => setShowSpecsModal(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white p-1 rounded-lg"
              aria-label="Close specification dialog"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="flex items-center gap-2 text-amber-400 font-semibold mb-2 text-sm">
              <Sparkles className="w-4 h-4" />
              <span>Concept Engineering Blueprint</span>
            </div>
            <h3 className="text-lg font-bold text-white mb-2">{conceptName}</h3>
            <p className="text-xs text-slate-400 mb-4 leading-relaxed">
              This concept demonstrates conversion architecture, page layout, and specialized UI workflows designed by WebCraft Pro for small businesses.
            </p>
            <div className="space-y-2 mb-6">
              {specs.map((spec, i) => (
                <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{spec}</span>
                </div>
              ))}
            </div>
            <div className="flex justify-end gap-3 pt-3 border-t border-slate-800">
              <button
                onClick={() => setShowSpecsModal(false)}
                className="px-3 py-1.5 text-xs text-slate-400 hover:text-white transition-colors"
              >
                Close
              </button>
              <Link
                to="/contact"
                className="bg-amber-400 hover:bg-amber-300 text-slate-950 font-semibold px-4 py-1.5 rounded text-xs transition-colors"
              >
                Request Custom Quote
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
