import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Aman Soni | Senior Frontend Developer",
  description:
    "Senior Frontend Developer with 4+ years of experience building high-performance, SEO-optimized web applications with React 19, Next.js 15, and TypeScript.",
  keywords: [
    "Frontend Developer",
    "React",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
  ],
  openGraph: {
    title: "Aman Soni | Senior Frontend Developer",
    description:
      "Senior Frontend Developer specializing in React 19, Next.js 15, and TypeScript.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
