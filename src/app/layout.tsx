// src/app/layout.tsx
import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: { default: "Shashank — Portfolio", template: "%s · Shashank" },
  description:
    "Senior Software Engineer specialising in distributed systems, AI/ML platforms, and developer tooling.",
  metadataBase: new URL("https://shashank.example.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://shashank.example.com",
    siteName: "Shashank Portfolio",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="data-theme" defaultTheme="dark" enableSystem>
          <a href="#main-content" className="skip-link">
            Skip to main content
          </a>
          <Header />
          <main id="main-content">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
