"use client";

import { useState } from "react";

import Link from "next/link";
import clsx from "clsx";

import { ArrowRight } from "lucide-react";

import type { Certificate } from "@/data/certificates";

import CertificateCard from "@/components/ui/CertificateCard";
import CertificateModal from "@/components/ui/CertificateModal";

import styles from "@/app/page.module.css";

interface Props {
  certificates: Certificate[];
}

export default function HomeCertificates({
  certificates,
}: Props) {

  const [selectedCertificate, setSelectedCertificate] =
    useState<Certificate | null>(null);

  return (
    <>
      <section
        className={clsx(styles.featured, "section")}
        aria-labelledby="featured-certificates-heading"
      >
        <div className="container">

          <div className={styles.sectionHeader}>
            <div>
              <h2 id="featured-certificates-heading">
                Featured Certificates
              </h2>

              <div className="divider" />
            </div>

            <Link
              href="/certificates"
              className={styles.viewAll}
            >
              All certificates
              <ArrowRight size={14} aria-hidden />
            </Link>
          </div>

          <ul
            role="list"
            className={styles.projectGrid}
            aria-label="Featured certificates"
          >
            {certificates.map((certificate) => (
              <li key={certificate.id}>
                <CertificateCard
                  cert={certificate}
                  onOpen={setSelectedCertificate}
                />
              </li>
            ))}
          </ul>

        </div>
      </section>

      {/* MODAL */}
      {selectedCertificate && (
        <CertificateModal
          cert={selectedCertificate}
          onClose={() =>
            setSelectedCertificate(null)
          }
        />
      )}
    </>
  );
}