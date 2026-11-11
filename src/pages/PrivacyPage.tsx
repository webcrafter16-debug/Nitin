import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, ArrowLeft } from 'lucide-react';

export const PrivacyPage: React.FC = () => {
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
          Legal Compliance Template
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white font-display tracking-tight mb-2">
          Privacy Policy
        </h1>
        <p className="text-xs text-slate-500">
          Last revised: January 2026 · Standard Small Business & Contractor Template
        </p>
      </div>

      <div className="space-y-6 text-sm text-slate-300 leading-relaxed">
        <section className="space-y-2">
          <h2 className="text-lg font-bold text-white font-display">1. Overview</h2>
          <p className="text-slate-400">
            This Privacy Policy explains how WebCraft Pro and our demonstrated client architectures collect, use, and safeguard personal information when visitors access our web applications or submit inquiry forms. We prioritize data minimization and user privacy compliance (including GDPR, CCPA, and Australian Privacy Principles).
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-bold text-white font-display">2. Information Collected</h2>
          <p className="text-slate-400">
            When you interact with our website or contact forms, we may collect:
          </p>
          <ul className="list-disc pl-5 text-slate-400 space-y-1 text-xs">
            <li>Contact details (name, email address, telephone number, business name)</li>
            <li>Project specifics and service requirement descriptions</li>
            <li>Device diagnostic data (browser type, general geographic region via IP)</li>
          </ul>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-bold text-white font-display">3. Purpose and Use of Data</h2>
          <p className="text-slate-400">
            Collected data is utilized strictly to provide quotes, communicate project milestones, fulfill technical service contracts, and deliver responsive customer support. We never sell, rent, or lease client contact information to third-party data brokers or marketing aggregators.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-bold text-white font-display">4. Cookies and Telemetry</h2>
          <p className="text-slate-400">
            Our web applications utilize minimal functional cookies strictly required for user preferences (such as selected currency or shopping cart persistence). We do not deploy invasive third-party cross-site behavioral tracking scripts.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-bold text-white font-display">5. Code & Data Ownership</h2>
          <p className="text-slate-400">
            Upon completion of contract deliverables and final milestone settlement, the client retains sole ownership of all customer data, form entries, and proprietary customer records hosted within their deployment environment.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-bold text-white font-display">6. Contact Inquiries</h2>
          <p className="text-slate-400">
            For privacy inquiries or data removal requests regarding WebCraft Pro or our client templates, contact us at: <a href="mailto:privacy@webcraftpro.dev" className="text-amber-400 hover:underline">privacy@webcraftpro.dev</a>.
          </p>
        </section>
      </div>
    </div>
  );
};
