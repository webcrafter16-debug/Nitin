export type CurrencyCode = 'USD' | 'GBP' | 'CAD' | 'AUD';

export interface CurrencyConfig {
  code: CurrencyCode;
  symbol: string;
  name: string;
  rateFromUSD: number;
  countryName: string;
  flag: string;
}

export type ProjectCategory = 
  | 'all'
  | 'trades'
  | 'healthcare'
  | 'hospitality'
  | 'services'
  | 'multi-page'
  | 'ecommerce';

export type PageTier = '1-page' | '5-page' | '10-page' | '20-plus-page' | 'ecommerce';

export interface PortfolioItem {
  id: string;
  title: string;
  tagline: string;
  category: ProjectCategory;
  categoryLabel: string;
  pageTier: PageTier;
  pageCountLabel: string;
  industry: string;
  targetMarket: string;
  description: string;
  features: string[];
  techStack: string[];
  primaryColor: string;
  accentColor: string;
  demoRoute: string;
  metrics: {
    label: string;
    value: string;
  }[];
}

export interface PricingPlan {
  id: string;
  name: string;
  tagline: string;
  basePriceUSD: number;
  timeline: string;
  recommendedFor: string;
  popular?: boolean;
  pageCount: string;
  deliverables: string[];
  idealFor: string[];
}

export interface Product {
  id: string;
  name: string;
  category: 'tableware' | 'coffee-tea' | 'home-living' | 'kitchen-gear';
  categoryLabel: string;
  priceUSD: number;
  rating: number;
  reviewsCount: number;
  inStock: boolean;
  stockCount: number;
  description: string;
  details: string[];
  dimensions: string;
  material: string;
  image: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}
