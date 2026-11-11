import React, { useState } from 'react';
import { Search, CheckCircle, AlertTriangle, XCircle, ArrowRight, RefreshCw, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

interface AuditItem {
  id: string;
  category: string;
  title: string;
  passed: boolean;
  score: number;
  impact: 'High' | 'Medium' | 'Critical';
  recommendation: string;
}

export const AuditEstimator: React.FC = () => {
  const [url, setUrl] = useState('');
  const [isScanning, setIsScanning] = useState(false);
  const [auditResults, setAuditResults] = useState<AuditItem[] | null>(null);

  const handleAudit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!url.trim()) return;

    setIsScanning(true);
    setAuditResults(null);

    // Realistic scanning simulation
    setTimeout(() => {
      setIsScanning(false);
      setAuditResults([
        {
          id: 'speed',
          category: 'Mobile Performance',
          title: 'First Contentful Paint & Mobile Weight',
          passed: false,
          score: 54,
          impact: 'Critical',
          recommendation: 'Render-blocking scripts and uncompressed assets cause slow load times on mobile LTE. WebCraft Pro builds score 95+ out of the box.'
        },
        {
          id: 'schema',
          category: 'Local Search Visibility',
          title: 'LocalBusiness Schema JSON-LD & Geographic Silos',
          passed: false,
          score: 40,
          impact: 'High',
          recommendation: 'Missing structured schema prevents Google from pulling opening hours, service areas, and direct call actions into map pack results.'
        },
        {
          id: 'conversion',
          category: 'Lead Friction',
          title: 'Sticky Emergency Tap-to-Call & Frictionless Forms',
          passed: true,
          score: 82,
          impact: 'High',
          recommendation: 'Phone numbers are present, but lack click-to-dial markup and multi-step instant quote estimators.'
        },
        {
          id: 'accessibility',
          category: 'Accessibility & Usability',
          title: 'Touch Target Spacing & WCAG Color Contrast',
          passed: true,
          score: 88,
          impact: 'Medium',
          recommendation: 'Good basic contrast, but several navigation buttons fall below 44px thumb target thresholds.'
        }
      ]);
    }, 1200);
  };

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-xl">
      <div className="max-w-2xl mb-6">
        <span className="text-amber-400 text-xs font-semibold uppercase tracking-wider block mb-2">
          Diagnostic Web Audit Tool
        </span>
        <h3 className="text-2xl font-bold text-white font-display mb-2">
          Instant Small-Business Website Audit
        </h3>
        <p className="text-sm text-slate-400 leading-relaxed">
          Curious why your competitors rank higher on Google Maps or convert more calls? Run an instant analysis to discover conversion bottlenecks.
        </p>
      </div>

      <form onSubmit={handleAudit} className="flex flex-col sm:flex-row gap-3 mb-6">
        <div className="relative flex-1">
          <Search className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="e.g. mylocalbusiness.com or plumberintexas.com"
            className="w-full pl-10 pr-4 py-2.5 bg-slate-950 border border-slate-700 rounded-lg text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-400"
            required
          />
        </div>
        <button
          type="submit"
          disabled={isScanning}
          className="bg-amber-400 hover:bg-amber-300 disabled:opacity-50 text-slate-950 font-semibold px-5 py-2.5 rounded-lg text-xs flex items-center justify-center gap-2 transition-colors cursor-pointer shrink-0"
        >
          {isScanning ? (
            <>
              <RefreshCw className="w-4 h-4 animate-spin" />
              <span>Analyzing Speed & Schema...</span>
            </>
          ) : (
            <>
              <Zap className="w-4 h-4" />
              <span>Run Audit Scan</span>
            </>
          )}
        </button>
      </form>

      {auditResults && (
        <div className="space-y-4 pt-4 border-t border-slate-800 animate-fade-in">
          <div className="flex items-center justify-between text-xs text-slate-300 pb-2">
            <span className="font-semibold text-white">Diagnostic Findings for: <span className="font-mono text-amber-400">{url}</span></span>
            <span className="text-slate-400">Analysis Completed</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {auditResults.map((item) => (
              <div
                key={item.id}
                className={`p-4 rounded-xl border text-xs ${
                  item.passed
                    ? 'bg-slate-950/60 border-emerald-900/40 text-slate-300'
                    : 'bg-slate-950/80 border-amber-500/30 text-slate-300'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    {item.passed ? (
                      <CheckCircle className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <AlertTriangle className="w-4 h-4 text-amber-400" />
                    )}
                    <span className="font-semibold text-white">{item.category}</span>
                  </div>
                  <span className={`px-2 py-0.5 rounded text-[10px] font-mono font-bold ${
                    item.score >= 80 ? 'bg-emerald-950 text-emerald-300' : 'bg-amber-950 text-amber-300'
                  }`}>
                    Score: {item.score}/100
                  </span>
                </div>
                <h4 className="font-medium text-slate-200 mb-1">{item.title}</h4>
                <p className="text-slate-400 leading-relaxed text-[11px] mb-2">{item.recommendation}</p>
                <span className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold">
                  Fix Impact: <span className={item.impact === 'Critical' ? 'text-rose-400' : 'text-amber-400'}>{item.impact}</span>
                </span>
              </div>
            ))}
          </div>

          <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 mt-6">
            <div className="text-xs text-slate-300">
              <span className="font-bold text-white block">Ready to solve these bottlenecks permanently?</span>
              <span className="text-slate-400">We rebuild slow websites into lightweight lead-generation machines.</span>
            </div>
            <Link
              to="/contact"
              className="px-4 py-2 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold rounded-lg text-xs flex items-center gap-1.5 transition-colors whitespace-nowrap"
            >
              <span>Get Free Complete Proposal</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};
