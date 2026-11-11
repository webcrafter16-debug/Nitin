import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, ArrowRight, HelpCircle, MessageSquare } from 'lucide-react';

interface FaqItem {
  q: string;
  a: string;
  category: 'Working Together' | 'Technical & Ownership' | 'Payments & Pricing' | 'Results & Local SEO';
}

export const FaqPage: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const faqs: FaqItem[] = [
    {
      category: 'Working Together',
      q: 'You are based in India. How does the time difference work for me in the US, UK, Canada, or Australia?',
      a: 'We have structured our working hours to provide active, real-time overlap during your standard business hours. For UK clients, we offer 8+ hours of live overlap (9:00 AM to 6:30 PM London time). For US East Coast and Canadian clients, we overlap every morning (8:00 AM to 1:30 PM EST). For Australian clients, we are live throughout your afternoon. Even better, you benefit from overnight turnaround: leave revision feedback at the end of your day, and wake up to completed code changes in the morning.'
    },
    {
      category: 'Technical & Ownership',
      q: 'Why should I hire a bespoke engineer instead of building a website on Wix, Squarespace, or GoDaddy?',
      a: 'Wix, Squarespace, and GoDaddy builders load heavy generic scripts and shared server templates that routinely score 30–50 out of 100 on Google PageSpeed. When a homeowner on mobile needs an emergency plumber, roofer, or dentist, every second of lag increases abandonment by 20%. Furthermore, DIY builders lock you into eternal subscriptions ($30 to $60/month forever) with zero ability to export your code. With WebCraft Pro, you own a custom, clean React & Tailwind codebase that loads in 0.8 seconds and hosts on high-speed global edge networks for free.'
    },
    {
      category: 'Technical & Ownership',
      q: 'Do I own my website and domain completely?',
      a: 'Yes, 100%. Unlike agencies that hold your domain hostage or lock your site in a proprietary CMS, we hand over full Git source code repositories and deployment keys upon final milestone payment. You retain unconditional ownership of your code, graphics, and domain.'
    },
    {
      category: 'Payments & Pricing',
      q: 'How do milestone payments work? Is it safe for international transactions?',
      a: 'We operate on a transparent 50/50 milestone agreement: a 50% deposit to initiate wireframing and prototyping, and the remaining 50% only after you review and approve the live, functional staging site on your phone and laptop. We accept secure bank transfers, Wise (TransferWise), Stripe, and PayPal with standard commercial protections in USD, GBP, CAD, or AUD.'
    },
    {
      category: 'Results & Local SEO',
      q: 'Will my website rank on Google and Google Maps?',
      a: 'Every WebCraft Pro build is constructed with proper LocalBusiness Schema JSON-LD markup, geographic meta tags, clean semantic HTML heading hierarchies, fast mobile response times, and an XML sitemap. We configure your site to meet all Google Core Web Vitals requirements, giving you the best possible technical foundation to rank in your local 3-pack catchment.'
    },
    {
      category: 'Working Together',
      q: 'What if I do not have professional photos or written copy ready?',
      a: 'No problem at all. Most trade contractors and local business owners do not have ready-made website copy. We research your specific local competitors, write conversion-tested headlines and service descriptions, and curate licensed high-resolution photography tailored to your trade.'
    },
    {
      category: 'Working Together',
      q: 'How do incoming leads and phone calls reach me?',
      a: 'Calls are routed directly to your primary business or dispatch phone number with single-tap click-to-dial markup. Contact forms and quote calculators send instant email notifications to your inbox and can be linked to SMS alerts or a synchronized Google Sheet so your team never misses an inquiry.'
    },
    {
      category: 'Technical & Ownership',
      q: 'What happens if I need changes or text updates 6 months from now?',
      a: 'Every build includes 30 days of free revisions and a personalized Loom video showing you how to update your phone number, hours, and text. Because our code is pristine TypeScript and Tailwind, any web developer in the world can easily maintain it. You can also hire us for quick one-off updates or an affordable monthly care plan.'
    }
  ];

  const categories = ['All', 'Working Together', 'Technical & Ownership', 'Payments & Pricing', 'Results & Local SEO'];

  const filteredFaqs = activeCategory === 'All' 
    ? faqs 
    : faqs.filter(f => f.category === activeCategory);

  return (
    <div className="space-y-20 py-12">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto">
          <span className="text-xs font-semibold text-amber-400 uppercase tracking-widest block mb-2">
            Clear Answers For Small Business Owners
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white font-display tracking-tight mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Everything you need to know about working with an independent web development specialist across international borders.
          </p>
        </div>
      </section>

      {/* Category Tabs */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
                activeCategory === cat
                  ? 'bg-amber-400 text-slate-950 font-bold shadow-sm'
                  : 'bg-slate-900 text-slate-300 hover:bg-slate-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {filteredFaqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden transition-all"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer focus:outline-none focus:bg-slate-800/50"
                  aria-expanded={isOpen}
                >
                  <span className="font-semibold text-white text-sm sm:text-base pr-2">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-amber-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 text-xs sm:text-sm text-slate-400 leading-relaxed border-t border-slate-800/80 pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Still Have Questions Box */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-8 text-center space-y-4">
          <HelpCircle className="w-8 h-8 text-amber-400 mx-auto" />
          <h3 className="text-xl font-bold text-white font-display">
            Have a Specific Question About Your Project?
          </h3>
          <p className="text-xs text-slate-400 max-w-md mx-auto leading-relaxed">
            Send us a message or schedule a quick discovery chat. We respond in plain English with zero high-pressure sales tactics.
          </p>
          <div className="pt-2">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold rounded-lg text-xs transition-colors shadow-md"
            >
              <span>Ask a Question Directly</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
