// Real content sourced from Bryan Lopez Rosales' resume.
// Add more projects to the `projects` array as the portfolio grows.

export const profile = {
  name: 'Bryan Lopez Rosales',
  wordmark: 'BRYAN LOPEZ',
  title: 'Computer Science Student & Full-Stack Developer',
  tagline: ['Crafting full-stack systems', 'with rigorous', 'engineering.'],
  intro:
    'Computer Science student at Utah Tech University building full-stack web applications and machine learning systems. I care about clean data modeling, secure authentication, and interfaces that stay out of the way.',
  shortBio:
    'Currently studying Computer Science at Utah Tech University and working as an IT Help Desk Technician supporting 5,000+ users. Honors student focused on full-stack engineering and applied machine learning.',
  location: 'St. George, UT',
  email: 'brainalexis119@gmail.com',
  phone: '(435) 272-6058',
  links: {
    github: 'https://github.com/boomypig',
    linkedin: 'https://www.linkedin.com/in/bryan-lopez-rosales/',
    email: 'mailto:brainalexis119@gmail.com',
  },
}

export const stats = [
  { value: '3+', label: 'Projects Shipped' },
  { value: '5,000+', label: 'Users Supported' },
  { value: '2026', label: 'Expected Graduation' },
]

export const projects = [
  {
    slug: 'sec-form-4-tracker',
    category: 'Full-Stack · Fintech',
    title: 'SEC Form-4 Insider Trading Tracker',
    period: "Jan '26 — May '26",
    summary:
      'A React + TypeScript platform that surfaces insider buy/sell activity from SEC Form-4 filings with custom SVG data visualizations.',
    description:
      'Built a React + TypeScript frontend with HttpOnly cookie JWT authentication and hand-built SVG charts for visualizing insider buy/sell activity. Designed a normalized PostgreSQL schema with foreign key relationships across companies, filings, and transactions, and implemented RESTful endpoints with controller/service separation for modularity and scalability. Added filing persistence and update-check logic to cut redundant external API requests.',
    stack: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'REST API'],
  },
  {
    slug: 'spotify-recommender',
    category: 'Machine Learning',
    title: 'Spotify Song Recommendation System',
    period: "Jan '26 — Apr '26",
    summary:
      'A modular ML pipeline classifying ~30,000 Spotify track records with regularized logistic regression and rigorous evaluation.',
    description:
      'Built a modular machine learning pipeline processing roughly 30,000 Spotify track records, covering preprocessing, feature scaling, and model training. Applied L2-regularized logistic regression with cross-validation and hyperparameter tuning, then evaluated with precision, recall, ROC-AUC, and confusion matrices to analyze classification tradeoffs. Enforced strict train/validation/test separation to prevent data leakage and ensure generalization.',
    stack: ['Python', 'scikit-learn', 'pandas', 'NumPy'],
  },
  {
    slug: 'disclist',
    category: 'Full-Stack · Web App',
    title: 'Disclist Music Management Web App',
    period: "Jan '25 — Mar '25",
    summary:
      'A full-stack CRUD app for managing music collections, with secure session auth and AWS S3-backed media storage.',
    description:
      'Developed a full-stack CRUD application with secure authentication and persistent storage. Implemented session-based authentication using bcrypt password hashing and route-level middleware protection, and designed a REST API layer for album search, collection management, and admin database tools. Integrated AWS S3 for scalable media storage and dynamic asset retrieval, with a responsive frontend driven by dynamic filtering and state-driven UI updates.',
    stack: ['Node.js', 'Express', 'REST API', 'AWS S3', 'bcrypt'],
  },
]

export const experience = [
  {
    role: 'IT Help Desk Technician',
    org: 'Utah Tech University',
    location: 'St. George, UT',
    period: "Aug '24 — Present",
    points: [
      'Provided technical support for 5,000+ students, staff, and faculty across Windows, macOS, and mobile platforms.',
      'Diagnosed and resolved software, hardware, and network issues including Canvas, authentication, printing, and wireless connectivity.',
      'Delivered structured troubleshooting guidance, improving resolution efficiency and reducing repeat support requests.',
    ],
    tags: ['Windows', 'macOS', 'Networking'],
  },
  {
    role: 'B.S. Computer Science',
    org: 'Utah Tech University',
    location: 'St. George, UT',
    period: "Aug '22 — May '26",
    points: [
      "President's List: Spring 2024, Fall 2024, Spring 2026. Dean's List: Fall 2022, Fall 2023, Spring 2025, Fall 2025.",
      'Relevant coursework: Data Structures & Algorithms, Database Systems, Computer Networks, Machine Learning, Graphics Programming, Web Application Development I/II.',
    ],
    tags: ['Algorithms', 'Databases', 'Machine Learning'],
  },
  {
    role: 'Code School — Web Development',
    org: 'Utah Tech University',
    location: 'St. George, UT',
    period: "Jun '24 — Aug '24",
    points: [
      'Completed an intensive development program focused on modern JavaScript, Vue.js, and Vuetify.',
      'Built responsive web applications using a component-based architecture.',
    ],
    tags: ['JavaScript', 'Vue.js', 'Vuetify'],
  },
]

export const arsenal = [
  {
    title: 'Core Languages',
    blurb: 'The foundational syntax that powers the logic and structure of my applications.',
    items: ['Python', 'JavaScript', 'TypeScript', 'C++'],
  },
  {
    title: 'Frontend',
    blurb: 'Architecting interactive and performant user interfaces.',
    items: ['React', 'Vue.js', 'Vuetify', 'Tailwind CSS', 'HTML / CSS'],
  },
  {
    title: 'Backend & Data',
    blurb: 'Structuring data, building APIs, and training models.',
    items: ['Node.js', 'Express', 'PostgreSQL', 'MongoDB', 'AWS S3', 'scikit-learn'],
  },
]

export const nav = [
  { label: 'Work', to: '/work' },
  { label: 'Expertise', to: '/expertise' },
  { label: 'About', to: '/' },
  { label: 'Contact', to: '/contact' },
]
