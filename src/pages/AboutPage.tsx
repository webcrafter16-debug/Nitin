import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Code2, Clock, ShieldCheck, CheckCircle2, MessageSquare, Zap, Cpu } from 'lucide-react';

export const AboutPage: React.FC = () => {
  return (
    <div className="space-y-20 py-12">
      {/* Hero Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <span className="text-xs font-semibold text-amber-400 uppercase tracking-widest block mb-2">
            Behind WebCraft Pro
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white font-display tracking-tight mb-6">
            Direct Web Engineering Without Agency Markup
          </h1>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            WebCraft Pro is an independent web development studio based in India, built specifically to provide small business owners in the USA, UK, Canada, and Australia with high-speed, bespoke websites that match Western agency quality at honest, sensible pricing.
          </p>
        </div>
      </section>

      {/* The Direct Engineer Advantage */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-white font-display">
              Why Traditional Agencies Charge $8,000+ for a 5-Page Website
            </h2>
            <p className="text-sm text-slate-400 leading-relaxed">
              When you hire a traditional domestic agency in New York, London, Toronto, or Sydney, 70% of your invoice pays for account managers, sales commissions, fancy downtown office rent, and agency margin.
            </p>
            <p className="text-sm text-slate-400 leading-relaxed">
              At WebCraft Pro, there is zero bureaucratic bloat. You collaborate directly with the dedicated software engineer and designer who actually writes your code, optimizes your speed, and connects your domain.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3 text-xs text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-white">Direct Line of Communication:</span>
                  <span className="text-slate-400 ml-1">No lost-in-translation messages between an account executive and offshore juniors.</span>
                </div>
              </div>
              <div className="flex items-start gap-3 text-xs text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-white">Hand-Crafted Modern Code:</span>
                  <span className="text-slate-400 ml-1">Built with React, TypeScript, and modern CSS—never bulky drag-and-drop themes that slow your site to a crawl.</span>
                </div>
              </div>
              <div className="flex items-start gap-3 text-xs text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-white">Honest Milestone Pricing:</span>
                  <span className="text-slate-400 ml-1">50% upfront, 50% only after you test and approve your working website on a private staging link.</span>
                </div>
              </div>
            </div>
          </div>

          {/* Timezone Advantage Card */}
          <div className="lg:col-span-6 bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6">
            <div className="flex items-center gap-2 text-amber-400 font-semibold text-sm">
              <Clock className="w-4 h-4" />
              <span>The Strategic Timezone Advantage</span>
            </div>

            <h3 className="text-xl font-bold text-white font-display">
              Real-Time Overlap + Overnight Turnaround
            </h3>

            <p className="text-xs text-slate-400 leading-relaxed">
              Based in India (IST), our working schedule is intentionally aligned with international business hours across North America, the United Kingdom, and Australia.
            </p>

            <div className="space-y-3 text-xs">
              <div className="p-3 bg-slate-950 rounded-lg border border-slate-800">
                <span className="font-semibold text-white block">United Kingdom (GMT/BST):</span>
                <span className="text-slate-400">4.5 to 5.5 hours difference. Full morning and afternoon live overlap (9:00 AM – 6:30 PM London time).</span>
              </div>
              <div className="p-3 bg-slate-950 rounded-lg border border-slate-800">
                <span className="font-semibold text-white block">US East Coast (EST/EDT):</span>
                <span className="text-slate-400">Direct morning overlap (8:00 AM – 1:30 PM EST). Plus: Leave revision feedback at 5 PM, wake up to completed updates at 8 AM.</span>
              </div>
              <div className="p-3 bg-slate-950 rounded-lg border border-slate-800">
                <span className="font-semibold text-white block">Australia (AEST/AEDT):</span>
                <span className="text-slate-400">Afternoon live sync (1:30 PM – 9:00 PM Sydney/Melbourne time).</span>
              </div>
            </div>

            <div className="pt-2 flex items-center gap-2 text-xs text-slate-400">
              <MessageSquare className="w-4 h-4 text-amber-400" />
              <span>We use Loom screen recordings, Slack/WhatsApp, and Google Meet for seamless, zero-friction syncs.</span>
            </div>
          </div>
        </div>
      </section>

      {/* Engineering Principles */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-10">
          <span className="text-xs font-semibold text-amber-400 uppercase tracking-widest block mb-2">
            Our Guiding Philosophy
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white font-display">
            The Three Inviolable Engineering Rules
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 space-y-3">
            <span className="text-xs font-mono text-amber-400 font-bold">Rule 01</span>
            <h3 className="font-bold text-white text-base font-display">Speed Is Non-Negotiable</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              If a website takes more than 2 seconds to render on a mobile phone, half of all paid and local clicks bounce. We optimize every image, bundle, and script to score 95+ on Google Lighthouse.
            </p>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 space-y-3">
            <span className="text-xs font-mono text-amber-400 font-bold">Rule 02</span>
            <h3 className="font-bold text-white text-base font-display">Function Over Gimmicks</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Local customers do not want 30-second spinning 3D intro animations or confusing menus. They want your phone number, your price range, your reviews, and proof that you will show up on time.
            </p>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 space-y-3">
            <span className="text-xs font-mono text-amber-400 font-bold">Rule 03</span>
            <h3 className="font-bold text-white text-base font-display">You Own Everything</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              No proprietary platforms locking you in. When your final invoice is settled, the complete production code, assets, and DNS configuration belong 100% to your company.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-xl mx-auto bg-slate-900 border border-slate-800 rounded-2xl p-8 space-y-4">
          <h3 className="text-2xl font-bold text-white font-display">
            Want to Discuss Your Next Website?
          </h3>
          <p className="text-xs text-slate-400 leading-relaxed">
            Let's review your business, see what your competitors are doing right (and wrong), and map out a high-converting build plan.
          </p>
          <div className="pt-2">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold rounded-lg text-xs transition-colors shadow-md"
            >
              <span>Schedule Discovery Call</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
