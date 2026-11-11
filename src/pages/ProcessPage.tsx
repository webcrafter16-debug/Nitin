import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Calendar, FileCode, Search, Rocket, HelpCircle } from 'lucide-react';

export const ProcessPage: React.FC = () => {
  const steps = [
    {
      step: '01',
      title: 'Business Discovery & Wireframe Architecture',
      timeline: 'Days 1 to 2',
      summary: 'We research your local trade market, review competitor websites, and blueprint a high-converting page structure.',
      deliverables: [
        '30-minute discovery call or structured questionnaire (your choice)',
        'Keyword & local search competitor analysis',
        'Structural sitemap and headline messaging wireframe',
        'Transparent project scope and launch schedule confirmation'
      ],
      clientNeed: 'Your service list, service area postcodes/cities, and any existing branding or photos.'
    },
    {
      step: '02',
      title: 'Interactive High-Fidelity Build',
      timeline: 'Days 3 to 7',
      summary: 'We hand-code the complete website in React & Tailwind with responsive mobile breakpoints and fast assets.',
      deliverables: [
        'Hand-coded clean TypeScript and Tailwind CSS styling',
        'Interactive elements: Quote calculators, booking forms, Before/After sliders',
        'High-resolution imagery optimization and WebP compression',
        'Mobile tap-to-call sticky navigation and thumb-zone optimization'
      ],
      clientNeed: 'Zero active work required; we build the prototype autonomously.'
    },
    {
      step: '03',
      title: 'Private Staging Review & Revisions',
      timeline: 'Days 8 to 11',
      summary: 'You receive a private staging URL to test the site on your own smartphone, tablet, and computer.',
      deliverables: [
        'Private live staging link for you and your team to test',
        'Loom video walkthrough highlighting conversion features',
        'Unlimited revisions within agreed project scope',
        'Form routing verification ensuring leads arrive in your inbox'
      ],
      clientNeed: 'Review the staging link and note any text tweaks, photo swaps, or phone number corrections.'
    },
    {
      step: '04',
      title: 'Domain DNS Connection & Launch',
      timeline: 'Days 12 to 14',
      summary: 'We point your domain, configure free SSL certificates, audit Google PageSpeed, and hand over the code.',
      deliverables: [
        'Domain DNS configuration (GoDaddy, Namecheap, Cloudflare, etc.)',
        'Free automated HTTPS SSL security certificate',
        'Final 95+ Google PageSpeed Core Web Vitals audit pass',
        'Google Business Profile & XML sitemap submission',
        'Full Git source code repository and administrative credentials transfer'
      ],
      clientNeed: 'Domain registrar login (or follow our 3-step DNS guide), plus final 50% milestone payment.'
    }
  ];

  return (
    <div className="space-y-20 py-12">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <span className="text-xs font-semibold text-amber-400 uppercase tracking-widest block mb-2">
            Predictable, Stress-Free Delivery
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white font-display tracking-tight mb-6">
            The 14-Day Delivery Roadmap
          </h1>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            We know you are busy running jobs, dispatching crews, and serving customers. Our streamlined process requires less than two hours of your total time from kickoff to live launch.
          </p>
        </div>
      </section>

      {/* Steps Timeline */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {steps.map((st) => (
          <div
            key={st.step}
            className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-10 relative overflow-hidden"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Step indicator */}
              <div className="lg:col-span-3">
                <span className="text-4xl sm:text-5xl font-black text-amber-400 font-mono block mb-1">
                  {st.step}
                </span>
                <span className="text-xs uppercase tracking-wider text-slate-400 font-semibold block mb-2">
                  Timeline: {st.timeline}
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-white font-display">
                  {st.title}
                </h2>
              </div>

              {/* Step Content */}
              <div className="lg:col-span-9 space-y-4">
                <p className="text-sm text-slate-300 leading-relaxed">
                  {st.summary}
                </p>

                <div className="pt-3 border-t border-slate-800/80">
                  <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-2">
                    Key Milestone Deliverables:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {st.deliverables.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-3 bg-slate-950 rounded-lg border border-slate-800/80 text-xs text-slate-400 flex items-start gap-2">
                  <span className="text-amber-400 font-semibold shrink-0">What We Need From You:</span>
                  <span>{st.clientNeed}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Post Launch Support */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-8 sm:p-10">
          <div className="max-w-2xl mb-6">
            <span className="text-xs font-semibold text-amber-400 uppercase tracking-widest block mb-2">
              After Your Website Goes Live
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white font-display mb-3">
              We Never Disappear After Launch
            </h2>
            <p className="text-sm text-slate-400 leading-relaxed">
              Every WebCraft Pro project includes 30 days of comprehensive post-launch warranty at zero additional charge.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-slate-300">
            <div className="p-4 bg-slate-950/60 rounded-xl border border-slate-800/80 space-y-2">
              <span className="font-bold text-white block text-sm">30-Day Free Revisions</span>
              <p className="text-slate-400 leading-relaxed">
                Need to change a phone number, swap a team photo, or add a new service area? We make adjustments promptly at zero extra cost.
              </p>
            </div>
            <div className="p-4 bg-slate-950/60 rounded-xl border border-slate-800/80 space-y-2">
              <span className="font-bold text-white block text-sm">Loom Staff Training Video</span>
              <p className="text-slate-400 leading-relaxed">
                We record a personalized video showing you or your office manager how to review incoming leads and make simple updates.
              </p>
            </div>
            <div className="p-4 bg-slate-950/60 rounded-xl border border-slate-800/80 space-y-2">
              <span className="font-bold text-white block text-sm">Optional Maintenance Care</span>
              <p className="text-slate-400 leading-relaxed">
                Want us on speed dial for monthly updates, blog posts, and security audits? Optional retainers starting at {`$99/month`}.
              </p>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold rounded-lg text-xs transition-colors shadow-md"
            >
              <span>Start Your 14-Day Delivery</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
