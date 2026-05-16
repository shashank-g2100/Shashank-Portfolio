// // src/components/ui/CertificateCard.tsx
// import Image from "next/image";
// import { ExternalLink, FileText, Award } from "lucide-react";
// import type { Certificate } from "@/data/certificates";
// import styles from "./CertificateCard.module.css";

// const PRIZE_CONFIG = {
//   winner: { label: "🏆 Winner",   color: "#f59e0b" },
//   gold:   { label: "🥇 Gold",     color: "#f59e0b" },
//   silver: { label: "🥈 Silver",   color: "#94a3b8" },
//   bronze: { label: "🥉 Bronze",   color: "#b45309" },
// };

// const CATEGORY_LABEL = {
//   hackathon:     "Hackathon",
//   course:        "Course",
//   workshop:      "Workshop",
//   participation: "Event",
// };

// export default function CertificateCard({ cert }: { cert: Certificate }) {
//   const prize = cert.prizeLevel ? PRIZE_CONFIG[cert.prizeLevel] : null;

//   return (
//     <article className={styles.card} aria-label={cert.title}>
//       {/* Thumbnail */}
//       <div className={styles.thumb}>
//         {cert.thumbnailUrl ? (
//           <Image
//             src={cert.thumbnailUrl}
//             alt={`${cert.title} certificate thumbnail`}
//             width={600}
//             height={340}
//             className={styles.thumbImg}
//           />
//         ) : (
//           <div className={styles.thumbFallback} aria-hidden>
//             <Award size={40} />
//           </div>
//         )}

//         {/* Prize badge — absolute top-right */}
//         {prize && (
//           <span
//             className={styles.prizeBadge}
//             style={{ background: prize.color }}
//             aria-label={`Prize level: ${prize.label}`}
//           >
//             {prize.label}
//           </span>
//         )}

//         {/* Category pill */}
//         <span className={styles.categoryPill}>
//           {CATEGORY_LABEL[cert.category]}
//         </span>
//       </div>

//       {/* Body */}
//       <div className={styles.body}>
//         <div className={styles.meta}>
//           <span className={styles.issuer}>{cert.issuer}</span>
//           <time dateTime={cert.date} className={styles.date}>
//             {cert.dateDisplay}
//           </time>
//         </div>

//         <h3 className={styles.title}>{cert.title}</h3>
//         <p className={styles.description}>{cert.description}</p>

//         {/* Skills */}
//         <ul className={styles.skills} aria-label="Skills covered">
//           {cert.skills.slice(0, 4).map((s) => (
//             <li key={s} className="tag">{s}</li>
//           ))}
//         </ul>

//         {/* Credential ID */}
//         {cert.credentialId && (
//           <p className={styles.credId}>
//             ID: <code>{cert.credentialId}</code>
//           </p>
//         )}

//         {/* Actions */}
//         <div className={styles.actions}>
//         {/* {cert.credentialUrl && (
//             <a
//             href={cert.credentialUrl}
//             target="_blank"
//             rel="noopener noreferrer"
//             className={styles.btnVerify}
//             aria-label={`Verify ${cert.title} certificate`}
//             >
//             <ExternalLink size={14} aria-hidden />
//             Verify
//             </a>
//         )} */}

//         {cert.pdfUrl && (
//             <a
//             href={cert.pdfUrl}
//             target="_blank"
//             rel="noopener noreferrer"
//             className={styles.btnPdf}
//             aria-label={`View ${cert.title} certificate PDF`}
//             >
//             <FileText size={14} aria-hidden />
//             View PDF
//             </a>
//         )}
//         </div>
//         </div>
//     </article>
//   );
// }

"use client";

import Image from "next/image";
import { Calendar, MapPin, ExternalLink } from "lucide-react";
import type { Certificate } from "@/data/certificates";
import styles from "./CertificateCard.module.css";

interface Props {
  cert: Certificate;
  onOpen?: (cert: Certificate) => void;
}

export default function CertificateCard({
  cert,
  onOpen,
}: Props) {
  return (
    <article className={styles.card}>

      {/* THUMBNAIL */}
      <div className={styles.thumbnailWrap}>
        <Image
          src={
            cert.thumbnailUrl ||
            "/certificates/default.jpg"
          }
          alt={cert.title}
          fill
          className={styles.thumbnail}
        />

        {/* STATUS */}
        <div className={styles.topRow}>
          {/* <span className={styles.status}>
            {cert.prizeLevel
              ? `🏆 ${cert.prizeLevel}`
              : "✅ Completed"}
          </span> */}

          <span className={styles.category}>
            {cert.category}
          </span>
        </div>
      </div>

      {/* BODY */}
      <div className={styles.body}>

        {/* META */}
        {/* <div className={styles.meta}>
          <div className={styles.metaItem}>
            <MapPin size={14} />
            {cert.issuer}
          </div>

          <div className={styles.metaItem}>
            <Calendar size={14} />
            {cert.dateDisplay}
          </div>
        </div> */}

        {/* TITLE */}
        <button
          className={styles.title}
          onClick={() => onOpen?.(cert)}
        >
          {cert.title}
        </button>

        {/* DESCRIPTION */}
        <p className={styles.description}>
          {cert.description}
        </p>

        {/* SKILLS */}
        <div className={styles.skills}>
          {(cert.skills ?? []).slice(0, 4).map((skill) => (
            <span key={skill} className={styles.skillTag}>
              {skill}
            </span>
          ))}

          {(cert.skills?.length ?? 0) > 4 && (
            <span className={styles.skillTag}>
              {`+${(cert.skills?.length ?? 0) - 4}`}
            </span>
          )}
        </div>

        {/* FOOTER */}
        <div className={styles.footer}>

          {/* DETAILS */}
          {/* <button
            className={styles.detailsBtn}
            onClick={() => onOpen?.(cert)}
          >
            Details →
          </button> */}

          {/* VERIFY */}
          {/* {cert.credentialUrl && (
            <a
              href={cert.credentialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.verifyBtn}
            >
              <ExternalLink size={14} />
              Verify
            </a>
          )} */}
        </div>
      </div>
    </article>
  );
}