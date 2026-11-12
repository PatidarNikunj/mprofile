import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono-jb" });

export const metadata: Metadata = {
  title: "Nikunj Patel | Senior Frontend & Full Stack Engineer",
  description:
    "Senior / Lead Frontend & Full Stack Engineer with 12+ years in React, React Native, Next.js and TypeScript.",
  openGraph: {
    title: "Nikunj Patel | Senior Frontend & Full Stack Engineer",
    description: "React · React Native · Next.js · TypeScript. 12+ years building scalable web and mobile products.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${mono.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
