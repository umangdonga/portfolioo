import React from 'react';
import { motion } from 'motion/react';
import { ArrowDownRight, Mail, Linkedin, Globe } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroSectionProps {
  onScrollToWork: () => void;
  onScrollToContact: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onScrollToWork,
  onScrollToContact
}) => {
  const [portraitSrc, setPortraitSrc] = React.useState<string>(PERSONAL_INFO.portraitImage);

  return (
    <section
      id="home"
      className="relative pt-24 sm:pt-32 pb-16 lg:pb-24 overflow-hidden bg-grid-lines"
    >
      {/* Subtle radial fade for background grid to keep it extremely subtle */}
      <div className="absolute inset-0 bg-radial from-transparent via-white/85 to-white dark:via-neutral-950/85 dark:to-neutral-950 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Availability Badge */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neutral-200 dark:border-neutral-800 bg-white/90 dark:bg-neutral-900/90 backdrop-blur-md mb-6 shadow-xs"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          <span className="text-xs font-mono text-neutral-600 dark:text-neutral-300 uppercase tracking-wider">
            {PERSONAL_INFO.availability}
          </span>
        </motion.div>

        {/* Hero Grid: Left Content (Who I am -> What I do -> What I care about), Right Column (Portrait + Social Card) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: 7 Cols with controlled max-width for comfortable breathing room */}
          <div className="lg:col-span-7 flex flex-col justify-center max-w-xl">
            {/* Header Identity */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-6"
            >
              <span className="text-xs sm:text-sm font-mono tracking-widest text-neutral-500 dark:text-neutral-400 font-semibold uppercase block mb-2">
                {PERSONAL_INFO.label}
              </span>
              <h1
                id="hero-main-heading"
                className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-neutral-950 dark:text-white font-display tracking-[-0.03em] uppercase leading-[1.05] mb-2"
              >
                {PERSONAL_INFO.headline}
              </h1>
              <p className="text-lg sm:text-xl font-bold tracking-wider text-neutral-700 dark:text-neutral-300 font-display uppercase">
                {PERSONAL_INFO.role}
              </p>
            </motion.div>

            {/* Introduction: 3 Short Paragraphs, comfortable spacing */}
            <motion.div
              id="about"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-3.5 text-neutral-600 dark:text-neutral-300 text-sm sm:text-base leading-relaxed"
            >
              {PERSONAL_INFO.intro.map((paragraph, index) => (
                <p key={index}>
                  {paragraph}
                </p>
              ))}
            </motion.div>

            {/* Highlight Statement: Visually Separate */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="my-5 border-l-2 border-neutral-900 dark:border-white pl-4 py-1 bg-neutral-50/60 dark:bg-neutral-900/30 rounded-r-lg"
            >
              <p className="text-sm sm:text-base font-medium text-neutral-950 dark:text-neutral-100 leading-relaxed italic">
                "{PERSONAL_INFO.highlight}"
              </p>
            </motion.div>

            {/* Buttons: VIEW MY WORK & GET IN TOUCH */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap items-center gap-3.5 pt-2"
            >
              <button
                id="hero-view-work-btn"
                onClick={onScrollToWork}
                className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-neutral-950 text-white dark:bg-white dark:text-neutral-950 font-semibold text-xs sm:text-sm tracking-wider uppercase hover:opacity-90 active:scale-98 transition-all shadow-xs cursor-pointer"
              >
                <span>VIEW MY WORK</span>
                <ArrowDownRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
              </button>

              <button
                id="hero-get-in-touch-btn"
                onClick={onScrollToContact}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-neutral-300 dark:border-neutral-700 text-neutral-900 dark:text-white font-semibold text-xs sm:text-sm tracking-wider uppercase hover:bg-neutral-100 dark:hover:bg-neutral-900 active:scale-98 transition-all cursor-pointer"
              >
                <span>GET IN TOUCH</span>
                <Mail className="w-3.5 h-3.5 text-neutral-500 dark:text-neutral-400" />
              </button>
            </motion.div>
          </div>

          {/* Right Column: 5 Cols (Portrait + Profile Card) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 flex flex-col items-center lg:items-end w-full"
          >
            <div className="w-full max-w-sm sm:max-w-md">
              {/* Editorial Frame for Portrait */}
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-neutral-200 dark:border-neutral-800 bg-gradient-to-b from-neutral-100 via-neutral-150 to-neutral-200 dark:from-neutral-900 dark:via-neutral-900/90 dark:to-neutral-950 shadow-lg group">
                <div className="aspect-[4/5] w-full overflow-hidden relative flex items-end justify-center">
                  <img
                    id="hero-portrait-image"
                    src={portraitSrc}
                    alt={`${PERSONAL_INFO.name} — ${PERSONAL_INFO.role}`}
                    onError={() => {
                      if (portraitSrc !== PERSONAL_INFO.fallbackPortrait) {
                        setPortraitSrc(PERSONAL_INFO.fallbackPortrait);
                      }
                    }}
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-103"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-50 pointer-events-none" />
                </div>
              </div>

              {/* Profile Card below image */}
              <div
                id="hero-profile-card"
                className="mt-3.5 p-4 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white/95 dark:bg-neutral-900/95 backdrop-blur-md shadow-xs transition-all hover:border-neutral-300 dark:hover:border-neutral-700"
              >
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <h3 className="text-sm font-bold text-neutral-950 dark:text-white font-display">
                      {PERSONAL_INFO.cardRole}
                    </h3>
                    <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-0.5 font-mono">
                      {PERSONAL_INFO.cardFocus}
                    </p>
                  </div>

                  {/* Social Icons: Gmail, LinkedIn, Behance */}
                  <div className="flex items-center gap-1.5">
                    {/* Gmail */}
                    <a
                      id="social-gmail-link"
                      href={PERSONAL_INFO.socials.gmail}
                      className="p-2 rounded-full border border-neutral-200 dark:border-neutral-800 text-neutral-700 dark:text-neutral-300 hover:text-black dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors cursor-pointer"
                      title="Email Umang Donga"
                      aria-label="Send Email"
                    >
                      <Mail className="w-3.5 h-3.5" />
                    </a>

                    {/* LinkedIn */}
                    <a
                      id="social-linkedin-link"
                      href={PERSONAL_INFO.socials.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full border border-neutral-200 dark:border-neutral-800 text-neutral-700 dark:text-neutral-300 hover:text-black dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors cursor-pointer"
                      title="LinkedIn Profile"
                      aria-label="LinkedIn Profile"
                    >
                      <Linkedin className="w-3.5 h-3.5" />
                    </a>

                    {/* Behance */}
                    <a
                      id="social-behance-link"
                      href={PERSONAL_INFO.socials.behance}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full border border-neutral-200 dark:border-neutral-800 text-neutral-700 dark:text-neutral-300 hover:text-black dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors cursor-pointer"
                      title="Behance Portfolio"
                      aria-label="Behance Portfolio"
                    >
                      <Globe className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
