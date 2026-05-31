// ============================================================
//  CONTENT CONFIG — edit this file to update your portfolio
// ============================================================

export const personal = {
  name: "Preston Jackson",
  tagline: "CS Engineer · Data Scientist · AI Enthusiast",
  location: "San Diego, CA",
  email: "prestoj@umich.edu",
  phone: "(858) 382-5994",
  github: "https://github.com/PrestonJacks0n",
  linkedin: "https://linkedin.com/in/prestoj24",
  bio: `I am a recent graduate from the University of Michigan with a Bachelor of Science in Engineering in Computer Science (Class of 2026, GPA 3.5). I also completed all courses for the Ross Business Minor at Michigan. Next Fall, I am heading to UCLA Anderson for a Master's in Business Analytics. I love building things and operate at the intersection of business and technology. Feel free to check out my website to learn all about me. Lastly, please reach out if you have any questions about me or want to get in touch so we can build the next big thing together!`,
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

export const lab = [
  {
    slug: "padres-tv",
    title: "Padres TV Automation",
    status: "Live",
    summary:
      "End-to-end home automation that turns on the TV, navigates to the live Padres game, and powers off after the final out — fully scheduled around the MLB season.",
    tags: ["Python", "SmartThings API", "MLB Stats API", "WebSocket", "Windows Task Scheduler"],
    hasDiagram: true,
    sections: [
      {
        heading: "What it does",
        body: "Built to get the most out of a Padres.TV subscription and make sure no game is ever missed. The system handles everything from pre-game power-on to post-game shutdown — no remotes, no manual setup.",
      },
      {
        heading: "Scheduling",
        body: "schedule_games.py pulls the full Padres season schedule from the MLB Stats API and generates a Windows Task Scheduler entry for every remaining game, each firing 10 minutes before first pitch. Re-run it monthly to pick up any schedule changes.",
      },
      {
        heading: "Game start",
        body: "padres_tv.py fires via wsl.exe. First checks SmartThings to see if the TV is already on — if so, does nothing. If off, sends a power-on command via SmartThings, waits 10 seconds for boot, then connects via WebSocket (port 8002, saved auth token) and runs a key sequence: Home → right 5× to MLB app → open → select Padres game → fast-forward to live.",
      },
      {
        heading: "Game end",
        body: "After 3 hours it starts polling the MLB Stats API every 10 minutes for abstractGameState: Final. Once the game ends, it waits a 60-minute buffer (in case you're paused behind live), then sends a SmartThings power-off — skipping it if the TV is already off.",
      },
      {
        heading: "Fallback",
        body: "If you're away from home and the local WebSocket fails, SmartThings handles power on/off through Samsung's cloud — so the schedule still gets honored remotely.",
      },
      {
        heading: "Files",
        body: "padres_tv.py (core logic) · schedule_games.py (season scheduler) · padres_tv_config.json (all settings: nav key sequence, MAC address, SmartThings device ID) · schedule_setup.bat (Windows setup runner).",
      },
    ],
  },
  {
    slug: "printer-automation",
    title: "Printer Automation",
    status: "Live",
    summary:
      "Monthly automation that monitors HP Smart print usage, upgrades the plan tier only when needed, then immediately resets — so the family only pays more in months they actually print a lot.",
    tags: ["Python", "Automation", "HP Smart API", "Web Scraping"],
    hasDiagram: false,
    sections: [
      {
        heading: "What it does",
        body: "Logs into the HP Smart portal, checks current print usage for the billing cycle, and calculates pages printed relative to the base 10-page plan plus any rollover. Based on that, it decides whether a plan upgrade is needed for the current month.",
      },
      {
        heading: "Smart upgrade logic",
        body: "If an upgrade is warranted, it bumps the plan to the appropriate tier (25, 50, 100, 300, 500, 700, or 1000 pages), then immediately resets back to the 10-page base plan for next month — so the bump is surgical and one-time.",
      },
      {
        heading: "Reporting",
        body: "After each run it reports what it found, the page calculation, and what action was taken. With notifyOnCompletion enabled, a notification fires when the monthly check completes.",
      },
      {
        heading: "Real-world impact",
        body: "This automation is actively saving my family money — we only pay for higher tiers in months we actually need them, instead of staying on an oversized plan year-round.",
      },
    ],
  },
];

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
