// src/data/experience.ts
export interface ExperienceEntry {
  id: string;
  company: string;
  companyUrl: string;
  role: string;
  type: "Full-time" | "Contract" | "Internship";
  startDate: string;
  endDate: string | "Present";
  location: string;
  responsibilities: string[];
  techStack: string[];
}

export const experience: ExperienceEntry[] = [
  {
    id: "intern-infokalash",
    company: "Infokalash Private Limited",
    companyUrl: "https://infokalash.com",
    role: "Intern",
    type: "Internship",
    startDate: "Jan 2025",
    endDate: "Mar 2025",
    location: "Hubbali, Karnataka",
    responsibilities: [
      "Achieved 25% faster design iterations by creating reusable components and implementing a cohesive design system using Figma.",
      "Developed interactive prototypes and wireframes that streamlined communication with developers, reducing implementation time by 20%.",
      "Built responsive frontend components using HTML, CSS, React.js, Next.js and TypeScript to ensure seamless design-to-code transitions.",
    ],
    techStack: ["HTML", "CSS", "React.js", "Next.js", "TypeScript", "Figma"],
  },
];
