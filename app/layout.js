import { Poppins } from "next/font/google";
import "./globals.css";
import ClientNav from "./components/ClientNav";

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
        <ClientNav />
        {children}
      </body>
    </html>
  );
}
