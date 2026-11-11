import { Product } from '../types';

export const SAMPLE_PRODUCTS: Product[] = [
  {
    id: 'kobo-01',
    name: 'Hasami Sandstone Teapot & Infuser',
    category: 'coffee-tea',
    categoryLabel: 'Coffee & Tea',
    priceUSD: 88,
    rating: 4.9,
    reviewsCount: 34,
    inStock: true,
    stockCount: 12,
    description: 'Slip-cast in Nagasaki Prefecture from a proprietary blend of crushed stone and local porcelain clay. Unfinished tactile matte exterior with a food-safe glazed interior and micro-etched stainless steel removable infuser basket.',
    details: [
      'Authentic Hasami porcelain craft from Nagasaki, Japan',
      'Holds 28 oz (approx. 3-4 generous cups of tea)',
      'Precision drip-free spout with silicone lid damper',
      'Dishwasher and microwave safe (remove metal infuser)'
    ],
    dimensions: '6.2" W × 4.8" H (Volume: 820ml)',
    material: 'Natural Sandstone Porcelain & 304 Stainless Steel',
    image: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'kobo-02',
    name: 'Kurogane Cast Iron Skillet 10"',
    category: 'kitchen-gear',
    categoryLabel: 'Kitchen Gear',
    priceUSD: 145,
    rating: 5.0,
    reviewsCount: 52,
    inStock: true,
    stockCount: 8,
    description: 'Precision-milled cast iron delivering exceptional thermal mass with 30% less weight than traditional Western skillets. Pre-seasoned with certified organic flaxseed oil for a glass-smooth non-stick sear out of the box.',
    details: [
      'Hand-cast in Iwate Prefecture using ancient Nambu Tekki foundry methods',
      'Ultra-smooth machined interior cooking surface',
      'Ergonomic angled stay-cool handle with hanging loop',
      'Compatible with induction, gas, electric, and campfires'
    ],
    dimensions: '10.2" Diameter × 2.1" Depth (Weight: 4.1 lbs)',
    material: 'Virgin Virgin Cast Iron (Pre-seasoned with Flaxseed)',
    image: 'https://images.unsplash.com/photo-1590794056226-79ef3a8147e1?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'kobo-03',
    name: 'Shizuku Pour-Over Glass Dripper & Server',
    category: 'coffee-tea',
    categoryLabel: 'Coffee & Tea',
    priceUSD: 64,
    rating: 4.8,
    reviewsCount: 29,
    inStock: true,
    stockCount: 19,
    description: 'Hand-blown heat-resistant borosilicate glass server crowned with an architectural brass and walnut collar. Fluted internal spiral ridges promote uniform water dispersion and consistent extraction.',
    details: [
      'Hand-blown heat-resistant lab-grade borosilicate glass',
      'FSC-certified solid American walnut collar with brass rivets',
      'Compatible with standard V60 02 paper filters',
      '600ml marked capacity server with ergonomic pour lip'
    ],
    dimensions: '5.1" Base × 7.6" Total Height',
    material: 'Borosilicate Glass, Solid American Walnut, Solid Brass',
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'kobo-04',
    name: 'Wabi Stoneware Dinner Plates (Set of 4)',
    category: 'tableware',
    categoryLabel: 'Tableware',
    priceUSD: 112,
    rating: 4.9,
    reviewsCount: 41,
    inStock: true,
    stockCount: 15,
    description: 'Wheel-thrown organic stoneware plates featuring an earthy iron-speckled matte ash glaze and a gentle organic rim. Subtle natural variations celebrate the human touch of the ceramicist.',
    details: [
      'High-fired at 1,280°C for superior chip resistance',
      'Hand-dipped in organic non-toxic wood ash glaze',
      'Stackable nesting design with raised rim catching sauces',
      'Oven safe up to 450°F, dishwasher safe'
    ],
    dimensions: '10.5" Diameter × 0.9" Rim Height (Set of 4)',
    material: 'Natural High-Fire Stoneware Clay',
    image: 'https://images.unsplash.com/photo-1610701596007-11502861dcfa?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'kobo-05',
    name: 'Woven Belgian Flax Linen Table Runner',
    category: 'home-living',
    categoryLabel: 'Home & Living',
    priceUSD: 58,
    rating: 4.7,
    reviewsCount: 18,
    inStock: true,
    stockCount: 24,
    description: 'Woven in Courtrai, Belgium from 100% natural European flax fibers. Pre-washed with natural pumice stones to achieve a soft relaxed drape, subtle slub texture, and effortless elegance.',
    details: [
      '100% European Flax Certified Belgian Linen (190 GSM)',
      'Finished with mitered corners and understated 1" hems',
      'Naturally hypoallergenic, anti-static, and temperature regulating',
      'Machine washable gentle cycle; softens with each wash'
    ],
    dimensions: '16" W × 90" L (Accommodates 6-8 person dining tables)',
    material: '100% Certified Organic Belgian Flax Linen',
    image: 'https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'kobo-06',
    name: 'End-Grain White Oak Carving Board',
    category: 'kitchen-gear',
    categoryLabel: 'Kitchen Gear',
    priceUSD: 128,
    rating: 5.0,
    reviewsCount: 37,
    inStock: true,
    stockCount: 6,
    description: 'Handcrafted from kiln-dried American white oak end-grain timber. The vertical fiber orientation naturally absorbs knife strikes without dulling your blades and self-heals after cutting.',
    details: [
      'Premium 1.75" thick end-grain construction for maximum warp prevention',
      'Deep perimeter juice groove with pour reservoir',
      'Recessed ergonomic finger grips on underside',
      'Treated with food-grade white mineral oil and organic beeswax'
    ],
    dimensions: '18" L × 12" W × 1.75" H (Weight: 8.5 lbs)',
    material: 'Sustainably Harvested American White Oak',
    image: 'https://images.unsplash.com/photo-1584269600519-112d071b35e6?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'kobo-07',
    name: 'Mori Hand-Drawn Ceramic Matcha Bowl',
    category: 'coffee-tea',
    categoryLabel: 'Coffee & Tea',
    priceUSD: 52,
    rating: 4.8,
    reviewsCount: 22,
    inStock: true,
    stockCount: 14,
    description: 'Traditional chawan matcha vessel shaped with a rounded well specifically calibrated for bamboo whisk agitation. Coated in a deep moss-green tenmoku glaze with subtle iron blossoms.',
    details: [
      'Generous wide basin accommodating bamboo chasen whisking',
      'Thick heat-retaining ceramic walls preserving water temperature',
      'Individually numbered by the Kyoto artisan collective',
      'Includes padded washi-paper storage box'
    ],
    dimensions: '4.8" Diameter × 3.1" Height (Capacity: 450ml)',
    material: 'Kyoto Iron Clay & Tenmoku Reduction Glaze',
    image: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'kobo-08',
    name: 'Smoked Amber Architectural Vessel & Bud Vase',
    category: 'home-living',
    categoryLabel: 'Home & Living',
    priceUSD: 76,
    rating: 4.9,
    reviewsCount: 16,
    inStock: true,
    stockCount: 10,
    description: 'Mouth-blown heavy glass vessel with a rich smoked amber tint. Designed to stand alone as a sculptural presence on console tables or cradle dried botanicals and single stems.',
    details: [
      'Hand-blown semi-opaque tinted soda-lime glass',
      'Heavy weighted base providing structural stability',
      'Subtle optical fluting catching ambient natural sunlight',
      'Waterproof interior for live floral arrangements'
    ],
    dimensions: '5.5" Diameter × 8.5" Height',
    material: 'Mouth-Blown Heavy Tinted Art Glass',
    image: 'https://images.unsplash.com/photo-1581783342308-f792dbdd27c5?auto=format&fit=crop&w=800&q=80'
  }
];
