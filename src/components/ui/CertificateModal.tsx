// "use client";

// import Image from "next/image";
// import { motion, AnimatePresence } from "framer-motion";
// import {
//   X,
//   ExternalLink,
//   FileText,
//   Calendar,
//   Building2,
//   Award,
// } from "lucide-react";

// import type { Certificate } from "@/data/certificates";
// import styles from "./CertificateModal.module.css";

// interface Props {
//   cert: Certificate | null;
//   open: boolean;
//   onClose: () => void;
// }

// export default function CertificateModal({
//   cert,
//   open,
//   onClose,
// }: Props) {
//   if (!cert) return null;

//   return (
//     <AnimatePresence>
//       {open && (
//         <>
//           {/* BACKDROP */}
//           <motion.div
//             className={styles.backdrop}
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             onClick={onClose}
//           />

//           {/* MODAL */}
//           <motion.div
//             className={styles.modal}
//             initial={{ opacity: 0, y: 40, scale: 0.96 }}
//             animate={{ opacity: 1, y: 0, scale: 1 }}
//             exit={{ opacity: 0, y: 20, scale: 0.96 }}
//             transition={{ duration: 0.25 }}
//           >
//             {/* CLOSE */}
//             <button className={styles.closeBtn} onClick={onClose}>
//               <X size={18} />
//             </button>

//             {/* IMAGE */}
//             <div className={styles.imageWrap}>
//               {cert.thumbnailUrl ? (
//                 <Image
//                   src={cert.thumbnailUrl}
//                   alt={cert.title}
//                   fill
//                   className={styles.image}
//                 />
//               ) : (
//                 <div className={styles.imageFallback}>
//                   <Award size={60} />
//                 </div>
//               )}
//             </div>

//             {/* CONTENT */}
//             <div className={styles.content}>
//               <div className={styles.badges}>
//                 <span className={styles.category}>
//                   {cert.category}
//                 </span>

//                 {cert.prizeLevel && (
//                   <span className={styles.prize}>
//                     🏆 {cert.prizeLevel}
//                   </span>
//                 )}
//               </div>

//               <h2 className={styles.title}>{cert.title}</h2>

//               <div className={styles.metaGrid}>
//                 <div>
//                   <p className={styles.metaLabel}>Issued By</p>
//                   <p className={styles.metaValue}>
//                     <Building2 size={14} />
//                     {cert.issuer}
//                   </p>
//                 </div>

//                 <div>
//                   <p className={styles.metaLabel}>Date</p>
//                   <p className={styles.metaValue}>
//                     <Calendar size={14} />
//                     {cert.dateDisplay}
//                   </p>
//                 </div>
//               </div>

//               <div className={styles.descriptionBox}>
//                 <p>{cert.description}</p>
//               </div>

//               {/* SKILLS */}
//               <div>
//                 <p className={styles.sectionTitle}>Skills</p>

//                 <div className={styles.skills}>
//                   {cert.skills.map((skill) => (
//                     <span key={skill} className={styles.skillTag}>
//                       {skill}
//                     </span>
//                   ))}
//                 </div>
//               </div>

//               {/* ACTIONS */}
//               <div className={styles.actions}>
//                 {cert.credentialUrl && (
//                   <a
//                     href={cert.credentialUrl}
//                     target="_blank"
//                     className={styles.primaryBtn}
//                   >
//                     <ExternalLink size={16} />
//                     Verify Credential
//                   </a>
//                 )}

//                 {cert.pdfUrl && (
//                   <a
//                     href={cert.pdfUrl}
//                     target="_blank"
//                     className={styles.secondaryBtn}
//                   >
//                     <FileText size={16} />
//                     View PDF
//                   </a>
//                 )}
//               </div>
//             </div>
//           </motion.div>
//         </>
//       )}
//     </AnimatePresence>
//   );
// }

// "use client";

// import Image from "next/image";
// import { X, ExternalLink, FileText } from "lucide-react";
// import type { Certificate } from "@/data/certificates";
// import styles from "./CertificateModal.module.css";

// interface CertificateModalProps {
//   cert: Certificate;
//   onClose: () => void;
// }

// export default function CertificateModal({
//   cert,
//   onClose,
// }: CertificateModalProps) {
//   if (!cert) return null;
//   return (
//     <>
//       {/* BACKDROP */}
//       <div className={styles.backdrop} onClick={onClose} />

//       {/* MODAL */}
//       <div className={styles.modal}>
//         {/* CLOSE BUTTON */}
//         <button className={styles.closeBtn} onClick={onClose}>
//           <X size={20} />
//         </button>

//         {/* IMAGE */}
//         <div className={styles.imageWrap}>
//           <Image
//             src={cert.thumbnailUrl || "/certificates/default.jpg"}
//             alt={cert.title}
//             fill
//             className={styles.image}
//           />
//         </div>

//         {/* CONTENT */}
//         <div className={styles.content}>

//           {/* CERTIFICATE IMAGE */}
//           {cert.pdfUrl && (
//             <div className={styles.certificatePreview}>
//               <img
//                 src={cert.pdfUrl}
//                 alt={cert.title}
//                 className={styles.certificateImage}
//               />
//             </div>
//           )}

//           {/* BADGES */}
//           <div className={styles.badges}>
//             <span className={styles.category}>
//               {cert.category}
//             </span>

//             {cert.prizeLevel && (
//               <span className={styles.prize}>
//                 🏆 {cert.prizeLevel}
//               </span>
//             )}
//           </div>

//           {/* TITLE */}
//           <h2 className={styles.title}>
//             {cert.title}
//           </h2>

//           {/* META */}
//           <div className={styles.metaGrid}>
//             <div className={styles.metaBox}>
//               <p className={styles.metaLabel}>
//                 ISSUED BY
//               </p>

//               <p className={styles.metaValue}>
//                 {cert.issuer}
//               </p>
//             </div>

//             <div className={styles.metaBox}>
//               <p className={styles.metaLabel}>
//                 DATE
//               </p>

//               <p className={styles.metaValue}>
//                 {cert.dateDisplay}
//               </p>
//             </div>

//             {cert.credentialId && (
//               <div className={styles.metaBox}>
//                 <p className={styles.metaLabel}>
//                   CREDENTIAL ID
//                 </p>

//                 <p className={styles.metaValue}>
//                   {cert.credentialId}
//                 </p>
//               </div>
//             )}
//           </div>

//           {/* DESCRIPTION */}
//           <p className={styles.description}>
//             {cert.description}
//           </p>

//           {/* SKILLS */}
//           <div>
//             <p className={styles.sectionTitle}>
//               Skills Demonstrated
//             </p>

//             <div className={styles.skills}>
//               {cert.skills.map((skill) => (
//                 <span
//                   key={skill}
//                   className={styles.skillTag}
//                 >
//                   {skill}
//                 </span>
//               ))}
//             </div>
//           </div>

//           {/* ACTIONS */}
//           <div className={styles.actions}>

//             {/* VERIFY BUTTON */}
//             {cert.credentialUrl ? (
//               <a
//                 href={cert.credentialUrl}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className={styles.primaryBtn}
//               >
//                 Verify Credential
//               </a>
//             ) : cert.credentialId ? (
//               <button
//                 className={styles.primaryBtn}
//                 onClick={() => {
//                   navigator.clipboard.writeText(cert.credentialId || "");
//                   alert("Credential ID copied!");
//                 }}
//               >
//                 Copy Credential ID
//               </button>
//             ) : null}

//             {/* PDF BUTTON */}
//             {cert.pdfUrl && (
//               <a
//                 href={cert.pdfUrl}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className={styles.secondaryBtn}
//               >
//                 View Certificate
//               </a>
//             )}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

"use client";

import Image from "next/image";
import {
  X,
  ExternalLink,
  FileText,
  Copy,
  Expand,
} from "lucide-react";

import { useState } from "react";

import type { Certificate } from "@/data/certificates";

import styles from "./CertificateModal.module.css";

interface CertificateModalProps {
  cert: Certificate;
  onClose: () => void;
}

export default function CertificateModal({
  cert,
  onClose,
}: CertificateModalProps) {

  const [fullView, setFullView] = useState(false);

  if (!cert) return null;

  return (
    <>
      {/* BACKDROP */}
      <div
        className={styles.backdrop}
        onClick={onClose}
      />

      {/* MAIN MODAL */}
      <div className={styles.modal}>

        {/* CLOSE */}
        <button
          className={styles.closeBtn}
          onClick={onClose}
        >
          <X size={18} />
        </button>

        {/* TOP IMAGE */}
        <div className={styles.imageWrap}>
          <Image
            src={
              cert.thumbnailUrl ||
              "/certificates/default.jpg"
            }
            alt={cert.title}
            fill
            className={styles.image}
          />
        </div>

        {/* CONTENT */}
        <div className={styles.content}>

          {/* BADGES */}
          <div className={styles.badges}>

            <span className={styles.category}>
              {cert.category}
            </span>

            {cert.prizeLevel && (
              <span className={styles.prize}>
                🏆 {cert.prizeLevel}
              </span>
            )}

          </div>

          {/* TITLE */}
          <h2 className={styles.title}>
            {cert.title}
          </h2>

          {/* META */}
          <div className={styles.metaGrid}>

            <div className={styles.metaBox}>
              <p className={styles.metaLabel}>
                ISSUED BY
              </p>

              <p className={styles.metaValue}>
                {cert.issuer}
              </p>
            </div>

            <div className={styles.metaBox}>
              <p className={styles.metaLabel}>
                DATE
              </p>

              <p className={styles.metaValue}>
                {cert.dateDisplay}
              </p>
            </div>

            {cert.credentialId && (
              <div className={styles.metaBox}>
                <p className={styles.metaLabel}>
                  CREDENTIAL ID
                </p>

                <p className={styles.metaValue}>
                  {cert.credentialId}
                </p>
              </div>
            )}

          </div>

          {/* DESCRIPTION */}
          <p className={styles.description}>
            {cert.detailedDescription}
          </p>

          {/* SKILLS */}
          <div>

            <p className={styles.sectionHeading}>
              Skills Demonstrated
            </p>

            <div className={styles.skills}>
              {cert.skills.map((skill) => (
                <span
                  key={skill}
                  className={styles.skillTag}
                >
                  {skill}
                </span>
              ))}
            </div>

          </div>

          {/* E-CERTIFICATE */}
          {cert.certificateImage && (

            <div className={styles.ecertificateSection}>

              <p className={styles.sectionHeading}>
                E-Certificate
              </p>

              <div className={styles.ecertificateCard}>

                {/* EXPAND BUTTON */}
                <button
                  className={styles.expandBtn}
                  onClick={() => setFullView(true)}
                >
                  <Expand size={18} />
                </button>

                {/* CERTIFICATE IMAGE */}
                <img
                  src={cert.certificateImage}
                  alt={`${cert.title} certificate`}
                  className={styles.ecertificateImage}
                />

              </div>

            </div>
          )}

          {/* ACTIONS */}
          <div className={styles.actions}>

            {/* VERIFY */}
            {cert.credentialUrl ? (
              <a
                href={cert.credentialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.primaryBtn}
              >
                <ExternalLink size={16} />
                Verify Credential
              </a>
            ) : cert.credentialId ? (
              <button
                className={styles.primaryBtn}
                onClick={() => {
                  navigator.clipboard.writeText(
                    cert.credentialId || ""
                  );

                  alert("Credential ID copied!");
                }}
              >
                <Copy size={16} />
                Copy Credential ID
              </button>
            ) : null}

            {/* PDF */}
            {cert.pdfUrl && (
              <a
                href={cert.pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.secondaryBtn}
              >
                <FileText size={16} />
                View PDF
              </a>
            )}

          </div>

        </div>
      </div>

      {/* ───────── TRUE FULLSCREEN VIEWER ───────── */}

      {fullView && (
        <div className={styles.fullscreenOverlay}>

          {/* CLOSE FULLSCREEN */}
          <button
            className={styles.fullscreenClose}
            onClick={() => setFullView(false)}
          >
            <X size={24} />
          </button>

          {/* FULL IMAGE */}
          <img
            src={cert.certificateImage}
            alt="Full Certificate"
            className={styles.fullscreenImage}
          />

        </div>
      )}

    </>
  );
}