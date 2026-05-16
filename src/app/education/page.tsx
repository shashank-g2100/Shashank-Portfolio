// src/app/education/page.tsx
import type { Metadata } from "next";
import { ExternalLink, GraduationCap } from "lucide-react";
import { education } from "@/data/education";
import styles from "./education.module.css";

export const metadata: Metadata = {
  title: "Education",
  description: "Academic background and qualifications.",
};

export default function EducationPage() {
  return (
    <section className="section" aria-labelledby="edu-heading">
      <div className="container">
        <header style={{ marginBottom: "var(--space-12)" }}>
          <p className={styles.label}>Academic Background</p>
          <h1 id="edu-heading" className={styles.pageTitle}>Education</h1>
          <div className="divider" />
        </header>

        <ol role="list" className={styles.timeline} aria-label="Education history">
          {education.map((entry, idx) => (
            <li key={entry.id} className={styles.entry}>
              {/* Timeline spine */}
              <div className={styles.spine} aria-hidden>
                <div className={styles.dot}>
                  <GraduationCap size={14} />
                </div>
                {idx < education.length - 1 && <div className={styles.line} />}
              </div>

              <article className={styles.card} aria-label={`${entry.degree} at ${entry.institution}`}>
                <div className={styles.cardHeader}>
                  <div>
                    <h2 className={styles.degree}>
                      {entry.degree} in {entry.field}
                    </h2>
                    <a
                      href={entry.institutionUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.institution}
                    >
                      {entry.institution}
                      <ExternalLink size={12} aria-hidden />
                    </a>
                  </div>
                  <div className={styles.dateBox}>
                    <span className={styles.dates}>
                      {entry.startYear} – {entry.endYear}
                    </span>
                    {entry.gpa && (
                      <span className={styles.gpa}>GPA {entry.gpa}</span>
                    )}
                  </div>
                </div>

                <p className={styles.location}>{entry.location}</p>

                <ul role="list" className={styles.highlights}>
                  {entry.highlights.map((h) => (
                    <li key={h} className={styles.highlight}>
                      <span aria-hidden>→</span>
                      {h}
                    </li>
                  ))}
                </ul>
              </article>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
