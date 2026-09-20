import { Project, SkillCard, HighlightScreen, ProcessStep, ToolItem, Certification } from '../types';
import {
  GHARBEDHU_SVG,
  CAPTAIN_TICKETU_SVG,
  CAMPUS_CONNECT_SVG,
  INDU_CAFE_SVG,
  RIDEBOX_SVG,
  CARE_BAND_SVG,
  UX_LAWS_ANALYSIS_SVG
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
  portraitImage: '/about-illustration.svg',
  portraitCandidates: [
    '/ChatGPT Image Sep 20, 2026, 01_31_50 PM.png',
    '/ChatGPT_Image_Sep_20_2026_01_31_50_PM.png',
    '/about-illustration.svg',
    '/about-me.svg',
    '/ChatGPT Image Sep 20, 2026, 01_31_50 PM.svg',
    '/about-illustration.png'
  ]
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
    id: 'campus-catering',
    title: 'Campus Catering — A Digital Solution for University Dining',
    subtitle: 'High-speed campus food ordering with itemized perforated tickets, live cooking countdowns, and quick pickups',
    category: 'Food & Beverage / Campus Dining Mobile App',
    image: INDU_CAFE_SVG,
    metrics: 'Real-Time Queue Reduction',
    themeColor: '#facc15'
  },
  {
    id: 'ux-laws-analysis',
    title: '10 Laws of UX — Comprehensive Competitive App Analysis',
    subtitle: 'Systematic heuristic benchmarking of leading consumer mobile apps based on Hick’s, Fitts’s, and Jakob’s Laws',
    category: 'UX Research / Heuristic Ergonomics',
    image: UX_LAWS_ANALYSIS_SVG,
    metrics: '6 Apps Benchmarked',
    themeColor: '#3b82f6'
  },
  {
    id: 'campus-connect',
    title: 'CampusConnect — Smart Campus Navigation & Student Companion',
    subtitle: 'Unified student portal with interactive 3D building maps, bus schedules, service shortcuts, and academic updates',
    category: 'EdTech & Smart Campus / Navigation App',
    image: CAMPUS_CONNECT_SVG,
    metrics: 'All-in-One Campus Companion',
    themeColor: '#0f2942'
  },
  {
    id: 'care-band',
    title: 'Use Care Band — Wearable Safety & Guardian Support Ecosystem',
    subtitle: 'Discreet smart wearable featuring one-touch emergency SOS, automated fall detection, and live GPS guardian tracking',
    category: 'HealthTech & Wearable IoT / Safety Device',
    image: CARE_BAND_SVG,
    metrics: 'Instant SOS Telemetry',
    themeColor: '#0284c7'
  },
  {
    id: 'bookmyshow-kid',
    title: 'BookMyShow Kid Version — Safe Family Movie Ticketing',
    subtitle: 'Kid-friendly movie booking ecosystem featuring Captain Ticketu mascot, parental permission locks, and age rating tiers',
    category: 'Family & Entertainment / Mobile App',
    image: CAPTAIN_TICKETU_SVG,
    metrics: '100% Parent Controlled',
    themeColor: '#dc2626'
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'project-campus-catering',
    title: 'Innovation: A Digital Solution for Campus Catering',
    category: 'Food & Beverage / EdTech Mobile App',
    description: 'A high-speed campus catering application designed to eliminate lunch-hour queues, featuring contactless ordering, itemized digital tickets, and live kitchen preparation countdowns.',
    image: INDU_CAFE_SVG,
    role: 'Lead UI/UX Designer',
    timeline: '5 Weeks',
    impact: 'Reduced cafeteria order turnaround time by 52% and eliminated peak-hour queue congestion',
    tags: ['Campus Catering', 'Food Ordering', 'Queue Reduction', 'Real-Time Tracking'],
    overview: 'Innovation: A Digital Solution for Campus Catering solves the intense congestion of university dining halls. With tight 15-to-30-minute intervals between lectures, hundreds of students converge on food counters simultaneously. This digital solution provides contactless ordering, live kitchen preparation transparency, and an intuitive perforated order ticket.',
    challenge: 'Campus dining facilities struggle with extreme peak-hour rush, chaotic queue lines, cash exchange friction, and order mix-ups. Students frequently miss meals or arrive late to lectures due to unpredictable preparation times.',
    solution: 'Engineered a fast, accessible mobile ordering flow with instant category filtering, real-time live prep countdowns (e.g. 10 min remaining), perforated digital pickup tokens, and smart slot-based order pickup synchronized with student lecture schedules.',
    keyFeatures: [
      'Real-time kitchen order countdown card showing live preparation status and itemized breakdown',
      'Perforated digital token ticket acting as instant proof-of-pickup at delivery counters',
      'Quick category navigation for Burgers, Pizzas, Noodles, Parathas, and beverage cross-sells',
      'Transparent payment breakdown with instant student wallet and UPI support',
      'Scheduled order pickup allowing students to order during lecture and collect immediately at class dismissal'
    ],
    deliverables: ['User Research & Cafeteria Observation', 'Mobile UI Design (Figma)', 'Live Order Ticket Interaction Model', 'Usability Testing Report'],
    behanceUrl: 'https://www.behance.net/gallery/249721671/Innovation-A-Digital-Solution-for-Campus-Catering'
  },
  {
    id: 'project-ux-laws-analysis',
    title: 'Competitive App Analysis Based on the 10 Laws of UX',
    category: 'UX Research & Heuristic Evaluation',
    description: 'A rigorous comparative UX benchmark evaluating market-leading consumer mobile apps against foundational psychological principles and cognitive ergonomics.',
    image: UX_LAWS_ANALYSIS_SVG,
    role: 'UX Researcher & Heuristic Analyst',
    timeline: '4 Weeks',
    impact: 'Benchmarked 6 enterprise applications and identified 28 critical heuristic violations',
    tags: ['10 Laws of UX', 'Competitive Analysis', 'Cognitive Ergonomics', 'Heuristic Audit'],
    overview: 'This project conducts an in-depth empirical audit comparing leading applications (including BookMyShow, Uber, and food delivery apps) against the 10 Laws of UX. The study focuses on understanding how cognitive load, touch target distances, and mental model consistency directly drive conversion and user retention.',
    challenge: 'Many digital consumer products inadvertently induce cognitive fatigue and decision paralysis through excessive choices, misaligned hit-targets, and violations of conventional mental models, degrading user trust.',
    solution: 'Developed a structured 10-law evaluation framework examining Hick’s Law, Fitts’s Law, Jakob’s Law, Miller’s Law, and the Peak-End Rule. Formulated quantified usability scorecards and actionable redesign solutions to streamline user velocity.',
    keyFeatures: [
      'Hick’s Law decision latency audit: Benchmarking checkout form complexity against progressive disclosure',
      'Fitts’s Law thumb-zone ergonomic analysis: Measuring target distance and touch hit areas (48px+ standard)',
      'Jakob’s Law mental model consistency map across multi-platform navigation paradigms',
      'Miller’s Law cognitive chunking matrix: Organizing dense data into 7±2 digestible perceptual groups',
      'Actionable heuristic scorecard and design recommendation blueprint for product teams'
    ],
    deliverables: ['Competitive Heuristic Audit Report', '10 Laws of UX Scorecards', 'Ergonomic Hit-Target Mapping', 'Redesign Pattern Guidelines'],
    behanceUrl: 'https://www.behance.net/gallery/249721329/Competitive-App-Analysis-Based-on-the-10-Laws-of-UX'
  },
  {
    id: 'project-campus-connect',
    title: 'Campus Connect: Smart Campus Navigation App',
    category: 'EdTech & Smart Campus / Mobile Navigation',
    description: 'An all-in-one digital campus companion unifying interactive map navigation, rapid student services, hostel requests, and categorized notifications.',
    image: CAMPUS_CONNECT_SVG,
    role: 'UX Researcher & Interaction Designer',
    timeline: '6 Weeks',
    impact: 'Consolidated 5 disparate university portals into a single high-speed mobile dashboard',
    tags: ['EdTech', 'Campus Navigation', 'Student Portal', 'Notification System'],
    overview: 'CampusConnect was created to eliminate the friction university students face daily — from locating unfamiliar classrooms across sprawling multi-acre campuses and tracking campus shuttles to checking exam grades and library due dates.',
    challenge: 'Students had to log into separate web portals for academic grades, bus schedules, hostel facilities, and club announcements, leading to missed deadlines, lost time, and wayfinding anxiety.',
    solution: 'Designed a unified mobile portal organized into an intuitive dashboard featuring personalized greetings, an interactive 3D campus map card, high-contrast quick action tiles, and a split notification feed (Academic vs. Social).',
    keyFeatures: [
      'Personalized student header ("Good Morning, Umang") with unread notification badge indicator',
      'Smart search bar for finding buildings, laboratories, and lecture classrooms instantly',
      'Interactive Campus Map card with 3D isometric buildings and direct "View Full Map" action',
      'High-contrast 2x2 Quick Action grid: Bus Service, Admissions, Hostel, and Digital Library',
      'Categorized notification center separating critical Academic Updates from Social Events'
    ],
    deliverables: ['Student Journey Maps', 'Campus Navigation Heuristic Audit', 'Mobile High-Fidelity Mockups', 'Notification State Machine'],
    behanceUrl: 'https://www.behance.net/gallery/249721127/Campus-Connect-Smart-Campus-Navigation-App'
  },
  {
    id: 'project-care-band',
    title: 'Use Care Band: Safety & Support Wearable',
    category: 'HealthTech & Wearable IoT / Safety Device',
    description: 'A discrete safety smart band and companion mobile ecosystem providing one-touch emergency SOS, automated fall detection, and live GPS guardian tracking.',
    image: CARE_BAND_SVG,
    role: 'Lead Product & IoT UX Designer',
    timeline: '5 Weeks',
    impact: 'Delivered sub-3-second emergency notification dispatch to guardian circles and emergency services',
    tags: ['Wearable IoT', 'HealthTech', 'SOS Trigger', 'Live GPS Telemetry'],
    overview: 'Use Care Band is an assistive wearable safety device and mobile platform engineered for vulnerable individuals — including elderly seniors, solitary commuters, and university students. The ecosystem pairs tactile hardware with instant cloud telemetry to provide peace of mind without social stigma.',
    challenge: 'Existing panic and safety systems are cumbersome, visually clinical, and require unlocking a smartphone during moments of panic or physical incapacitation, resulting in critical response delays.',
    solution: 'Designed an ergonomic wrist wearable with a tactile one-touch SOS trigger, integrated AI fall detection, and a mobile companion app enabling real-time geofence safe-zones and encrypted live GPS beaconing to designated emergency guardian circles.',
    keyFeatures: [
      'Tactile one-touch emergency SOS trigger with silent haptic feedback confirmation',
      'Automated fall detection using onboard gyroscope and accelerometer sensor intelligence',
      'Live GPS breadcrumb beaconing with interactive safe geofence radius monitoring',
      'Emergency Response Circle with verified guardian priority calling and campus patrol link',
      'Real-time vital telemetry monitoring resting heart rate, body temperature, and device battery status'
    ],
    deliverables: ['Wearable Ergonomics & Interaction Flow', 'Guardian Mobile Companion App UI', 'Emergency State Machine', 'Bluetooth Low-Energy Sync Specs'],
    behanceUrl: 'https://www.behance.net/gallery/249718331/Use-Care-Band-Safety-Support-Wearable'
  },
  {
    id: 'project-bookmyshow-kid',
    title: 'BookMyShow Kid Version',
    category: 'Family & Entertainment / Mobile App',
    description: 'A kid-friendly movie ticketing platform featuring a whimsical mascot guide, comprehensive parental controls, age ratings, and cinema seat booking.',
    image: CAPTAIN_TICKETU_SVG,
    role: 'UI/UX Designer & Mascot Stylist',
    timeline: '5 Weeks',
    impact: 'Provided parents peace of mind with 100% transparent permission toggles before tickets can be purchased',
    tags: ['Parental Control', 'Kids UX', 'Movie Ticketing', 'Mobile Prototype'],
    overview: 'BookMyShow Kid Version (Captain Ticketu) bridges the gap between fun entertainment for children and peace of mind for parents. Children enjoy an engaging, mascot-guided movie selection while parents retain full control over bookings, payments, and age-appropriate content.',
    challenge: 'Most ticketing apps are built solely for adults, risking accidental in-app charges and exposing young audiences to age-inappropriate movie trailers and bookings.',
    solution: 'Engineered a dual-experience architecture with a dedicated Parent Control screen guarded by passcode, easy toggle switches for booking/payment approvals, and a simplified cinema and time slot picker.',
    keyFeatures: [
      'Interactive Captain Ticketu mascot welcoming children with friendly speech bubble guidance',
      'Granular Parent Control toggles: Approve Booking, Payment Approval, and Notification Alerts',
      'Age Rating tier selection (All Ages, 7+, 12+, 15+) restricting mature trailers',
      'Cinema list with distance indicators (Galaxy Cinemas, PVR Motera, Apple Cinema) and popularity tags',
      'Segmented showtime selector grouped into Morning, Afternoon, and Evening slots with real-time sold-out status'
    ],
    deliverables: ['User Persona Study (Kids & Parents)', 'Figma Mobile App Wireframes', 'Interactive Micro-Interactions', 'Passcode Security UX Flow'],
    behanceUrl: 'https://www.behance.net/gallery/249716123/Bookmyshow-Kid-Version'
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
