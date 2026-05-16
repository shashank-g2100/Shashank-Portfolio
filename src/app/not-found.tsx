// src/app/not-found.tsx
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "60dvh",
        textAlign: "center",
        gap: "var(--space-6)",
        padding: "var(--space-8)",
      }}
    >
      <p
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "0.8rem",
          color: "var(--accent)",
          letterSpacing: "0.08em",
          textTransform: "uppercase",
        }}
      >
        404
      </p>
      <h1 style={{ fontSize: "clamp(2rem, 6vw, 3.5rem)" }}>
        Page not found
      </h1>
      <p style={{ color: "var(--text-2)", maxWidth: "40ch" }}>
        This route doesn&apos;t exist yet — or it used to and has moved.
      </p>
      <Link
        href="/"
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "var(--space-2)",
          padding: "10px var(--space-6)",
          background: "var(--accent)",
          color: "var(--accent-fg)",
          borderRadius: "var(--r-md)",
          fontWeight: 600,
          fontSize: "0.9rem",
        }}
      >
        <ArrowLeft size={16} aria-hidden />
        Back home
      </Link>
    </div>
  );
}
