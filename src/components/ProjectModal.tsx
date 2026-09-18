import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, CheckCircle2, Calendar, User, Sparkles, ExternalLink } from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/70 backdrop-blur-xs transition-opacity"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          className="relative w-full max-w-4xl max-h-[90vh] bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 rounded-2xl sm:rounded-3xl shadow-2xl overflow-y-auto z-10"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            aria-label="Close Case Study"
            className="sticky top-4 right-4 ml-auto mr-4 mt-4 z-20 p-2 rounded-full bg-white/80 dark:bg-neutral-900/80 backdrop-blur-md border border-neutral-200 dark:border-neutral-700 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors flex items-center justify-center cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Modal Content */}
          <div className="p-6 sm:p-10 -mt-10">
            {/* Header Tags */}
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="px-3 py-1 rounded-full text-xs font-mono font-medium bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200">
                {project.category}
              </span>
              <span className="flex items-center gap-1 text-xs font-mono text-emerald-600 dark:text-emerald-400">
                <Sparkles className="w-3.5 h-3.5" />
                {project.impact}
              </span>
            </div>

            {/* Title */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-neutral-950 dark:text-white font-display mb-6">
              {project.title}
            </h2>

            {/* Hero Image */}
            <div className="rounded-2xl overflow-hidden border border-neutral-200 dark:border-neutral-800 mb-8 max-h-[500px] flex items-center justify-center bg-neutral-950 p-2 sm:p-4">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-auto max-h-[460px] object-contain rounded-lg"
              />
            </div>

            {/* Quick Meta Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 p-5 rounded-2xl bg-neutral-50 dark:bg-neutral-900/60 border border-neutral-200 dark:border-neutral-800 mb-8 text-xs">
              <div>
                <span className="text-neutral-400 block mb-1">Role</span>
                <span className="font-semibold text-neutral-900 dark:text-white flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5" /> {project.role}
                </span>
              </div>
              <div>
                <span className="text-neutral-400 block mb-1">Duration</span>
                <span className="font-semibold text-neutral-900 dark:text-white flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5" /> {project.timeline}
                </span>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <span className="text-neutral-400 block mb-1">Tools & Focus</span>
                <span className="font-semibold text-neutral-900 dark:text-white truncate block">
                  {project.tags.join(', ')}
                </span>
              </div>
            </div>

            {/* Case Study Sections */}
            <div className="space-y-8 text-neutral-700 dark:text-neutral-300">
              <div>
                <h3 className="text-lg font-bold text-neutral-950 dark:text-white font-display mb-2">
                  Project Overview
                </h3>
                <p className="text-sm sm:text-base leading-relaxed">
                  {project.overview}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-5 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/30">
                  <h4 className="text-sm font-bold text-neutral-950 dark:text-white uppercase tracking-wider mb-2 font-display">
                    The Challenge
                  </h4>
                  <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                    {project.challenge}
                  </p>
                </div>

                <div className="p-5 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/30">
                  <h4 className="text-sm font-bold text-neutral-950 dark:text-white uppercase tracking-wider mb-2 font-display">
                    The Solution
                  </h4>
                  <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                    {project.solution}
                  </p>
                </div>
              </div>

              {/* Key Features */}
              <div>
                <h3 className="text-lg font-bold text-neutral-950 dark:text-white font-display mb-3">
                  Key Design Features
                </h3>
                <ul className="space-y-2.5">
                  {project.keyFeatures.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm">
                      <CheckCircle2 className="w-4 h-4 text-neutral-900 dark:text-white shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Deliverables Tags */}
              <div className="pt-6 border-t border-neutral-200 dark:border-neutral-800 flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-wrap items-center gap-2">
                  {project.deliverables.map((deliv, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-full text-xs font-mono bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300"
                    >
                      {deliv}
                    </span>
                  ))}
                </div>

                <button
                  onClick={onClose}
                  className="px-5 py-2.5 rounded-full bg-neutral-950 text-white dark:bg-white dark:text-neutral-950 text-xs sm:text-sm font-semibold cursor-pointer hover:opacity-90"
                >
                  Close Case Study
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
