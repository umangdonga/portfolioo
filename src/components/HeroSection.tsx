import React, { useState, useMemo } from 'react';
import { motion } from 'motion/react';
import { ArrowDown, Mail, Phone, Linkedin, Sparkles, ArrowRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { UMANG_DEFAULT_PORTRAIT_SVG } from '../data/highlightSvgs';

interface HeroSectionProps {
  onScrollToWork: () => void;
  onScrollToContact: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onScrollToWork,
  onScrollToContact
}) => {
  const candidates = useMemo(() => {
    const list: string[] = [];
    if (PERSONAL_INFO.portraitCandidates) {
      list.push(...PERSONAL_INFO.portraitCandidates);
    } else if (PERSONAL_INFO.portraitImage) {
      list.push(PERSONAL_INFO.portraitImage);
    }
    list.push(UMANG_DEFAULT_PORTRAIT_SVG);
    return list;
  }, []);

  const [candidateIndex, setCandidateIndex] = useState<number>(0);

  const handleImageError = () => {
    if (candidateIndex < candidates.length - 1) {
      setCandidateIndex((prev) => prev + 1);
    }
  };

  return (
    <section
      id="home"
      className="relative pt-32 sm:pt-36 lg:pt-44 pb-20 lg:pb-28 overflow-hidden bg-white dark:bg-neutral-950 transition-colors duration-300"
    >
      {/* Anchor for #about navigation */}
      <div id="about" className="absolute -top-24 pointer-events-none" />

      {/* Ambient background blur circles */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-neutral-200/50 dark:bg-neutral-800/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/3 w-96 h-96 bg-neutral-200/40 dark:bg-neutral-800/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: 7 Cols (Intro, Typography, Bio & CTAs) */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Greeting Tag */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-neutral-700 dark:text-neutral-300 font-mono text-xs font-semibold tracking-wider uppercase mb-5"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>{PERSONAL_INFO.label}</span>
            </motion.div>

            {/* Main Name & Role Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              id="hero-name-heading"
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-neutral-950 dark:text-white font-display tracking-tight leading-[1.08] mb-3"
            >
              {PERSONAL_INFO.headline}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="text-lg sm:text-xl font-semibold text-neutral-600 dark:text-neutral-400 font-mono tracking-wide uppercase mb-6"
            >
              {PERSONAL_INFO.role} & M.DES STUDENT
            </motion.p>

            {/* Intro Paragraphs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-4 text-base sm:text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed max-w-2xl mb-8"
            >
              {PERSONAL_INFO.intro.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </motion.div>

            {/* Philosophy Highlight Box */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="p-4 sm:p-5 rounded-2xl bg-neutral-50 dark:bg-neutral-900/60 border border-neutral-200 dark:border-neutral-800 text-sm sm:text-base text-neutral-800 dark:text-neutral-200 font-medium italic mb-8 border-l-4 border-l-neutral-900 dark:border-l-white"
            >
              "{PERSONAL_INFO.highlight}"
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4 w-full sm:w-auto"
            >
              <button
                type="button"
                id="hero-explore-work-btn"
                onClick={onScrollToWork}
                className="px-7 py-3.5 rounded-full bg-neutral-950 dark:bg-white text-white dark:text-neutral-950 font-mono text-xs uppercase tracking-wider font-bold flex items-center justify-center gap-2 shadow-lg hover:bg-neutral-800 dark:hover:bg-neutral-200 hover:scale-102 transition-all duration-200 cursor-pointer"
              >
                <span>Explore Work</span>
                <ArrowDown className="w-4 h-4" />
              </button>

              <button
                type="button"
                id="hero-get-in-touch-btn"
                onClick={onScrollToContact}
                className="px-7 py-3.5 rounded-full bg-neutral-100 dark:bg-neutral-900 hover:bg-neutral-200 dark:hover:bg-neutral-800 text-neutral-900 dark:text-white font-mono text-xs uppercase tracking-wider font-semibold border border-neutral-300 dark:border-neutral-700 flex items-center justify-center gap-2 transition-all duration-200 cursor-pointer"
              >
                <span>Get in Touch</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>

            {/* Availability Status */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="mt-6 flex items-center gap-2.5 text-xs font-mono text-neutral-500 dark:text-neutral-400"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
              </span>
              <span>{PERSONAL_INFO.availability}</span>
            </motion.div>
          </div>

          {/* Right Column: 5 Cols (Designer Profile Card) */}
          <div className="lg:col-span-5 flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              id="hero-profile-card"
              className="w-full max-w-md rounded-3xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900/70 p-5 sm:p-6 shadow-xl relative"
            >
              {/* Photo Container */}
              <div className="aspect-square w-full rounded-2xl overflow-hidden bg-[#f7f5ed] dark:bg-[#1a1c22] relative mb-5 border border-neutral-200 dark:border-neutral-700 shadow-inner">
                <img
                  src={candidates[candidateIndex]}
                  alt={PERSONAL_INFO.name}
                  onError={handleImageError}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-contain filter hover:scale-102 transition-transform duration-500"
                />

                {/* Floating Top Tag */}
                <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-white/90 dark:bg-black/80 backdrop-blur-md text-[11px] font-mono font-semibold text-neutral-900 dark:text-white border border-neutral-200 dark:border-neutral-700 shadow-xs flex items-center gap-1.5">
                  <Sparkles className="w-3 h-3 text-neutral-700 dark:text-neutral-300" />
                  <span>UI/UX & Research</span>
                </div>
              </div>

              {/* Quick Social & Contact Icons */}
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <a
                    href={PERSONAL_INFO.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-white dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 hover:text-neutral-950 dark:hover:text-white border border-neutral-200 dark:border-neutral-700 transition-colors"
                    title="LinkedIn Profile"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a
                    href={PERSONAL_INFO.socials.behance}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-white dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 hover:text-neutral-950 dark:hover:text-white border border-neutral-200 dark:border-neutral-700 transition-colors font-mono font-bold text-xs"
                    title="Behance Profile"
                  >
                    Bē
                  </a>
                </div>

                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-700 border border-neutral-200 dark:border-neutral-700 text-xs font-mono font-medium transition-colors"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Email Me</span>
                </a>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
