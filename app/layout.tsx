// app/layout.tsx
import "./globals.css";
import type { ReactNode } from "react";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import HeroSection from "@/components/HeroSection";
import EducationSection from "@/components/EducationSection";
import ProjectsAndSkillsSection from "@/components/ProjectsAndSkillsSection";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingNav from "@/components/FloatingNav";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata = {
  title: "David Antonio Ty | Portfolio",
  description: "Aspiring Full Stack Developer and UI/UX Designer",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`min-h-screen bg-background text-foreground font-sans antialiased ${inter.variable}`}
      >
        <header className="fixed top-4 right-4 z-50"></header>

        <ThemeProvider>
          <HeroSection />
          <FloatingNav />
          <EducationSection />
          <ProjectsAndSkillsSection />
          <Contact />
          <Footer />
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
