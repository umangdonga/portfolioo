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
            Continuous education across human-computer interaction, advanced design systems, and UX methodologies.
          </p>
        </div>

        {/* Clean Collection of 4 Certificate Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CERTIFICATIONS.map((cert, idx) => (
            <motion.div
              key={cert.id}
              id={`cert-card-${cert.id}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="group flex flex-col rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/40 overflow-hidden hover:border-neutral-400 dark:hover:border-neutral-600 transition-all duration-200 shadow-xs justify-between"
            >
              <div>
                {/* Certificate Thumbnail (Easily replaceable) */}
                <div
                  onClick={() => onSelectCert(cert)}
                  className="aspect-[16/10] w-full bg-neutral-100 dark:bg-neutral-800 overflow-hidden relative cursor-pointer"
                >
                  <img
                    src={cert.image}
                    alt={cert.name}
                    className="w-full h-full object-cover grayscale group-hover:scale-105 group-hover:grayscale-0 transition-all duration-300"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="p-2 rounded-full bg-white/90 text-neutral-900 shadow-md">
                      <Eye className="w-4 h-4" />
                    </span>
                  </div>
                  <div className="absolute bottom-2.5 right-2.5 px-2 py-0.5 rounded bg-black/70 text-[10px] font-mono text-white backdrop-blur-xs">
                    {cert.date}
                  </div>
                </div>

                {/* Certificate Metadata */}
                <div className="p-5">
                  <h3
                    onClick={() => onSelectCert(cert)}
                    className="text-sm font-bold text-neutral-950 dark:text-white font-display line-clamp-2 mb-2 group-hover:text-neutral-700 dark:group-hover:text-neutral-200 cursor-pointer transition-colors"
                  >
                    {cert.name}
                  </h3>

                  <div className="space-y-1.5 text-xs text-neutral-500 dark:text-neutral-400">
                    <div className="flex items-center gap-1.5">
                      <Building2 className="w-3.5 h-3.5 shrink-0 text-neutral-400" />
                      <span className="truncate">{cert.organization}</span>
                    </div>
                    <div className="flex items-center gap-1.5 font-mono text-[11px]">
                      <Calendar className="w-3.5 h-3.5 shrink-0 text-neutral-400" />
                      <span>Issued: {cert.date}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* View Certificate Button */}
              <div className="p-5 pt-0">
                <button
                  id={`view-cert-btn-${cert.id}`}
                  onClick={() => onSelectCert(cert)}
                  className="w-full py-2.5 px-3 rounded-xl border border-neutral-200 dark:border-neutral-800 text-xs font-semibold text-neutral-900 dark:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <span>View Certificate</span>
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
