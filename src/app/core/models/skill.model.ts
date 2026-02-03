export interface Skill {
  id: number;
  name: string;
  level: number;
  category: 'frontend' | 'backend' | 'tools' | 'other';
  icon?: string;
}

export interface SkillCategory {
  name: string;
  skills: Skill[];
}
