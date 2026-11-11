import { PortfolioItem, PricingPlan } from '../types';

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: 'summit-regional-hub',
    title: 'Summit Regional Multi-Trade Hub',
    tagline: 'Comprehensive 20+ Page Regional Trades & Emergency Infrastructure Network',
    category: 'multi-page',
    categoryLabel: 'Enterprise Regional Trades',
    pageTier: '20-plus-page',
    pageCountLabel: '21 Unique Pages',
    industry: 'Multi-Trade Contractor & Regional Silos',
    targetMarket: 'USA (Texas & Tri-State Metro)',
    description: 'A deep architectural demonstration of a 21-page regional contractor authority site. Features 8 dedicated trade silos (HVAC, Electrical, Plumbing, Roofing, Waterproofing, Pest, Commercial, EV Automation), 5 distinct metropolitan suburb pages with localized response guarantees, and full compliance resource portals.',
    features: [
      '21 distinct functional sub-routes with dedicated schemas',
      '5 localized city/suburb silos with dynamic dispatch times',
      'Interactive multi-trade service selector & instant quote builder',
      'Trade licensing registry, insurance proofs & warranty charter',
      'Emergency 24/7 priority live dispatch board simulator'
    ],
    techStack: ['React 19', 'Tailwind CSS v4', 'Local Area Schema', 'Dynamic Route Siloing'],
    primaryColor: 'from-amber-500 to-amber-700',
    accentColor: '#f59e0b',
    demoRoute: '/portfolio/demo/summit-regional',
    metrics: [
      { label: 'Indexed Pages', value: '21 Pages' },
      { label: 'Simulated Organic Lift', value: '+340%' },
      { label: 'Target Search Silos', value: '13 Suburbs' }
    ]
  },
  {
    id: 'apex-flow-plumbing',
    title: 'Apex Flow Plumbing & Heating',
    tagline: '10-Page Commercial & Emergency Residential Plumbing Authority',
    category: 'trades',
    categoryLabel: 'Trades & Contractors',
    pageTier: '10-page',
    pageCountLabel: '10-Page Architecture',
    industry: 'Licensed Plumbing & Gas Engineers',
    targetMarket: 'United Kingdom (London & Home Counties) / USA',
    description: 'Engineered for high-ticket residential boiler replacements and commercial drainage contracts. Features a click-to-call emergency dispatch bar, transparent flat-rate pricing guide, service area territory map, and finance calculator.',
    features: [
      'Instant tap-to-call 24/7 emergency dispatch strip',
      'Dedicated service pages: Boilers, Drains, Relining, Leak Detection',
      'Interactive financing & monthly installment estimator',
      'Verified customer review feed & Gas Safe credentials section',
      'Postcode / ZIP code service area eligibility checker'
    ],
    techStack: ['React', 'Local Schema', 'Click-to-Call', 'Financing Logic'],
    primaryColor: 'from-blue-600 to-cyan-600',
    accentColor: '#0284c7',
    demoRoute: '/portfolio/demo/apex-plumbing',
    metrics: [
      { label: 'Mobile Conversion', value: '8.4%' },
      { label: 'Emergency Call CTR', value: '42%' },
      { label: 'Google Speed Score', value: '99/100' }
    ]
  },
  {
    id: 'lumina-dental-studio',
    title: 'Lumina Modern Dental Studio',
    tagline: '5-Page Aesthetic & Family Dentistry Boutique Experience',
    category: 'healthcare',
    categoryLabel: 'Healthcare & Wellness',
    pageTier: '5-page',
    pageCountLabel: '5-Page Signature',
    industry: 'Cosmetic & Family Dentistry',
    targetMarket: 'Australia (Sydney Eastern Suburbs) / Canada',
    description: 'Ultra-refined healthcare experience designed to banish clinical anxiety. Features an interactive Before/After smile transformation slider, treatment fee schedule, insurance calculator, and frictionless new-patient booking wizard.',
    features: [
      'Interactive draggable Before / After smile transformation slider',
      '5 distinct core pages: Practice, Treatments, Smile Gallery, Insurance, Booking',
      'Transparent treatment fee schedule & payment plan breakdowns',
      'Online appointment request with time preference selection',
      'Virtual practice tour & dentist credentials profile'
    ],
    techStack: ['React', 'Draggable Slider', 'WCAG AA Accessible', 'Booking Flow'],
    primaryColor: 'from-teal-500 to-emerald-600',
    accentColor: '#0d9488',
    demoRoute: '/portfolio/demo/lumina-dental',
    metrics: [
      { label: 'New Patient Bookings', value: '+68%' },
      { label: 'Cosmetic Inquiries', value: '3.2x' },
      { label: 'Time on Gallery', value: '3m 42s' }
    ]
  },
  {
    id: 'sparklecraft-cleaning',
    title: 'SparkleCraft Pro Cleaners',
    tagline: 'High-Converting 1-Page Lead Funnel with Instant Online Quote Engine',
    category: 'services',
    categoryLabel: 'Local Services',
    pageTier: '1-page',
    pageCountLabel: '1-Page Lead Funnel',
    industry: 'Residential & Commercial Cleaning',
    targetMarket: 'Canada (Toronto & GTA) / USA',
    description: 'Single-page conversion powerhouse tailored for local home services. Incorporates an instant price estimator (bedrooms, bathrooms, clean type) that calculates costs live and drives visitors directly into immediate booking without leaving the page.',
    features: [
      'Interactive cleaning quote calculator with instant price output',
      'Checklist comparisons: Standard vs Deep Clean vs Move-In/Out',
      'Vetted cleaners trust badge: background checks & bonded insurance',
      '100% Sparkle Guarantee policy accordion',
      'Single-page sticky bottom booking trigger on mobile'
    ],
    techStack: ['React', 'Instant Price Engine', 'Mobile Quick-Book'],
    primaryColor: 'from-sky-500 to-indigo-600',
    accentColor: '#0ea5e9',
    demoRoute: '/portfolio/demo/sparklecraft-cleaning',
    metrics: [
      { label: 'Instant Quote Rate', value: '14.2%' },
      { label: 'Bounce Rate', value: '28%' },
      { label: 'Mobile Conversion', value: '9.6%' }
    ]
  },
  {
    id: 'ironpeak-roofing',
    title: 'IronPeak Roofing & Restoration',
    tagline: '5-Page Storm Damage & Premium Residential Roofing Showcase',
    category: 'trades',
    categoryLabel: 'Trades & Contractors',
    pageTier: '5-page',
    pageCountLabel: '5-Page Construction',
    industry: 'Roofing & Exterior Contractors',
    targetMarket: 'USA (Midwest & Southeast Hail Belt)',
    description: 'Designed specifically to capture lucrative insurance restoration and re-roofing claims. Includes a storm damage assessment request, drone inspection booking modal, shingle material visualizer, and 25-year warranty breakdown.',
    features: [
      'Emergency storm damage inspection booking flow',
      'Material showcase: Architectural Shingles, Standing Seam Metal, Tile',
      'Step-by-step homeowner insurance claim assistance guide',
      'Lifetime workmanship warranty specification sheet',
      'Before/After storm restoration photo gallery'
    ],
    techStack: ['React', 'Form Validation', 'Interactive Inspection Lead Capture'],
    primaryColor: 'from-stone-600 to-amber-700',
    accentColor: '#d97706',
    demoRoute: '/portfolio/demo/ironpeak-roofing',
    metrics: [
      { label: 'Avg Claim Lead Value', value: '$14,200' },
      { label: 'Inspection Submissions', value: '+85%' }
    ]
  },
  {
    id: 'kobo-artisanal-store',
    title: 'Kōbo Artisanal Living & Store',
    tagline: 'Complete Artisan E-Commerce Demonstration with Cart & Checkout',
    category: 'ecommerce',
    categoryLabel: 'E-Commerce Storefront',
    pageTier: 'ecommerce',
    pageCountLabel: 'Full E-Commerce App',
    industry: 'Handcrafted Goods & Lifestyle Ceramics',
    targetMarket: 'Global (USA, UK, CA, AU)',
    description: 'An elegant, high-conversion online store demo featuring real category filtering, live search, product detail modal with specs, working shopping cart with quantity controls, promo code discounts, and a safe simulated checkout flow.',
    features: [
      'Full shopping cart with local persistence & reactive badge count',
      'Category filter: Tableware, Coffee & Tea, Home Linen, Kitchen Gear',
      'Interactive Product Detail modal with gallery and materials',
      'Promo code support (Try "WEBCRAFT10" for 10% off)',
      'Simulated checkout with form validation and instant receipt generator'
    ],
    techStack: ['React 19', 'Context Cart State', 'Simulated Checkout', 'Tailwind v4'],
    primaryColor: 'from-amber-700 to-stone-800',
    accentColor: '#b45309',
    demoRoute: '/ecommerce-demo',
    metrics: [
      { label: 'Cart Checkout Rate', value: '72%' },
      { label: 'Simulated Order Value', value: '$124.50' },
      { label: 'Catalog Performance', value: '100% Clean' }
    ]
  },
  {
    id: 'osteria-rustica',
    title: 'Osteria Rustica Italian Bistro',
    tagline: 'Artisan Culinary Experience with Live Table Reservations & Digital Menu',
    category: 'hospitality',
    categoryLabel: 'Food & Hospitality',
    pageTier: '5-page',
    pageCountLabel: '5-Page Restaurant',
    industry: 'Fine Dining & Hospitality',
    targetMarket: 'UK (Edinburgh / London) / USA',
    description: 'Sensory-rich hospitality website with an interactive table booking widget, seasonal categorized menus with dietary toggles (Vegan, Gluten-Free), chef notes, and private event banquet inquiries.',
    features: [
      'Interactive online table reservation engine with instant confirmation',
      'Categorized dinner, lunch & artisan wine lists with dietary filters',
      'Chef story and heritage sourcing statement',
      'Private dining & banquet booking inquiry form',
      'Google Maps address and parking details integration'
    ],
    techStack: ['React', 'Table Booking State', 'Categorized Menu Engine'],
    primaryColor: 'from-red-900 to-stone-900',
    accentColor: '#991b1b',
    demoRoute: '/portfolio/demo/osteria-rustica',
    metrics: [
      { label: 'Online Covers Booked', value: '+92%' },
      { label: 'Mobile Menu Reads', value: '4.8k/mo' }
    ]
  },
  {
    id: 'voltmaster-electrical',
    title: 'VoltMaster Electrical Services',
    tagline: 'Residential, EV Charger & Commercial Electrical Engineering',
    category: 'trades',
    categoryLabel: 'Trades & Contractors',
    pageTier: '5-page',
    pageCountLabel: '5-Page Trades',
    industry: 'Licensed Electricians & EV Charging Specialists',
    targetMarket: 'Australia (Melbourne / Brisbane) / UK',
    description: 'Built for licensed master electricians. Features an interactive home EV charger installation cost estimator, electrical panel safety checklist, commercial LED retrofitting guide, and rapid callback requests.',
    features: [
      'Interactive EV Charger compatibility & installation selector',
      'Electrical panel upgrade safety diagnostic checklist',
      'Commercial maintenance contract inquiry pipeline',
      'Same-day service call availability indicator',
      'Master Electrician safety certification badges'
    ],
    techStack: ['React', 'Interactive Cost Calculator', 'Emergency Callback'],
    primaryColor: 'from-amber-600 to-yellow-600',
    accentColor: '#eab308',
    demoRoute: '/portfolio/demo/voltmaster-electrical',
    metrics: [
      { label: 'EV Charger Leads', value: '18/week' },
      { label: 'Panel Upgrade Requests', value: '+110%' }
    ]
  },
  {
    id: 'verdant-craft-landscapes',
    title: 'Verdant Craft Landscapes',
    tagline: 'Bespoke Garden Architecture, Hardscaping & Estate Groundskeeping',
    category: 'services',
    categoryLabel: 'Local Services',
    pageTier: '5-page',
    pageCountLabel: '5-Page Aesthetic',
    industry: 'Landscape Architecture & Maintenance',
    targetMarket: 'USA (Pacific Northwest / New England)',
    description: 'Visual showcase for landscape contractors and patio builders. Emphasizes visual storytelling with high-contrast project photography, seasonal lawn care packages, hardscaping 3D design process, and consultation bookings.',
    features: [
      'Seasonal groundskeeping subscription tier comparison',
      'Hardscaping patio & outdoor kitchen project gallery',
      'Online landscape consultation request with photo upload demo',
      'Native plant library and sustainable drought-resistant guides'
    ],
    techStack: ['React', 'Gallery Lightbox', 'Consultation Lead Funnel'],
    primaryColor: 'from-emerald-700 to-green-900',
    accentColor: '#059669',
    demoRoute: '/portfolio/demo/verdant-landscapes',
    metrics: [
      { label: 'Estate Quote Requests', value: '3.4x' },
      { label: 'Avg Project Size', value: '$8,800' }
    ]
  },
  {
    id: 'velvet-sage-salon',
    title: 'Velvet & Sage Hair & Brow Studio',
    tagline: 'Boutique Stylist Portfolios, Treatment Menu & Booking Experience',
    category: 'services',
    categoryLabel: 'Personal Services',
    pageTier: '5-page',
    pageCountLabel: '5-Page Salon',
    industry: 'Hair Salon, Colorists & Brow Artists',
    targetMarket: 'UK (Manchester / Bristol) / Australia',
    description: 'Editorial boutique salon platform featuring individual stylist lookbooks, transparent service timing and pricing tiers, bridal package inquiries, and client consultation appointment scheduling.',
    features: [
      'Individual stylist portfolios and specialization tags',
      'Detailed service treatment menu with duration and pricing',
      'Interactive online appointment appointment selector',
      'Bridal party hair & makeup bespoke package form'
    ],
    techStack: ['React', 'Stylist Directory', 'Slot Selector'],
    primaryColor: 'from-rose-800 to-stone-900',
    accentColor: '#e11d48',
    demoRoute: '/portfolio/demo/velvet-sage-salon',
    metrics: [
      { label: 'Online Re-bookings', value: '79%' },
      { label: 'Color Correction Inquiries', value: '+54%' }
    ]
  },
  {
    id: 'ironforge-strength-gym',
    title: 'IronForge Functional Strength Gym',
    tagline: 'High-Performance Functional Fitness, Class Timetables & Trial Pass Funnel',
    category: 'healthcare',
    categoryLabel: 'Fitness & Athletic Studios',
    pageTier: '5-page',
    pageCountLabel: '5-Page Fitness',
    industry: 'Strength & Conditioning, CrossFit & Personal Training',
    targetMarket: 'USA (Austin / Denver) / UK',
    description: 'High-energy fitness hub featuring live weekly class timetable filters (Hyrox, Olympic Lifting, HIIT, Recovery), coach bio profiles, transparent membership tiers with zero hidden lock-ins, and instant 3-Day Guest Pass checkout.',
    features: [
      'Interactive weekly class schedule with filter by workout type',
      '3-Day Free Trial Pass instant claim form',
      'Membership tier comparison (Basic, Unlimited, All-Access + Recovery)',
      'Certified Strength Coaches roster & achievements'
    ],
    techStack: ['React', 'Interactive Timetable', 'Trial Pass Funnel'],
    primaryColor: 'from-orange-600 to-red-700',
    accentColor: '#ea580c',
    demoRoute: '/portfolio/demo/ironforge-gym',
    metrics: [
      { label: 'Free Trial Passes Claimed', value: '45/mo' },
      { label: 'Trial to Member Rate', value: '62%' }
    ]
  }
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'starter-one-page',
    name: 'Starter Lead Lander',
    tagline: 'High-impact 1-page conversion funnel optimized for Google Ads & rapid local calls.',
    basePriceUSD: 499,
    timeline: '3 to 5 business days',
    pageCount: '1 High-Conversion Page',
    recommendedFor: 'Solo trades, emergency repair services, or single-offer local businesses.',
    deliverables: [
      'Custom bespoke responsive design (Mobile, Tablet, Desktop)',
      'Click-to-Call emergency floating bar & WhatsApp trigger',
      'Interactive instant quote estimator or booking lead form',
      'Google Business Profile integration & Local SEO schema markup',
      '95+ Google PageSpeed mobile performance optimization',
      'Full source code, hosting setup & domain connection included'
    ],
    idealFor: ['Emergency Plumbers', 'Mobile Auto Detailers', 'Window Cleaners', 'Pest Control']
  },
  {
    id: 'growth-five-page',
    name: 'Signature Service Authority',
    tagline: 'Complete 5-page industry website that establishes unmistakable local trust and authority.',
    basePriceUSD: 899,
    timeline: '7 to 10 business days',
    popular: true,
    pageCount: '5 Bespoke Pages',
    recommendedFor: 'Established local businesses wanting to dominate their local catchment area.',
    deliverables: [
      '5 Complete pages: Home, Dedicated Services, About/Story, Gallery/Proof, Contact/Booking',
      'Interactive feature (Before/After slider, menu engine, or schedule viewer)',
      'Local SEO foundation targeting 3 primary service keywords',
      'Client review & trust badge architecture (Google, Yelp, Checkatrade/BBB)',
      'Custom inquiry form with email notifications & spam protection',
      'Easy client editor access or free 30-day post-launch support'
    ],
    idealFor: ['Dental Practices', 'Roofing Contractors', 'Salons & Spas', 'Landscape Builders', 'Restaurants']
  },
  {
    id: 'expansion-ten-page',
    name: 'Trade Dominance Engine',
    tagline: '10-page powerhouse with dedicated service silos, suburb landing pages, and financing tools.',
    basePriceUSD: 1499,
    timeline: '12 to 16 business days',
    pageCount: '10 Strategic Pages',
    recommendedFor: 'Growing contractors and multi-service companies competing for top Google positions.',
    deliverables: [
      '10 Individual pages including 4 specific service silos + 3 regional territory pages',
      'Advanced interactive calculator (Financing estimator, load calculator, or multi-step quote)',
      'Deep Local Schema JSON-LD markup across all service areas',
      'Fast-loading photo & case study showcase portfolio',
      'Conversion-rate optimized callout buttons across every viewport',
      '60-day post-launch warranty, priority bug fixes & analytics dashboard'
    ],
    idealFor: ['Commercial HVAC/Plumbing', 'Electrical Contractors', 'Remodeling & Builders', 'Law & Professional']
  },
  {
    id: 'regional-hub-twenty',
    name: 'Regional Multi-Location Enterprise',
    tagline: '20+ page massive directory & local SEO moat dominating across multiple metro areas.',
    basePriceUSD: 2499,
    timeline: '18 to 25 business days',
    pageCount: '20+ Unique Authority Pages',
    recommendedFor: 'Regional multi-crew operations covering multiple cities, suburbs, or specialized divisions.',
    deliverables: [
      '20+ Unique pages: 8 distinct trade service silos + 6 city/suburb catchment landing pages',
      'Licensing portals, trade compliance registry, insurance verification & warranty charter',
      'Centralized dispatch request system & emergency priority call board',
      'Comprehensive on-page technical SEO & structured cluster architecture',
      'Full technical documentation & team training walkthrough video',
      '90-day ongoing growth monitoring and core web vitals SLA'
    ],
    idealFor: ['Multi-City Contractor Networks', 'Commercial Facility Groups', 'Franchise Operators']
  },
  {
    id: 'ecommerce-storefront',
    name: 'Artisan E-Commerce Store',
    tagline: 'Fast, elegant shopping experience built to maximize average order value and checkout speed.',
    basePriceUSD: 1899,
    timeline: '14 to 20 business days',
    pageCount: 'Full Online Storefront',
    recommendedFor: 'Independent brands, makers, and boutique retail businesses selling products online.',
    deliverables: [
      'Product catalog with category filtering, search, and sorting',
      'High-impact Product Detail Pages with specifications & material details',
      'Frictionless shopping cart with slide-out drawer & quantity adjustments',
      'Secure payment gateway integration (Stripe, PayPal, Apple Pay / Shopify)',
      'Automated transactional emails (Order confirmation, dispatch notice)',
      'Stock management & tax / shipping rate rule configuration'
    ],
    idealFor: ['Handcrafted Ceramics', 'Specialty Coffee Roasters', 'Boutique Apparel', 'Home Decor']
  }
];
