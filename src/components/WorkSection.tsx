import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight, Eye } from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import { Project } from '../types';

interface WorkSectionProps {
  onSelectProject: (project: Project) => void;
}

export const WorkSection: React.FC<WorkSectionProps> = ({ onSelectProject }) => {
  const [showAll, setShowAll] = useState<boolean>(false);
  const displayedProjects = showAll ? PROJECTS : PROJECTS.slice(0, 4);

  return (
    <section
      id="work"
      className="py-20 lg:py-28 border-t border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12 sm:mb-16">
          <div className="flex items-center gap-3 mb-3">
            <span className="w-2 h-2 rounded-full bg-neutral-900 dark:bg-white" />
            <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-neutral-500 dark:text-neutral-400 font-mono">
              Selected Work
            </span>
          </div>

          <h2
            id="work-heading"
            className="text-2xl sm:text-3xl lg:text-4xl font-bold text-neutral-950 dark:text-white font-display tracking-tight"
          >
            Featured Projects
          </h2>
          <p className="mt-2 text-base sm:text-lg text-neutral-600 dark:text-neutral-400">
            Thoughtful digital experiences, heuristic analyses, and mobile products designed around real user needs.
          </p>
        </div>

        {/* 2-Column Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10">
          <AnimatePresence mode="popLayout">
            {displayedProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                id={`project-card-${project.id}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="group flex flex-col rounded-3xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/40 overflow-hidden hover:border-neutral-400 dark:hover:border-neutral-600 transition-all duration-300 shadow-xs hover:shadow-xl justify-between"
              >
                {/* Project Image Preview Canvas */}
                <div
                  onClick={() => onSelectProject(project)}
                  className="aspect-[16/10] w-full overflow-hidden relative bg-neutral-100 dark:bg-neutral-900 cursor-pointer border-b border-neutral-200 dark:border-neutral-800/80"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-103"
                    loading="lazy"
                  />

                  {/* Hover Floating Action */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-black/40 backdrop-blur-xs">
                    <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-neutral-950 text-xs font-bold font-mono tracking-wider shadow-xl hover:scale-105 transition-transform">
                      <Eye className="w-4 h-4" /> View Case Study
                    </span>
                  </div>

                  {/* Top Badge: Timeline */}
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-white/90 dark:bg-neutral-950/90 backdrop-blur-md border border-neutral-200 dark:border-neutral-800 text-[11px] font-mono text-neutral-700 dark:text-neutral-300 shadow-xs">
                    {project.timeline}
                  </div>
                </div>

                {/* Project Meta & Information */}
                <div className="p-6 sm:p-7 flex flex-col justify-between flex-1">
                  <div>
                    <div className="flex items-center gap-2 text-xs font-mono text-neutral-500 dark:text-neutral-400 mb-2">
                      <span className="font-semibold text-neutral-800 dark:text-neutral-200">
                        {project.category}
                      </span>
                    </div>

                    <div className="flex items-start justify-between gap-3 mb-3">
                      <h3
                        onClick={() => onSelectProject(project)}
                        className="text-lg sm:text-xl font-bold text-neutral-950 dark:text-white font-display hover:underline cursor-pointer"
                      >
                        {project.title}
                      </h3>
                      <button
                        onClick={() => onSelectProject(project)}
                        className="p-2 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 group-hover:bg-neutral-950 dark:group-hover:bg-white group-hover:text-white dark:group-hover:text-neutral-950 transition-colors shrink-0 cursor-pointer"
                        title="View Case Study"
                      >
                        <ArrowUpRight className="w-4 h-4" />
                      </button>
                    </div>

                    <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 font-sans line-clamp-2 leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Explore All Toggle Button */}
        {PROJECTS.length > 4 && (
          <div className="mt-12 sm:mt-14 text-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-neutral-100 dark:bg-neutral-900 hover:bg-neutral-200 dark:hover:bg-neutral-800 text-neutral-900 dark:text-white font-mono text-xs uppercase tracking-wider font-semibold border border-neutral-300 dark:border-neutral-700 transition-all duration-200 cursor-pointer shadow-xs"
            >
              <span>{showAll ? 'Show Fewer Projects' : 'Explore All Projects'}</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
