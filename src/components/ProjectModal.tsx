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
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 lg:p-8 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          className="relative w-full max-w-4xl max-h-[92vh] bg-neutral-950 border border-white/20 rounded-3xl shadow-2xl overflow-y-auto z-10 text-white"
        >
          {/* Top Sticky Bar */}
          <div className="sticky top-0 z-20 px-6 py-4 bg-neutral-950/95 backdrop-blur-md border-b border-white/10 flex items-center justify-between gap-4">
            <div className="flex items-center gap-2 min-w-0">
              <span className="w-2 h-2 rounded-full bg-white shrink-0" />
              <span className="text-xs font-mono text-neutral-300 truncate uppercase tracking-wider">
                Case Study Process & Architecture
              </span>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              {project.behanceUrl && (
                <a
                  href={project.behanceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="modal-view-behance-top-btn"
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white text-black text-xs font-mono font-bold shadow-md hover:bg-neutral-200 transition-colors cursor-pointer"
                >
                  <span>View Full Case Study</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}

              <button
                onClick={onClose}
                aria-label="Close Case Study"
                id="modal-close-btn"
                className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors flex items-center justify-center cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Modal Content */}
          <div className="p-6 sm:p-10">
            {/* Header Tags */}
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="px-3 py-1 rounded-full text-xs font-mono font-medium bg-white/10 text-neutral-200 border border-white/15">
                {project.category}
              </span>
              <span className="flex items-center gap-1.5 text-xs font-mono text-white">
                <Sparkles className="w-3.5 h-3.5 text-white" />
                {project.impact}
              </span>
            </div>

            {/* Title */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white font-display mb-6">
              {project.title}
            </h2>

            {/* Hero Image */}
            <div className="rounded-2xl overflow-hidden border border-white/15 mb-8 max-h-[500px] flex items-center justify-center bg-black p-2 sm:p-4">
              <img
                src={project.image}
                alt={project.title}
                referrerPolicy="no-referrer"
                className="w-full h-auto max-h-[460px] object-contain rounded-lg"
              />
            </div>

            {/* Quick Meta Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 p-5 rounded-2xl bg-neutral-900 border border-white/10 mb-8 text-xs font-mono">
              <div>
                <span className="text-neutral-400 block mb-1">Role</span>
                <span className="font-semibold text-white flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5" /> {project.role}
                </span>
              </div>
              <div>
                <span className="text-neutral-400 block mb-1">Duration</span>
                <span className="font-semibold text-white flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5" /> {project.timeline}
                </span>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <span className="text-neutral-400 block mb-1">Tools & Focus</span>
                <span className="font-semibold text-white truncate block">
                  {project.tags.join(', ')}
                </span>
              </div>
            </div>

            {/* Case Study Sections */}
            <div className="space-y-8 text-neutral-300">
              {/* Problem Overview */}
              <div className="p-6 rounded-2xl border border-white/10 bg-neutral-900/60">
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-2 h-2 rounded-full bg-white" />
                  <h3 className="text-lg font-bold text-white font-display">
                    Problem Overview
                  </h3>
                </div>
                <p className="text-sm sm:text-base leading-relaxed text-neutral-300">
                  {project.overview}
                </p>
              </div>

              {/* Challenge & Solution Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 rounded-2xl border border-white/10 bg-neutral-900/40">
                  <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-2.5 font-mono flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-neutral-400" />
                    The Challenge
                  </h4>
                  <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-sans">
                    {project.challenge}
                  </p>
                </div>

                <div className="p-6 rounded-2xl border border-white/15 bg-neutral-900/60">
                  <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-2.5 font-mono flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-white" />
                    The Solution
                  </h4>
                  <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-sans">
                    {project.solution}
                  </p>
                </div>
              </div>

              {/* Key Features */}
              <div className="p-6 rounded-2xl border border-white/10 bg-neutral-900/40">
                <h3 className="text-lg font-bold text-white font-display mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-white" />
                  Key Features
                </h3>
                <ul className="space-y-3">
                  {project.keyFeatures.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm">
                      <CheckCircle2 className="w-4 h-4 text-white shrink-0 mt-0.5" />
                      <span className="text-neutral-200">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Behance Link Banner */}
              {project.behanceUrl && (
                <div className="p-6 rounded-2xl border border-white/20 bg-neutral-900 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div>
                    <h4 className="text-sm sm:text-base font-bold text-white mb-1 font-display">
                      Explore the complete presentation on Behance
                    </h4>
                    <p className="text-xs text-neutral-400 font-sans">
                      High-resolution screens, interactive prototypes, user flows, and research documentation.
                    </p>
                  </div>
                  <a
                    href={project.behanceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    id="modal-view-behance-banner-btn"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white hover:bg-neutral-200 text-black text-xs sm:text-sm font-mono font-bold shadow-md transition-colors cursor-pointer shrink-0"
                  >
                    <span>View Full Case Study</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              )}

              {/* Deliverables Tags & Footer */}
              <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-wrap items-center gap-2">
                  {project.deliverables.map((deliv, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-full text-xs font-mono bg-white/5 border border-white/10 text-neutral-300"
                    >
                      {deliv}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-3">
                  <button
                    onClick={onClose}
                    className="px-5 py-2 rounded-full bg-white/10 text-white hover:bg-white/20 text-xs sm:text-sm font-mono transition-colors cursor-pointer"
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
