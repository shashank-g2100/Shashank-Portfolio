// src/components/layout/Header.tsx
"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { Sun, Moon, Menu, X } from "lucide-react";
import clsx from "clsx";
import styles from "./Header.module.css";

const NAV_LINKS = [
  // { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/experience", label: "Experience" },
  { href: "/education", label: "Education" },
  { href: "/skills", label: "Skills" },
  { href: "/about", label: "About" },
  { href: "/certificates", label: "Certificates" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => { setMounted(true); }, []);
  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const toggleTheme = () =>
    setTheme(resolvedTheme === "dark" ? "light" : "dark");

  return (
    <header className={clsx(styles.header, scrolled && styles.scrolled)} role="banner">
      <div className={clsx("container", styles.inner)}>
        {/* Logo */}
        <Link href="/" className={styles.logo} aria-label="Shashank G — Home">
          <span className={styles.logoMark} aria-hidden>SG</span>
          <span className={styles.logoName}>Shashank G</span>
        </Link>

        {/* Desktop nav */}
        <nav className={styles.nav} aria-label="Primary navigation">
          <ul role="list" className={styles.navList}>
            {NAV_LINKS.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className={clsx(
                    styles.navLink,
                    "link-underline",
                    pathname.startsWith(href) && styles.active
                  )}
                  aria-current={pathname.startsWith(href) ? "page" : undefined}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Actions */}
        <div className={styles.actions}>
          {mounted && (
            <button
              onClick={toggleTheme}
              className={styles.themeBtn}
              aria-label={`Switch to ${resolvedTheme === "dark" ? "light" : "dark"} mode`}
            >
              {resolvedTheme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          )}

          {/* Mobile hamburger */}
          <button
            className={styles.hamburger}
            onClick={() => setMenuOpen((v) => !v)}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      <nav
        id="mobile-nav"
        className={clsx(styles.mobileNav, menuOpen && styles.mobileNavOpen)}
        aria-label="Mobile navigation"
        aria-hidden={!menuOpen}
      >
        <ul role="list">
          {NAV_LINKS.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={clsx(styles.mobileLink, pathname.startsWith(href) && styles.active)}
                onClick={() => setMenuOpen(false)}
                tabIndex={menuOpen ? 0 : -1}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
