import React from 'react';
import { motion } from 'motion/react';
import { Search, Compass, Palette, CheckCircle2 } from 'lucide-react';
import { PROCESS_STEPS } from '../data/portfolioData';

export const ProcessSection: React.FC = () => {
  const stepIcons = [
    <Search className="w-5 h-5" key="search" />,
    <Compass className="w-5 h-5" key="compass" />,
    <Palette className="w-5 h-5" key="palette" />,
    <CheckCircle2 className="w-5 h-5" key="check" />
  ];

  return (
    <section
      id="process"
      className="py-20 lg:py-28 border-t border-neutral-200 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/20 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14 sm:mb-16">
          <div className="flex items-center gap-3 mb-3">
            <span className="w-2 h-2 rounded-full bg-neutral-900 dark:bg-white" />
            <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-neutral-500 dark:text-neutral-400 font-mono">
              Methodology
            </span>
          </div>
          <h2
            id="process-heading"
            className="text-2xl sm:text-3xl lg:text-4xl font-bold text-neutral-950 dark:text-white font-display tracking-tight mb-4"
          >
            Design Process
          </h2>
          <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
            A structured, human-centered framework turning ambiguous problems into intuitive, scalable digital interfaces.
          </p>
        </div>

        {/* 4-Step Process Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {PROCESS_STEPS.map((step, idx) => (
            <motion.div
              key={step.step}
              id={`process-step-${step.step}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="group flex flex-col justify-between p-6 sm:p-7 rounded-2xl sm:rounded-3xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/60 hover:border-neutral-400 dark:hover:border-neutral-600 transition-all duration-300 shadow-xs"
            >
              <div>
                {/* Step Number & Icon Header */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-2xl sm:text-3xl font-bold font-mono text-neutral-400 dark:text-neutral-500 group-hover:text-neutral-950 dark:group-hover:text-white transition-colors">
                    {step.step}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center text-neutral-800 dark:text-neutral-200">
                    {stepIcons[idx % stepIcons.length]}
                  </div>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-neutral-950 dark:text-white font-display mb-3">
                  {step.title}
                </h3>

                <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed mb-6 font-sans">
                  {step.description}
                </p>
              </div>

              {/* Activities Checklist */}
              <div className="pt-4 border-t border-neutral-100 dark:border-neutral-800">
                <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-400 dark:text-neutral-500 block mb-2 font-semibold">
                  Core Activities
                </span>
                <ul className="space-y-1.5">
                  {step.activities.map((act, aIdx) => (
                    <li
                      key={aIdx}
                      className="text-xs font-mono text-neutral-700 dark:text-neutral-300 flex items-start gap-1.5"
                    >
                      <span className="text-neutral-400 dark:text-neutral-600">•</span>
                      <span>{act}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
