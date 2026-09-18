import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Mail, Copy, Check, ArrowUpRight, ArrowUp, Linkedin, Globe, Sparkles, Clock, FileText } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ContactSectionProps {
  onOpenResume?: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenResume }) => {
  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(
        now.toLocaleTimeString('en-US', {
          hour: '2-digit',
          minute: '2-digit',
          hour12: true,
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setFormSubmitted(true);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      id="contact"
      className="pt-20 lg:pt-32 pb-12 border-t border-neutral-200 dark:border-neutral-800 bg-neutral-50/70 dark:bg-neutral-950 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main CTA Container with Sevora styling */}
        <div className="rounded-3xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/70 p-8 sm:p-12 lg:p-16 mb-16 shadow-xs relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Column: Heading & Direct Contact */}
            <div className="lg:col-span-7">
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <div className="flex items-center gap-2 px-3 py-1 rounded-full border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 text-xs font-mono text-neutral-600 dark:text-neutral-400">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>Open for Opportunities</span>
                </div>

                {currentTime && (
                  <div className="flex items-center gap-1.5 px-3 py-1 rounded-full border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 text-xs font-mono text-neutral-500 dark:text-neutral-400">
                    <Clock className="w-3 h-3 text-neutral-400" />
                    <span>Local Time: {currentTime}</span>
                  </div>
                )}
              </div>

              <h2
                id="contact-heading"
                className="text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-950 dark:text-white font-display tracking-[-0.03em] leading-[1.15] mb-6"
              >
                Let’s Create Something Meaningful
              </h2>

              <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed max-w-xl mb-8">
                Have a project, idea, or design challenge? I’d love to connect and explore how we can create something useful, intuitive, and enjoyable to use.
              </p>

              {/* Email Copy Card */}
              <div className="p-4 sm:p-5 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900/40 flex flex-wrap items-center justify-between gap-4 max-w-lg mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white dark:bg-neutral-800 flex items-center justify-center text-neutral-900 dark:text-white shadow-xs">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-400 block">
                      Direct Email
                    </span>
                    <a
                      href={`mailto:${PERSONAL_INFO.email}`}
                      className="text-sm sm:text-base font-bold text-neutral-950 dark:text-white hover:underline"
                    >
                      {PERSONAL_INFO.email}
                    </a>
                  </div>
                </div>

                <button
                  id="copy-email-btn"
                  onClick={handleCopyEmail}
                  className="px-3.5 py-2 rounded-xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-xs font-medium text-neutral-900 dark:text-white hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-colors flex items-center gap-1.5 cursor-pointer active:scale-95"
                  title="Copy email address"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-500" />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* Social Channels */}
              <div className="flex flex-wrap items-center gap-3">
                {onOpenResume && (
                  <button
                    id="contact-view-resume-btn"
                    onClick={onOpenResume}
                    className="px-4 py-2 rounded-full border border-neutral-900 bg-neutral-900 text-white dark:border-white dark:bg-white dark:text-neutral-950 text-xs font-medium hover:opacity-90 transition-all flex items-center gap-1.5 cursor-pointer shadow-xs active:scale-95"
                  >
                    <FileText className="w-3.5 h-3.5" />
                    <span>View Resume</span>
                  </button>
                )}

                <a
                  href={PERSONAL_INFO.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-full border border-neutral-200 dark:border-neutral-800 text-xs font-medium text-neutral-700 dark:text-neutral-300 hover:text-black dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors flex items-center gap-1.5"
                >
                  <Linkedin className="w-3.5 h-3.5" />
                  <span>LinkedIn</span>
                  <ArrowUpRight className="w-3 h-3 opacity-50" />
                </a>

                <a
                  href={PERSONAL_INFO.socials.behance}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-full border border-neutral-200 dark:border-neutral-800 text-xs font-medium text-neutral-700 dark:text-neutral-300 hover:text-black dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors flex items-center gap-1.5"
                >
                  <Globe className="w-3.5 h-3.5" />
                  <span>Behance</span>
                  <ArrowUpRight className="w-3 h-3 opacity-50" />
                </a>
              </div>
            </div>

            {/* Right Column: Quick Interactive Inquiry Form */}
            <div className="lg:col-span-5">
              <div className="p-6 sm:p-8 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50/80 dark:bg-neutral-900/40">
                <h3 className="text-base sm:text-lg font-bold text-neutral-950 dark:text-white font-display mb-1">
                  Send a Quick Message
                </h3>
                <p className="text-xs text-neutral-500 dark:text-neutral-400 mb-5">
                  I typically respond within 24 hours.
                </p>

                {formSubmitted ? (
                  <div className="p-6 rounded-xl bg-white dark:bg-neutral-800 text-center space-y-3">
                    <div className="w-10 h-10 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto">
                      <Check className="w-5 h-5" />
                    </div>
                    <h4 className="text-sm font-bold text-neutral-900 dark:text-white">Message Received!</h4>
                    <p className="text-xs text-neutral-600 dark:text-neutral-300">
                      Thank you, {formData.name}. I'll get back to you shortly at {formData.email}.
                    </p>
                    <button
                      onClick={() => {
                        setFormSubmitted(false);
                        setFormData({ name: '', email: '', message: '' });
                      }}
                      className="text-xs font-medium text-neutral-900 dark:text-white underline cursor-pointer"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="space-y-4">
                    <div>
                      <label className="block text-xs font-mono uppercase text-neutral-500 dark:text-neutral-400 mb-1">
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Alex Parker"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 text-sm text-neutral-900 dark:text-white focus:outline-hidden focus:border-neutral-900 dark:focus:border-white transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase text-neutral-500 dark:text-neutral-400 mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="alex@company.com"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 text-sm text-neutral-900 dark:text-white focus:outline-hidden focus:border-neutral-900 dark:focus:border-white transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase text-neutral-500 dark:text-neutral-400 mb-1">
                        Project Scope / Message
                      </label>
                      <textarea
                        rows={3}
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell me about your product goals, timeline, or design challenge..."
                        className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 text-sm text-neutral-900 dark:text-white focus:outline-hidden focus:border-neutral-900 dark:focus:border-white transition-colors resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3 px-4 rounded-xl bg-neutral-950 text-white dark:bg-white dark:text-neutral-950 font-medium text-xs sm:text-sm hover:opacity-90 active:scale-98 transition-all cursor-pointer"
                    >
                      Send Message
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Editorial Footer */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-neutral-200 dark:border-neutral-800 text-xs text-neutral-500 dark:text-neutral-400">
          <div className="flex items-center gap-2">
            <span className="font-bold text-neutral-900 dark:text-white font-display">
              {PERSONAL_INFO.name}
            </span>
            <span>—</span>
            <span>{PERSONAL_INFO.role}</span>
          </div>

          <div className="flex items-center gap-6">
            <span>© {new Date().getFullYear()} All Rights Reserved</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 font-medium text-neutral-900 dark:text-white hover:underline cursor-pointer"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

