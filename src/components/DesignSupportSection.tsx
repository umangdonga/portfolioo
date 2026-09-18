import React from 'react';
import { motion } from 'motion/react';
import { Compass, Sparkles, Feather, ArrowRight } from 'lucide-react';
import { DESIGN_SUPPORT_POINTS } from '../data/portfolioData';

export const DesignSupportSection: React.FC = () => {
  const icons = [
    <Compass className="w-5 h-5" key="compass" />,
    <Sparkles className="w-5 h-5" key="sparkles" />,
    <Feather className="w-5 h-5" key="feather" />
  ];

  return (
    <section
      id="philosophy"
      className="py-20 lg:py-28 border-t border-neutral-200 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14 sm:mb-16">
          <div className="flex items-center gap-3 mb-3">
            <span className="w-2 h-2 rounded-full bg-neutral-900 dark:bg-white" />
            <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-neutral-500 dark:text-neutral-400">
              Design Philosophy
            </span>
          </div>
          <h2
            id="philosophy-heading"
            className="text-2xl sm:text-3xl lg:text-4xl font-bold text-neutral-950 dark:text-white font-display tracking-tight mb-4"
          >
            Design Support with Clear Direction
          </h2>
          <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed">
            From understanding the problem to shaping the final interface, I focus on creating clear design decisions backed by research, structure, and real user needs.
          </p>
        </div>

        {/* 3 Supporting Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {DESIGN_SUPPORT_POINTS.map((point, idx) => (
            <motion.div
              key={point.title}
              id={`philosophy-card-${point.title.toLowerCase()}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -4 }}
              className="p-8 rounded-2xl sm:rounded-3xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/60 transition-all duration-300 shadow-xs hover:border-neutral-400 dark:hover:border-neutral-600 flex flex-col justify-between"
            >
              <div>
                {/* Icon Pill */}
                <div className="w-12 h-12 rounded-2xl bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center text-neutral-900 dark:text-white mb-6">
                  {icons[idx]}
                </div>

                <div className="mb-2">
                  <span className="text-xs font-mono text-neutral-400 dark:text-neutral-500 uppercase">
                    0{idx + 1} Pillar
                  </span>
                  <h3 className="text-xl font-bold text-neutral-950 dark:text-white font-display mt-1">
                    {point.title}
                  </h3>
                </div>

                <p className="text-sm font-medium text-neutral-800 dark:text-neutral-200 mb-3">
                  {point.description}
                </p>

                <p className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed">
                  {point.details}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-neutral-100 dark:border-neutral-800 flex items-center justify-between text-xs text-neutral-400">
                <span>Value Driver</span>
                <span className="font-mono text-neutral-900 dark:text-white">Empathy & Intent</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
