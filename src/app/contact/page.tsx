// "use client";
// import { useState } from "react";
// import Image from "next/image";
// import { Github, Linkedin, Mail, Send, CheckCircle } from "lucide-react";
// import styles from "./contact.module.css";

// const SOCIALS = [
//   { href: "mailto:shashank.g2100@gmail.com", label: "shashank.g2100@gmail.com", Icon: Mail },
//   { href: "https://github.com/shashank-g2100", label: "github.com/shashank-g2100", Icon: Github },
//   { href: "https://linkedin.com/in/shashank-g2100/", label: "linkedin.com/in/shashank-g2100", Icon: Linkedin },
// ];

// export default function ContactPage() {
//   const [sent, setSent] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
//   const [errors, setErrors] = useState<Record<string, string>>({});

//   const validate = () => {
//     const e: Record<string, string> = {};
//     if (!form.name.trim()) e.name = "Name is required";
//     if (!form.email.trim()) e.email = "Email is required";
//     else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Enter a valid email";
//     if (!form.message.trim()) e.message = "Message is required";
//     return e;
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     const errs = validate();
//     if (Object.keys(errs).length) { setErrors(errs); return; }
//     setLoading(true);
//     await new Promise((r) => setTimeout(r, 1200));
//     setLoading(false);
//     setSent(true);
//   };

//   const field = (name: keyof typeof form) => ({
//     id: name,
//     name,
//     value: form[name],
//     onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//       setForm((f) => ({ ...f, [name]: e.target.value }));
//       if (errors[name]) setErrors((e) => { const n = { ...e }; delete n[name]; return n; });
//     },
//   });

//   return (
//     <section className="section" aria-labelledby="contact-heading">
//       <div className="container">

//         {/* ── Hero banner with workspace illustration ── */}
//         <div className={styles.heroBanner}>
//           <div className={styles.heroBannerText}>
//             <p className={styles.label}>Get in touch</p>
//             <h1 id="contact-heading" className={styles.pageTitle}>Contact</h1>
//             <div className="divider" />
//             <p className={styles.intro}>
//               I&apos;m always interested in hearing about new projects and opportunities.
//               Feel free to reach out — response within 48 hours.
//             </p>
//           </div>
//           <div className={styles.heroBannerIllustration} aria-hidden>
//             <div className={styles.illustrationGlow} />
//             <Image
//               src="/workspace.png"
//               alt=""
//               width={260}
//               height={260}
//               className={styles.workspaceImg}
//             />
//           </div>
//         </div>

//         {/* ── Form + sidebar ── */}
//         <div className={styles.layout}>
//           <div>
//             {sent ? (
//               <div className={styles.success} role="alert">
//                 <CheckCircle size={40} aria-hidden />
//                 <h2>Message sent!</h2>
//                 <p>Thanks for reaching out. I&apos;ll get back to you within 48 hours.</p>
//               </div>
//             ) : (
//               <form onSubmit={handleSubmit} className={styles.form} noValidate aria-label="Contact form">
//                 <div className={styles.row}>
//                   <div className={styles.field}>
//                     <label htmlFor="name">Name *</label>
//                     <input type="text" autoComplete="name" aria-required="true"
//                       aria-describedby={errors.name ? "name-err" : undefined}
//                       aria-invalid={!!errors.name}
//                       className={errors.name ? styles.invalid : ""}
//                       {...field("name")} />
//                     {errors.name && <span id="name-err" className={styles.error} role="alert">{errors.name}</span>}
//                   </div>
//                   <div className={styles.field}>
//                     <label htmlFor="email">Email *</label>
//                     <input type="email" autoComplete="email" aria-required="true"
//                       aria-describedby={errors.email ? "email-err" : undefined}
//                       aria-invalid={!!errors.email}
//                       className={errors.email ? styles.invalid : ""}
//                       {...field("email")} />
//                     {errors.email && <span id="email-err" className={styles.error} role="alert">{errors.email}</span>}
//                   </div>
//                 </div>
//                 <div className={styles.field}>
//                   <label htmlFor="subject">Subject</label>
//                   <input type="text" {...field("subject")} />
//                 </div>
//                 <div className={styles.field}>
//                   <label htmlFor="message">Message *</label>
//                   <textarea rows={6} aria-required="true"
//                     aria-describedby={errors.message ? "msg-err" : undefined}
//                     aria-invalid={!!errors.message}
//                     className={errors.message ? styles.invalid : ""}
//                     {...field("message")} />
//                   {errors.message && <span id="msg-err" className={styles.error} role="alert">{errors.message}</span>}
//                 </div>
//                 <button type="submit" className={styles.submit} disabled={loading}>
//                   {loading ? <span className={styles.spinner} aria-hidden /> : <Send size={16} aria-hidden />}
//                   {loading ? "Sending…" : "Send message"}
//                 </button>
//               </form>
//             )}
//           </div>

//           <aside className={styles.sidebar} aria-label="Contact links">
//             <h2 className={styles.sideTitle}>Reach me directly</h2>
//             <ul role="list" className={styles.socialList}>
//               {SOCIALS.map(({ href, label, Icon }) => (
//                 <li key={label}>
//                   <a href={href} className={styles.socialItem}
//                     target={href.startsWith("http") ? "_blank" : undefined}
//                     rel={href.startsWith("http") ? "noopener noreferrer" : undefined}>
//                     <div className={styles.iconBox} aria-hidden><Icon size={18} /></div>
//                     <span>{label}</span>
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </aside>
//         </div>
//       </div>
//     </section>
//   );
// }
"use client";

import { useState } from "react";
import Image from "next/image";
import emailjs from "@emailjs/browser";

import {
  Github,
  Linkedin,
  Mail,
  Send,
  CheckCircle,
} from "lucide-react";

import styles from "./contact.module.css";

const SOCIALS = [
  {
    href: "mailto:shashank.g2100@gmail.com",
    label: "shashank.g2100@gmail.com",
    Icon: Mail,
  },
  {
    href: "https://github.com/shashank-g2100",
    label: "github.com/shashank-g2100",
    Icon: Github,
  },
  {
    href: "https://linkedin.com/in/shashank-g2100/",
    label: "linkedin.com/in/shashank-g2100",
    Icon: Linkedin,
  },
];

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const validate = () => {
    const e: Record<string, string> = {};

    if (!form.name.trim()) {
      e.name = "Name is required";
    }

    if (!form.email.trim()) {
      e.email = "Email is required";
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)
    ) {
      e.email = "Enter a valid email";
    }

    if (!form.message.trim()) {
      e.message = "Message is required";
    }

    return e;
  };

  const handleSubmit = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    const errs = validate();

    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }

    setLoading(true);

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          user_name: form.name,
          user_email: form.email,
          subject: form.subject,
          message: form.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      setSent(true);
      setForm({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
      alert("Failed to send message.");
    } finally {
      setLoading(false);
    }
  };

  const field = (
    name: keyof typeof form
  ) => ({
    id: name,
    name,
    value: form[name],
    onChange: (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement
      >
    ) => {
      setForm((f) => ({
        ...f,
        [name]: e.target.value,
      }));

      if (errors[name]) {
        setErrors((prev) => {
          const next = { ...prev };
          delete next[name];
          return next;
        });
      }
    },
  });

  return (
    <section className="section" aria-labelledby="contact-heading">
      <div className="container">

        {/* Hero Banner */}
        <div className={styles.heroBanner}>
          <div className={styles.heroBannerText}>
            <p className={styles.label}>
              Get in touch
            </p>
            <h1 id="contact-heading" className={styles.pageTitle}>
              Contact
            </h1>

            <div className="divider" />
            <p className={styles.intro}>
              I&apos;m always interested in hearing about new projects and opportunities. Feel free to reach out — response within 48 hours.
            </p>
          </div>

          <div className={styles.heroBannerIllustration} aria-hidden >
            <div className={styles.illustrationGlow} />
            <Image
              src="/workspace.png"
              alt=""
              width={260}
              height={260}
              className={styles.workspaceImg}
            />
          </div>
        </div>

        {/* Layout */}
        <div className={styles.layout}>
          {/* Form */}
          <div>
            {sent ? (
              <div
                className={styles.success}
                role="alert"
              >
                <CheckCircle
                  size={40}
                  aria-hidden
                />
                <h2>Message sent!</h2>
                <p>
                  Thanks for reaching out. I&apos;ll get back to you within 48 hours.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className={styles.form}
                noValidate
                aria-label="Contact form"
              >
                <div className={styles.row}>
                  {/* Name */}
                  <div className={styles.field}>
                    <label htmlFor="name">
                      Name *
                    </label>
                    <input
                      type="text"
                      autoComplete="name"
                      aria-required="true"
                      aria-describedby={
                        errors.name
                          ? "name-err"
                          : undefined
                      }
                      aria-invalid={!!errors.name}
                      className={
                        errors.name
                          ? styles.invalid
                          : ""
                      }
                      {...field("name")}
                    />
                    {errors.name && (
                      <span
                        id="name-err"
                        className={styles.error}
                        role="alert"
                      >
                        {errors.name}
                      </span>
                    )}
                  </div>

                  {/* Email */}
                  <div className={styles.field}>
                    <label htmlFor="email">
                      Email *
                    </label>
                    <input
                      type="email"
                      autoComplete="email"
                      aria-required="true"
                      aria-describedby={
                        errors.email
                          ? "email-err"
                          : undefined
                      }
                      aria-invalid={!!errors.email}
                      className={
                        errors.email
                          ? styles.invalid
                          : ""
                      }
                      {...field("email")}
                    />
                    {errors.email && (
                      <span
                        id="email-err"
                        className={styles.error}
                        role="alert"
                      >
                        {errors.email}
                      </span>
                    )}
                  </div>
                </div>

                {/* Subject */}
                <div className={styles.field}>
                  <label htmlFor="subject">
                    Subject
                  </label>
                  <input
                    type="text"
                    {...field("subject")}
                  />
                </div>

                {/* Message */}
                <div className={styles.field}>
                  <label htmlFor="message">
                    Message *
                  </label>
                  <textarea
                    rows={6}
                    aria-required="true"
                    aria-describedby={
                      errors.message
                        ? "msg-err"
                        : undefined
                    }
                    aria-invalid={!!errors.message}
                    className={
                      errors.message
                        ? styles.invalid
                        : ""
                    }
                    {...field("message")}
                  />
                  {errors.message && (
                    <span
                      id="msg-err"
                      className={styles.error}
                      role="alert"
                    >
                      {errors.message}
                    </span>
                  )}
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className={styles.submit}
                  disabled={loading}
                >
                  {loading ? (
                    <span
                      className={styles.spinner}
                      aria-hidden
                    />
                  ) : (
                    <Send size={16} aria-hidden/>
                  )}
                  {loading
                    ? "Sending…"
                    : "Send message"}
                </button>
              </form>
            )}
          </div>

          {/* Sidebar */}
          <aside className={styles.sidebar} aria-label="Contact links">
            <h2 className={styles.sideTitle}> Reach me directly </h2>
            <ul
              role="list"
              className={styles.socialList}
            >
              {SOCIALS.map(
                ({
                  href,
                  label,
                  Icon,
                }) => (
                  <li key={label}>
                    <a
                      href={href}
                      className={styles.socialItem}
                      target={
                        href.startsWith("http")
                          ? "_blank"
                          : undefined
                      }
                      rel={
                        href.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                    >
                      <div
                        className={styles.iconBox}
                        aria-hidden
                      >
                        <Icon size={18} />
                      </div>
                      <span>{label}</span>
                    </a>
                  </li>
                )
              )}
            </ul>
          </aside>
        </div>
      </div>
    </section>
  );
}