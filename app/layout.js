import { Geist, Geist_Mono } from "next/font/google";
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
        <nav style={{ padding: "1rem 0" }}>
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
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About us</a>
            </li>
            <li>
              <a href="/contact">Contact us</a>
            </li>
            <li>
              <a href="/services">Services</a>
            </li>
            <li>
              <a href="/benefits">Benefits</a>
            </li>
          </ul>
        </nav>
        {children}
      </body>
    </html>
  );
}
