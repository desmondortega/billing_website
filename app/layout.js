import { Geist, Geist_Mono } from "next/font/google";
import Image from "next/image";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Billing Website",
  description: "Billing website for the company",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <nav
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "0 4vw",
            borderBottom: "1px solid #e5e5e5",
            marginBottom: "2rem",
            height: "56px",
            minHeight: "56px",
            color: "#555555",
          }}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            <a
              href="/"
              style={{
                display: "flex",
                alignItems: "center",
                color: "#555555",
              }}
            >
              <Image
                src="/codex_banner.png"
                alt="Logo"
                width={120}
                height={40}
                style={{ objectFit: "contain" }}
                priority
              />
            </a>
          </div>
          <ul
            style={{
              display: "flex",
              gap: "1.5rem",
              listStyle: "none",
              margin: 0,
              padding: 0,
            }}
          >
            <li>
              <a href="/" style={{ color: "#555555" }}>
                Home
              </a>
            </li>
            <li>
              <a href="/about" style={{ color: "#555555" }}>
                About us
              </a>
            </li>
            <li>
              <a href="/contact" style={{ color: "#555555" }}>
                Contact us
              </a>
            </li>
            <li>
              <a href="/services" style={{ color: "#555555" }}>
                Services
              </a>
            </li>
            <li>
              <a href="/benefits" style={{ color: "#555555" }}>
                Benefits
              </a>
            </li>
          </ul>
        </nav>
        {children}
      </body>
    </html>
  );
}
