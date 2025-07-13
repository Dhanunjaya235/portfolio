export interface Skill {
  name: string;
  level: number;
  category: 'Languages' | 'Frontend Frameworks' | 'Backend Frameworks' | 'Databases' | 'CI/CD & Cloud' | 'DevOps/Tools';
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tech: string[];
  github?: string;
  live?: string;
  featured: boolean;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
  achievements: string[];
  current?: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  image: string;
  tags: string[];
}

export interface Achievement {
  id: string;
  title: string;
  year: string;
  description: string;
  icon: string;
  type: 'award' | 'recognition' | 'certification';
}