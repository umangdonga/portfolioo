import { Project, SkillCard, HighlightScreen, ProcessStep, ToolItem, Certification } from '../types';
import {
  GHARBEDHU_SVG,
  CAPTAIN_TICKETU_SVG,
  CAMPUS_CONNECT_SVG,
  INDU_CAFE_SVG,
  RIDEBOX_SVG
} from './highlightSvgs';

export const PERSONAL_INFO = {
  name: 'Umang Donga',
  label: "HELLO, I'M",
  headline: 'UMANG DONGA',
  role: 'UI/UX DESIGNER',
  cardRole: 'UI/UX Designer & M.Des Student',
  cardFocus: 'Research • UI • UX',
  email: 'umangdonga98@gmail.com',
  phone: '+91 7874388655',
  location: 'Ahmedabad, Gujarat',
  availability: 'Available for freelance & full-time design roles',
  intro: [
    'Hi, I’m Umang, a UI/UX Designer and M.Des student passionate about creating simple, meaningful, and user-friendly digital experiences.',
    'With a background in Computer Applications and Design, I enjoy combining research, problem-solving, and visual design to understand users and create thoughtful digital interfaces.',
    'As a designer, I’m especially interested in UX research, UI design, interaction design, and design strategy. I enjoy turning real user needs into clear and useful experiences.'
  ],
  highlight: 'I believe good design is not just about looking beautiful — it should be simple, useful, and easy to understand.',
  socials: {
    gmail: 'mailto:umangdonga98@gmail.com',
    phone: 'tel:+917874388655',
    linkedin: 'https://linkedin.com/in/umang-donga',
    behance: 'https://behance.net/umangdonga',
    github: 'https://github.com/umangdonga'
  },
  portraitImage: '/Gemini_Generated_Image_t4w9bpt4w9bpt4w9-removebg-preview.png',
  fallbackPortrait: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1000&q=80'
};

export const SKILL_CARDS: SkillCard[] = [
  {
    id: 'product-design',
    title: 'Product Design',
    description: 'Designing meaningful digital products by combining user needs, business goals, and visual design.',
    iconName: 'product'
  },
  {
    id: 'ui-ux-design',
    title: 'UI/UX Design',
    description: 'Creating clean, intuitive interfaces and user experiences that are easy to understand and enjoyable to use.',
    iconName: 'uiux'
  },
  {
    id: 'ux-research',
    title: 'UX Research',
    description: 'Understanding users through research, observations, interviews, and insights to identify real problems.',
    iconName: 'research'
  },
  {
    id: 'user-flow',
    title: 'User Flow',
    description: 'Creating logical user journeys and simple flows that help users complete tasks with clarity.',
    iconName: 'flow'
  }
];

export const DESIGN_HIGHLIGHTS: HighlightScreen[] = [
  {
    id: 'gharbedhu',
    title: "Gharbedhu.com — Men's E-Commerce Storefront",
    subtitle: 'Responsive menswear shopping platform with category filters, popular sorting, and streamlined checkout',
    category: 'E-Commerce / Web Application',
    image: GHARBEDHU_SVG,
    metrics: 'Responsive Web Storefront',
    themeColor: '#1b2559'
  },
  {
    id: 'captain-ticketu',
    title: 'Captain Ticketu — Kids Movie Booking & Parent Control',
    subtitle: 'Safe movie ticketing app with mascot onboarding, parental approval controls, age rating tiers, and showtime booking',
    category: 'Family & Entertainment / Mobile App',
    image: CAPTAIN_TICKETU_SVG,
    metrics: '3-Screen Safe Booking Flow',
    themeColor: '#dc2626'
  },
  {
    id: 'campus-connect',
    title: 'CampusConnect — University Student Portal & Campus Guide',
    subtitle: 'Smart campus companion featuring 3D isometric building exploration, quick service actions, and academic notifications',
    category: 'EdTech & Smart Campus / Mobile App',
    image: CAMPUS_CONNECT_SVG,
    metrics: 'All-in-One Campus Companion',
    themeColor: '#0f2942'
  },
  {
    id: 'indu-cafe',
    title: 'Indu Cafe — Dark Food Ordering & Live Order Tracking',
    subtitle: 'Atmospheric food app with category carousels, perforated live order tickets, customizable meals, and cart management',
    category: 'Food & Beverage / Dark Theme Mobile App',
    image: INDU_CAFE_SVG,
    metrics: 'Real-Time Order Tracking',
    themeColor: '#facc15'
  },
  {
    id: 'ridebox',
    title: 'RideBox Mobility — Urban Ride Hailing & Trip Booking',
    subtitle: 'On-demand transit application with 8 service suggestions, safety gear promotion, live route tracking, and vehicle selection',
    category: 'Mobility & Logistics / On-Demand Service',
    image: RIDEBOX_SVG,
    metrics: 'Fast Multi-Modal Booking',
    themeColor: '#eab308'
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'project-gharbedhu',
    title: "Gharbedhu.com: Men's E-Commerce Storefront",
    category: 'E-Commerce & Responsive Web Design',
    description: "A complete online shopping storefront for men's fashion, balancing warm brand storytelling, quick multi-category filtering, and clean product discovery.",
    image: GHARBEDHU_SVG,
    role: 'Lead UI/UX Designer',
    timeline: '6 Weeks',
    impact: 'Streamlined apparel browsing with intuitive category tagging and instant search feedback',
    tags: ['E-Commerce', 'Web Design', 'Filter Architecture', 'Desktop & Mobile'],
    overview: "Gharbedhu.com was designed to bring modern men's fashion to users with maximum clarity and effortless navigation. The project addresses friction in catalog browsing by pairing an inviting peach header with a sticky multi-category filter and clean product cards.",
    challenge: "Online apparel shoppers often get frustrated with visual clutter, sluggish filtering, and confusing product card hierarchies that obscure pricing and user ratings.",
    solution: "Designed an editorial layout with high-contrast typography, an orange search pill, a multi-tag filter sidebar (Shirts, T-Shirts, Jeans, Trousers, Jackets), and high-legibility product cards featuring ratings and clear pricing.",
    keyFeatures: [
      "Custom brand identity with Gharbedhu.com home icon and high-contrast navy navigation",
      "Peach hero banner introducing brand personality without taking away from catalog focus",
      "Sidebar filter supporting multi-select attributes (Shirts, T-Shirts, Ethnic Wear, Jackets)",
      "Product cards with customer review ratings (★★★★☆), price badges, and wishlist quick-action"
    ],
    deliverables: ['Information Architecture', 'Desktop Web Mockups', 'Mobile Web Responsive Breakpoints', 'Filter Flow Spec']
  },
  {
    id: 'project-captain-ticketu',
    title: 'Captain Ticketu: Kids Movie Booking & Parent Control',
    category: 'Family & Entertainment / Mobile App',
    description: 'A kid-friendly movie ticketing platform featuring a whimsical mascot guide, comprehensive parental controls, age ratings, and cinema seat booking.',
    image: CAPTAIN_TICKETU_SVG,
    role: 'UI/UX Designer & Mascot Stylist',
    timeline: '5 Weeks',
    impact: 'Provided parents peace of mind with 100% transparent permission toggles before tickets can be purchased',
    tags: ['Parental Control', 'Kids UX', 'Movie Ticketing', 'Mobile Prototype'],
    overview: 'Captain Ticketu bridges the gap between fun entertainment for children and peace of mind for parents. Children enjoy an engaging, mascot-guided movie selection while parents retain full control over bookings, payments, and age-appropriate content.',
    challenge: 'Most ticketing apps are built solely for adults, risking accidental in-app charges and exposing young audiences to age-inappropriate movie trailers and bookings.',
    solution: 'Engineered a dual-experience architecture with a dedicated Parent Control screen guarded by passcode, easy toggle switches for booking/payment approvals, and a simplified cinema and time slot picker.',
    keyFeatures: [
      'Interactive Captain Ticketu mascot welcoming children with friendly speech bubble guidance',
      'Granular Parent Control toggles: Approve Booking, Payment Approval, and Notification Alerts',
      'Age Rating tier selection (All Ages, 7+, 12+, 15+) restricting mature trailers',
      'Cinema list with distance indicators (Galaxy Cinemas, PVR Motera, Apple Cinema) and popularity tags',
      'Segmented showtime selector grouped into Morning, Afternoon, and Evening slots with real-time sold-out status'
    ],
    deliverables: ['User Persona Study (Kids & Parents)', 'Figma Mobile App Wireframes', 'Interactive Micro-Interactions', 'Passcode Security UX Flow']
  },
  {
    id: 'project-campus-connect',
    title: "CampusConnect: Umang's University Student Portal",
    category: 'EdTech & Smart Campus Companion',
    description: 'An all-in-one digital campus companion unifying interactive map navigation, rapid student services, hostel requests, and categorized notifications.',
    image: CAMPUS_CONNECT_SVG,
    role: 'UX Researcher & Interaction Designer',
    timeline: '6 Weeks',
    impact: 'Consolidated 5 disparate university portals into a single high-speed mobile dashboard',
    tags: ['EdTech', 'Campus Navigation', 'Student Portal', 'Notification System'],
    overview: "CampusConnect was created to eliminate the friction university students face daily — from locating unfamiliar classrooms and tracking campus buses to checking exam grades and library due dates.",
    challenge: 'Students had to log into separate web portals for academic grades, bus schedules, hostel facilities, and club announcements, leading to missed deadlines and confusion.',
    solution: 'Designed a unified mobile portal organized into an intuitive dashboard featuring personalized greetings, an interactive 3D campus map card, high-contrast quick action tiles, and a split notification feed (Academic vs. Social).',
    keyFeatures: [
      'Personalized student header ("Good Morning, Umang") with unread notification badge indicator',
      'Smart search bar for finding buildings, laboratories, and lecture classrooms instantly',
      'Interactive Campus Map card with 3D isometric buildings and direct "View Full Map" action',
      'High-contrast 2x2 Quick Action grid: Bus Service, Admissions, Hostel, and Digital Library',
      'Categorized notification center separating critical Academic Updates (New Grades, Library Due) from Social Updates (Club Events, Live Music)'
    ],
    deliverables: ['Student Journey Maps', 'Campus Navigation Heuristic Audit', 'Mobile High-Fidelity Mockups', 'Notification State Machine']
  },
  {
    id: 'project-indu-cafe',
    title: 'Indu Cafe: Dark Mode Food Ordering & Live Ticket',
    category: 'Food & Beverage / Dark UI Mobile App',
    description: 'A mouthwatering food and beverage ordering mobile app designed with a sleek dark aesthetic, yellow accent hierarchy, and live perforated order status tickets.',
    image: INDU_CAFE_SVG,
    role: 'Lead UI Designer',
    timeline: '4 Weeks',
    impact: 'Reduced order anxiety with the physical-ticket inspired live countdown card',
    tags: ['Food Ordering', 'Dark Theme UI', 'Micro-Interactions', 'Live Order Tracking'],
    overview: 'Indu Cafe delivers a modern culinary ordering experience. Designed in a sophisticated dark palette (#121212) with radiant cheese-yellow accents, the app makes browsing meals, customizing orders, and tracking preparation intuitive and delightful.',
    challenge: 'Many food ordering applications bury live kitchen progress under complex sub-menus, creating user anxiety during busy cafe hours.',
    solution: 'Designed an unmistakable yellow perforated order ticket right on the home dashboard that shows order confirmation, itemized total, and estimated prep time (10 minutes) with a direct live-status action.',
    keyFeatures: [
      'Warm greeting header ("Hello Akanksha / Welcome to the indu cafe") with instant search',
      'Horizontal category pills for fast filtering: All, Pizza, Burger, Noodles, Paratha',
      'Yellow perforated order ticket showing live kitchen prep countdown, itemized bill (Classic Burger Rs.150, Cold Drink Rs.60), and live order status',
      'Seamless cart screen with item quantity steppers, cross-sell snacks (Ice Cold Drink, Potato Chips), coupon code input, and transparent payment breakdown'
    ],
    deliverables: ['Visual Style Guide (Dark & Radiant Yellow)', 'Food Ordering Wireframes', 'Live Ticket Card Motion Spec', 'Checkout Flow Prototype']
  },
  {
    id: 'project-ridebox',
    title: 'RideBox Mobility: On-Demand Ride Hailing Experience',
    category: 'Mobility & Logistics / On-Demand Service',
    description: 'An urban mobility platform offering quick vehicle booking across Autos, Motorbikes, and Scooters with transparent pricing and live route telemetry.',
    image: RIDEBOX_SVG,
    role: 'Product Designer & Service Architect',
    timeline: '5 Weeks',
    impact: 'Simplified vehicle choice with instant seating capacity indicators and faster arrival badges',
    tags: ['Mobility UX', 'Ride Hailing', 'Live Map Tracking', 'Bottom Sheet UX'],
    overview: 'RideBox is designed for urban commuters needing reliable, fast, and multi-modal transit options. The app provides instant access to 8 mobility services, route navigation, and upfront pricing with discount tags.',
    challenge: 'Commuters needing urgent transport often get confused by complex tariff structures and unclear vehicle capacities during peak rush hours.',
    solution: 'Crafted a vibrant yellow and crisp black design featuring an 8-service suggestion grid, interactive pickup point entry with "Later" scheduling, and an interactive bottom sheet comparing Autos, Bikes, and Scooters with arrival ETAs and transparent discounts.',
    keyFeatures: [
      'Clean RIDE BOX brand identity with top search bar supporting immediate and "Later" scheduled rides',
      'Suggestions grid covering Trip, Send Items (50% off tag), Intercity, Reserve promo, Rentals, Teens, and Seniors',
      'Vibrant yellow "Choose a trip" bottom sheet displaying vehicle types (Auto 3 seats, Bike 1 seat, Scooter 1 seat)',
      'Real-time pricing comparison with crossed-out discount prices ($47.50 vs 50.00) and ⚡ Faster arrival badges',
      'Integrated pickup point HUD with live route map showing duration and destination'
    ],
    deliverables: ['Mobility Service Blueprint', 'Driver & Rider Flow Diagram', 'Interactive Bottom Sheet Prototype', 'Design Token Specs']
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: '01',
    title: 'Discover & Research',
    description: 'Understand the problem, users, context, and existing experience through research and observation.',
    activities: [
      'User Interviews & Ethnography',
      'Competitive Landscape Analysis',
      'Heuristic Usability Evaluation',
      'Persona Definition & Empathy Mapping'
    ]
  },
  {
    step: '02',
    title: 'Strategy & Structure',
    description: 'Define the problem, organize information, create user flows, and develop the right design strategy.',
    activities: [
      'Information Architecture (IA)',
      'User Journey & Task Mapping',
      'Feature Prioritization Matrix',
      'Content Modeling & Wireframes'
    ]
  },
  {
    step: '03',
    title: 'Design & Prototype',
    description: 'Transform ideas into wireframes, interfaces, interactions, and high-fidelity prototypes.',
    activities: [
      'Low & High-Fidelity UI Design',
      'Design System & Component Tokenization',
      'Micro-Interactions & Transitions',
      'Interactive Framer / Figma Prototypes'
    ]
  },
  {
    step: '04',
    title: 'Testing & Improve',
    description: 'Test the experience, collect feedback, identify issues, iterate, and improve the final solution.',
    activities: [
      'Usability Testing Sessions',
      'Accessibility Audits (WCAG AA/AAA)',
      'Design Feedback Syntheses',
      'Continuous Iteration & Handoff Specs'
    ]
  }
];

export const DESIGN_SUPPORT_POINTS = [
  {
    title: 'Understand',
    subtitle: 'Research & Human Context',
    description: 'Understand users, goals, context, and challenges through deep observation and analytical inquiry.',
    details: 'Grounding every design in actual user motivations and business realities, rather than assumptions or trends.'
  },
  {
    title: 'Simplify',
    subtitle: 'Structure & Information Hierarchy',
    description: 'Turn complex information into simple, intuitive experiences that require minimal cognitive effort.',
    details: 'Pruning extraneous noise, establishing clear mental models, and guiding users effortlessly to their goals.'
  },
  {
    title: 'Design',
    subtitle: 'Craft & Visual Precision',
    description: 'Create thoughtful interfaces that balance usability, clarity, and visual quality.',
    details: 'Mastering typography, optical balance, accessible contrasts, and smooth micro-interactions.'
  }
];

export const TOOLS: ToolItem[] = [
  {
    name: 'Figma',
    category: 'Interface & Systems',
    iconType: 'figma',
    proficiency: 'Advanced'
  },
  {
    name: 'Canva',
    category: 'Rapid Visuals & Decks',
    iconType: 'canva',
    proficiency: 'Skilled'
  },
  {
    name: 'CorelDRAW',
    category: 'Vector & Print Graphics',
    iconType: 'coreldraw',
    proficiency: 'Proficient'
  },
  {
    name: 'Adobe Illustrator',
    category: 'Vector & Icon Design',
    iconType: 'illustrator',
    proficiency: 'Advanced'
  },
  {
    name: 'Adobe Photoshop',
    category: 'Image Editing & Retouching',
    iconType: 'photoshop',
    proficiency: 'Advanced'
  },
  {
    name: 'Framer',
    category: 'Interactive Prototyping & Web',
    iconType: 'framer',
    proficiency: 'Advanced'
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    id: 'cert-1',
    name: 'Certification 01: Foundations of User Experience (UX) Design',
    organization: 'Google Career Certificates / Coursera',
    date: '2025',
    credentialId: 'GCC-UX-984210',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80',
    skillsCovered: ['UX Research', 'User Personas', 'Wireframing', 'Figma Prototyping', 'Usability Audits']
  },
  {
    id: 'cert-2',
    name: 'Certification 02: Advanced Design Systems & Token Architecture',
    organization: 'Figma Community & Design Academy',
    date: '2025',
    credentialId: 'FDM-DSA-771923',
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80',
    skillsCovered: ['Figma Variables', 'Component Sets', 'WCAG AAA Accessibility', 'Design Tokens']
  },
  {
    id: 'cert-3',
    name: 'Certification 03: Human-Computer Interaction & Usability Evaluation',
    organization: 'Interaction Design Foundation (IxDF)',
    date: '2024',
    credentialId: 'IXDF-HCI-430981',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
    skillsCovered: ['Cognitive Psychology', 'Information Architecture', 'Heuristic Evaluation', 'Mental Models']
  },
  {
    id: 'cert-4',
    name: 'Certification 04: Product Strategy & Interaction Design for Modern Web',
    organization: 'Master of Design Specialization',
    date: '2024',
    credentialId: 'MDES-PID-102948',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    skillsCovered: ['Service Design', 'Micro-Interactions', 'User Flow Engineering', 'Stakeholder Alignment']
  }
];
