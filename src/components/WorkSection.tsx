import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import { Project } from '../types';

interface WorkSectionProps {
  onSelectProject: (project: Project) => void;
}

export const WorkSection: React.FC<WorkSectionProps> = ({ onSelectProject }) => {
  return (
    <section
      id="work"
      className="py-20 lg:py-28 border-t border-neutral-200 dark:border-neutral-800 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-3">
              <span className="w-2 h-2 rounded-full bg-neutral-900 dark:bg-white" />
              <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-neutral-500 dark:text-neutral-400 font-mono">
                Selected Works
              </span>
            </div>
            <h2
              id="work-heading"
              className="text-2xl sm:text-3xl lg:text-4xl font-bold text-neutral-950 dark:text-white font-display tracking-tight"
            >
              My Work
            </h2>
            <p className="mt-2 text-base text-neutral-600 dark:text-neutral-400 leading-relaxed">
              Selected projects exploring product design, UI/UX, research, interaction, and visual design.
            </p>
          </div>

          <span className="text-xs font-mono px-3 py-1.5 rounded-full border border-neutral-200 dark:border-neutral-800 text-neutral-500 self-start md:self-end">
            {PROJECTS.length} Projects
          </span>
        </div>

        {/* 6 Project Cards Grid (3 per row on desktop) */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {PROJECTS.map((project) => (
              <motion.div
                layout
                key={project.id}
                id={`project-card-${project.id}`}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.35 }}
                className="group flex flex-col rounded-2xl sm:rounded-3xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/40 overflow-hidden hover:border-neutral-400 dark:hover:border-neutral-600 transition-all duration-300 shadow-xs hover:shadow-xl"
              >
                {/* Large Project Image with Interactive Zoom Hover Effect */}
                <div
                  onClick={() => onSelectProject(project)}
                  className="aspect-[16/11] w-full overflow-hidden relative bg-neutral-100 dark:bg-neutral-800 cursor-pointer"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/95 text-neutral-950 text-xs font-semibold backdrop-blur-sm shadow-md">
                      View Process <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                  </div>

                  {/* Category Tag Pill */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-white/95 dark:bg-neutral-950/85 backdrop-blur-md text-neutral-900 dark:text-neutral-100 border border-neutral-200/60 dark:border-neutral-800/60 shadow-xs">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 sm:p-7 flex flex-col flex-grow justify-between">
                  <div>
                    <h3
                      onClick={() => onSelectProject(project)}
                      className="text-lg sm:text-xl font-bold text-neutral-950 dark:text-white font-display mb-2 group-hover:text-neutral-600 dark:group-hover:text-neutral-300 cursor-pointer transition-colors"
                    >
                      {project.title}
                    </h3>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed mb-4">
                      {project.description}
                    </p>
                  </div>

                  {/* Footer: Action Buttons */}
                  <div className="pt-4 border-t border-neutral-100 dark:border-neutral-800/80 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                    <button
                      id={`view-process-btn-${project.id}`}
                      onClick={() => onSelectProject(project)}
                      className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors cursor-pointer"
                    >
                      <span>View Process</span>
                    </button>

                    <a
                      id={`view-behance-btn-${project.id}`}
                      href={project.behanceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold bg-neutral-950 dark:bg-white text-white dark:text-neutral-950 hover:opacity-90 transition-opacity cursor-pointer shadow-xs"
                    >
                      <span>Full Case Study</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};
