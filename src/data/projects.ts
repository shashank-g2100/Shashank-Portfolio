// src/data/projects.ts
export interface Project {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  longDescription: string;
  techStack: string[];
  liveUrl?: string;
  demoUrl?: string;
  githubUrl: string;
  featured: boolean;
  category: string;
  year: number;
  screenshots?: string[];
}

export const projects: Project[] = [
  {
    slug: "faresense-ai",
    title: "FareSense AI",
    tagline: "Uber Fare Prediction System",
    description: "A machine learning model to predict ride demand and fares using historical trip data.",
    longDescription: "FareSense AI is a comprehensive machine learning solution that predicts ride demand and fares using historical Uber trip data. The system performs data preprocessing, feature engineering, and visualization to identify peak demand patterns and trends. Built and evaluated models using Python with Pandas and Scikit-learn, presenting insights through interactive dashboards.\n\nThe model achieves improved demand forecasting accuracy by analyzing temporal patterns, location-based factors, and external variables.",
    techStack: ["Python", "Pandas", "Scikit-learn", "Matplotlib", "Seaborn", "Jupyter Notebook"],
    liveUrl: "https://faresense-ai.streamlit.app/",
    githubUrl: "https://github.com/shashank-g2100/FareSense-AI-Fare-Prediction",
    featured: true,
    category: "Machine Learning & AI",
    year: 2024,
  },
  {
    slug: "peopleiq",
    title: "PeopleIQ AI",
    tagline: "Employee Attrition Prediction System",
    description: "A predictive model to identify employees at risk of attrition using classification algorithms.",
    longDescription: "PeopleIQ is an employee retention analytics platform that uses machine learning to identify employees at risk of attrition. The system conducts comprehensive data analysis and feature selection to uncover key factors influencing employee turnover. Results are visualized through interactive Power BI and Tableau dashboards, enabling HR teams to take proactive retention measures.",
    techStack: ["Python", "Scikit-learn", "Power BI", "Tableau", "Classification", "Data Analysis"],
    liveUrl: "https://peopleiq-ai.streamlit.app/",
    githubUrl: "https://github.com/shashank-g2100/PeopleIQ-AI-Workforce-Intelligence",
    featured: true,
    category: "Machine Learning & AI",
    year: 2024,
  },
  {
    slug: "shieldscan",
    title: "ShieldScan",
    tagline: "AI Powered Android Malware Detection System",
    description: "A machine learning powered cybersecurity platform for detecting Android malware using permission-based analysis.",
    longDescription: "ShieldScan is an end-to-end AI cybersecurity project designed to classify Android applications as malware or benign using machine learning. The project evaluates multiple ML models including Logistic Regression, Decision Tree, Naive Bayes, and Random Forest, selecting the best-performing model for deployment. The backend is built with FastAPI and exposes real-time malware prediction APIs, while the frontend dashboard built with Next.js provides interactive visualizations, malware scanning, and downloadable security reports.",
    techStack: ["Python", "Scikit-learn", "FastAPI", "Next.js", "TypeScript", "Tailwind CSS", "ShadCN UI"],
    // liveUrl: "",
    githubUrl: "https://github.com/shashank-g2100/Android-Malware-Detection-using-Machine-Learning",
    featured: true,
    category: "Cybersecurity & AI",
    year: 2025,
  },
  {
    slug: "devvault",
    title: "DevVault",
    tagline: "Secure Password Manager for Developers",
    description: "A secure password manager specifically designed for developers to store SSH keys, API keys, and passwords.",
    longDescription: "DevVault is a full-stack secure credential management system built for developers. The backend uses AES encryption to securely store SSH keys, API keys, and passwords. The web interface, built with Next.js, provides advanced features including search functionality, intelligent tagging, and categorization for better organization. The application prioritizes security while maintaining ease of use.",
    // liveUrl: "https://devvault-secure.vercel.app",
    techStack: ["Next.js", "TypeScript", "AES Encryption", "React", "Tailwind CSS", "Node.js"],
    githubUrl: "https://github.com/shashank-g2100/DevVault",
    featured: true,
    category: "Security",
    year: 2024,
  },
  {
    slug: "github-user-analyzer",
    title: "GitHub User Profile Analyzer",
    tagline: "Analyze GitHub Profiles with Repository Insights",
    description: "A modern GitHub profile analysis tool that fetches repositories, commit activity, and public GitHub insights using the GitHub REST API.",
    longDescription: "GitHub User Profile Analyzer is a responsive developer analytics platform built with Next.js, TypeScript, and ShadCN UI. The application allows users to search GitHub usernames and instantly analyze their public repositories, coding activity, and commit history. It integrates GitHub REST APIs to fetch repository data and events, while Chart.js visualizes commit activity in interactive charts. The project focuses on clean UI design, responsive layouts, and real-time developer analytics.",
    liveUrl: "https://v0-github-user-analyzer-vqdrvj.vercel.app/",
    techStack: ["Next.js", "React", "TypeScript", "ShadCN UI", "Tailwind CSS", "GitHub REST API", "Chart.js"],
    githubUrl: "https://github.com/shashank-g2100/github-user-analyzer",
    featured: true,
    category: "Web Application",
    year: 2024,
  },
  {
    slug: "e-commerce",
    title: "E-Commerce Platform",
    tagline: "Modern Full-Stack Shopping Experience",
    description: "A responsive e-commerce platform with product filtering, cart management, and multi-step checkout functionality.",
    longDescription: "This E-Commerce Platform is a modern shopping web application built using Next.js 14 and TypeScript. The project includes advanced features such as category filtering, debounced product search, detailed product pages, real-time shopping cart updates, and a multi-step checkout flow. The application uses React Context API for cart state management and Tailwind CSS for a clean, responsive UI optimized for desktop and mobile devices.",
    liveUrl: "https://e-commerce-nine-gules-45.vercel.app/",
    techStack: ["Next.js 14", "TypeScript", "Tailwind CSS", "React Context API", "React Hook Form", "Lucide React"],
    githubUrl: "https://github.com/shashank-g2100/E-commerce",
    featured: true,
    category: "Full Stack",
    year: 2024,
  },
  {
    slug: "qr-code-generator",
    title: "QR Code Generator",
    tagline: "Generate Dynamic QR Codes Instantly",
    description: "A full-stack QR code generation application that converts text and URLs into downloadable QR codes.",
    longDescription: "QR Code Generator is a lightweight full-stack web application built using Next.js, Tailwind CSS, Node.js, and Express. The platform allows users to generate QR codes dynamically from text or URLs and download them instantly as images. The backend integrates the qrcode npm package to handle QR generation while the frontend provides a fully responsive and modern UI for a seamless user experience.",
    // liveUrl: "https://qr-code-generator.vercel.app",
    techStack: ["Next.js", "React", "Tailwind CSS", "Node.js", "Express.js", "QRCode NPM Package"],
    githubUrl: "https://github.com/shashank-g2100/QR_Code",
    featured: false,
    category: "Utility Tool",
    year: 2024,
  },
  {
    slug: "retail-sales-analysis",
    title: "Retail Sales Analysis SQL Project",
    tagline: "SQL-Based Retail Data Analytics System",
    description: "A SQL analytics project focused on retail sales analysis, customer insights, and business intelligence reporting.",
    longDescription: "Retail Sales Analysis is a data analytics project designed to demonstrate practical SQL skills for business intelligence and exploratory data analysis. The project involves database creation, data cleaning, customer analysis, sales trend analysis, profit evaluation, and category-based insights using advanced SQL queries. The system generates reports for sales summaries, customer demographics, and transaction trends, helping derive actionable business insights from retail datasets.",
    techStack: ["SQL", "PostgreSQL", "Data Analysis", "Business Intelligence", "EDA"],
    githubUrl: "https://github.com/shashank-g2100/Retail_Sales_Analysis",
    featured: false,
    category: "Data Analytics",
    year: 2025,
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured);
}

export const projectCategories = [...new Set(projects.map((p) => p.category))];
