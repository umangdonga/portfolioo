import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Award, CheckCircle2, Calendar, ShieldCheck, Building2 } from 'lucide-react';
import { Certification } from '../types';

interface CertificateModalProps {
  cert: Certification | null;
  onClose: () => void;
}

export const CertificateModal: React.FC<CertificateModalProps> = ({ cert, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (cert) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [cert, onClose]);

  if (!cert) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
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
          className="relative w-full max-w-2xl bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden z-10"
        >
          {/* Header Bar */}
          <div className="p-4 sm:px-6 border-b border-neutral-200 dark:border-neutral-800 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-500" />
              <span className="text-xs font-mono font-medium text-neutral-600 dark:text-neutral-400">
                Verified Credential Record
              </span>
            </div>

            <button
              onClick={onClose}
              className="p-1.5 rounded-full border border-neutral-200 dark:border-neutral-800 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Certificate Content */}
          <div className="p-5 sm:p-7 space-y-5 max-h-[85vh] overflow-y-auto">
            {/* Visual Preview */}
            <div className="w-full rounded-xl overflow-hidden border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 relative shadow-sm">
              <img
                src={cert.image}
                alt={cert.name}
                className="w-full h-auto object-contain block mx-auto transition-transform duration-300"
              />
            </div>

            {/* Info Breakdown */}
            <div className="space-y-2.5 text-xs bg-neutral-50 dark:bg-neutral-900/50 p-4 rounded-xl border border-neutral-200 dark:border-neutral-800">
              {cert.recipientName && (
                <div className="flex items-center justify-between py-1.5 border-b border-neutral-200/60 dark:border-neutral-800">
                  <span className="text-neutral-500 dark:text-neutral-400">Awarded To</span>
                  <span className="font-semibold text-neutral-950 dark:text-white">
                    {cert.recipientName}
                  </span>
                </div>
              )}
              <div className="flex items-center justify-between py-1.5 border-b border-neutral-200/60 dark:border-neutral-800">
                <span className="text-neutral-500 dark:text-neutral-400">Issuing Organization</span>
                <span className="font-semibold text-neutral-900 dark:text-white flex items-center gap-1.5">
                  <Building2 className="w-3.5 h-3.5 text-neutral-400" /> {cert.organization}
                </span>
              </div>
              <div className="flex items-center justify-between py-1.5 border-b border-neutral-200/60 dark:border-neutral-800">
                <span className="text-neutral-500 dark:text-neutral-400">Issue Date</span>
                <span className="font-mono text-neutral-900 dark:text-white flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-neutral-400" /> {cert.date}
                </span>
              </div>
              <div className="flex items-center justify-between py-1.5 border-b border-neutral-200/60 dark:border-neutral-800">
                <span className="text-neutral-500 dark:text-neutral-400">Credential ID</span>
                <span className="font-mono font-medium text-neutral-900 dark:text-white">
                  {cert.credentialId}
                </span>
              </div>
              {cert.scoreOrGrade && (
                <div className="flex items-center justify-between py-1.5 border-b border-neutral-200/60 dark:border-neutral-800">
                  <span className="text-neutral-500 dark:text-neutral-400">Evaluation Result</span>
                  <span className="font-mono font-semibold text-emerald-600 dark:text-emerald-400">
                    {cert.scoreOrGrade}
                  </span>
                </div>
              )}
              {cert.signer && (
                <div className="flex items-center justify-between py-1.5">
                  <span className="text-neutral-500 dark:text-neutral-400">Signatory / Authority</span>
                  <span className="text-right text-neutral-800 dark:text-neutral-200 font-medium">
                    {cert.signer}
                  </span>
                </div>
              )}
            </div>

            {/* Competencies Verified */}
            <div>
              <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-500 dark:text-neutral-400 block mb-2 font-semibold">
                Curriculum & Skills Verified
              </span>
              <div className="flex flex-wrap gap-2">
                {cert.skillsCovered.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 rounded-md text-xs font-mono bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 border border-neutral-200 dark:border-neutral-700"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Action buttons */}
            <div className="pt-3 border-t border-neutral-200 dark:border-neutral-800 flex items-center justify-between gap-3">
              {cert.verifyUrl ? (
                <a
                  href={cert.verifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-blue-50 dark:bg-blue-950/50 text-blue-700 dark:text-blue-300 hover:bg-blue-100 dark:hover:bg-blue-900/50 border border-blue-200 dark:border-blue-800 text-xs font-semibold transition-colors"
                >
                  <span>Verify at Coursera</span>
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                </a>
              ) : (
                <div />
              )}

              <button
                onClick={onClose}
                className="px-5 py-2.5 rounded-xl bg-neutral-950 text-white dark:bg-white dark:text-neutral-950 text-xs font-semibold hover:opacity-90 cursor-pointer transition-opacity"
              >
                Close Preview
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
