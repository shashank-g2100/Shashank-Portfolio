// src/app/about/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { Download, ArrowRight } from "lucide-react";
import styles from "./about.module.css";

export const metadata: Metadata = {
  title: "About",
  description: "Background, values, and a bit about who I am.",
};

const VALUES = [
  { title: "Cyber Security", body: "I am building a strong focus in security-first systems through my M.Tech studies at BMSIT." },
  { title: "Data Analytics", body: "I enjoy turning raw data into practical insights using analysis, visualization, and regression models." },
  { title: "Frontend Delivery", body: "I build responsive interfaces with React.js, Next.js and TypeScript using clean, scalable code." },
  { title: "Opportunity Ready", body: "I am open to new professional opportunities in cyber security, backend, and AI roles." },
];

const FUN_FACTS = [
  "3x Hackathon winner",
  "Built multiple ML models for real-world problems",
  "Love creating interactive data visualizations",
  "Exploring cybersecurity through my M.Tech studies",
];

const CERTIFICATIONS = [
  "Advanced Certificate in Data Science and AI-ML by Upgrad",
  "Predict the Fare Amount of Future Rides using Regression Analysis by Uber (via Upgrad)",
];

export default function AboutPage() {
  return (
    <section className="section" aria-labelledby="about-heading">
      <div className="container">
        <div className={styles.layout}>
          {/* Main content */}
          <div className={styles.content}>
            <p className={styles.label}>About me</p>
            <h1 id="about-heading" className={styles.pageTitle}>
              Cyber security,<br />data and full-stack systems.
            </h1>
            <div className="divider" />

            <div className={styles.bio}>
              <p>
                I&apos;m Shashank G, a full-stack developer and machine learning enthusiast based in Bengaluru, India.
                I specialize in creating responsive web applications with React and Next.js, building machine learning
                models for real-world problems, and designing cohesive design systems.
              </p>
              <p>
                During my internship at Infokalash Private Limited, I worked as a User Interface Designer, building reusable UI components, responsive web
                applications, and Figma-based wireframes to improve development efficiency and built responsive frontend components using
                modern web technologies. I&apos;m currently pursuing my M.Tech in Cyber Security from BMS Institute
                with a B.Tech graduate in Computer Science Engineering from IIIT Dharwad.
              </p>
              <p>
                I&apos;m passionate about the intersection of design, development, and data science. Whether it&apos;s
                building engaging user interfaces, optimizing machine learning models, or visualizing complex data,
                I approach every project with attention to detail and a commitment to creating impactful solutions.
              </p>
            </div>

            <div className={styles.actions}>
              <a href="/resume.pdf" download className={styles.btnPrimary}>
                <Download size={16} aria-hidden />
                Download Résumé
              </a>
              <Link href="/contact" className={styles.btnSecondary}>
                Get in touch <ArrowRight size={16} aria-hidden />
              </Link>
            </div>
          </div>

          {/* Sidebar */}
          <aside className={styles.sidebar} aria-label="Personal details">
            {/* Values */}
            <div className={styles.sideSection}>
              <h2 className={styles.sideTitle}>Values</h2>
              <ul role="list" className={styles.valuesList}>
                {VALUES.map(({ title, body }) => (
                  <li key={title} className={styles.value}>
                    <strong>{title}</strong>
                    <p>{body}</p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Fun facts */}
            <div className={styles.sideSection}>
              <h2 className={styles.sideTitle}>Outside work</h2>
              <ul role="list" className={styles.facts}>
                {FUN_FACTS.map((fact) => (
                  <li key={fact} className={styles.fact}>
                    <span aria-hidden>·</span>
                    {fact}
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.sideSection}>
              <h2 className={styles.sideTitle}>
                Certifications
              </h2>

              <ul role="list" className={styles.facts}>
                {CERTIFICATIONS.map((fact) => (
                  <li key={fact} className={styles.fact}>

                    <span aria-hidden>·</span>

                    <Link
                      href="/certificates"
                      className={styles.certificationLink}
                    >
                      {fact}
                    </Link>

                  </li>
                ))}
              </ul>
            </div>

          </aside>
        </div>
      </div>
    </section>
  );
}