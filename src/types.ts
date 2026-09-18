export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  role: string;
  timeline: string;
  impact: string;
  tags: string[];
  overview: string;
  challenge: string;
  solution: string;
  keyFeatures: string[];
  deliverables: string[];
}

export interface SkillCard {
  id: string;
  title: string;
  description: string;
  iconName: 'product' | 'uiux' | 'research' | 'flow';
}

export interface HighlightScreen {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  image: string;
  metrics?: string;
  themeColor: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
  activities: string[];
}

export interface ToolItem {
  name: string;
  category: string;
  iconType: string;
  proficiency?: string;
}

export interface Certification {
  id: string;
  name: string;
  organization: string;
  date: string;
  credentialId: string;
  image: string;
  skillsCovered: string[];
}
