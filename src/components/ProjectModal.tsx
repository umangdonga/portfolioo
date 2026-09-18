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
          {/* Top Sticky Bar */}
          <div className="sticky top-0 z-20 px-6 py-4 bg-white/90 dark:bg-neutral-950/90 backdrop-blur-md border-b border-neutral-200/80 dark:border-neutral-800/80 flex items-center justify-between gap-4">
            <div className="flex items-center gap-2 min-w-0">
              <span className="w-2 h-2 rounded-full bg-blue-600 shrink-0" />
              <span className="text-xs font-mono text-neutral-500 truncate">
                Case Study Process & Details
              </span>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <a
                href={project.behanceUrl}
                target="_blank"
                rel="noopener noreferrer"
                id="modal-view-behance-top-btn"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold shadow-xs transition-colors cursor-pointer"
              >
                <span>View Full Case Study</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <button
                onClick={onClose}
                aria-label="Close Case Study"
                id="modal-close-btn"
                className="p-1.5 rounded-full bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 text-neutral-800 dark:text-neutral-200 transition-colors flex items-center justify-center cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Modal Content */}
          <div className="p-6 sm:p-10">
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
              {/* Problem Overview */}
              <div className="p-6 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50/70 dark:bg-neutral-900/40">
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-2 h-2 rounded-full bg-blue-600 dark:bg-blue-400" />
                  <h3 className="text-lg font-bold text-neutral-950 dark:text-white font-display">
                    Problem Overview
                  </h3>
                </div>
                <p className="text-sm sm:text-base leading-relaxed text-neutral-700 dark:text-neutral-300">
                  {project.overview}
                </p>
              </div>

              {/* Challenge & Solution Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 rounded-2xl border border-rose-200/70 dark:border-rose-900/40 bg-rose-50/40 dark:bg-rose-950/10">
                  <h4 className="text-sm font-bold text-rose-900 dark:text-rose-300 uppercase tracking-wider mb-2.5 font-display flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-rose-500" />
                    The Challenge
                  </h4>
                  <p className="text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
                    {project.challenge}
                  </p>
                </div>

                <div className="p-6 rounded-2xl border border-emerald-200/70 dark:border-emerald-900/40 bg-emerald-50/40 dark:bg-emerald-950/10">
                  <h4 className="text-sm font-bold text-emerald-900 dark:text-emerald-300 uppercase tracking-wider mb-2.5 font-display flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                    The Solution
                  </h4>
                  <p className="text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
                    {project.solution}
                  </p>
                </div>
              </div>

              {/* Key Features */}
              <div className="p-6 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/30">
                <h3 className="text-lg font-bold text-neutral-950 dark:text-white font-display mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-amber-500" />
                  Key Features
                </h3>
                <ul className="space-y-3">
                  {project.keyFeatures.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                      <span className="text-neutral-800 dark:text-neutral-200">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Behance Link Banner */}
              <div className="p-6 rounded-2xl border border-blue-200 dark:border-blue-900/50 bg-blue-50/60 dark:bg-blue-950/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <h4 className="text-sm sm:text-base font-bold text-neutral-950 dark:text-white mb-1">
                    Explore the complete presentation on Behance
                  </h4>
                  <p className="text-xs text-neutral-600 dark:text-neutral-400">
                    High-resolution screens, interactive prototypes, user flows, and research documentation.
                  </p>
                </div>
                <a
                  href={project.behanceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="modal-view-behance-banner-btn"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm font-semibold shadow-md transition-colors cursor-pointer shrink-0"
                >
                  <span>View Full Case Study</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>

              {/* Deliverables Tags & Footer */}
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

                <div className="flex items-center gap-3">
                  <a
                    href={project.behanceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm font-semibold transition-colors cursor-pointer"
                  >
                    <span>View Full Case Study</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>

                  <button
                    onClick={onClose}
                    className="px-4 py-2 rounded-full bg-neutral-950 text-white dark:bg-white dark:text-neutral-950 text-xs sm:text-sm font-semibold cursor-pointer hover:opacity-90 transition-opacity"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
