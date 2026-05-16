// src/app/experience/page.tsx
import type { Metadata } from "next";
import { Briefcase, ExternalLink } from "lucide-react";
import { experience } from "@/data/experience";
import styles from "./experience.module.css";

export const metadata: Metadata = {
  title: "Experience",
  description: "Professional work history and career experience.",
};

export default function ExperiencePage() {
  return (
    <section className="section" aria-labelledby="exp-heading">
      <div className="container">
        <header style={{ marginBottom: "var(--space-12)" }}>
          <p className={styles.label}>Career</p>
          <h1 id="exp-heading" className={styles.pageTitle}>Experience</h1>
          <div className="divider" />
        </header>

        <ol role="list" className={styles.timeline} aria-label="Work experience">
          {experience.map((entry, idx) => (
            <li key={entry.id} className={styles.entry}>
              <div className={styles.spine} aria-hidden>
                <div className={styles.dot}>
                  <Briefcase size={14} />
                </div>
                {idx < experience.length - 1 && <div className={styles.line} />}
              </div>

              <article
                className={styles.card}
                aria-label={`${entry.role} at ${entry.company}`}
              >
                <div className={styles.cardHeader}>
                  <div>
                    <h2 className={styles.role}>{entry.role}</h2>
                    <a
                      href={entry.companyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.company}
                    >
                      {entry.company}
                      <ExternalLink size={12} aria-hidden />
                    </a>
                  </div>
                  <div className={styles.metaRight}>
                    <span className={styles.dates}>
                      {entry.startDate} – {entry.endDate}
                    </span>
                    <span className="tag">{entry.type}</span>
                  </div>
                </div>

                <p className={styles.location}>{entry.location}</p>

                <ul
                  role="list"
                  className={styles.responsibilities}
                  aria-label="Responsibilities"
                >
                  {entry.responsibilities.map((r, i) => (
                    <li key={i} className={styles.resp}>
                      <span aria-hidden>→</span>
                      {r}
                    </li>
                  ))}
                </ul>

                <ul
                  role="list"
                  className={styles.stack}
                  aria-label="Technologies used"
                >
                  {entry.techStack.map((t) => (
                    <li key={t} className="tag">{t}</li>
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
