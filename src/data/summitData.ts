export interface SummitServiceDetail {
  slug: string;
  name: string;
  iconName: string;
  headline: string;
  summary: string;
  tradeHead: string;
  avgResponseTime: string;
  emergencyAvailable: boolean;
  baseStartingPrice: string;
  keyServices: { title: string; desc: string; standardTurnaround: string }[];
  licensingCert: string;
  equipmentSpecs: string[];
  warrantyTerms: string;
}

export interface SummitLocationDetail {
  slug: string;
  name: string;
  coverageMetro: string;
  depotAddress: string;
  activeCrews: number;
  avgArrivalMinutes: number;
  servicePhone: string;
  keyNeighborhoods: string[];
  permitJurisdictions: string[];
  specialtyLocalIssues: string;
}

export const SUMMIT_SERVICES: SummitServiceDetail[] = [
  {
    slug: 'hvac',
    name: 'HVAC, Heat Pumps & Air Quality',
    iconName: 'Wind',
    headline: 'High-Efficiency Climate Control, Seasonal Diagnostics & Heat Pump Conversions',
    summary: 'Master licensed HVAC mechanical contractors providing precision cooling, commercial rooftop repair, heat pump installations, and air filtration across the metropolitan area.',
    tradeHead: 'Marcus Vance, Master Mechanical License #TACLA88391E',
    avgResponseTime: '45 mins (Emergency) / Same Day',
    emergencyAvailable: true,
    baseStartingPrice: '$89 diagnostic trip (waived with repair)',
    keyServices: [
      { title: 'Emergency Compressor & Coil Repair', desc: 'Rapid diagnosis and repair of refrigerant leaks, capacitor failures, and seized compressors.', standardTurnaround: '2 to 4 hours' },
      { title: 'Inverter Heat Pump Installations', desc: 'Ultra-efficient SEER2 18+ dual-fuel heat pump replacements qualifying for maximum federal/state rebates.', standardTurnaround: '1 business day' },
      { title: 'Commercial Duct Sanitization & Air Scrubbers', desc: 'HEPA particulate filtration and UV-C purification systems engineered for retail, clinics, and offices.', standardTurnaround: '4 to 6 hours' }
    ],
    licensingCert: 'State Board of Mechanical Examiners Certified Master Class A',
    equipmentSpecs: ['Trane TruComfort Variable Speed', 'Carrier Infinity Series', 'Mitsubishi Mini-Split VRF'],
    warrantyTerms: '10-Year Parts & Labor Workmanship Guarantee on complete system replacements'
  },
  {
    slug: 'electrical',
    name: 'Master Electrical & Panel Infrastructure',
    iconName: 'Zap',
    headline: 'Heavy-Up 200A/400A Service Panels, Code Corrections & High-Voltage Systems',
    summary: 'Full-spectrum commercial and residential electrical contractors. We eliminate fire hazards, resolve unpermitted legacy wiring, and build bulletproof power backbones.',
    tradeHead: 'David Albright, Master Electrician #TECL44910',
    avgResponseTime: '60 mins for hazard alerts',
    emergencyAvailable: true,
    baseStartingPrice: '$120 comprehensive safety audit',
    keyServices: [
      { title: '200A / 400A Main Service Panel Heavy-Up', desc: 'Modernize outdated fuse boxes or Federal Pacific/Zinsco panels to accommodate high-draw appliances and EV stations.', standardTurnaround: '6 to 8 hours' },
      { title: 'Whole-Home Surge & Arc-Fault Protection', desc: 'Panel-level surge suppression safeguarding electronics and NEC-compliant AFCI breaker retrofits.', standardTurnaround: '3 hours' },
      { title: 'Commercial Three-Phase Power Feeds', desc: 'Heavy industrial drop wiring, motor control centers, and backup diesel generator transfer switches.', standardTurnaround: '1 to 3 days' }
    ],
    licensingCert: 'Master Electrical Contractor License & OSHA 30 Certified',
    equipmentSpecs: ['Square D QO Commercial Enclosures', 'Eaton Breaker Tech', 'Siemens Smart Panels'],
    warrantyTerms: 'Lifetime Guarantee on all panel enclosures and copper busbars'
  },
  {
    slug: 'plumbing',
    name: 'Master Emergency Plumbing & Gas',
    iconName: 'Droplets',
    headline: 'Hydro-Jetting, Trenchless Sewer Relining, Tankless Water Heaters & Gas Leaks',
    summary: '24/7 emergency dispatch for catastrophic burst pipes, commercial grease traps, main sewer collapses, and high-flow tankless conversions with zero lawn destruction.',
    tradeHead: 'Robert Henderson, Master Plumber #MP40219',
    avgResponseTime: '30 to 45 mins',
    emergencyAvailable: true,
    baseStartingPrice: '$99 sewer camera inspection',
    keyServices: [
      { title: 'Trenchless CIPP Sewer Relining', desc: 'Structural epoxy lining restores collapsed or root-invaded pipes without trenching driveways or landscaping.', standardTurnaround: 'Same day completion' },
      { title: 'Navien High-Flow Tankless Water Heaters', desc: 'Continuous hot water with 0.96 UEF efficiency rating and commercial-grade stainless steel heat exchangers.', standardTurnaround: '4 to 5 hours' },
      { title: 'Hydro-Jet Scouring & Root Excavation', desc: '4,000 PSI high-pressure water jetting completely removes mineral scale, grease clogs, and tree roots.', standardTurnaround: '90 minutes' }
    ],
    licensingCert: 'Master Plumber & Responsible Master Plumber (RMP) Endorsement',
    equipmentSpecs: ['Ridgid SeeSnake HD Digital Transmitters', 'Spartan 738 Hydro-Jetters', 'Navien NPE-A2 Units'],
    warrantyTerms: '25-Year transferable structural guarantee on all epoxy cured-in-place sewer sleeves'
  },
  {
    slug: 'roofing',
    name: 'Structural Roofing & Storm Restoration',
    iconName: 'Shield',
    headline: 'Hail Damage Inspections, Standing Seam Metal & Class 4 Impact-Resistant Shingles',
    summary: 'Insurance claim specialists and commercial flat roof contractors. We deploy high-resolution drone inspections to document storm strikes and install roofs built for 130 MPH winds.',
    tradeHead: 'Thomas Sterling, Registered Building Contractor #CR19488',
    avgResponseTime: '2 hours for tarping / emergency dry-in',
    emergencyAvailable: true,
    baseStartingPrice: 'Free 24-point drone roof scan',
    keyServices: [
      { title: 'Emergency Storm Tarping & Water Mitigation', desc: 'Immediate weatherproofing preventing interior drywall collapse following severe wind, hail, or fallen trees.', standardTurnaround: 'Within 2 hours' },
      { title: 'Class 4 Impact Architectural Shingle Replacement', desc: 'GAF Timberline HDZ and Owens Corning Duration shingles qualifying for up to 25% insurance premium discounts.', standardTurnaround: '1 to 2 days' },
      { title: 'Standing Seam Architectural Metal Roofs', desc: 'Concealed fastener 24-gauge Galvalume steel systems offering 50+ year longevity in harsh weather conditions.', standardTurnaround: '3 to 4 days' }
    ],
    licensingCert: 'GAF Master Elite Contractor & NRCA Certified Installer',
    equipmentSpecs: ['DJI Enterprise Thermal Drone Scanners', 'EverGuard TPO Membranes', 'Sheffield Metals 24ga Steel'],
    warrantyTerms: 'GAF Golden Pledge 50-Year Non-Prorated System Warranty'
  },
  {
    slug: 'foundation',
    name: 'Foundation Repair & Basement Waterproofing',
    iconName: 'Hammer',
    headline: 'Hydraulic Steel Piering, Carbon Fiber Strap Reinforcement & French Drain Systems',
    summary: 'Geotechnical foundation repair engineers resolving settling slabs, sticking doors, exterior stair-step brick cracks, and wet subterranean basements.',
    tradeHead: 'Dr. Gregory Kane, PE / Geotechnical Consultant',
    avgResponseTime: 'Next day engineering consult',
    emergencyAvailable: false,
    baseStartingPrice: '$0 initial laser level elevation mapping',
    keyServices: [
      { title: 'Hydraulic Concentric Steel Push Piers', desc: 'Driven directly into solid load-bearing bedrock to mechanically lift and permanently stabilize sinking foundations.', standardTurnaround: '2 to 3 days' },
      { title: 'Carbon Fiber Bowing Wall Bracing', desc: 'Aerospace-grade carbon fiber straps bonded with structural epoxy to permanently lock bowing basement walls.', standardTurnaround: '1 day' },
      { title: 'Interior Sub-Floor Perimeter Drainage & Dual Sump', desc: 'Engineered moisture collection with cast-iron backup battery sump pumps that guarantee bone-dry basements.', standardTurnaround: '2 days' }
    ],
    licensingCert: 'Licensed Professional Engineer (PE) On-Staff Review & Certification',
    equipmentSpecs: ['Magnum Piering Concentric Brackets', 'Rhino Carbon Fiber Matrix', 'Liberty Pro-Series Dual Pumps'],
    warrantyTerms: 'Transferable Lifetime Foundation Stabilization Guarantee'
  },
  {
    slug: 'pest-control',
    name: 'Commercial Pest & Termite Remediation',
    iconName: 'Bug',
    headline: 'Sentricon Termite Baiting, Rodent Proofing & Eco-Shield Pest Barriers',
    summary: 'Full structural pest elimination for commercial restaurants, warehouses, and luxury residences. We target the root colony rather than temporary surface spraying.',
    tradeHead: 'Elena Rostova, Certified Pest Control Operator #TPCO7712',
    avgResponseTime: 'Same day dispatch',
    emergencyAvailable: true,
    baseStartingPrice: '$75 initial perimeter shield',
    keyServices: [
      { title: 'Sentricon Termite Colony Elimination System', desc: 'Non-invasive subterranean baiting stations that destroy the termite queen and whole colony without digging.', standardTurnaround: 'Ongoing quarterly protection' },
      { title: 'Full Exclusion Attic & Crawlspace Rodent Proofing', desc: 'Comprehensive wire mesh sealing of all soffit entry points followed by sanitization and HEPA vacuuming.', standardTurnaround: '4 to 6 hours' },
      { title: 'Restaurant Health Code Pest Compliance', desc: 'Zero-tolerance IPM (Integrated Pest Management) programs with digital audit trails for municipal inspections.', standardTurnaround: 'Scheduled monthly' }
    ],
    licensingCert: 'State Department of Agriculture Licensed Commercial Applicator',
    equipmentSpecs: ['Sentricon Always Active Stations', 'B&G Precision Chemical Sprayers', 'Vector Plasma UV Fly Traps'],
    warrantyTerms: '100% Re-Service Guarantee: If pests return between visits, we re-treat at zero cost'
  },
  {
    slug: 'commercial-facility',
    name: 'Commercial Facility & Plant Maintenance',
    iconName: 'Building2',
    headline: 'Multi-Site Trade Retainers, Preventative Scheduled Care & Fast Work Orders',
    summary: 'Turnkey facility engineering for retail centers, medical suites, logistics hubs, and corporate campuses. Single SLA contract covering HVAC, plumbing, power, and roofing.',
    tradeHead: 'Arthur Sterling, Director of Commercial Field Operations',
    avgResponseTime: 'Under 2 hours guaranteed SLA',
    emergencyAvailable: true,
    baseStartingPrice: 'Custom tiered monthly retainer',
    keyServices: [
      { title: 'Scheduled Quarterly Preventative Maintenance', desc: 'Comprehensive 80-point trade inspection: belt replacements, coil cleanings, backflow tests, breaker thermography.', standardTurnaround: 'Quarterly cycle' },
      { title: 'Tenant Fit-Out Trade Rough-Ins', desc: 'Rapid electrical, plumbing, and duct alterations for incoming commercial leasees and office remodelings.', standardTurnaround: 'Coordinated by scope' },
      { title: 'Consolidated Commercial Billing & Portals', desc: 'One monthly invoice and digital work order portal eliminating the administrative headache of 15 separate trade vendors.', standardTurnaround: 'Real-time digital status' }
    ],
    licensingCert: 'Consolidated General Contractor & Multi-Craft Trade Master Certifications',
    equipmentSpecs: ['FLIR Thermal Imaging Cameras', 'ProPress Copper Systems', 'Digital Building Automation Gateways'],
    warrantyTerms: 'SLA Guaranteed: $100 penalty credit per hour delayed beyond contractual response target'
  },
  {
    slug: 'ev-automation',
    name: 'Smart EV Chargers & Energy Storage',
    iconName: 'BatteryCharging',
    headline: 'Tesla Universal Wall Connectors, Commercial Fleet Charging & Backup Batteries',
    summary: 'Clean energy electrical division installing Level 2 and Level 3 DC Fast Chargers, solar-tied backup batteries, and smart load-shedding subpanels.',
    tradeHead: 'Nathaniel Cole, EV Infrastructure Specialist #EV-7721',
    avgResponseTime: 'Same week installation',
    emergencyAvailable: false,
    baseStartingPrice: '$699 standard Level 2 residential installation',
    keyServices: [
      { title: 'Residential Level 2 Smart EV Charging', desc: 'Hardwired 48A / 11.5kW charging delivering up to 44 miles of range per hour with smart scheduling.', standardTurnaround: '3 to 4 hours' },
      { title: 'Commercial Multi-Bay Fleet Charging Stations', desc: 'Networked OCPP chargers with RFID credit card readers, load sharing, and utility demand management.', standardTurnaround: '2 to 4 days' },
      { title: 'Whole-Home Battery Storage & Islanding', desc: 'Lithium iron phosphate battery banks providing seamless emergency power transfer during grid blackouts.', standardTurnaround: '1 to 2 days' }
    ],
    licensingCert: 'Certified Tesla Energy Installer & ChargePoint Commercial Partner',
    equipmentSpecs: ['Tesla Universal Wall Connector', 'ChargePoint Home Flex', 'Enphase IQ Battery 5P'],
    warrantyTerms: '3-Year Installation Labor Warranty backed by manufacturer equipment warranties'
  }
];

export const SUMMIT_LOCATIONS: SummitLocationDetail[] = [
  {
    slug: 'north-metro',
    name: 'North Metro & Highland Ridge',
    coverageMetro: 'Northern Suburbs & Technology Corridor',
    depotAddress: '8400 Innovation Way, Suite 110 (North Dispatch Depot)',
    activeCrews: 14,
    avgArrivalMinutes: 28,
    servicePhone: '+1 (555) 438-7861',
    keyNeighborhoods: ['Stonebridge Estates', 'Highland Vista', 'Oak Creek Reserve', 'Tech Ridge Hub', 'Copperfield Meadow'],
    permitJurisdictions: ['North Metro Municipal Building Dept', 'County Environmental Health'],
    specialtyLocalIssues: 'High limestone content causing premature water heater calcification; severe hail vulnerability on northern roof aspects.'
  },
  {
    slug: 'south-county',
    name: 'South County & River Valley',
    coverageMetro: 'Southern Residential Communities & Historic Districts',
    depotAddress: '2150 Pioneer Parkway, Yard B (South Dispatch Depot)',
    activeCrews: 11,
    avgArrivalMinutes: 32,
    servicePhone: '+1 (555) 438-7862',
    keyNeighborhoods: ['Cedar Crest', 'River Oaks', 'Old Mill Crossing', 'Southgate Commons', 'Valley Ranch Heights'],
    permitJurisdictions: ['South County Code Enforcement Office', 'Historic Preservation Board'],
    specialtyLocalIssues: 'Expansive clay soils causing high foundation movement in hot summers; legacy 1970s cast iron drain lines prone to root intrusion.'
  },
  {
    slug: 'downtown-center',
    name: 'Downtown Commercial & Urban Highrise',
    coverageMetro: 'Metropolitan Core, Financial District & Mid-Rise Condos',
    depotAddress: '400 Congress Avenue, Sub-Level 2 (Urban Rapid Depot)',
    activeCrews: 8,
    avgArrivalMinutes: 22,
    servicePhone: '+1 (555) 438-7863',
    keyNeighborhoods: ['Financial District', 'Arts Quarter', 'Warehouse District', 'Riverfront Lofts', 'Capitol Square'],
    permitJurisdictions: ['City Bureau of Development Services', 'Central Fire Marshal Division'],
    specialtyLocalIssues: 'Strict noise and loading dock ordinances; pressurized vertical plumbing risers requiring specialized mechanical certifications.'
  },
  {
    slug: 'east-valley',
    name: 'East Valley Industrial & Logistics Corridor',
    coverageMetro: 'Commercial Warehouses, Industrial Plants & Airport Parkway',
    depotAddress: '10900 Freightway Blvd, Bay 4 (Heavy Fleet Hub)',
    activeCrews: 12,
    avgArrivalMinutes: 35,
    servicePhone: '+1 (555) 438-7864',
    keyNeighborhoods: ['Logistics Park', 'Gateway East', 'Airport Industrial Sector', 'Crossroads Logistics Hub', 'Pecan Grove'],
    permitJurisdictions: ['Regional Industrial Development Authority', 'State Department of Licensing'],
    specialtyLocalIssues: 'Heavy three-phase electrical demands, high-capacity commercial grease traps, and severe flat roof ponding after storm events.'
  },
  {
    slug: 'west-foothills',
    name: 'West Foothills & Lakeside Enclaves',
    coverageMetro: 'West Lakeside, Custom Architectural Homes & Hill Country',
    depotAddress: '5500 Canyon Ridge Road, Suite 20 (West Mobile Division)',
    activeCrews: 9,
    avgArrivalMinutes: 38,
    servicePhone: '+1 (555) 438-7865',
    keyNeighborhoods: ['Canyon Crest', 'Lakeview Highlands', 'The Bluffs', 'Pinnacle Overlook', 'Falcon Ridge Sanctuary'],
    permitJurisdictions: ['Hill Country Environmental Conservation', 'Westside Emergency Services District'],
    specialtyLocalIssues: 'Rocky hillside terrain requiring specialized geotechnical piering; high wildfire risk demanding Class A metal roof systems.'
  }
];

export const SUMMIT_RESOURCE_PAGES = [
  {
    slug: 'emergency-dispatch',
    title: '24/7 Priority Emergency Dispatch Board',
    subtitle: 'Real-time telemetry and immediate emergency vehicle dispatch for burst pipes, electrical hazards, gas leaks, and storm damage.',
    category: 'Emergency Dispatch'
  },
  {
    slug: 'compliance-licensing',
    title: 'State Licensing, Bond & Insurance Registry',
    subtitle: 'Full public disclosure of our master trade licenses, $5,000,000 commercial liability coverage, and worker compensation certificates.',
    category: 'Trust & Governance'
  },
  {
    slug: 'financing',
    title: 'Zero-Percent Trade Financing & Rebate Center',
    subtitle: 'Flexible 0% APR financing options for unexpected repairs and high-efficiency heat pump or solar panel replacements.',
    category: 'Payment Solutions'
  },
  {
    slug: 'warranty-charter',
    title: 'Summit Guild Workmanship Warranty Charter',
    subtitle: 'Our legally binding commitment to uncompromised trade standards, non-prorated replacement terms, and dispute-free guarantees.',
    category: 'Warranty & Protection'
  },
  {
    slug: 'about-guild',
    title: 'About the Summit Guild Network',
    subtitle: 'How 8 independent master craft unions united into a single coordinated regional infrastructure service provider.',
    category: 'Company Story'
  },
  {
    slug: 'careers',
    title: 'Master Trade Careers & Journeyman Apprenticeships',
    subtitle: 'Top-of-market hourly wages, fully equipped take-home service trucks, and 100% paid family health benefits.',
    category: 'Careers & Hiring'
  },
  {
    slug: 'book-inspection',
    title: 'Central Multi-Trade Inspection & Quote Request',
    subtitle: 'Coordinate multiple trade inspections (HVAC, Electrical, Plumbing, Roofing) in a single convenient two-hour appointment window.',
    category: 'Booking & Dispatch'
  }
];
