// src/app/projects/[slug]/page.tsx
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Github, ExternalLink, ArrowLeft } from "lucide-react";
import { projects, getProjectBySlug } from "@/data/projects";
import styles from "./project.module.css";

interface Props { params: { slug: string }; }

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = getProjectBySlug(params.slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.tagline,
  };
}

export default function ProjectDetailPage({ params }: Props) {
  const project = getProjectBySlug(params.slug);
  if (!project) notFound();

  return (
    <article className="section" aria-labelledby="project-title">
      <div className="container">
        {/* Back */}
        <Link href="/projects" className={styles.back}>
          <ArrowLeft size={16} aria-hidden />
          All projects
        </Link>

        {/* Header */}
        <header className={styles.header}>
          <div className={styles.headerMeta}>
            <span className="tag">{project.category}</span>
            <span className={styles.year}>{project.year}</span>
          </div>

          <h1 id="project-title" className={styles.title}>{project.title}</h1>
          <p className={styles.tagline}>{project.tagline}</p>

          <div className={styles.actions}>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.btnGithub}
            >
              <Github size={16} aria-hidden />
              View on GitHub
            </a>
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.btnLive}
              >
                <ExternalLink size={16} aria-hidden />
                Live site
              </a>
            )}
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.btnDemo}
              >
                <ExternalLink size={16} aria-hidden />
                Demo
              </a>
            )}
          </div>
        </header>

        {/* Body */}
        <div className={styles.body}>
          <section className={styles.description} aria-label="Project description">
            <h2>Overview</h2>
            <div className="divider" />
            {project.longDescription.split("\n\n").map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </section>

          <aside className={styles.sidebar} aria-label="Project details">
            <div className={styles.sideCard}>
              <h3>Tech Stack</h3>
              <ul role="list" className={styles.stackList}>
                {project.techStack.map((t) => (
                  <li key={t} className="tag">{t}</li>
                ))}
              </ul>
            </div>

            <div className={styles.sideCard}>
              <h3>Links</h3>
              <ul role="list" className={styles.linksList}>
                <li>
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github size={14} aria-hidden />
                    GitHub Repository
                  </a>
                </li>
                {project.liveUrl && (
                  <li>
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink size={14} aria-hidden />
                      Live Site
                    </a>
                  </li>
                )}
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </article>
  );
}
