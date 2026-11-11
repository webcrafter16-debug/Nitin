import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export const TermsPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-8">
      <Link
        to="/"
        className="inline-flex items-center gap-1.5 text-xs text-amber-400 hover:text-amber-300 font-semibold transition-colors"
      >
        <ArrowLeft className="w-3.5 h-3.5" />
        <span>Back to Home</span>
      </Link>

      <div className="border-b border-slate-800 pb-6">
        <span className="text-xs font-semibold text-amber-400 uppercase tracking-widest block mb-2">
          Legal Agreement Template
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white font-display tracking-tight mb-2">
          Terms of Service & Project Charter
        </h1>
        <p className="text-xs text-slate-500">
          Last updated: January 2026 · Standard Small Business Development Charter
        </p>
      </div>

      <div className="space-y-6 text-sm text-slate-300 leading-relaxed">
        <section className="space-y-2">
          <h2 className="text-lg font-bold text-white font-display">1. Agreement to Terms</h2>
          <p className="text-slate-400">
            By commissioning WebCraft Pro or utilizing our digital demonstrations, you agree to these Terms of Service. These terms define the scope of custom web development services, milestone schedules, intellectual property rights, and warranties.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-bold text-white font-display">2. Milestone Billing & Invoicing</h2>
          <p className="text-slate-400">
            Standard projects operate on a two-stage 50/50 milestone basis:
          </p>
          <ul className="list-disc pl-5 text-slate-400 space-y-1 text-xs">
            <li><strong>Kickoff Deposit (50%):</strong> Due prior to wireframing and prototype build initialization.</li>
            <li><strong>Final Settlement (50%):</strong> Due only upon written approval of the functional staging site prior to production domain DNS launch.</li>
          </ul>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-bold text-white font-display">3. Intellectual Property & Transfer</h2>
          <p className="text-slate-400">
            Upon receipt of final milestone settlement, the client holds 100% unconditional ownership of custom HTML, CSS, TypeScript code, bespoke graphics, and project assets generated specifically for their application. WebCraft Pro retains the right to display the completed work in its professional portfolio.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-bold text-white font-display">4. 30-Day Post-Launch Warranty</h2>
          <p className="text-slate-400">
            WebCraft Pro warrants that deliverables will perform in accordance with agreed specifications. For thirty (30) days following domain launch, we resolve defects, broken links, formatting bugs, or form issues at zero additional charge.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-bold text-white font-display">5. Portfolio Demonstration Notice</h2>
          <p className="text-slate-400">
            Fictional trade concepts showcased on WebCraft Pro (e.g., Summit Regional, Apex Flow, Lumina Dental) are demonstration models created to illustrate industry-specific architecture and conversion workflows. They do not constitute endorsements by real entities.
          </p>
        </section>
      </div>
    </div>
  );
};
