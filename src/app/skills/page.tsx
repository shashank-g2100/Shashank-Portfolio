// src/app/skills/page.tsx
import type { Metadata } from "next";
import { Code2, Layers, Wrench, BrainCircuit, BarChart3 } from "lucide-react";
import { skillGroups } from "@/data/skills";
import styles from "./skills.module.css";

export const metadata: Metadata = {
  title: "Skills",
  description: "Technical skills and proficiency levels.",
};

const IconMap: Record<string, React.ElementType> = {
  Code2,
  Layers,
  Wrench,
  BrainCircuit,
  BarChart3,
};

export default function SkillsPage() {
  return (
    <section className="section" aria-labelledby="skills-heading">
      <div className="container">
        <header style={{ marginBottom: "var(--space-12)" }}>
          <p className={styles.label}>Capabilities</p>
          <h1 id="skills-heading" className={styles.pageTitle}>Skills</h1>
          <div className="divider" />
          <p className={styles.intro}>
            Proficiency levels reflect depth of real-world production use, not just familiarity.
          </p>
        </header>

        <div className={styles.grid} role="list">
          {skillGroups.map((group) => {
            const Icon = IconMap[group.icon] ?? Code2;
            return (
              <div
                key={group.category}
                className={styles.card}
                role="listitem"
                aria-label={`${group.category} skills`}
              >
                <div className={styles.cardHeader}>
                  <div className={styles.iconWrap} aria-hidden>
                    <Icon size={18} />
                  </div>
                  <h2 className={styles.category}>{group.category}</h2>
                </div>

                <ul role="list" className={styles.skillList}>
                  {group.skills.map((skill) => (
                    <li key={skill.name} className={styles.skill}>
                      <div className={styles.skillTop}>
                        <span className={styles.skillName}>{skill.name}</span>
                        <span
                          className={styles.skillPct}
                          aria-label={`${skill.proficiency}% proficiency`}
                        >
                          {/* {skill.proficiency}% */}
                        </span>
                      </div>
                      {/* <div
                        className={styles.bar}
                        role="progressbar"
                        aria-valuenow={skill.proficiency}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        aria-label={`${skill.name}: ${skill.proficiency}% proficiency`}
                      >
                        <div
                          className={styles.barFill}
                          style={{ width: `${skill.proficiency}%` }}
                        />
                      </div> */}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
