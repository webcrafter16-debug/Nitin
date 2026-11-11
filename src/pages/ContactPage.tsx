import React, { useState } from 'react';
import { Mail, Clock, Send, CheckCircle2, AlertCircle, Phone, Calendar, ArrowRight, ShieldCheck } from 'lucide-react';
import { useCurrency } from '../context/CurrencyContext';

interface FormData {
  fullName: string;
  businessName: string;
  email: string;
  phone: string;
  country: string;
  industry: string;
  packageTier: string;
  currentWebsite: string;
  projectNotes: string;
}

export const ContactPage: React.FC = () => {
  const { currency } = useCurrency();

  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    businessName: '',
    email: '',
    phone: '',
    country: 'United States',
    industry: 'Plumbing & HVAC',
    packageTier: 'Signature 5-Page Authority',
    currentWebsite: '',
    projectNotes: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedData, setSubmittedData] = useState<FormData | null>(null);

  const validate = (): boolean => {
    const errs: Partial<Record<keyof FormData, string>> = {};
    if (!formData.fullName.trim()) errs.fullName = 'Please provide your full name.';
    if (!formData.businessName.trim()) errs.businessName = 'Please enter your business or trading name.';
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      errs.email = 'Email address is required.';
    } else if (!emailRegex.test(formData.email.trim())) {
      errs.email = 'Please enter a valid email address.';
    }

    if (!formData.phone.trim()) {
      errs.phone = 'Please provide a phone or WhatsApp number for contact.';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedData({ ...formData });
    }, 700);
  };

  const handleReset = () => {
    setSubmittedData(null);
    setFormData({
      fullName: '',
      businessName: '',
      email: '',
      phone: '',
      country: 'United States',
      industry: 'Plumbing & HVAC',
      packageTier: 'Signature 5-Page Authority',
      currentWebsite: '',
      projectNotes: '',
    });
  };

  return (
    <div className="space-y-16 py-12">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <span className="text-xs font-semibold text-amber-400 uppercase tracking-widest block mb-2">
            Start Your Next Project
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white font-display tracking-tight mb-6">
            Request Your Free Strategy & Fixed Quote
          </h1>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Fill out the form below. We will review your current online presence, research your local competitors, and respond within 24 hours with a concrete build plan and fixed-price quote in {currency.code}.
          </p>
        </div>
      </section>

      {/* Main Form & Contact Information Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Form or Success Confirmation */}
          <div className="lg:col-span-8">
            {submittedData ? (
              <div className="bg-slate-900 border border-emerald-500/40 rounded-2xl p-6 sm:p-10 text-left animate-fade-in space-y-6">
                <div className="w-12 h-12 rounded-full bg-emerald-950 border border-emerald-500 flex items-center justify-center text-emerald-400 mb-2">
                  <CheckCircle2 className="w-7 h-7" />
                </div>

                <div>
                  <span className="text-xs font-semibold text-emerald-400 uppercase tracking-wider block mb-1">
                    Demo Submission Processed Successfully
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-bold text-white font-display">
                    Thank You, {submittedData.fullName}!
                  </h2>
                  <p className="text-sm text-slate-300 leading-relaxed mt-2">
                    In a production client environment, your inquiry is instantly transmitted via secure SMTP webhook to our dispatch queue and confirmed with an automated email receipt.
                  </p>
                </div>

                {/* Submitted Parameters Summary */}
                <div className="bg-slate-950 rounded-xl p-5 border border-slate-800 space-y-3 text-xs">
                  <span className="text-slate-400 font-semibold uppercase tracking-wider block border-b border-slate-800 pb-2">
                    Inquiry Details Summary:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-slate-300">
                    <div>
                      <span className="text-slate-500 block">Business Name:</span>
                      <span className="font-semibold text-white">{submittedData.businessName}</span>
                    </div>
                    <div>
                      <span className="text-slate-500 block">Contact Email:</span>
                      <span className="font-semibold text-white">{submittedData.email}</span>
                    </div>
                    <div>
                      <span className="text-slate-500 block">Phone / WhatsApp:</span>
                      <span className="font-semibold text-white">{submittedData.phone}</span>
                    </div>
                    <div>
                      <span className="text-slate-500 block">Target Market / Country:</span>
                      <span className="font-semibold text-white">{submittedData.country}</span>
                    </div>
                    <div>
                      <span className="text-slate-500 block">Trade / Category:</span>
                      <span className="font-semibold text-white">{submittedData.industry}</span>
                    </div>
                    <div>
                      <span className="text-slate-500 block">Selected Package:</span>
                      <span className="font-semibold text-amber-400">{submittedData.packageTier}</span>
                    </div>
                    {submittedData.currentWebsite && (
                      <div className="sm:col-span-2">
                        <span className="text-slate-500 block">Current Website:</span>
                        <span className="font-mono text-slate-300">{submittedData.currentWebsite}</span>
                      </div>
                    )}
                    {submittedData.projectNotes && (
                      <div className="sm:col-span-2">
                        <span className="text-slate-500 block">Project Goals:</span>
                        <span className="text-slate-300">{submittedData.projectNotes}</span>
                      </div>
                    )}
                  </div>
                </div>

                <div className="pt-2 flex flex-wrap gap-4">
                  <button
                    onClick={handleReset}
                    className="px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-white rounded-lg text-xs font-semibold transition-colors"
                  >
                    Submit Another Inquiry
                  </button>
                  <a
                    href="mailto:hello@webcraftpro.dev"
                    className="px-5 py-2.5 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold rounded-lg text-xs transition-colors flex items-center gap-1.5"
                  >
                    <span>Direct Email Dispatch</span>
                    <Mail className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-10 space-y-6">
                
                {/* Demo Notice */}
                <div className="p-3.5 bg-amber-950/40 border border-amber-500/30 rounded-lg text-xs text-amber-300/90 flex items-start gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span>
                    <strong>Portfolio Demonstration Mode:</strong> All validation logic runs in real-time. Submissions safely display a verified summary report without sending live emails.
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Full Name */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                      Your Full Name <span className="text-rose-400">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="e.g. John Miller"
                      className={`w-full px-3.5 py-2.5 bg-slate-950 border rounded-lg text-sm text-white placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-amber-400 ${
                        errors.fullName ? 'border-rose-500' : 'border-slate-800'
                      }`}
                    />
                    {errors.fullName && <p className="text-[11px] text-rose-400 mt-1">{errors.fullName}</p>}
                  </div>

                  {/* Business Name */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                      Business or Trading Name <span className="text-rose-400">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.businessName}
                      onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                      placeholder="e.g. Miller & Sons Plumbing"
                      className={`w-full px-3.5 py-2.5 bg-slate-950 border rounded-lg text-sm text-white placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-amber-400 ${
                        errors.businessName ? 'border-rose-500' : 'border-slate-800'
                      }`}
                    />
                    {errors.businessName && <p className="text-[11px] text-rose-400 mt-1">{errors.businessName}</p>}
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                      Email Address <span className="text-rose-400">*</span>
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="john@millersonsplumbing.com"
                      className={`w-full px-3.5 py-2.5 bg-slate-950 border rounded-lg text-sm text-white placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-amber-400 ${
                        errors.email ? 'border-rose-500' : 'border-slate-800'
                      }`}
                    />
                    {errors.email && <p className="text-[11px] text-rose-400 mt-1">{errors.email}</p>}
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                      Phone Number or WhatsApp <span className="text-rose-400">*</span>
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+1 (555) 234-5678"
                      className={`w-full px-3.5 py-2.5 bg-slate-950 border rounded-lg text-sm text-white placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-amber-400 ${
                        errors.phone ? 'border-rose-500' : 'border-slate-800'
                      }`}
                    />
                    {errors.phone && <p className="text-[11px] text-rose-400 mt-1">{errors.phone}</p>}
                  </div>

                  {/* Country */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                      Target Country / Market
                    </label>
                    <select
                      value={formData.country}
                      onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-lg text-sm text-white focus:outline-none focus:ring-2 focus:ring-amber-400"
                    >
                      <option value="United States">🇺🇸 United States</option>
                      <option value="United Kingdom">🇬🇧 United Kingdom</option>
                      <option value="Canada">🇨🇦 Canada</option>
                      <option value="Australia">🇦🇺 Australia</option>
                      <option value="Other">🌍 Other International Market</option>
                    </select>
                  </div>

                  {/* Industry / Category */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                      Trade / Business Category
                    </label>
                    <select
                      value={formData.industry}
                      onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-lg text-sm text-white focus:outline-none focus:ring-2 focus:ring-amber-400"
                    >
                      <option value="Plumbing & HVAC">Plumbing & HVAC</option>
                      <option value="Roofing & Restoration">Roofing & Storm Restoration</option>
                      <option value="Dental & Medical">Dentistry & Medical Clinic</option>
                      <option value="Cleaning & Janitorial">Residential / Commercial Cleaning</option>
                      <option value="Electrical & EV">Licensed Electrical & EV Charger</option>
                      <option value="Landscaping & Patios">Landscaping & Hardscaping</option>
                      <option value="Restaurant & Hospitality">Restaurant / Bistro / Bar</option>
                      <option value="Salon & Beauty">Salon, Barber & Aesthetician</option>
                      <option value="Fitness & Studio">Fitness Gym & Martial Arts</option>
                      <option value="E-Commerce Retail">Artisanal E-Commerce / Retail</option>
                      <option value="Other Service">Other Local Trade / Professional</option>
                    </select>
                  </div>

                  {/* Selected Package */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                      Package Tier
                    </label>
                    <select
                      value={formData.packageTier}
                      onChange={(e) => setFormData({ ...formData, packageTier: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-lg text-sm text-white focus:outline-none focus:ring-2 focus:ring-amber-400"
                    >
                      <option value="Starter 1-Page Lead Lander">Starter 1-Page Lead Lander ($499 USD)</option>
                      <option value="Signature 5-Page Authority">Signature 5-Page Authority ($899 USD)</option>
                      <option value="Expansion 10-Page Dominance">Expansion 10-Page Dominance ($1,499 USD)</option>
                      <option value="Regional 20+ Page Hub">Regional 20+ Page Hub ($2,499 USD)</option>
                      <option value="Artisan E-Commerce Store">Artisan E-Commerce Store ($1,899 USD)</option>
                      <option value="Custom Scope / Need Advice">Custom Scope / Not Sure Yet</option>
                    </select>
                  </div>

                  {/* Current Website */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                      Existing Website URL (if any)
                    </label>
                    <input
                      type="text"
                      value={formData.currentWebsite}
                      onChange={(e) => setFormData({ ...formData, currentWebsite: e.target.value })}
                      placeholder="https://example.com"
                      className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-lg text-sm text-white placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-amber-400"
                    />
                  </div>
                </div>

                {/* Project Notes */}
                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                    Project Goals, Needs & Desired Launch Date
                  </label>
                  <textarea
                    rows={4}
                    value={formData.projectNotes}
                    onChange={(e) => setFormData({ ...formData, projectNotes: e.target.value })}
                    placeholder="Tell us what you want to achieve (e.g., getting more emergency calls in North Dallas, replacing an old WordPress site, adding an instant quote estimator)..."
                    className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-lg text-sm text-white placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-amber-400"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 bg-amber-400 hover:bg-amber-300 disabled:opacity-50 text-slate-950 font-bold rounded-lg text-sm transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-md"
                >
                  <Send className="w-4 h-4" />
                  <span>{isSubmitting ? 'Validating & Formatting Proposal...' : 'Submit Inquiry & Request Proposal'}</span>
                </button>
              </form>
            )}
          </div>

          {/* Right Column: Direct Info & Timezone Confidence */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-4">
              <h3 className="text-xl font-bold text-white font-display">
                Direct Contact Channels
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Prefer to bypass forms and talk right away? Reach out directly via email or scheduled video meeting.
              </p>

              <div className="space-y-3 pt-2 text-xs">
                <a
                  href="mailto:hello@webcraftpro.dev"
                  className="flex items-center gap-3 p-3 bg-slate-950 rounded-lg border border-slate-800 hover:border-slate-700 transition-colors text-slate-200"
                >
                  <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                  <div>
                    <span className="text-[11px] text-slate-500 block">Direct Inquiries</span>
                    <span className="font-mono text-white">hello@webcraftpro.dev</span>
                  </div>
                </a>

                <div className="flex items-center gap-3 p-3 bg-slate-950 rounded-lg border border-slate-800 text-slate-200">
                  <Clock className="w-4 h-4 text-emerald-400 shrink-0" />
                  <div>
                    <span className="text-[11px] text-slate-500 block">Guaranteed Response Window</span>
                    <span className="font-medium text-white">Within 24 Hours (Mon – Sat)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* What Happens Next Card */}
            <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-3 text-xs">
              <span className="font-bold text-white block text-sm font-display">
                What Happens After You Inquire:
              </span>
              <div className="space-y-2.5 text-slate-400">
                <div className="flex items-start gap-2">
                  <span className="text-amber-400 font-mono font-bold">1.</span>
                  <span>We review your requirements and inspect your local competitors.</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-amber-400 font-mono font-bold">2.</span>
                  <span>We send you a 1-page scope blueprint with exact fixed pricing in {currency.code}.</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-amber-400 font-mono font-bold">3.</span>
                  <span>If approved, we initiate the build with a 50% deposit and deliver your prototype in 5–7 days.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
