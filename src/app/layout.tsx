import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Linata Deshmukh — Data Analyst & Data Engineer",
  description:
    "Portfolio of Linata Deshmukh. I love solving problems. Raw data in. Actionable insights out. Data Analyst & Data Engineer based in Boston, MA.",
  keywords: [
    "Data Analyst",
    "Data Engineer",
    "Power BI",
    "SQL",
    "Python",
    "ETL",
    "Tableau",
    "Boston",
    "Northeastern University",
  ],
  authors: [{ name: "Linata Deshmukh" }],
  openGraph: {
    title: "Linata Deshmukh — Data Analyst & Data Engineer",
    description:
      "I love solving problems. Raw data in. Actionable insights out.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Linata Deshmukh — Data Analyst & Data Engineer",
    description:
      "I love solving problems. Raw data in. Actionable insights out.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-black text-white antialiased font-sans">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
