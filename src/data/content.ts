// ============================================================
//  CONTENT CONFIG — edit this file to update your portfolio
// ============================================================

export const personal = {
  name: "Preston Jackson",
  tagline: "CS Engineer · Data Scientist · ML Enthusiast",
  location: "San Diego, CA",
  email: "prestoj@umich.edu",
  phone: "(858) 382-5994",
  github: "https://github.com/PrestonJacks0n",
  linkedin: "https://linkedin.com/in/prestoj24",
  bio: `I'm a Computer Science & Engineering student at the University of Michigan (GPA 3.5, Class of 2026) with a Business minor, heading to UCLA Anderson for a Master's in Business Analytics in Fall 2026. I love building things at the intersection of machine learning, systems programming, and product — from training Vision Transformers to engineering low-latency C++ exchange simulators.`,
  bioShort:
    "CS Engineering student at U of M · Future UCLA Anderson MSBA · Building at the intersection of ML, systems, and product.",
};

export const education = [
  {
    school: "University of California, Los Angeles",
    degree: "Master of Science in Business Analytics",
    note: "Starting Fall 2026 · GMAT: 615",
    url: "https://www.anderson.ucla.edu/",
  },
  {
    school: "University of Michigan — Ann Arbor",
    degree: "Bachelor of Science in Engineering, Computer Science",
    note: "GPA: 3.5 · Class of 2026 · Business Minor",
    url: "https://umich.edu/",
    courses: [
      "Intro to ML",
      "Intro to AI",
      "Data Structures & Algorithms",
      "Web Systems / Development",
      "Search Engine Design",
      "Linear Algebra",
      "Statistics",
      "Applied Data Science",
      "Operations",
      "Advanced Analytics",
      "Strategy & Leadership",
    ],
  },
];

export const experience = [
  {
    company: "Ajinomoto Foods North America",
    role: "Data Acquisition / Computer Science Intern",
    period: "Jun 2025 – Aug 2025",
    bullets: [
      "Reworked plant efficiency reporting by enhancing Excel-based data pipelines.",
      "Engineered an Outlook VBA automation that boosted recipient capacity 30×.",
      "Optimized centerlining data entry, bringing the SD team to first completion among all U.S. plants.",
    ],
  },
  {
    company: "Silicon Beach Software",
    role: "Machine Learning Intern",
    period: "May 2024 – Aug 2024",
    bullets: [
      "Completed DeepLearning.AI's Machine Learning Specialization Course 1.",
      "Consulted with a startup founder to enhance an AI Rocket League coach, focusing on random forest models.",
    ],
  },
  {
    company: "Chipotle",
    role: "Associate",
    period: "Sep 2024 – May 2025",
    bullets: [
      "Food Preparation, Cashier, and Customer Service in a high-volume environment.",
    ],
  },
];

export const projects = [
  {
    title: "Power Outages Analysis",
    description:
      "EECS 398 Final Project — in-depth exploratory analysis of U.S. power outage data, surfacing patterns in cause, geography, and duration through interactive visualizations.",
    tags: ["Python", "Pandas", "Data Analysis", "HTML"],
    github: "https://github.com/PrestonJacks0n/power-outages-analysis",
    live: "https://prestonjacks0n.github.io/power-outages-analysis/",
  },
  {
    title: "Stock Market Simulation",
    description:
      "High-performance C++ exchange simulator that matches buy/sell orders using price-time priority. Features custom binary and pairing heap priority queues for O(log n) operations and handles large datasets with deterministic, low-latency execution.",
    tags: ["C++", "Data Structures", "Algorithms", "Systems"],
    github: "https://github.com/PrestonJacks0n/StockMarketSimulation",
  },
  {
    title: "Dog Images Classifier",
    description:
      "Deep learning pipeline for dog breed classification using PyTorch. Implements CNNs, transfer learning with selective layer freezing, Vision Transformers with multi-head attention, and MLP heads.",
    tags: ["Python", "PyTorch", "CNN", "Vision Transformers", "ML"],
    github: "https://github.com/PrestonJacks0n/Dog-Images-Classifier",
  },
  {
    title: "Slopathon Challenge",
    description:
      "Won the marketing section of the Slopathon hackathon in San Diego. Built a full website under tight time constraints using TypeScript.",
    tags: ["TypeScript", "Next.js", "Hackathon"],
    github: "https://github.com/PrestonJacks0n/Slopathon-Challenge",
  },
];

export const skills = {
  Languages: ["Python", "C++", "C", "R", "SQL", "JavaScript", "HTML/CSS", "Bash"],
  "Frameworks & Libraries": [
    "PyTorch",
    "TensorFlow",
    "Scikit-learn",
    "NumPy",
    "Pandas",
    "Django",
    "FastAPI",
    "React",
  ],
  "Tools & Cloud": [
    "AWS (EC2)",
    "Git / GitHub",
    "Linux / Unix",
    "Excel (VBA)",
    "LaTeX",
    "Jupyter Notebooks",
    "VS Code",
  ],
  "Developer Workflow": [
    "Jira",
    "Confluence",
    "Unit Testing",
    "RESTful APIs",
    "Agile / Scrum",
  ],
};

export const leadership = [
  {
    role: "Vice President — Indoor Men's Volleyball Club Team",
    org: "University of Michigan",
    period: "2026",
    bullets: [
      "Managed a $45,000 budget and all travel logistics.",
      "Fundraised over $6,000 for the club.",
    ],
  },
  {
    role: "Medical Mission Trip Volunteer",
    org: "Natuvu Creek Mission, Fiji",
    period: "July 2024",
    bullets: [
      "Served two weeks as a pharmacist and P.E. volleyball coach.",
    ],
  },
];
