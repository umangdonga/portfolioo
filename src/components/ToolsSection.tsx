import React from 'react';
import { motion } from 'motion/react';
import { TOOLS } from '../data/portfolioData';

export const ToolsSection: React.FC = () => {
  // Clean minimal vector icon renderers
  const renderToolIcon = (iconType: string) => {
    switch (iconType) {
      case 'figma':
        return (
          <svg className="w-6 h-6" viewBox="0 0 38 57" fill="none">
            <path d="M19 28.5C19 23.2533 23.2533 19 28.5 19C33.7467 19 38 23.2533 38 28.5C38 33.7467 33.7467 38 28.5 38C23.2533 38 19 33.7467 19 28.5Z" fill="currentColor"/>
            <path d="M0 47.5C0 42.2533 4.25329 38 9.5 38H19V47.5C19 52.7467 14.7467 57 9.5 57C4.25329 57 0 52.7467 0 47.5Z" fill="currentColor"/>
            <path d="M19 0V19H28.5C33.7467 19 38 14.7467 38 9.5C38 4.25329 33.7467 0 28.5 0H19Z" fill="currentColor"/>
            <path d="M0 9.5C0 14.7467 4.25329 19 9.5 19H19V0H9.5C4.25329 0 0 4.25329 0 9.5Z" fill="currentColor"/>
            <path d="M0 28.5C0 33.7467 4.25329 38 9.5 38H19V19H9.5C4.25329 19 0 23.2533 0 28.5Z" fill="currentColor"/>
          </svg>
        );
      case 'framer':
        return (
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
            <path d="M4 0h16v8h-8zM4 8h8l8 8H4zM4 16h8v8z" />
          </svg>
        );
      case 'illustrator':
        return (
          <div className="w-6 h-6 rounded-md bg-neutral-900 dark:bg-white text-white dark:text-neutral-950 font-bold flex items-center justify-center text-xs font-mono">
            Ai
          </div>
        );
      case 'photoshop':
        return (
          <div className="w-6 h-6 rounded-md bg-neutral-900 dark:bg-white text-white dark:text-neutral-950 font-bold flex items-center justify-center text-xs font-mono">
            Ps
          </div>
        );
      case 'canva':
        return (
          <div className="w-6 h-6 rounded-full border-2 border-current flex items-center justify-center font-bold text-xs italic">
            C
          </div>
        );
      case 'coreldraw':
        return (
          <div className="w-6 h-6 rounded-md border border-dashed border-current flex items-center justify-center text-xs font-bold font-mono">
            CDR
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section
      id="tools"
      className="py-20 lg:py-28 border-t border-neutral-200 dark:border-neutral-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-14">
          <div className="flex items-center gap-3 mb-3">
            <span className="w-2 h-2 rounded-full bg-neutral-900 dark:bg-white" />
            <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-neutral-500 dark:text-neutral-400">
              Toolkit & Software
            </span>
          </div>
          <h2
            id="tools-heading"
            className="text-2xl sm:text-3xl lg:text-4xl font-bold text-neutral-950 dark:text-white font-display tracking-tight"
          >
            Tools I Work With
          </h2>
          <p className="mt-2 text-sm sm:text-base text-neutral-600 dark:text-neutral-400">
            Industry-standard tools for wireframing, high-fidelity UI design, vector illustration, and interactive prototyping.
          </p>
        </div>

        {/* Compact Responsive Grid of Tool Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
          {TOOLS.map((tool, idx) => (
            <motion.div
              key={tool.name}
              id={`tool-card-${tool.name.toLowerCase().replace(/\s+/g, '-')}`}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.06 }}
              whileHover={{ y: -4 }}
              className="group p-5 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/40 hover:border-neutral-400 dark:hover:border-neutral-600 transition-all duration-200 flex flex-col items-center text-center justify-center min-h-[140px] shadow-xs cursor-default"
            >
              {/* Tool Icon */}
              <div className="w-12 h-12 rounded-xl bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-white flex items-center justify-center mb-3 transition-transform group-hover:scale-110">
                {renderToolIcon(tool.iconType)}
              </div>

              {/* Tool Name */}
              <h3 className="text-sm font-bold text-neutral-950 dark:text-white font-display">
                {tool.name}
              </h3>

              {/* Tool Category subtitle */}
              <p className="text-[11px] text-neutral-500 dark:text-neutral-400 mt-0.5">
                {tool.category}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
