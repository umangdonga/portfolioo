import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Printer, Download, ExternalLink, Mail, Phone, MapPin, Linkedin, Globe } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/75 backdrop-blur-xs transition-opacity"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 15 }}
          transition={{ duration: 0.25 }}
          className="relative w-full max-w-4xl max-h-[92vh] bg-neutral-100 dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-800 rounded-2xl shadow-2xl overflow-y-auto z-10 flex flex-col"
        >
          {/* Top Bar (Document Viewer Controls) */}
          <div className="sticky top-0 bg-neutral-900 text-white px-4 sm:px-6 py-3 flex items-center justify-between border-b border-neutral-800 z-30 shadow-sm print:hidden">
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
              <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2">
                <span className="text-xs sm:text-sm font-semibold tracking-wide">
                  Umang_Donga_Resume.pdf
                </span>
                <span className="text-[11px] text-neutral-400 font-mono hidden sm:inline">
                  (1 Page Official Resume)
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                id="resume-print-btn"
                onClick={handlePrint}
                className="px-3 sm:px-4 py-1.5 rounded-lg bg-white text-neutral-950 text-xs font-semibold hover:bg-neutral-200 transition-colors flex items-center gap-1.5 cursor-pointer shadow-xs active:scale-95"
                title="Print or Save PDF"
              >
                <Printer className="w-3.5 h-3.5" />
                <span>Print / Save PDF</span>
              </button>

              <button
                id="resume-close-btn"
                onClick={onClose}
                className="p-1.5 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-neutral-300 hover:text-white transition-colors cursor-pointer"
                aria-label="Close Resume"
                title="Close (Esc)"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Authentic Document Canvas (A4 Paper Aesthetic) */}
          <div className="p-3 sm:p-6 md:p-8 flex justify-center bg-neutral-200/70 dark:bg-neutral-950">
            <div
              id="printable-resume-document"
              className="w-full max-w-[800px] bg-white text-neutral-900 shadow-xl border border-neutral-300 dark:border-neutral-700 p-6 sm:p-10 md:p-12 font-sans text-xs sm:text-sm leading-normal selection:bg-neutral-200"
            >
              {/* Header */}
              <div className="text-center pb-4">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-neutral-950 tracking-tight font-display">
                  Umang Donga
                </h1>
                <p className="text-sm sm:text-base font-semibold text-neutral-800 mt-1 tracking-wide">
                  UI/UX Designer
                </p>

                {/* Contact Links Strip */}
                <div className="flex flex-wrap items-center justify-center gap-x-2.5 gap-y-1 text-xs text-neutral-700 mt-2.5 font-normal">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-neutral-500 shrink-0" />
                    Ahmedabad, Gujarat
                  </span>
                  <span className="text-neutral-400">|</span>
                  <a
                    href="tel:+917874388655"
                    className="hover:underline flex items-center gap-1 text-neutral-800"
                  >
                    <Phone className="w-3 h-3 text-neutral-500 shrink-0" />
                    +91 7874388655
                  </a>
                  <span className="text-neutral-400">|</span>
                  <a
                    href="mailto:umangdonga98@gmail.com"
                    className="hover:underline flex items-center gap-1 text-neutral-800"
                  >
                    <Mail className="w-3 h-3 text-neutral-500 shrink-0" />
                    umangdonga98@gmail.com
                  </a>
                  <span className="text-neutral-400">|</span>
                  <a
                    href="https://linkedin.com/in/umang-donga"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-900 font-medium hover:underline flex items-center gap-1"
                  >
                    <Linkedin className="w-3 h-3 text-neutral-700 shrink-0" />
                    linkedin.com/in/umang-donga
                  </a>
                </div>
              </div>

              {/* 1. Summary */}
              <div className="mt-4">
                <div className="border-b border-neutral-900 pb-1 mb-2">
                  <h2 className="text-sm sm:text-base font-bold text-neutral-950 uppercase tracking-wide">
                    Summary
                  </h2>
                </div>
                <p className="text-xs sm:text-sm text-neutral-800 leading-relaxed text-justify">
                  UI/UX Designer with experience in user research, wireframing, prototyping, interaction design, and high-fidelity UI design. Skilled in Figma, with a user-centered approach to solving complex problems and creating intuitive digital experiences. Experienced in developing end-to-end design solutions across mobile applications, product concepts, and service experiences.
                </p>
              </div>

              {/* 2. Skills */}
              <div className="mt-4">
                <div className="border-b border-neutral-900 pb-1 mb-2">
                  <h2 className="text-sm sm:text-base font-bold text-neutral-950 uppercase tracking-wide">
                    Skills
                  </h2>
                </div>
                <div className="space-y-1.5 text-xs sm:text-sm leading-relaxed">
                  <p>
                    <span className="font-bold text-neutral-950">UI/UX:</span>{' '}
                    <span className="text-neutral-800">
                      User Research, User Interviews, User Flows, Information Architecture, Wireframing, Prototyping, High-Fidelity Design, Interaction Design, UI Design, Design Systems, Usability Testing, UX Audits, Responsive Design, Accessibility
                    </span>
                  </p>
                  <p>
                    <span className="font-bold text-neutral-950">Tools:</span>{' '}
                    <span className="text-neutral-800">
                      Figma, Framer, Adobe Photoshop, Adobe Illustrator, CorelDRAW, Canva
                    </span>
                  </p>
                  <p>
                    <span className="font-bold text-neutral-950">Design Skills:</span>{' '}
                    <span className="text-neutral-800">
                      Visual Design, Typography, Color Theory, Design Thinking, Problem Solving, User-Centered Design
                    </span>
                  </p>
                </div>
              </div>

              {/* 3. Experience */}
              <div className="mt-4">
                <div className="border-b border-neutral-900 pb-1 mb-2">
                  <h2 className="text-sm sm:text-base font-bold text-neutral-950 uppercase tracking-wide">
                    Experience
                  </h2>
                </div>
                <div>
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-1.5">
                    <div className="font-bold text-neutral-950 text-xs sm:text-sm">
                      Freelance Jewellery Designer <span className="font-normal text-neutral-700">| Helicx Customized Jewellery</span>
                    </div>
                    <div className="text-xs text-neutral-700 font-medium sm:text-right">
                      Ahmedabad, Gujarat | 3+ Years
                    </div>
                  </div>
                  <div className="space-y-1 text-xs sm:text-sm text-neutral-800 pl-3">
                    <p className="relative before:content-['•'] before:absolute before:-left-3 before:text-neutral-950">
                      Created customized jewellery designs based on client requirements, preferences, and design specifications.
                    </p>
                    <p className="relative before:content-['•'] before:absolute before:-left-3 before:text-neutral-950">
                      Communicated with clients to understand design needs and translated ideas into customized visual concepts.
                    </p>
                  </div>
                </div>
              </div>

              {/* 4. Projects */}
              <div className="mt-4">
                <div className="border-b border-neutral-900 pb-1 mb-2">
                  <h2 className="text-sm sm:text-base font-bold text-neutral-950 uppercase tracking-wide">
                    Projects
                  </h2>
                </div>
                <div className="space-y-3 text-xs sm:text-sm">
                  {/* Campus Connect */}
                  <div>
                    <h3 className="font-bold text-neutral-950">
                      Campus Connect - Smart Campus App
                    </h3>
                    <p className="text-neutral-800 mt-0.5 leading-relaxed">
                      Designed an all-in-one campus navigation and information app to help students access classrooms, bus timings, canteen information, hostel services, events, and campus updates.
                    </p>
                    <p className="text-neutral-800 mt-0.5 leading-relaxed">
                      Designed user flows and navigation experiences to simplify access to essential campus services.
                    </p>
                  </div>

                  {/* BookMyShow Kids App */}
                  <div>
                    <h3 className="font-bold text-neutral-950">
                      BookMyShow Kids App - UI/UX Case Study
                    </h3>
                    <p className="text-neutral-800 mt-0.5 leading-relaxed">
                      Designed a kid-friendly movie booking experience for children aged 8–12 with simplified navigation and age-appropriate content.
                    </p>
                    <p className="text-neutral-800 mt-0.5 leading-relaxed">
                      Conducted user research through survey responses and child interviews to identify usability and safety challenges.
                    </p>
                  </div>

                  {/* Care Band */}
                  <div>
                    <h3 className="font-bold text-neutral-950">
                      Care Band: Product Innovation
                    </h3>
                    <p className="text-neutral-800 mt-0.5 leading-relaxed">
                      Designed a wearable safety solution combining QR-based identification, location tracking, and emergency information.
                    </p>
                    <p className="text-neutral-800 mt-0.5 leading-relaxed">
                      Defined the user experience around quick access to essential user information during emergency situations.
                    </p>
                  </div>

                  {/* Right-aligned Portfolio Link */}
                  <div className="text-right pt-1">
                    <a
                      href="https://behance.net/umangdonga"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-semibold text-neutral-900 hover:underline inline-flex items-center gap-1"
                    >
                      <Globe className="w-3 h-3 text-neutral-600" />
                      <span>Portfolio: behance.net/umangdonga</span>
                      <ExternalLink className="w-3 h-3 text-neutral-400" />
                    </a>
                  </div>
                </div>
              </div>

              {/* 5. Education */}
              <div className="mt-4">
                <div className="border-b border-neutral-900 pb-1 mb-2">
                  <h2 className="text-sm sm:text-base font-bold text-neutral-950 uppercase tracking-wide">
                    Education
                  </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
                  {/* Master's */}
                  <div>
                    <div className="font-bold text-neutral-950">
                      M.Des in UI/UX Design (Pursuing) <span className="font-medium">| CGPA: 9.6</span>
                    </div>
                    <div className="text-neutral-800 font-medium">Indus University</div>
                    <div className="text-xs text-neutral-600">2026-Present</div>
                  </div>

                  {/* Bachelor's */}
                  <div>
                    <div className="font-bold text-neutral-950">
                      Bachelor of Computer Application <span className="font-medium">| CGPA: 9.6</span>
                    </div>
                    <div className="text-neutral-800 font-medium">Silver Oak University, Ahmedabad</div>
                    <div className="text-xs text-neutral-600">2021-2024</div>
                  </div>
                </div>
              </div>

              {/* 6. Certificates */}
              <div className="mt-4">
                <div className="border-b border-neutral-900 pb-1 mb-2">
                  <h2 className="text-sm sm:text-base font-bold text-neutral-950 uppercase tracking-wide">
                    Certificates
                  </h2>
                </div>
                <div className="space-y-1.5 text-xs sm:text-sm">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-0.5">
                    <span className="text-neutral-900 font-medium before:content-['•'] before:mr-2">
                      Google UX Design Professional Certificate
                    </span>
                    <span className="text-xs text-neutral-600 sm:text-right pl-4 sm:pl-0 font-mono">
                      Google | Coursera | 2026
                    </span>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-0.5">
                    <span className="text-neutral-900 font-medium before:content-['•'] before:mr-2">
                      IBM UI/UX Designer Certificate
                    </span>
                    <span className="text-xs text-neutral-600 sm:text-right pl-4 sm:pl-0 font-mono">
                      IBM | 2026
                    </span>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-0.5">
                    <span className="text-neutral-900 font-medium before:content-['•'] before:mr-2">
                      Generative AI: Prompt Engineering Basics
                    </span>
                    <span className="text-xs text-neutral-600 sm:text-right pl-4 sm:pl-0 font-mono">
                      IBM | Coursera | 2026
                    </span>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-0.5">
                    <span className="text-neutral-900 font-medium before:content-['•'] before:mr-2">
                      Generative AI Mastermind
                    </span>
                    <span className="text-xs text-neutral-600 sm:text-right pl-4 sm:pl-0 font-mono">
                      Outskill | 2026
                    </span>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-0.5">
                    <span className="text-neutral-900 font-medium before:content-['•'] before:mr-2">
                      Python 3.4.3 Training
                    </span>
                    <span className="text-xs text-neutral-600 sm:text-right pl-4 sm:pl-0 font-mono">
                      Spoken Tutorial Project | 2024
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
