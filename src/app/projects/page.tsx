// src/app/projects/page.tsx
import type { Metadata } from "next";
import { projects, projectCategories } from "@/data/projects";
import ProjectsClient from "./ProjectsClient";

export const metadata: Metadata = {
  title: "Projects",
  description: "A showcase of software projects spanning AI/ML, distributed systems, and developer tooling.",
};

export default function ProjectsPage() {
  return (
    <section className="section" aria-labelledby="projects-heading">
      <div className="container">
        <header style={{ marginBottom: "var(--space-12)" }}>
          <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.8rem", color: "var(--accent)", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "var(--space-3)" }}>
            Work
          </p>
          <h1 id="projects-heading" style={{ fontSize: "clamp(2rem, 6vw, 3.5rem)" }}>
            Projects
          </h1>
          <div className="divider" />
          <p style={{ marginTop: "var(--space-4)", color: "var(--text-2)", maxWidth: "55ch" }}>
            A selection of personal and professional projects — each a chance to
            explore a new domain or push a familiar one further.
          </p>
        </header>

        <ProjectsClient projects={projects} categories={projectCategories} />
      </div>
    </section>
  );
}
