import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Clock, ShieldCheck, ArrowUpRight } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-900 text-slate-400 text-xs">
      {/* Timezone & Direct Engagement Strip */}
      <div className="border-b border-slate-900/80 py-5 bg-slate-900/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-xs">
            <div className="flex items-center gap-2.5 text-slate-300">
              <Clock className="w-4 h-4 text-amber-400 shrink-0" />
              <div>
                <span className="font-semibold text-white block">Active Timezone Overlap</span>
                <span className="text-[11px] text-slate-400">Direct real-time communication during your business day</span>
              </div>
            </div>
            <div className="bg-slate-950/60 p-2.5 rounded border border-slate-800/80">
              <span className="text-slate-400 block text-[11px]">London & UK (GMT/BST)</span>
              <span className="font-mono text-slate-200 font-medium">9:00 AM – 6:30 PM (Real-time)</span>
            </div>
            <div className="bg-slate-950/60 p-2.5 rounded border border-slate-800/80">
              <span className="text-slate-400 block text-[11px]">New York & US East (EST/EDT)</span>
              <span className="font-mono text-slate-200 font-medium">8:00 AM – 1:30 PM (Real-time overlap)</span>
            </div>
            <div className="bg-slate-950/60 p-2.5 rounded border border-slate-800/80">
              <span className="text-slate-400 block text-[11px]">Sydney & Melbourne (AEST)</span>
              <span className="font-mono text-slate-200 font-medium">1:30 PM – 9:00 PM (Real-time overlap)</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Brand Info */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-2">
              <span className="w-7 h-7 rounded-md bg-gradient-to-tr from-amber-500 to-amber-300 flex items-center justify-center text-slate-950 font-black text-sm">
                W
              </span>
              <span className="text-lg font-bold text-white tracking-tight font-display">
                WebCraft <span className="text-amber-400">Pro</span>
              </span>
            </div>
            <p className="text-slate-400 leading-relaxed text-xs max-w-sm">
              Independent web engineering practice creating high-speed, high-converting websites and digital storefronts for local service contractors and businesses across the US, UK, Canada, and Australia.
            </p>
            <div className="flex items-center gap-2 pt-2 text-slate-300 text-xs">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Zero agency overhead · Direct engineer communication · 100% source code ownership</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white uppercase tracking-wider text-[11px] mb-3">
              Agency Navigation
            </h4>
            <ul className="space-y-2">
              <li><Link to="/portfolio" className="hover:text-amber-400 transition-colors">Portfolio Demos</Link></li>
              <li><Link to="/services" className="hover:text-amber-400 transition-colors">Services & Deliverables</Link></li>
              <li><Link to="/pricing" className="hover:text-amber-400 transition-colors">Transparent Pricing</Link></li>
              <li><Link to="/process" className="hover:text-amber-400 transition-colors">4-Stage Process</Link></li>
              <li><Link to="/about" className="hover:text-amber-400 transition-colors">About & Engineering Ethos</Link></li>
              <li><Link to="/faq" className="hover:text-amber-400 transition-colors">Small Business FAQ</Link></li>
            </ul>
          </div>

          {/* Portfolio Demos */}
          <div>
            <h4 className="font-semibold text-white uppercase tracking-wider text-[11px] mb-3">
              Concept Demos
            </h4>
            <ul className="space-y-2">
              <li><Link to="/portfolio/demo/summit-regional" className="hover:text-amber-400 transition-colors">Summit 21-Page Multi-Trade Hub</Link></li>
              <li><Link to="/portfolio/demo/apex-plumbing" className="hover:text-amber-400 transition-colors">Apex Flow 10-Page Plumbers</Link></li>
              <li><Link to="/portfolio/demo/lumina-dental" className="hover:text-amber-400 transition-colors">Lumina Dental 5-Page Studio</Link></li>
              <li><Link to="/portfolio/demo/sparklecraft-cleaning" className="hover:text-amber-400 transition-colors">SparkleCraft 1-Page Lander</Link></li>
              <li><Link to="/ecommerce-demo" className="hover:text-amber-400 transition-colors">Kōbo Artisanal E-Commerce</Link></li>
              <li><Link to="/portfolio/demo/ironpeak-roofing" className="hover:text-amber-400 transition-colors">IronPeak Roofing Showcase</Link></li>
            </ul>
          </div>

          {/* Contact & Legal */}
          <div>
            <h4 className="font-semibold text-white uppercase tracking-wider text-[11px] mb-3">
              Direct Contact & Legal
            </h4>
            <ul className="space-y-2">
              <li><Link to="/contact" className="text-amber-400 font-semibold hover:text-amber-300 transition-colors flex items-center gap-1">Request Proposal <ArrowUpRight className="w-3 h-3" /></Link></li>
              <li><a href="mailto:hello@webcraftpro.dev" className="hover:text-amber-400 transition-colors flex items-center gap-1.5"><Mail className="w-3.5 h-3.5" /> hello@webcraftpro.dev</a></li>
              <li><Link to="/privacy-policy" className="hover:text-slate-300 transition-colors">Client Privacy Policy Template</Link></li>
              <li><Link to="/terms" className="hover:text-slate-300 transition-colors">Standard Client Terms Template</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright notice */}
        <div className="mt-10 pt-6 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            © {new Date().getFullYear()} WebCraft Pro. All rights reserved. Built with React & Tailwind CSS.
          </div>
          <div className="flex items-center gap-4">
            <span>Client focus: USA · UK · Canada · Australia</span>
            <span aria-hidden="true">·</span>
            <span className="text-slate-400">All showcase projects clearly marked as portfolio concepts</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
