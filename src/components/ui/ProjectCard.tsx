// src/components/ui/ProjectCard.tsx
import Link from "next/link";
import { Github, ExternalLink, ArrowRight } from "lucide-react";
import type { Project } from "@/data/projects";
import styles from "./ProjectCard.module.css";

interface Props {
  project: Project;
  featured?: boolean;
}

export default function ProjectCard({ project, featured = false }: Props) {
  return (
    <article
      className={styles.card}
      aria-label={`Project: ${project.title}`}
    >
      {/* Category + year */}
      <div className={styles.meta}>
        <span className="tag">{project.category}</span>
        <span className={styles.year}>{project.year}</span>
      </div>

      {/* Title */}
      <h3 className={styles.title}>
        <Link href={`/projects/${project.slug}`} className={styles.titleLink}>
          {project.title}
        </Link>
      </h3>

      <p className={styles.tagline}>{project.tagline}</p>
      {featured && <p className={styles.desc}>{project.description}</p>}

      {/* Tech stack */}
      <ul
        role="list"
        className={styles.stack}
        aria-label="Tech stack"
      >
        {project.techStack.slice(0, 5).map((tech) => (
          <li key={tech} className="tag">
            {tech}
          </li>
        ))}
        {project.techStack.length > 5 && (
          <li className="tag">+{project.techStack.length - 5}</li>
        )}
      </ul>

      {/* Links */}
      <footer className={styles.footer}>
        <Link href={`/projects/${project.slug}`} className={styles.details}>
          Details <ArrowRight size={14} aria-hidden />
        </Link>

        <div className={styles.links}>
          <a
            href={project.githubUrl}
            aria-label={`${project.title} GitHub repository`}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.iconLink}
          >
            <Github size={16} aria-hidden />
          </a>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              aria-label={`${project.title} live site`}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.iconLink}
            >
              <ExternalLink size={16} aria-hidden />
            </a>
          )}
        </div>
      </footer>
    </article>
  );
}
