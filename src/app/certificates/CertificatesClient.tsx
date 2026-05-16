"use client";

import { useState, useMemo } from "react";
import { Search } from "lucide-react";

import { certificates, type Certificate, type CertCategory } from "@/data/certificates";

import CertificateCard from "@/components/ui/CertificateCard";
import CertificateModal from "@/components/ui/CertificateModal";

import styles from "./certificates.module.css";

const TABS: { label: string; value: CertCategory | "all" }[] = [
  { label: "All", value: "all" },
  { label: "🏆 Hackathons", value: "hackathon" },
  { label: "📚 Courses", value: "course" },
  { label: "🛠 Workshops", value: "workshop" },
  { label: "🎟 Events", value: "participation" },
  { label: "★ Achievements", value: "achievement" },
];

export default function CertificatesClient() {

  const [activeTab, setActiveTab] =
    useState<CertCategory | "all">("all");

  const [query, setQuery] = useState("");

  const [selectedCert, setSelectedCert] =
    useState<Certificate | null>(null);

  const [modalOpen, setModalOpen] = useState(false);

  const filtered = useMemo(() => {
    return certificates
      .filter(
        (c) =>
          activeTab === "all" || c.category === activeTab
      )
      .filter((c) => {
        if (!query.trim()) return true;

        const q = query.toLowerCase();

        return (
          c.title.toLowerCase().includes(q) ||
          c.issuer.toLowerCase().includes(q) ||
          c.skills.some((s) =>
            s.toLowerCase().includes(q)
          )
        );
      })
      .sort((a, b) =>
        b.date.localeCompare(a.date)
      );
  }, [activeTab, query]);

  const openModal = (cert: Certificate) => {
    setSelectedCert(cert);
    setModalOpen(true);
  };
/* ───────────────── STATS ───────────────── */

  const stats = [
    {
      label: "TOTAL",
      value: certificates.length,
    },

    {
      label: "HACKATHONS",
      value: certificates.filter(
        (c) => c.category === "hackathon"
      ).length,
    },

    {
      label: "COURSES",
      value: certificates.filter(
        (c) => c.category === "course"
      ).length,
    },

    {
      label: "AWARDS",
      value: certificates.filter(
        (c) => c.prizeLevel !== null
      ).length,
    },

    {
      label: "VERIFIED",
      value: certificates.filter(
        (c) => c.credentialUrl
      ).length,
    },
  ];

  return (
    <>
      {/* ───────────────── STATS SECTION ───────────────── */}

      <div className={styles.statsGrid}>
        {stats.map((stat) => (
          <div
            key={stat.label}
            className={styles.statCard}
          >
            <h3 className={styles.statValue}>
              {stat.value}
            </h3>

            <p className={styles.statLabel}>
              {stat.label}
            </p>
          </div>
        ))}
      </div>

      {/* SEARCH */}
      <div
        className={styles.searchWrap}
        role="search"
      >
        <Search
          size={18}
          aria-hidden
          className={styles.searchIcon}
        />

        <input
          type="search"
          placeholder="Search by title, issuer, or skill..."
          value={query}
          onChange={(e) =>
            setQuery(e.target.value)
          }
          className={styles.searchInput}
          aria-label="Search certificates"
        />
      </div>

      {/* TABS */}
      <div
        className={styles.tabs}
        role="tablist"
      >
        {TABS.map((tab) => (
          <button
            key={tab.value}
            role="tab"
            aria-selected={
              activeTab === tab.value
            }
            className={styles.tab}
            data-active={
              activeTab === tab.value
            }
            onClick={() =>
              setActiveTab(tab.value)
            }
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* RESULT COUNT */}
      <p className={styles.resultCount}>
        {filtered.length} certificate
        {filtered.length !== 1 ? "s" : ""}
      </p>

      {/* GRID */}
      {filtered.length === 0 ? (
        <p className={styles.empty}>
          No certificates found.
        </p>
      ) : (
        <ul
          role="list"
          className={styles.grid}
        >
          {filtered.map((cert) => (
            <li key={cert.id}>
              <div
                onClick={() =>
                  openModal(cert)
                }
                style={{
                  cursor: "pointer",
                }}
              >
                <CertificateCard
                  cert={cert}
                  onOpen={(cert) => setSelectedCert(cert)}
                />
              </div>
            </li>
          ))}
        </ul>
      )}

      {/* MODAL */}
      {selectedCert && (
        <CertificateModal
          cert={selectedCert}
          onClose={() => setSelectedCert(null)}
        />
      )}
    </>
  );
}