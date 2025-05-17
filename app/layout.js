import { Poppins } from "next/font/google";
import Image from "next/image";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata = {
  title: "Billing Website",
  description: "Billing website for the company",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased`}>
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
            backgroundColor: "var(--secondary)",
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
              gap: "2.0rem",
              listStyle: "none",
              margin: 0,
              padding: 0,
            }}
          >
            <li>
              <a
                href="/"
                style={{ color: "var(--primary)", fontSize: "0.875rem" }}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/about"
                style={{ color: "var(--primary)", fontSize: "0.875rem" }}
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="/contact"
                style={{ color: "var(--primary)", fontSize: "0.875rem" }}
              >
                Contact Us
              </a>
            </li>
            <li>
              <a
                href="/services"
                style={{ color: "var(--primary)", fontSize: "0.875rem" }}
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="/benefits"
                style={{ color: "var(--primary)", fontSize: "0.875rem" }}
              >
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
