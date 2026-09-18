import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { PROCESS_STEPS } from '../data/portfolioData';

export const ProcessSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  return (
    <section
      id="process"
      className="py-20 lg:py-28 border-t border-neutral-200 dark:border-neutral-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-14 sm:mb-16 max-w-3xl">
          <div className="flex items-center gap-3 mb-3">
            <span className="w-2 h-2 rounded-full bg-neutral-900 dark:bg-white" />
            <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-neutral-500 dark:text-neutral-400">
              Methodology & Craft
            </span>
          </div>
          <h2
            id="process-heading"
            className="text-2xl sm:text-3xl lg:text-4xl font-bold text-neutral-950 dark:text-white font-display tracking-tight"
          >
            My Design Process
          </h2>
          <p className="mt-3 text-base sm:text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
            A structured, iterative design framework ensuring every interface is rooted in user research, functional clarity, and empirical testing.
          </p>
        </div>

        {/* 4 Connected Process Cards */}
        <div className="relative">
          {/* Subtle Connecting Line Behind Steps on Desktop */}
          <div className="hidden lg:block absolute top-12 left-10 right-10 h-0.5 bg-neutral-200 dark:bg-neutral-800 -z-0" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            {PROCESS_STEPS.map((step, idx) => {
              const isSelected = activeStep === idx;
              return (
                <motion.div
                  key={step.step}
                  id={`process-step-${step.step}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  onClick={() => setActiveStep(idx)}
                  className={`group p-6 sm:p-7 rounded-2xl border transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                    isSelected
                      ? 'border-neutral-900 dark:border-white bg-neutral-50 dark:bg-neutral-900 shadow-sm'
                      : 'border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 hover:border-neutral-400 dark:hover:border-neutral-700'
                  }`}
                >
                  <div>
                    {/* Step Number Badge */}
                    <div className="flex items-center justify-between mb-6">
                      <span className="text-2xl font-bold font-display text-neutral-950 dark:text-white">
                        {step.step}
                      </span>
                      <span className="text-xs font-mono px-2 py-0.5 rounded-full border border-neutral-200 dark:border-neutral-800 text-neutral-500">
                        Phase {idx + 1}
                      </span>
                    </div>

                    {/* Step Title */}
                    <h3 className="text-lg font-bold text-neutral-950 dark:text-white font-display mb-3">
                      {step.title}
                    </h3>

                    {/* Step Description */}
                    <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed mb-6">
                      {step.description}
                    </p>
                  </div>

                  {/* Key Activities List */}
                  <div className="pt-4 border-t border-neutral-100 dark:border-neutral-800/80">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-400 block mb-2">
                      Key Deliverables
                    </span>
                    <ul className="space-y-1.5">
                      {step.activities.slice(0, 3).map((act, aIdx) => (
                        <li key={aIdx} className="text-xs text-neutral-600 dark:text-neutral-300 flex items-center gap-1.5">
                          <CheckCircle2 className="w-3 h-3 text-neutral-400 shrink-0" />
                          <span>{act}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
