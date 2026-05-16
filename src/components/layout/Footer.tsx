// src/components/layout/Footer.tsx
import Link from "next/link";
import clsx from "clsx";
import { Github, Linkedin, Mail } from "lucide-react";
import styles from "./Footer.module.css";

const SOCIAL = [
  { href: "https://github.com/shashank-g2100", label: "GitHub", Icon: Github },
  { href: "https://linkedin.com/in/shashank-g2100/", label: "LinkedIn", Icon: Linkedin },
  { href: "mailto:shashank.g2100@gmail.com", label: "Email", Icon: Mail },
];

const LINKS = [
  { href: "/projects", label: "Projects" },
  { href: "/experience", label: "Experience" },
  { href: "/education", label: "Education" },
  { href: "/skills", label: "Skills" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className={styles.footer} role="contentinfo">
      <div className={clsx("container", styles.inner)}>
        <div className={styles.brand}>
          <span className={styles.mark} aria-hidden>SG</span>
          <p className={styles.tagline}>
            Building beautiful web experiences and solving complex problems with data.
          </p>
        </div>

        {/* <nav aria-label="Footer navigation" className={styles.nav}>
          <ul role="list">
            {LINKS.map(({ href, label }) => (
              <li key={href}>
                <Link href={href} className="link-underline">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav> */}

        <div className={styles.social}>
          {SOCIAL.map(({ href, label, Icon }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              className={styles.socialLink}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
            >
              <Icon size={18} aria-hidden />
            </a>
          ))}
        </div>
      </div>

      <div className={styles.bottom}>
        <p>
          © {new Date().getFullYear()} Shashank G. Built with Next.js & deployed on Vercel.
        </p>
      </div>
    </footer>
  );
}
