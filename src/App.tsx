import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { SkillsSection } from './components/SkillsSection';
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
  const [activeSection, setActiveSection] = useState<string>('home');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);
  const [resumeOpen, setResumeOpen] = useState<boolean>(false);

  // Initialize theme from localStorage or default to system/dark
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.add('dark');
    }
  }, []);

  // Track active section on scroll
  useEffect(() => {
    const sections = [
      'home',
      'skills',
      'work',
      'process',
      'philosophy',
      'tools',
      'certifications',
      'contact'
    ];

    const handleScroll = () => {
      const scrollY = window.scrollY;
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop - 140;
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
      const navOffset = 85;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen bg-white text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100 flex flex-col font-sans antialiased selection:bg-neutral-900 selection:text-white dark:selection:bg-white dark:selection:text-neutral-950 transition-colors duration-300">
      {/* 1. Primary Navigation Bar with Theme & Resume Controls */}
      <Navbar
        onOpenResume={() => setResumeOpen(true)}
        activeSection={activeSection}
      />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* 2. Hero Section: Umang Donga, UI/UX Designer & M.Des Student */}
        <HeroSection
          onScrollToWork={() => scrollToSection('work')}
          onScrollToContact={() => scrollToSection('contact')}
        />

        {/* 3. Capabilities & Focus: 4 Skills Cards */}
        <SkillsSection />

        {/* 4. Selected Work: 5 Case Studies with Filters */}
        <WorkSection onSelectProject={(project) => setSelectedProject(project)} />

        {/* 5. Methodology: 4-Step Design Process */}
        <ProcessSection />

        {/* 6. Design Philosophy: 3 Pillars (Understand, Simplify, Design) */}
        <DesignSupportSection />

        {/* 7. Tools & Technologies: Figma, Canva, CorelDRAW, Adobe Illustrator, Adobe Photoshop, Framer */}
        <ToolsSection />

        {/* 8. Certifications: 4 Verified Credentials */}
        <CertificationsSection onSelectCert={(cert) => setSelectedCert(cert)} />

        {/* 9. Let's Connect: Direct Contact & Inquiry Form */}
        <ContactSection onOpenResume={() => setResumeOpen(true)} />
      </main>

      {/* Interactive Modals */}
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
