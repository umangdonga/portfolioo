import React, { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ChevronLeft, ChevronRight, Maximize2, X, Sparkles, Layers,
  Smartphone, Laptop, ExternalLink, Eye
} from 'lucide-react';
import { DESIGN_HIGHLIGHTS } from '../data/portfolioData';
import {
  GharbedhuMockup,
  CaptainTicketuMockup,
  CampusConnectMockup,
  InduCafeMockup,
  RideBoxMockup
} from './HighlightMockups';

export const DesignHighlights: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [viewMode, setViewMode] = useState<'interactive' | 'vector'>('interactive');
  const [fullScreenModal, setFullScreenModal] = useState<boolean>(false);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % DESIGN_HIGHLIGHTS.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + DESIGN_HIGHLIGHTS.length) % DESIGN_HIGHLIGHTS.length);
  }, []);

  const currentItem = DESIGN_HIGHLIGHTS[currentIndex];

  const renderActiveMockup = (id: string) => {
    switch (id) {
      case 'campus-catering':
      case 'indu-cafe':
        return <InduCafeMockup />;
      case 'campus-connect':
        return <CampusConnectMockup />;
      case 'bookmyshow-kid':
      case 'captain-ticketu':
        return <CaptainTicketuMockup />;
      case 'gharbedhu':
        return <GharbedhuMockup />;
      case 'ridebox':
        return <RideBoxMockup />;
      case 'ux-laws-analysis':
      case 'care-band':
      default:
        return (
          <div className="max-w-4xl w-full rounded-2xl overflow-hidden shadow-2xl border border-neutral-800 bg-neutral-950">
            <img
              src={currentItem.image}
              alt={currentItem.title}
              className="w-full h-auto object-contain"
              loading="lazy"
            />
          </div>
        );
    }
  };

  return (
    <section
      id="highlights"
      className="py-20 lg:py-28 border-t border-neutral-200 dark:border-neutral-800 overflow-hidden relative bg-neutral-50/40 dark:bg-neutral-950/40"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-10 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
              <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-neutral-500 dark:text-neutral-400 font-mono">
                Real Projects Showcase
              </span>
            </div>
            <h2
              id="highlights-heading"
              className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-neutral-950 dark:text-white font-display tracking-tight"
            >
              Design Highlights
            </h2>
            <p className="mt-2 text-sm sm:text-base text-neutral-600 dark:text-neutral-400 max-w-2xl">
              High-fidelity interactive previews of Umang Donga&apos;s real project designs — from web e-commerce storefronts to multi-screen mobile apps.
            </p>
          </div>

          {/* Controls: View Mode Toggle & Next/Prev */}
          <div className="flex flex-wrap items-center gap-3 self-start md:self-end">
            {/* View Switcher */}
            <div className="flex items-center bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-full p-1 text-xs font-semibold shadow-xs">
              <button
                onClick={() => setViewMode('interactive')}
                className={`flex items-center gap-1.5 px-3 py-1 rounded-full transition-all cursor-pointer ${
                  viewMode === 'interactive'
                    ? 'bg-neutral-950 text-white dark:bg-white dark:text-neutral-950 shadow-xs'
                    : 'text-neutral-500 hover:text-neutral-900 dark:hover:text-white'
                }`}
              >
                <Layers className="w-3.5 h-3.5" />
                <span>Interactive Frames</span>
              </button>
              <button
                onClick={() => setViewMode('vector')}
                className={`flex items-center gap-1.5 px-3 py-1 rounded-full transition-all cursor-pointer ${
                  viewMode === 'vector'
                    ? 'bg-neutral-950 text-white dark:bg-white dark:text-neutral-950 shadow-xs'
                    : 'text-neutral-500 hover:text-neutral-900 dark:hover:text-white'
                }`}
              >
                <Eye className="w-3.5 h-3.5" />
                <span>Full Sheet</span>
              </button>
            </div>

            {/* Slide Index & Prev/Next */}
            <div className="flex items-center gap-1.5">
              <span className="text-xs font-mono text-neutral-500 dark:text-neutral-400 mr-2">
                0{currentIndex + 1} / 0{DESIGN_HIGHLIGHTS.length}
              </span>
              <button
                id="highlights-prev-btn"
                onClick={prevSlide}
                className="p-2.5 rounded-full border border-neutral-200 dark:border-neutral-800 text-neutral-700 dark:text-neutral-300 hover:text-black dark:hover:text-white hover:bg-white dark:hover:bg-neutral-900 transition-colors cursor-pointer active:scale-95 shadow-xs"
                aria-label="Previous Highlight"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                id="highlights-next-btn"
                onClick={nextSlide}
                className="p-2.5 rounded-full border border-neutral-200 dark:border-neutral-800 text-neutral-700 dark:text-neutral-300 hover:text-black dark:hover:text-white hover:bg-white dark:hover:bg-neutral-900 transition-colors cursor-pointer active:scale-95 shadow-xs"
                aria-label="Next Highlight"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Project Tabs Selector */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-6 scrollbar-none">
          {DESIGN_HIGHLIGHTS.map((item, idx) => {
            const isActive = currentIndex === idx;
            return (
              <button
                key={item.id}
                onClick={() => setCurrentIndex(idx)}
                className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all flex items-center gap-2 cursor-pointer ${
                  isActive
                    ? 'bg-neutral-950 text-white dark:bg-white dark:text-neutral-950 shadow-md scale-100'
                    : 'bg-white dark:bg-neutral-900 text-neutral-600 dark:text-neutral-400 border border-neutral-200 dark:border-neutral-800 hover:border-neutral-400'
                }`}
              >
                {(item.id === 'gharbedhu' || item.id === 'ux-laws-analysis') ? (
                  <Laptop className="w-3.5 h-3.5" />
                ) : (
                  <Smartphone className="w-3.5 h-3.5" />
                )}
                <span>{item.title.split('—')[0].trim()}</span>
              </button>
            );
          })}
        </div>

        {/* Showcase Stage Card */}
        <div
          id="highlights-carousel-stage"
          className="relative rounded-2xl sm:rounded-3xl border border-neutral-200 dark:border-neutral-800 bg-neutral-900 dark:bg-black overflow-hidden shadow-2xl group"
        >
          <div className="p-4 sm:p-6 lg:p-8 min-h-[520px] flex flex-col justify-between">
            {/* Top Bar of Stage */}
            <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-neutral-800 text-white z-10 relative">
              <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                <span className="px-3 py-1 rounded-full text-[11px] font-mono font-bold bg-white/10 text-white border border-white/20">
                  {currentItem.category}
                </span>
                <span className="px-3 py-1 rounded-full text-[11px] font-mono font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30">
                  {currentItem.metrics}
                </span>
              </div>

              {/* Fullscreen Expand Action */}
              <button
                onClick={() => setFullScreenModal(true)}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-semibold backdrop-blur-md border border-white/20 transition-all cursor-pointer"
                title="Expand Full Preview"
                aria-label="Expand Full Preview"
              >
                <Maximize2 className="w-3.5 h-3.5" />
                <span>Fullscreen</span>
              </button>
            </div>

            {/* Stage Center Preview (Interactive or Vector Image) */}
            <div className="my-6 w-full flex items-center justify-center overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`${currentItem.id}-${viewMode}`}
                  initial={{ opacity: 0, scale: 0.98, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.98, y: -10 }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                  className="w-full flex justify-center"
                >
                  {viewMode === 'interactive' ? (
                    renderActiveMockup(currentItem.id)
                  ) : (
                    <div className="max-w-4xl w-full rounded-2xl overflow-hidden shadow-2xl border border-neutral-800 bg-neutral-950">
                      <img
                        src={currentItem.image}
                        alt={currentItem.title}
                        className="w-full h-auto object-contain"
                        loading="lazy"
                      />
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Bottom Info Banner */}
            <div className="pt-4 border-t border-neutral-800/80 text-white z-10 relative">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold font-display tracking-tight text-white mb-1">
                    {currentItem.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-300 max-w-3xl leading-relaxed">
                    {currentItem.subtitle}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Fullscreen Showcase Modal */}
      <AnimatePresence>
        {fullScreenModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-black/90 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative max-w-5xl w-full max-h-[92vh] bg-neutral-900 rounded-2xl sm:rounded-3xl overflow-hidden border border-neutral-800 flex flex-col shadow-2xl"
            >
              <div className="p-4 sm:p-5 flex items-center justify-between border-b border-neutral-800 text-white bg-neutral-950">
                <div>
                  <h4 className="font-display font-bold text-sm sm:text-base">{currentItem.title}</h4>
                  <p className="text-xs text-neutral-400">{currentItem.category}</p>
                </div>
                <button
                  onClick={() => setFullScreenModal(false)}
                  className="p-2 rounded-full hover:bg-neutral-800 text-neutral-400 hover:text-white cursor-pointer transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-4 sm:p-8 overflow-y-auto max-h-[80vh] flex items-center justify-center bg-neutral-950">
                <img
                  src={currentItem.image}
                  alt={currentItem.title}
                  className="w-full h-auto max-h-[75vh] object-contain rounded-xl shadow-2xl"
                />
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
