// src/data/skills.ts
export interface Skill {
  name: string;
  proficiency: number; // 0–100
}

export interface SkillGroup {
  category: string;
  icon: string;
  skills: Skill[];
}

export const skillGroups: SkillGroup[] = [
  {
    category: "Programming Languages",
    icon: "Code2",
    skills: [
      { name: "Python", proficiency: 90 },
      { name: "TypeScript", proficiency: 92 },
      { name: "SQL", proficiency: 88 },
      { name: "HTML", proficiency: 95 },
      { name: "CSS", proficiency: 95 },
    ],
  },
  {
    category: "Frameworks & Technologies",
    icon: "Layers",
    skills: [
      { name: "React.js", proficiency: 95 },
      { name: "Next.js", proficiency: 95 },
      { name: "FastAPI", proficiency: 85 },
      { name: "Tailwind CSS", proficiency: 90 },
    ],
  },
  {
    category: "Tools & Platforms",
    icon: "Wrench",
    skills: [
      { name: "GitHub", proficiency: 90 },
      { name: "Docker", proficiency: 85 },
      { name: "Figma", proficiency: 88 },
      { name: "Microsoft Excel", proficiency: 80 },
      { name: "Jupyter Notebook", proficiency: 85 },
    ],
  },
  {
    category: "Machine Learning & AI",
    icon: "BrainCircuit",
    skills: [
      { name: "Scikit-learn", proficiency: 85 },
      { name: "Regression", proficiency: 85 },
      { name: "Classification", proficiency: 85 },
      { name: "Model Evaluation", proficiency: 80 },
    ],
  },
  {
    category: "Data Visualization",
    icon: "BarChart3",
    skills: [
      { name: "Matplotlib", proficiency: 85 },
      { name: "Seaborn", proficiency: 85 },
      { name: "Power BI", proficiency: 80 },
      { name: "Tableau", proficiency: 80 },
    ],
  },
];
