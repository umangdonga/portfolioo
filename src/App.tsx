import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { SkillsSection } from './components/SkillsSection';
import { DesignHighlights } from './components/DesignHighlights';
import { WorkSection } from './components/WorkSection';
import { ProcessSection } from './components/ProcessSection';
import { DesignSupportSection } from './components/DesignSupportSection';
import { ToolsSection } from './components/ToolsSection';
import { CertificationsSection } from './components/CertificationsSection';
import { ContactSection } from './components/ContactSection';
import { ProjectModal } from './components/ProjectModal';
import { ResumeModal } from './components/ResumeModal';
import { CertificateModal } from './components/CertificateModal';
import { Project, Certification } from './types';

export default function App() {
  // Default theme is light mode as requested in user prompt
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    const saved = localStorage.getItem('theme');
    if (saved) return saved === 'dark';
    return false; // Default: Light mode
  });

  const [activeSection, setActiveSection] = useState<string>('home');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);
  const [resumeOpen, setResumeOpen] = useState<boolean>(false);

  // Sync dark class on document element
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  // Track active section on scroll
  useEffect(() => {
    const sections = ['home', 'about', 'skills', 'highlights', 'work', 'process', 'philosophy', 'tools', 'certifications', 'contact'];
    const handleScroll = () => {
      const scrollY = window.scrollY;
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop - 120;
          const height = el.offsetHeight;
          if (scrollY >= top && scrollY < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      const navOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen bg-white text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100 selection:bg-neutral-900 selection:text-white dark:selection:bg-white dark:selection:text-neutral-950 transition-colors duration-300 flex flex-col font-sans">
      {/* 1. Navigation Bar */}
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        onOpenResume={() => setResumeOpen(true)}
        activeSection={activeSection}
      />

      {/* Main Content Area */}
      <main className="flex-grow">
        {/* 2. Hero + About Section */}
        <HeroSection
          onScrollToWork={() => scrollToSection('work')}
          onScrollToContact={() => scrollToSection('contact')}
        />

        {/* 3. Skills Section */}
        <SkillsSection />

        {/* 4. Design Highlights Carousel */}
        <DesignHighlights />

        {/* 5. My Work (6 Projects Grid) */}
        <WorkSection onSelectProject={(project) => setSelectedProject(project)} />

        {/* 6. Design Process (4 Connected Steps) */}
        <ProcessSection />

        {/* 7. Design Support Section (Philosophy) */}
        <DesignSupportSection />

        {/* 8. Tools I Work With (Figma, Canva, CorelDRAW, Ai, Ps, Framer) */}
        <ToolsSection />

        {/* 9. Certifications (4 Certificate Cards) */}
        <CertificationsSection onSelectCert={(cert) => setSelectedCert(cert)} />

        {/* 10. Get In Touch (CTA & Inquiry) */}
        <ContactSection onOpenResume={() => setResumeOpen(true)} />
      </main>

      {/* Modals */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      <ResumeModal
        isOpen={resumeOpen}
        onClose={() => setResumeOpen(false)}
      />

      <CertificateModal
        cert={selectedCert}
        onClose={() => setSelectedCert(null)}
      />
    </div>
  );
}
