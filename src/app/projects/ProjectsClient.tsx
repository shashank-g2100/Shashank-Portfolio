// src/app/projects/ProjectsClient.tsx
"use client";
import { useState } from "react";
import type { Project } from "@/data/projects";
import ProjectCard from "@/components/ui/ProjectCard";
import clsx from "clsx";
import styles from "./projects.module.css";

interface Props {
  projects: Project[];
  categories: string[];
}

export default function ProjectsClient({ projects, categories }: Props) {
  const [active, setActive] = useState<string>("All");
  const filtered = active === "All"
    ? projects
    : projects.filter((p) => p.category === active);

  return (
    <>
      {/* Filter bar */}
      <div className={styles.filterBar} role="group" aria-label="Filter projects by category">
        {["All", ...categories].map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={clsx(styles.filterBtn, active === cat && styles.filterActive)}
            aria-pressed={active === cat}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Results */}
      <p className={styles.count} aria-live="polite" aria-atomic="true">
        {filtered.length} project{filtered.length !== 1 ? "s" : ""}
        {active !== "All" ? ` in "${active}"` : ""}
      </p>

      <ul
        role="list"
        className={styles.grid}
        aria-label="Projects list"
      >
        {filtered.map((p) => (
          <li key={p.slug}>
            <ProjectCard project={p} featured />
          </li>
        ))}
      </ul>
    </>
  );
}
