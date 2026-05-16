import type { Metadata } from "next";
import CertificatesClient from "./CertificatesClient";
import styles from "./certificates.module.css";

export const metadata: Metadata = {
  title: "Certifications | Shashank G",
  description:
    "Hackathons, certifications, workshops, and achievements of Shashank G.",
};

export default function CertificatesPage() {
  return (
    <main className={styles.page}>
      <section className="section">
        <div className="container">
          <div className={styles.hero}>
            <p className={styles.label}>Achievements & Learning</p>

            <h1 className={styles.title}>
              Certifications
              <br />
              & Achievements
            </h1>

            <p className={styles.subtitle}>
              A curated collection of hackathons, technical certifications,
              workshops, and professional learning experiences in AI,
              cybersecurity, frontend engineering, and full-stack development.
            </p>
          </div>
          <CertificatesClient />
        </div>
      </section>
    </main>
  );
}