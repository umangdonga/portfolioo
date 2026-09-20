import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, FileText, ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  onOpenResume: () => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume, activeSection }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    // Check initial dark mode status
    const isDarkMode = document.documentElement.classList.contains('dark');
    setIsDark(isDarkMode);

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    if (document.documentElement.classList.contains('dark')) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setIsDark(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setIsDark(true);
    }
  };

  const navLinks = [
    { label: 'About', href: '#about', id: 'home' },
    { label: 'Skills', href: '#skills', id: 'skills' },
    { label: 'Work', href: '#work', id: 'work' },
    { label: 'Process', href: '#process', id: 'process' },
    { label: 'Philosophy', href: '#philosophy', id: 'philosophy' },
    { label: 'Tools', href: '#tools', id: 'tools' },
    { label: 'Certifications', href: '#certifications', id: 'certifications' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleLinkClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const navOffset = 85;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header
      id="main-navbar-header"
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 pointer-events-none px-3 sm:px-6 pt-3 sm:pt-4"
    >
      <nav
        aria-label="Primary Navigation"
        className={`max-w-7xl mx-auto pointer-events-auto rounded-2xl sm:rounded-full transition-all duration-300 px-4 sm:px-6 py-3 border ${
          scrolled
            ? 'bg-white/80 dark:bg-neutral-950/80 backdrop-blur-md border-neutral-200/80 dark:border-neutral-800/80 shadow-lg dark:shadow-neutral-950/50'
            : 'bg-white/60 dark:bg-neutral-900/60 backdrop-blur-xs border-neutral-200/50 dark:border-neutral-800/50'
        }`}
      >
        <div className="flex items-center justify-between gap-4">
          {/* Brand Monogram */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick('#home');
            }}
            className="flex items-center gap-3 group shrink-0"
            id="nav-brand-link"
          >
            <div className="w-9 h-9 rounded-xl bg-neutral-950 dark:bg-white text-white dark:text-neutral-950 flex items-center justify-center font-bold text-sm font-display tracking-wider transition-transform group-hover:scale-105 shadow-xs">
              UD
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-sm sm:text-base text-neutral-900 dark:text-white leading-tight font-display">
                {PERSONAL_INFO.name}
              </span>
              <span className="text-[11px] text-neutral-500 dark:text-neutral-400 font-mono leading-none">
                UI/UX Designer
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.href)}
                className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 cursor-pointer ${
                  activeSection === link.id
                    ? 'bg-neutral-900 text-white dark:bg-white dark:text-neutral-950 font-semibold shadow-xs'
                    : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800/60'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Right Action Controls: Resume + Theme Toggle */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Resume Button */}
            <button
              id="nav-resume-btn"
              onClick={onOpenResume}
              className="inline-flex items-center gap-1.5 px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 text-neutral-900 dark:text-white text-xs font-semibold font-mono transition-all duration-200 cursor-pointer shadow-xs active:scale-95"
              title="Open Official Resume"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Resume</span>
            </button>

            {/* Theme Toggle Button */}
            <button
              id="nav-theme-toggle-btn"
              onClick={toggleTheme}
              aria-label="Toggle Dark/Light Mode"
              className="p-2 rounded-full bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 text-neutral-700 dark:text-neutral-300 transition-colors cursor-pointer"
            >
              {isDark ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-neutral-700" />}
            </button>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors cursor-pointer"
              aria-label="Open Navigation Menu"
              id="mobile-menu-toggle"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 pt-3 border-t border-neutral-200 dark:border-neutral-800 flex flex-col gap-1 pb-2">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.href)}
                className={`text-left px-3.5 py-2 rounded-xl text-sm font-medium transition-colors ${
                  activeSection === link.id
                    ? 'bg-neutral-900 text-white dark:bg-white dark:text-neutral-950 font-bold'
                    : 'text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
};
