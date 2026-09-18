import React, { useState, useEffect } from 'react';
import { Sun, Moon, FileText, Menu, X, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: (value: boolean | ((prev: boolean) => boolean)) => void;
  onOpenResume: () => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  darkMode,
  setDarkMode,
  onOpenResume,
  activeSection
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home', id: 'home' },
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Work', href: '#work', id: 'work' },
    { label: 'Skills', href: '#skills', id: 'skills' },
    { label: 'Process', href: '#process', id: 'process' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleLinkClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const navOffset = 80;
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
      className="fixed top-3 sm:top-5 left-0 right-0 z-50 px-3 sm:px-6 pointer-events-none transition-all duration-300"
    >
      <div className="max-w-5xl mx-auto pointer-events-auto rounded-full bg-white/85 dark:bg-neutral-900/85 backdrop-blur-xl border border-neutral-200/90 dark:border-neutral-800/90 shadow-md sm:shadow-lg px-3 sm:px-5 py-2 transition-all">
        <div className="flex items-center justify-between gap-3">
          {/* Brand / Logo */}
          <a
            id="brand-logo-link"
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="group flex items-center gap-2 text-sm sm:text-base font-bold tracking-tight text-neutral-950 dark:text-white"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neutral-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-neutral-900 dark:bg-white transition-transform group-hover:scale-125" />
            </span>
            <span className="font-display font-bold tracking-tight">{PERSONAL_INFO.name}</span>
          </a>

          {/* Desktop Navigation Links */}
          <nav id="desktop-nav" className="hidden md:flex items-center gap-0.5 px-2 py-1 rounded-full bg-neutral-100/70 dark:bg-neutral-800/60 border border-neutral-200/60 dark:border-neutral-700/60">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  id={`nav-link-${link.id}`}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(link.href);
                  }}
                  className={`relative px-3 py-1 rounded-full text-xs lg:text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? 'text-neutral-950 dark:text-white font-semibold'
                      : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-white'
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="activeNavPill"
                      className="absolute inset-0 rounded-full bg-white dark:bg-neutral-950 shadow-xs -z-10"
                      transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                    />
                  )}
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Right Actions: Resume Button & Dark/Light Switch */}
          <div className="flex items-center gap-2 sm:gap-2.5">
            <button
              id="resume-download-button"
              onClick={onOpenResume}
              className="inline-flex items-center gap-1.5 px-3 sm:px-4 py-1.5 rounded-full text-xs font-semibold bg-neutral-950 text-white hover:bg-neutral-800 dark:bg-white dark:text-neutral-950 dark:hover:bg-neutral-100 transition-all shadow-xs cursor-pointer active:scale-95"
              title="View & Download Resume"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Resume</span>
            </button>

            {/* Dark / Light Mode Switch */}
            <button
              id="theme-toggle-button"
              onClick={() => setDarkMode((prev) => !prev)}
              aria-label={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              className="p-1.5 sm:p-2 rounded-full border border-neutral-200 dark:border-neutral-800 bg-neutral-100/80 dark:bg-neutral-800/80 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors cursor-pointer"
              title={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            >
              <motion.div
                key={darkMode ? 'dark' : 'light'}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                {darkMode ? (
                  <Sun className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-300" />
                ) : (
                  <Moon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-neutral-700" />
                )}
              </motion.div>
            </button>

            {/* Mobile Hamburger Menu Toggle */}
            <button
              id="mobile-menu-toggle-button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-1.5 rounded-full border border-neutral-200 dark:border-neutral-800 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-nav-drawer"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white dark:bg-neutral-950 border-b border-neutral-200 dark:border-neutral-800 px-6 py-5 shadow-xl overflow-hidden"
          >
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  id={`mobile-nav-link-${link.id}`}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(link.href);
                  }}
                  className={`px-3 py-2 rounded-lg text-base font-medium flex items-center justify-between ${
                    activeSection === link.id
                      ? 'bg-neutral-100 dark:bg-neutral-900 text-neutral-950 dark:text-white font-semibold'
                      : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-white'
                  }`}
                >
                  <span>{link.label}</span>
                  <ArrowUpRight className="w-4 h-4 opacity-40" />
                </a>
              ))}
              <div className="pt-3 border-t border-neutral-200 dark:border-neutral-800 flex items-center justify-between">
                <span className="text-xs text-neutral-500 dark:text-neutral-400">
                  {PERSONAL_INFO.role}
                </span>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenResume();
                  }}
                  className="text-xs font-semibold text-neutral-900 dark:text-white underline underline-offset-4"
                >
                  View Resume
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
