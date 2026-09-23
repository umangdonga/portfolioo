import React from 'react';
import { motion } from 'motion/react';
import { Award, ExternalLink, Calendar, Building2, Eye } from 'lucide-react';
import { CERTIFICATIONS } from '../data/portfolioData';
import { Certification } from '../types';

interface CertificationsSectionProps {
  onSelectCert: (cert: Certification) => void;
}

export const CertificationsSection: React.FC<CertificationsSectionProps> = ({ onSelectCert }) => {
  return (
    <section
      id="certifications"
      className="py-20 lg:py-28 border-t border-neutral-200 dark:border-neutral-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-14">
          <div className="flex items-center gap-3 mb-3">
            <span className="w-2 h-2 rounded-full bg-neutral-900 dark:bg-white" />
            <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-neutral-500 dark:text-neutral-400">
              Credentials & Learning
            </span>
          </div>
          <h2
            id="certifications-heading"
            className="text-2xl sm:text-3xl lg:text-4xl font-bold text-neutral-950 dark:text-white font-display tracking-tight"
          >
            Certifications
          </h2>
          <p className="mt-2 text-sm sm:text-base text-neutral-600 dark:text-neutral-400">
            Official industry and academic certifications in UX/UI Design, Generative AI &amp; Prompt Engineering, and Python Programming from Google, IBM, IIT Bombay, and Outskill.
          </p>
        </div>

        {/* All 5 Certificates in One Single Row */}
        <div className="flex overflow-x-auto pb-4 md:pb-0 md:grid md:grid-cols-5 gap-3.5 sm:gap-4 snap-x scrollbar-thin">
          {CERTIFICATIONS.map((cert, idx) => (
            <motion.div
              key={cert.id}
              id={`cert-card-${cert.id}`}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: idx * 0.05 }}
              className="min-w-[230px] sm:min-w-[250px] md:min-w-0 flex-1 group flex flex-col rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/40 overflow-hidden hover:border-neutral-400 dark:hover:border-neutral-600 transition-all duration-200 shadow-xs justify-between snap-start"
            >
              <div>
                {/* Certificate Thumbnail */}
                <div
                  onClick={() => onSelectCert(cert)}
                  className="aspect-[16/11] w-full bg-neutral-50 dark:bg-neutral-900/80 border-b border-neutral-200 dark:border-neutral-800 overflow-hidden relative cursor-pointer flex items-center justify-center p-2"
                >
                  <img
                    src={cert.image}
                    alt={cert.name}
                    className="w-full h-full object-contain group-hover:scale-103 transition-all duration-300"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/15 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="p-1.5 rounded-full bg-white/95 dark:bg-neutral-900 text-neutral-900 dark:text-white shadow-md">
                      <Eye className="w-3.5 h-3.5" />
                    </span>
                  </div>

                  {/* Top Badge for Issuer */}
                  <div className="absolute top-2 left-2 px-1.5 py-0.5 rounded-full bg-white/90 dark:bg-black/80 backdrop-blur-xs text-[9px] font-mono font-semibold text-neutral-900 dark:text-white border border-neutral-200 dark:border-neutral-700 shadow-xs">
                    {cert.organization.split('/')[0].trim()}
                  </div>

                  {cert.scoreOrGrade ? (
                    <div className="absolute bottom-2 right-2 px-1.5 py-0.5 rounded bg-emerald-700 text-[9px] font-mono font-semibold text-white shadow-xs">
                      {cert.scoreOrGrade}
                    </div>
                  ) : (
                    <div className="absolute bottom-2 right-2 px-1.5 py-0.5 rounded bg-black/70 text-[9px] font-mono text-white backdrop-blur-xs">
                      {cert.date}
                    </div>
                  )}
                </div>

                {/* Certificate Metadata */}
                <div className="p-3.5 sm:p-4">
                  <h3
                    onClick={() => onSelectCert(cert)}
                    className="text-xs sm:text-[13px] font-bold text-neutral-950 dark:text-white font-display line-clamp-2 mb-1.5 group-hover:text-neutral-700 dark:group-hover:text-neutral-200 cursor-pointer transition-colors leading-snug"
                    title={cert.name}
                  >
                    {cert.name}
                  </h3>

                  <div className="space-y-1 text-[11px] text-neutral-500 dark:text-neutral-400">
                    <div className="flex items-center gap-1">
                      <Building2 className="w-3 h-3 shrink-0 text-neutral-400" />
                      <span className="truncate">{cert.organization}</span>
                    </div>
                    <div className="flex items-center gap-1 font-mono text-[10px]">
                      <Calendar className="w-3 h-3 shrink-0 text-neutral-400" />
                      <span>{cert.date}</span>
                    </div>
                  </div>

                  {/* Skills tags preview */}
                  <div className="mt-2.5 flex flex-wrap gap-1">
                    {cert.skillsCovered.slice(0, 2).map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-1.5 py-0.5 text-[9px] font-mono rounded bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300 truncate max-w-[120px]"
                      >
                        {skill}
                      </span>
                    ))}
                    {cert.skillsCovered.length > 2 && (
                      <span className="px-1 py-0.5 text-[9px] font-mono text-neutral-400">
                        +{cert.skillsCovered.length - 2}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* View Certificate Button */}
              <div className="p-3.5 sm:p-4 pt-0">
                <button
                  id={`view-cert-btn-${cert.id}`}
                  onClick={() => onSelectCert(cert)}
                  className="w-full py-2 px-2 rounded-xl border border-neutral-200 dark:border-neutral-800 text-[11px] font-semibold text-neutral-900 dark:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-all flex items-center justify-center gap-1 cursor-pointer"
                >
                  <span>View Details</span>
                  <ExternalLink className="w-3 h-3" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
