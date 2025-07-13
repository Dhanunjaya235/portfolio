import { Skill, Project, Experience, Testimonial, BlogPost } from '../types';

export const skills: Skill[] = [
  { name: 'TypeScript', level: 95, category: 'Languages' },
  { name: 'JavaScript', level: 95, category: 'Languages' },
  { name: 'Python', level: 90, category: 'Languages' },
  { name: 'Java', level: 85, category: 'Languages' },

  { name: 'React', level: 95, category: 'Frontend Frameworks' },
  { name: 'Redux', level: 90, category: 'Frontend Frameworks' },
  { name: 'Angular', level: 80, category: 'Frontend Frameworks' },
  { name: 'Tailwind CSS', level: 90, category: 'Frontend Frameworks' },

  { name: 'Express.js', level: 85, category: 'Backend Frameworks' },
  { name: 'Flask', level: 85, category: 'Backend Frameworks' },
  { name: 'Django', level: 85, category: 'Backend Frameworks' },
  { name: 'FastAPI', level: 80, category: 'Backend Frameworks' },
  { name: 'Spring Boot', level: 85, category: 'Backend Frameworks' },

  { name: 'PostgreSQL', level: 85, category: 'Databases' },
  { name: 'MongoDB', level: 70, category: 'Databases' },
  { name: 'Firebase', level: 70, category: 'Databases' },

  { name: 'AWS', level: 80, category: 'CI/CD & Cloud' },
  { name: 'Vercel', level: 70, category: 'CI/CD & Cloud' },
  { name: 'GitHub Actions', level: 80, category: 'CI/CD & Cloud' },

  { name: 'Docker', level: 90, category: 'DevOps/Tools' },
  { name: 'Git', level: 90, category: 'DevOps/Tools' },
  { name: 'Postman', level: 90, category: 'DevOps/Tools' },
];




export const achievements = [
  {
    id: '1',
    title: 'Team Player Award',
    year: '2023',
    description: 'Acknowledged for effective collaboration and leadership in cross-functional teams.',
    icon: '🤝',
    type: 'recognition'
  },
  {
    id: '2',
    title: 'Star of the Quarter',
    year: '2024',
    description: 'Recognized for outstanding delivery and innovation in project execution.',
    icon: '🏅',
    type: 'award'
  },
  {
    id: '3',
    title: 'Hackathon Winner – First Place',
    year: '2025',
    description: 'Secured first place in a month-long internal hackathon by building an innovative solution as part of a collaborative team effort.',
    icon: '🎉',
    type: 'achievement'
  }
];

export const projects: Project[] = [
  {
    id: '1',
    title: 'Common Components With React',
    description:
      'Developed a scalable React-based component library for 13+ cross-functional teams, enabling consistent UI, faster development cycles, and seamless integration across projects. Leveraged Material UI, React Context, and ensured test coverage with Jest. Automated builds and deployments via Jenkins.',
    image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
    tech: ['React', 'React Context', 'Jest', 'Material UI', 'Jenkins', 'Figma'],
    github: '',
    live: '',
    featured: true,
  },
  {
    id: '2',
    title: 'Project Tracker',
    description:
      'Built a backend system using Spring Boot and MyBatis to manage and track project timelines and sprint performance. Secured APIs with authentication and authorization, and optimized data access using advanced SQL with CTEs and joins. Deployed using Azure CI/CD pipelines.',
    image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800',
    tech: ['Java', 'Spring Boot', 'MyBatis', 'PostgreSQL', 'Azure DevOps'],
    github: '',
    live: '',
    featured: true,
  },
  {
    id: '3',
    title: 'ESPO – Organizational Sports Platform',
    description:
      'Built an engaging internal sports tournament application with animated leaderboards, role-based access control, and intuitive user flows. Used React with Context API for dynamic UIs and Spring Boot for backend services. Developed configurable admin tools and integrated Framer Motion for visually appealing player challenges and finale dashboards.',
    image: 'https://images.pexels.com/photos/5327584/pexels-photo-5327584.jpeg?auto=compress&cs=tinysrgb&w=800',
    tech: ['Full Stack', 'React', 'Context API', 'Framer Motion', 'Spring Boot', 'Spring JPA'],
    github: '',
    live: '',
    featured: true,
  },
  {
    id: '4',
    title: 'Benefits Portal',
    description:
      'Developed a full-stack employee benefits platform with React and Flask. Engineered secure RESTful APIs with SQLAlchemy and Flask-Migrate for seamless data handling and schema versioning. Built features like Excel report generation and dynamic file storage systems. On the frontend, implemented the PF module and reusable UI components using React and Context API to ensure consistent user experience.',
    image: 'https://images.pexels.com/photos/3182763/pexels-photo-3182763.jpeg?auto=compress&cs=tinysrgb&w=800',
    tech: ['Python', 'Flask', 'SQLAlchemy', 'React', 'Context API', 'Flask-Migrate'],
    github: '',
    live: '',
    featured: true,
  },
  {
    id: '5',
    title: 'AI-Powered SAT Prep Platform',
    description:
      'Developed a personalized SAT exam preparation platform with AI-driven features using React. Created admin tools for managing student reports and question feedback. Integrated Stripe for payments and implemented dynamic visualizations like donut and pie charts for progress tracking. Used AWS Amplify and Cognito for secure authentication, and customized Amplify components to match branding. Leveraged Redux Toolkit for optimized state and API data management.',
    image: 'https://images.pexels.com/photos/3184456/pexels-photo-3184456.jpeg?auto=compress&cs=tinysrgb&w=800',
    tech: [
      'React',
      'Redux Toolkit',
      'Tailwind CSS',
      'Stripe',
      'AWS Amplify',
      'AWS Cognito',
      'Framer Motion'
    ],
    github: '',
    live: '',
    featured: true,
  },
  {
    id: '6',
    title: 'SAT Platform Backend & API Services',
    description:
      'Designed and developed robust backend services using Django to support an AI-powered SAT preparation platform. Built secure, scalable RESTful APIs for student assessments, reports, feedback mechanisms, and user roles. Implemented dynamic filtering and aggregation logic for performance insights. Ensured seamless integration with frontend via clean API contracts and maintained modular code structure for reusability and scalability.',
    image: 'https://images.pexels.com/photos/1181676/pexels-photo-1181676.jpeg?auto=compress&cs=tinysrgb&w=800',
    tech: ['Django', 'DRF', 'PostgreSQL', 'AWS', 'Docker', 'GitHub Actions'],
    github: '',
    live: '',
    featured: true,
  }
];

export const experiences: Experience[] = [
  {
    id: '1',
    role: 'Software Engineer',
    company: 'Cognine Technologies',
    period: '2023 - Present',
    description:
      'Full-stack engineer delivering scalable web applications and client-focused solutions, actively contributing to cross-functional collaboration and proof-of-concept initiatives.',
    achievements: [
      'Recognized with "Star of the Quarter" award for delivering consistent high-quality work and innovation.',
      'Awarded 1st place in organization-wide hackathon for leading the design and development of a full-stack AI-based application.',
      'Built robust, reusable frontend components and optimized user interfaces across multiple business domains.',
      'Collaborated with designers and backend teams to ensure seamless integration and consistent user experience.',
      'Wrote clean, maintainable code following industry best practices to ensure long-term scalability and readability.',
      'Proactively explored new frameworks and tools like LangChain, Electron, and AWS Amplify to support internal innovation.',
      'Documented architecture, components, and API workflows to improve onboarding and project continuity.',
      'Contributed to both frontend and backend efforts using React, Django, FastAPI, Spring Boot, and SQL technologies.'
    ],
  },
  {
    id: '2',
    role: 'Associate Software Engineer',
    company: 'Cognine Technologies',
    period: '2022 - 2023',
    description:
      'Focused on full-stack development and technical growth while supporting key projects with hands-on contributions across the stack.',
    achievements: [
      'Received "Team Player Award" for active collaboration, peer support, and knowledge sharing.',
      'Worked closely with senior developers to gather and clarify requirements, ensuring aligned technical delivery.',
      'Implemented backend logic and built frontend features using frameworks like Flask, Django, and React.',
      'Improved application reliability by identifying and resolving bugs through efficient debugging practices.',
      'Delivered clean, well-structured code aligned with internal coding standards and documentation guidelines.',
      'Created internal documentation and user guides for several modules to support user onboarding and training.',
      'Adapted quickly to evolving technologies and applied learning to improve performance and delivery quality.'
    ],
  },
]

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    role: 'Product Manager',
    company: 'TechCorp Solutions',
    content: 'Working with Alex has been incredible. Their attention to detail and ability to deliver complex features on time is unmatched.',
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    id: '2',
    name: 'Michael Chen',
    role: 'CTO',
    company: 'Digital Innovations',
    content: 'Alex brought fresh ideas and exceptional technical skills to our team. Their code quality and problem-solving abilities are outstanding.',
    avatar: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    id: '3',
    name: 'Emily Rodriguez',
    role: 'Design Lead',
    company: 'StartupX',
    content: 'The collaboration with Alex was seamless. They perfectly translated our designs into beautiful, functional interfaces.',
    avatar: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
];

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Building Scalable React Applications',
    excerpt: 'Learn the best practices for structuring and scaling React applications for enterprise use.',
    date: '2024-01-15',
    readTime: '8 min read',
    image: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['React', 'Architecture', 'Best Practices'],
  },
  {
    id: '2',
    title: 'The Future of Web Development',
    excerpt: 'Exploring emerging trends and technologies that will shape the future of web development.',
    date: '2024-01-08',
    readTime: '6 min read',
    image: 'https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Web Development', 'Trends', 'Technology'],
  },
  {
    id: '3',
    title: 'Optimizing Performance in Modern Apps',
    excerpt: 'Practical techniques for improving application performance and user experience.',
    date: '2024-01-01',
    readTime: '10 min read',
    image: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Performance', 'Optimization', 'UX'],
  },
];

export const pocs = [
  {
    id: 'poc1',
    title: 'SmartMail - AI Email Automation',
    description: 'Developed a full-stack enterprise-grade prototype using FastAPI and React during an internal hackathon. Integrated domain-aware RAG architecture to auto-process and reply to emails with high accuracy, reducing manual workload across departments.',
    tech: ['FastAPI', 'React', 'LangChain', 'GRoq', 'Tailwind', 'PostgreSQL'],
  },
  {
    id: 'poc2',
    title: 'Athena Health Integration UI Demo',
    description:
      'A React-based prototype built for a prospect demo to showcase real-time interaction with Athena Health APIs. The app features dynamic UI loaders and polished workflows to fetch, display, and sync healthcare data with our backend. Regular sync mechanisms were designed to keep both Athena and local databases updated.',
    tech: ['React', 'Material UI', 'Athena API', 'Axios', 'Flask'],
  },
  {
    id: 'poc3',
    title: 'Healthcare Platform UI/UX Prototype',
    description:
      'Collaboratively designed an end-to-end UI/UX prototype using Axure for a healthcare client. The interactive prototype covered complete feature flows based on the requirements document, including patient onboarding, appointment scheduling, and health record access.',
    tech: ['Axure RP', 'Healthcare UX', 'Prototyping', 'User Flow Mapping'],
  },
  {
    id: 'poc4',
    title: 'Train Schedule App (Clone)',
    description:
      'A learning-focused POC to replicate core features of the “Where is My Train” app, including train schedules, station search, and user authentication. Built backend APIs with Express.js and MongoDB, and a cross-platform mobile interface using React Native.',
    tech: ['Express.js', 'MongoDB', 'React Native', 'JWT Auth'],
  }
];