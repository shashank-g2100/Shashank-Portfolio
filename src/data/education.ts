// src/data/education.ts
export interface EducationEntry {
  id: string;
  degree: string;
  field: string;
  institution: string;
  institutionUrl: string;
  startYear: number;
  endYear: number | "Present";
  location: string;
  gpa?: string;
  highlights: string[];
}

export const education: EducationEntry[] = [
  {
    id: "mtech-cs",
    degree: "M.Tech",
    field: "Cyber Security",
    institution: "BMS Institute of Information Technology and Management",
    institutionUrl: "https://www.bmsit.ac.in",
    startYear: 2025,
    endYear: "Present",
    location: "Bangalore, India",
    highlights: [
      "Advanced cybersecurity and information security specialization",
      "Pursuing advanced certifications in security domains",
    ],
  },
  {
    id: "btech-cs",
    degree: "B.Tech",
    field: "Computer Science Engineering",
    institution: "Indian Institute of Information Technology, Dharwad",
    institutionUrl: "https://www.iiitdwd.ac.in",
    startYear: 2021,
    endYear: 2025,
    location: "Dharwad, India",
    highlights: [
      "Strong foundation in software development and design systems",
      "Experienced in frontend development with React and Next.js",
    ],
  },
];
