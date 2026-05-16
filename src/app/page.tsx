// src/app/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";
import {
  Github,
  Linkedin,
  ArrowRight,
  Download,
} from "lucide-react";

import { getFeaturedProjects } from "@/data/projects";
import { certificates } from "@/data/certificates";

import ProjectCard from "@/components/ui/ProjectCard";
import CertificateCard from "@/components/ui/CertificateCard";
import HomeCertificates from "@/components/home/HomeCertificates";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Shashank G — Frontend Developer, ML & Cybersecurity Enthusiast",
};

export default function HomePage() {
  const featured = getFeaturedProjects().slice(0, 3);

  const featuredCertificates = certificates.filter((cert) => cert.featured).slice(0, 3);

  return (
    <>
      {/* ── Hero ─────────────────────────────────────── */}
      <section className={styles.hero} aria-labelledby="hero-heading">
        <div className={clsx("container", styles.heroInner)}>
          <div className={styles.heroContent}>
            <p className={styles.intro}>Hello, I&apos;m</p>
            <h1 id="hero-heading" className={styles.heroName}>
              Shashank G
            </h1>
            <p className={styles.heroRole}>
              Frontend Developer
              <span className={styles.roleAccent}> · </span>
              M.Tech Cyber Security Student @ BMSIT
              <span className={styles.roleAccent}> · </span>
              Data Analytics
            </p>
            <p className={styles.heroBio}>
              I am pursuing an M.Tech in Cyber Security at BMS Institute of Technology and Management, with a strong foundation in
              Computer Science Engineering from IIIT Dharwad. My background includes frontend development, data analytics, machine learning,
              and security-focused problem solving. I am open to new professional opportunities.
            </p>

            <div className={styles.heroCTA}>
              <Link href="/projects" className={styles.btnPrimary}>
                View Projects
                <ArrowRight size={16} aria-hidden />
              </Link>
              <a
                href="/resume.pdf"
                download
                className={styles.btnSecondary}
              >
                <Download size={16} aria-hidden />
                Résumé
              </a>
            </div>

            <div className={styles.heroSocial}>
              <a
                href="https://github.com/shashank-g2100"
                aria-label="GitHub profile"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialIcon}
              >
                <Github size={20} aria-hidden />
              </a>
              <a
                href="https://linkedin.com/in/shashank-g2100/"
                aria-label="LinkedIn profile"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialIcon}
              >
                <Linkedin size={20} aria-hidden />
              </a>
            </div>
          </div>

          {/* Profile photo column */}
          <div className={styles.heroImageWrap} aria-hidden>
            <div className={styles.imageGlowRing} />
            <Image
              src="/profile.png"
              alt="Shashank G — Frontend Developer"
              width={620}
              height={810}
              className={styles.heroImg}
              priority
            />
          </div>
        </div>
      </section>

      {/* ── Featured Projects ─────────────────────────── */}
      <section className={clsx(styles.featured, "section")} aria-labelledby="featured-heading">
        <div className="container">
          <div className={styles.sectionHeader}>
            <div>
              <h2 id="featured-heading">Featured Projects</h2>
              <div className="divider" />
            </div>
            <Link href="/projects" className={styles.viewAll}>
              All projects <ArrowRight size={14} aria-hidden />
            </Link>
          </div>

          <ul
            role="list"
            className={styles.projectGrid}
            aria-label="Featured projects"
          >
            {featured.map((project) => (
              <li key={project.slug}>
                <ProjectCard project={project} />
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Featured Certificates ─────────────────────────── */}
      <HomeCertificates
        certificates={featuredCertificates}
      />

      {/* ── Quick CTA ─────────────────────────────────── */}
      <section className={clsx(styles.cta, "section")} aria-labelledby="cta-heading">
        <div className="container">
          <div className={styles.ctaBox}>
            <h2 id="cta-heading">Let&apos;s collaborate</h2>
            <p>Open to internships, freelance projects, and interesting collaborations.</p>
            <Link href="/contact" className={styles.btnPrimary}>
              Get in touch <ArrowRight size={16} aria-hidden />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
