export type Experience = {
  company: string
  role: string
  from: string
  to: string
  bullets: string[]
  tags?: string[]
  url?: string
  logo?: string
}

export type Education = {
  degree: string
  school: string
  year: string
}

export type Skills = {
  languages: string[]
  frameworks: string[]
  technologies: string[]
  tools: string[]
  softSkills: string[]
}

export const profile = {
  name: 'Shopping Sivilay',
  title: 'Software Developer',
  email: 'shopping.sivil@gmail.com',
  phones: ['+1 (786) 969-2645', '+1 (757) 337-7641'],
  github: 'https://github.com/shoppingsivil-alt',
  location: 'USA',
  avatarUrl: 'https://github.com/shoppingsivil-alt.png',
}

export const summary =
  'Accomplished and results-driven software developer with extensive experience in backend development, smart contracts, and mobile application development. Expertise in various programming languages and frameworks, with a focus on high-performance, scalable, and secure applications. Passionate about integrating decentralized technologies and optimizing system performance, with a proven track record of delivering robust, innovative solutions.'

export const skills: Skills = {
  languages: ['JavaScript', 'TypeScript', 'Node.js', 'PHP', 'MySQL'],
  frameworks: ['NestJS', 'Ionic', 'Flutter', 'React'],
  technologies: ['Blockchain', 'Smart Contracts', 'RESTful APIs', 'Docker'],
  tools: ['Git', 'CI/CD', 'AWS', 'Docker'],
  softSkills: ['Problem-solving', 'Collaboration', 'Communication', 'Team Leadership'],
}

export const experiences: Experience[] = [
  {
    company: 'OneTake.ai',
    role: 'Full Stack Engineer (AI Chat & LipSync)',
    from: 'Jan 2023',
    to: 'Mar 2024',
    bullets: [
      'Implemented AI chat with streaming responses and conversation memory.',
      'Built lip‑sync generation pipeline integrating TTS and video synthesis.',
      'Delivered end‑to‑end UX for prompts, generation status, and delivery.',
    ],
    tags: ['AI', 'Chat', 'LipSync', 'TTS', 'Node.js', 'React'],
    url: 'https://onetake.ai',
  },
  {
    company: 'Roadjockey.com',
    role: 'Backend Developer (NestJS)',
    from: 'Aug 2019',
    to: 'Present',
    bullets: [
      'Led backend development using NestJS to build scalable, high-performance applications.',
      'Developed and maintained RESTful APIs and third-party integrations.',
      'Collaborated with cross-functional teams to optimize architecture and UX.',
    ],
    tags: ['NestJS', 'Node.js', 'REST', 'PostgreSQL', 'AWS'],
    url: 'https://roadjockey.com',
  },
  {
    company: 'Flokifi',
    role: 'Smart Contract & Backend Developer',
    from: 'Aug 2022',
    to: 'Dec 2023',
    bullets: [
      'Developed and optimized smart contracts for blockchain-based projects.',
      'Integrated decentralized technologies into existing backends for seamless execution.',
      'Drove continuous testing and performance tuning for smart contract efficiency.',
    ],
    tags: ['Solidity', 'Smart Contracts', 'Web3', 'Node.js'],
    url: 'https://flokifi.com',
  },
  {
    company: 'Skyrus Token Exchange Platform',
    role: 'Hybrid Developer',
    from: 'Dec 2019',
    to: 'Oct 2020',
    bullets: [
      'Contributed to secure transaction processing and scalability of the exchange.',
      'Integrated blockchain technologies and optimized exchange functionalities.',
      'Ensured platform met user and security requirements across teams.',
    ],
    tags: ['Exchange', 'Blockchain', 'Security', 'Scalability'],
    url: 'https://skyrus.io',
  },
  {
    company: 'Azimuth1',
    role: 'Mobile App Developer – QuickRoute & LostPersonBehavior (Ionic, Flutter)',
    from: 'Oct 2018',
    to: 'Jan 2022',
    bullets: [
      'Developed cross-platform mobile apps with Ionic and Flutter.',
      'Delivered key features for navigation and behavior analysis apps.',
      'Optimized performance and ensured seamless user experience.',
    ],
    tags: ['Ionic', 'Flutter', 'Mobile', 'Performance'],
    url: 'https://azimuth1.com',
  },
  {
    company: 'Tokenmom Exchange',
    role: 'Backend Developer',
    from: 'Dec 2018',
    to: 'Jun 2019',
    bullets: [
      'Built robust backend features handling large-scale user data and transactions.',
      'Integrated cryptocurrency exchange functionality for efficient trade execution.',
      'Optimized system performance for secure, high-traffic operations.',
    ],
    tags: ['Node.js', 'Exchange', 'Performance', 'Security'],
    url: 'https://tokenmom.com',
  },
  {
    company: 'DoubleFactory.jp',
    role: 'Website Developer (Outsourcing Company)',
    from: 'Oct 2017',
    to: 'Aug 2024',
    bullets: [
      'Delivered custom web development solutions for diverse clients.',
      'Maintained performance and optimized for scalability and security.',
      'Worked across front-end and back-end to meet client needs.',
    ],
    tags: ['Web Development', 'Security', 'Scalability'],
    url: 'https://doublefactory.jp',
  },
  {
    company: 'Paktak.com.hk',
    role: 'Website Developer',
    from: 'Aug 2018',
    to: 'Sep 2018',
    bullets: [
      'Developed a modern, user-friendly website with responsive design.',
      'Optimized design and functionality for improved UX across devices.',
    ],
    tags: ['Responsive Design', 'Frontend'],
    url: 'https://paktak.com.hk',
  },
  {
    company: 'Spectrum4Med',
    role: 'WordPress Website Development & Management',
    from: 'Dec 2017',
    to: 'May 2023',
    bullets: [
      'Developed and maintained WordPress websites for healthcare clients.',
      'Implemented security best practices and performance optimization.',
      'Provided ongoing support and updates.',
    ],
    tags: ['WordPress', 'Security', 'Performance'],
    url: 'https://spectrum4med.com',
  },
  {
    company: 'Sendinblue (Brevo)',
    role: 'Technical Support for WordPress Plugin',
    from: 'Jan 2018',
    to: 'May 2019',
    bullets: [
      'Provided technical support for Sendinblue’s WordPress plugin.',
      'Assisted clients with integration and troubleshooting.',
      'Ensured smooth plugin operation and effective issue resolution.',
    ],
    tags: ['Support', 'WordPress', 'Integration'],
    url: 'https://www.brevo.com',
  },
  {
    company: 'Inshbay, Co., Ltd.',
    role: 'Android & iOS App Developer',
    from: 'Dec 2016',
    to: 'Jan 2018',
    bullets: [
      'Developed and maintained Android and iOS applications.',
      'Focused on UI/UX optimization and performance.',
      'Enhanced functionality for Merchant and User apps.',
    ],
    tags: ['Android', 'iOS', 'Mobile', 'UI/UX'],
    url: 'https://inshbay.com',
  },
  {
    company: 'Freelancer',
    role: 'Full Stack Developer',
    from: 'Dec 2015',
    to: 'Aug 2019',
    bullets: [
      'Delivered custom full-stack solutions across multiple industries.',
      'Built and maintained web applications with integrated frontends and backends.',
    ],
    url: 'https://freelancer.com',
    tags: ['Full Stack', 'Web'],
  },
]

export const education: Education[] = [
  {
    degree: "Bachelor's Degree in Computer Science",
    school: 'National University of Laos',
    year: '2014',
  },
]

export const spokenLanguages = ['English (Fluent)']

export const links = [
  { label: 'GitHub', url: 'https://github.com/shoppingsivil-alt' },
]


