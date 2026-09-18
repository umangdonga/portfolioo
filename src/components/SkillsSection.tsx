import React from 'react';
import { motion } from 'motion/react';
import { Layers, Layout, Search, GitFork } from 'lucide-react';
import { SKILL_CARDS } from '../data/portfolioData';

export const SkillsSection: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'product':
        return <Layers className="w-5 h-5" />;
      case 'uiux':
        return <Layout className="w-5 h-5" />;
      case 'research':
        return <Search className="w-5 h-5" />;
      case 'flow':
        return <GitFork className="w-5 h-5" />;
      default:
        return <Layers className="w-5 h-5" />;
    }
  };

  return (
    <section
      id="skills"
      className="py-20 lg:py-28 border-t border-neutral-200 dark:border-neutral-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header Tag */}
        <div className="flex items-center gap-3 mb-4">
          <span className="w-2 h-2 rounded-full bg-neutral-900 dark:bg-white" />
          <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-neutral-500 dark:text-neutral-400 font-mono">
            Capabilities & Focus
          </span>
        </div>

        {/* Clean Header & Subtitle */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <h2
            id="skills-heading"
            className="text-2xl sm:text-3xl lg:text-4xl font-bold text-neutral-950 dark:text-white font-display tracking-tight mb-4"
          >
            My Skills
          </h2>
          <p className="text-lg sm:text-xl text-neutral-700 dark:text-neutral-300 font-medium leading-relaxed">
            I create thoughtful digital experiences that are simple, intuitive, and designed around real user needs.
          </p>
        </div>

        {/* 4 Skill Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SKILL_CARDS.map((card, idx) => (
            <motion.div
              key={card.id}
              id={`skill-card-${card.id}`}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              whileHover={{ y: -4 }}
              className="group p-6 sm:p-7 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/50 hover:border-neutral-400 dark:hover:border-neutral-600 transition-all shadow-xs"
            >
              {/* Minimal Icon */}
              <div className="w-11 h-11 rounded-xl bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center text-neutral-900 dark:text-white mb-5 transition-transform group-hover:scale-110">
                {getIcon(card.iconName)}
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-neutral-950 dark:text-white font-display mb-2.5">
                {card.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
