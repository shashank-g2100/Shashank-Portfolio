// src/data/certificates.ts

export type CertCategory =
  | "hackathon"
  | "course"
  | "workshop"
  | "participation"
  | "achievement";

export type PrizeLevel = "gold" | "silver" | "bronze" | "winner" | null;

export interface Certificate {
  id: string;                  // slug, e.g. "smart-india-hackathon-2024"
  title: string;               // "Smart India Hackathon 2024 — Finalist"
  issuer: string;              // "Ministry of Education, Govt. of India"
  issuerLogoUrl?: string;      // optional issuer logo
  category: CertCategory;
  prizeLevel?: PrizeLevel;     // only for hackathons
  date: string;                // "2024-09" (YYYY-MM for sorting)
  dateDisplay: string;         // "September 2024" (human-readable)
  description: string;         // 1–2 sentences of what you did/won
  detailedDescription?: string; // optional detailed description for modal
  skills: string[];            // ["Team Leadership", "ML", "React"]
  thumbnailUrl?: string;       // "/certificates/sih-2024.jpg"
  credentialUrl?: string;      // direct link to verify online
  credentialId?: string;       // "UC-abc123xyz" (Udemy-style IDs)
  verifyUrl?: string;          // alternative verification URL
  pdfUrl?: string;             // "/certificates/sih-2024.pdf"
  featured: boolean;           // show on home/about page
  certificateImage?: string; // optional high-res image of the certificate itself
}

export const certificates: Certificate[] = [
  // ── Hackathons ────────────────────────────────────
  {
    id: "triverse-hackathon-2026",
    title: "Triverse Hackathon 2026",
    issuer: "BMS Institute of Technology & Management",
    category: "hackathon",
    prizeLevel: "gold",

    date: "2026-04",
    dateDisplay: "April 2026",

    // SHORT DESCRIPTION (CARD)
    description:
      "Won 1st prize by building an Intelligent Reconnaissance and Cybersecurity Attack Surface Management platform for reconnaissance, threat detection, and exposure analysis during an 8-hour hackathon.",

    // FULL DESCRIPTION (MODAL)
    detailedDescription:
      "Developed Intelligent Reconnaissance and  Attack Surface Management (ASM) platform designed to help organizations discover and monitor internet-facing assets before attackers exploit them. The platform combined passive and active reconnaissance techniques including subdomain enumeration, technology fingerprinting, vulnerability detection, credential leak discovery, and risk prioritization. Integrated tools such as FastAPI, React, MongoDB, Elasticsearch, Nmap, Nuclei, Shodan, and Docker to create a real-time cybersecurity monitoring solution capable of identifying exposed services, leaked credentials, shadow IT assets, and attack surface risks.",

    skills: [
      "Cybersecurity",
      "Threat Detection",
      "Network Security",
      "OSINT",
      "Attack Surface Management",
      "Vulnerability Assessment",
      "FastAPI",
      "React",
      "MongoDB",
      "Elasticsearch",
      "Nmap",
      "Nuclei",
      "Docker",
      "Risk Analysis",
    ],


    // CARD THUMBNAIL IMAGE
    thumbnailUrl: "/posters/Triverse.png",

    // FULL CERTIFICATE IMAGE
    certificateImage: "/certificates/certificate.png",

    featured: true,
  },
  {
    id: "incseption-hackathon-2026",
    title: "InCSEption 2.0 Hackathon",
    issuer: "BMS Institute of Technology & Management",
    category: "hackathon",
    prizeLevel: "bronze",
    date: "2026-04",
    dateDisplay: "April 2026",

    // SHORT DESCRIPTION FOR CARD
    description:
      "Won 3rd prize in the cybersecurity domain by building CyberShield — a cyber awareness and attack simulation platform focused on phishing and social engineering training.",

    // FULL DESCRIPTION FOR MODAL
    detailedDescription: `
    CyberShield is a full-stack cybersecurity awareness and attack simulation platform developed during the 8-hour IncSEption 2.0 Hackathon at BMS Institute of Technology & Management.

    The platform was designed to educate users about real-world cyber threats such as phishing attacks, fake login pages, and social engineering scenarios through interactive simulations. It provides hands-on cybersecurity awareness training by allowing users to experience simulated attacks in a safe environment and learn secure decision-making practices.

    The project includes role-based dashboards for users and administrators, detailed analytics, simulation scoring systems, progress tracking, leaderboard functionality, and real-time feedback mechanisms to measure awareness improvement over time.

    Built using React, Node.js, Express, PostgreSQL, JWT Authentication, TailwindCSS, and Recharts, CyberShield follows a production-ready full-stack architecture with secure REST APIs, authentication middleware, and scalable database design.

    The project focused on solving the growing issue of human vulnerability in cybersecurity by replacing traditional awareness presentations with interactive threat simulations and behavioral learning experiences.
      `,

    skills: [
      "Cybersecurity",
      "Phishing Detection",
      "Social Engineering",
      "React",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "JWT Authentication",
      "REST API",
      "Threat Simulation",
    ],

    // CARD IMAGE / POSTER
    thumbnailUrl: "/posters/Incseption.png",

    // CERTIFICATE IMAGE
    certificateImage: "/certificates/Incseption Certificate.jpeg",

    featured: true,
  },
  {
    id: "cybertrace-ctf-2026",
    title: "CyberTrace 2026",
    issuer: "Department of ISE, BMS Institute of Technology & Management",
    category: "hackathon",
    prizeLevel: "silver",

    date: "2026-01",
    dateDisplay: "January 2026",

    description:
      "Secured 2nd place in CyberTrace 2026, a Jeopardy-style Capture The Flag (CTF) competition focused on cybersecurity investigation, cryptography, and digital forensics.",

    detailedDescription:
      "Participated in CyberTrace 2026, an elite Jeopardy-style Capture The Flag (CTF) competition organized by the Department of Information Science & Engineering at BMS Institute of Technology & Management. Competed in multiple cybersecurity challenge categories including OSINT, cryptography, steganography, and web security. Successfully secured 2nd place by solving complex investigative tasks, decoding encrypted flags, analyzing hidden digital artifacts, and demonstrating strong analytical thinking and problem-solving skills under competitive time constraints.",

    skills: [
      "Cybersecurity",
      "Capture The Flag",
      "OSINT",
      "Cryptography",
      "Steganography",
      "Digital Forensics",
      "Web Security",
      "Problem Solving",
    ],

    // CARD POSTER IMAGE
    thumbnailUrl: "/posters/CyberTrace.png",

    // FULL CERTIFICATE IMAGE
    certificateImage: "/certificates/CTF Certificate.png",

    featured: true,
  },
  // ── Courses ───────────────────────────────────────
  {
    id: "upgrad-data-science-ai-ml",
    title: "Advanced Data Science & AI-ML",
    issuer: "upGrad",
    category: "course",

    date: "2025-05",
    dateDisplay: "May 2025",

    // SHORT DESCRIPTION FOR CARD
    description:
      "Successfully completed an industry-focused Gen AI Powered Data Science & AI-ML program covering machine learning, deep learning, data analytics, visualization, and AI application deployment.",

    // FULL DESCRIPTION FOR MODAL
    detailedDescription: `
      Completed the Advanced Certificate Programme in Data Science & AI-ML by upGrad, focused on real-world data science, machine learning.

      The program included hands-on training in Python programming, SQL, Power BI, Tableau, statistics, probability, machine learning.

      Worked on multiple industry-level projects including demand forecasting, credit risk analysis, Uber trip demand prediction, Airbnb analytics, stock market analysis.

      Built and deployed scalable AI/ML applications using Streamlit.

      The curriculum also covered real-world datasets and case studies.
        `,

    skills: [
      "Python",
      "Machine Learning",
      "Data Science",
      "SQL",
      "Power BI",
      "Tableau",
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "Streamlit",
      "Data Visualization",
    ],

    // CARD IMAGE
    thumbnailUrl: "/posters/Upgrad.png",

    // CERTIFICATE IMAGE
    certificateImage: "/certificates/certificate.png",
    credentialId: "a38df58a-d856-42a4-8311-02776b0dcbb2",
    credentialUrl:"https://upgrad.verification.givemycertificate.com/v/a38df58a-d856-42a4-8311-02776b0dcbb2",
    featured: true,
  },
  // ── Workshops ─────────────────────────────────────
  {
    id: "be10x-ai-tools-workshop-2026",
    title: "AI Tools & ChatGPT Workshop",
    issuer: "be10X",
    category: "workshop",
    prizeLevel: null,
    date: "2026-04",
    dateDisplay: "April 2026",

    description:
      "Successfully completed the be10X AI Tools & ChatGPT Workshop focused on productivity, AI-assisted workflows, and rapid content creation.",

    detailedDescription:
      "Completed the be10X AI Tools & ChatGPT Workshop designed to enhance productivity using modern AI tools and generative AI platforms. Learned practical applications of ChatGPT and AI-powered workflows for presentation creation, data analysis, coding assistance, debugging, and task automation. Explored techniques to improve efficiency and accelerate problem-solving using AI-driven solutions in real-world scenarios.",

    skills: [
      "ChatGPT",
      "AI Tools",
      "Data Analysis",
      "Generative AI",
      "Prompt Engineering",
      "Generative AI",
      "AI Productivity",
      "Presentation Automation",
      "Data Analysis",
      "Code Debugging",
    ],

    credentialId: "0270772f-3809-4400-b29b-1e1c61cd09971218370",

    // CARD POSTER IMAGE
    thumbnailUrl: "/posters/be10x.png",

    // FULL CERTIFICATE IMAGE
    certificateImage: "/certificates/be10x-certificate.png",
    credentialUrl: "https://certx.in/certificate/0270772f-3809-4400-b29b-1e1c61cd09971218370",

    featured: true,
  },
  // ── Participation ─────────────────────────────────
  {
    id: "spark-trail-2-0-2026",
    title: "Spark Trail 2.0 — Aurora Achiever",
    issuer: "IEEE Photonics Society & IEEE Bangalore Section",
    category: "participation",
    prizeLevel: null,
    date: "2026-05",
    dateDisplay: "May 2026",

    description:
      "Participated in Spark Trail 2.0, a cybersecurity-themed treasure hunt and CTF challenge focused on problem-solving, cryptography, and digital investigation.",

    detailedDescription:
      "Participated in Spark Trail 2.0 — 'Chase The Light Thief', an IEEE-organized cybersecurity treasure hunt and Capture The Flag (CTF) event. Worked on solving multi-stage challenges involving cryptography, cybersecurity concepts, digital investigation, and analytical problem solving. Collaborated with team members to decode clues, analyze security-based scenarios, and complete challenges within the competition timeline.",

    skills: [
      "Cybersecurity",
      "CTF",
      "Cryptography",
      "Digital Forensics",
      "Problem Solving",
      "Team Collaboration",
    ],

    // CARD POSTER IMAGE
    thumbnailUrl: "/posters/Spark Trail.png",

    // FULL CERTIFICATE IMAGE
    certificateImage: "/certificates/Spark-Trail-Certificate.jpg",

    featured: true,
  },
  // ── Achievement ─────────────────────────────────
  {
    id: "uber-upgrad-mentorship-2025",
    title: "UpGrad Mentorship Program",
    issuer: "Uber, upGrad & MentorMind",
    category: "achievement",
    prizeLevel: null,
    date: "2025-12",
    dateDisplay: "December 2025",

    description:
      "Successfully completed an industry mentorship program focused on regression analysis and predictive modeling using real-world ride fare datasets.",

    detailedDescription:
      "Completed the Uber x upGrad mentorship program organized in collaboration with MentorMind. Worked on a real-world machine learning use case involving fare prediction for future rides using regression analysis techniques. Gained hands-on experience in data preprocessing, exploratory data analysis, feature engineering, model building, and predictive analytics while learning from industry mentors and project-driven sessions.",

    skills: [
      "Python",
      "Data Science",
      "Scikit-learn",
      "Machine Learning",
      "Regression Analysis",
      "Predictive Modeling",
      "Pandas",
      "Scikit-learn",
      "Data Visualization",
    ],

    // CARD POSTER IMAGE
    thumbnailUrl: "/posters/Mentormind.png",

    // FULL CERTIFICATE IMAGE
    certificateImage: "/certificates/Uber-Certificate.png",

    featured: true,
  },
];

// Helper: featured only
export const getFeaturedCertificates = () =>
  certificates.filter((c) => c.featured);

// Helper: by category
export const getCertificatesByCategory = (cat: CertCategory) =>
  certificates.filter((c) => c.category === cat);