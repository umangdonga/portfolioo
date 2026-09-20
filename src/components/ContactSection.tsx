import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Copy, Check, Phone, MapPin, Linkedin, ArrowUp, Send, FileText } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ContactSectionProps {
  onOpenResume?: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenResume }) => {
  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    subject: 'UI/UX Design Project',
    message: ''
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.message) return;
    setFormSubmitted(true);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      id="contact"
      className="py-20 lg:py-28 border-t border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 sm:mb-16">
          <div className="flex items-center gap-3 mb-3">
            <span className="w-2 h-2 rounded-full bg-neutral-900 dark:bg-white" />
            <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-neutral-500 dark:text-neutral-400 font-mono">
              Get In Touch
            </span>
          </div>
          <h2
            id="contact-heading"
            className="text-2xl sm:text-3xl lg:text-4xl font-bold text-neutral-950 dark:text-white font-display tracking-tight mb-4"
          >
            Let’s Connect
          </h2>
          <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
            I’m always open to discussing new projects, design systems, UX research opportunities, or collaborating on innovative products.
          </p>
        </div>

        {/* 2-Column Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 mb-16">
          
          {/* Left Column: 5 Cols (Direct Contact Cards & Socials) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Email Card with Copy Trigger */}
            <div className="p-6 rounded-2xl sm:rounded-3xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900/50 shadow-xs">
              <span className="text-xs font-mono uppercase tracking-wider text-neutral-500 dark:text-neutral-400 block mb-2 font-semibold">
                Direct Email
              </span>
              <div className="flex items-center justify-between gap-3">
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="text-base sm:text-lg font-bold text-neutral-950 dark:text-white hover:underline truncate font-mono"
                >
                  {PERSONAL_INFO.email}
                </a>
                <button
                  onClick={handleCopyEmail}
                  id="contact-copy-email-btn"
                  className="p-2 rounded-xl bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 hover:text-neutral-950 dark:hover:text-white transition-colors shrink-0 cursor-pointer shadow-xs"
                  title="Copy email address"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
              {copied && (
                <span className="text-xs text-emerald-600 dark:text-emerald-400 font-mono mt-2 block">
                  Email copied to clipboard!
                </span>
              )}
            </div>

            {/* Phone & Location Card */}
            <div className="p-6 rounded-2xl sm:rounded-3xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900/50 shadow-xs space-y-4">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-neutral-500 dark:text-neutral-400 block mb-1 font-semibold">
                  Phone / WhatsApp
                </span>
                <a
                  href={PERSONAL_INFO.socials.phone}
                  className="text-base font-bold text-neutral-950 dark:text-white hover:underline font-mono flex items-center gap-2"
                >
                  <Phone className="w-4 h-4 text-neutral-500" />
                  <span>{PERSONAL_INFO.phone}</span>
                </a>
              </div>

              <div className="pt-3 border-t border-neutral-200 dark:border-neutral-800">
                <span className="text-xs font-mono uppercase tracking-wider text-neutral-500 dark:text-neutral-400 block mb-1 font-semibold">
                  Location
                </span>
                <div className="text-base font-bold text-neutral-950 dark:text-white flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-neutral-500" />
                  <span>{PERSONAL_INFO.location}</span>
                </div>
              </div>
            </div>

            {/* Social Links Network */}
            <div className="p-6 rounded-2xl sm:rounded-3xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900/50 shadow-xs">
              <span className="text-xs font-mono uppercase tracking-wider text-neutral-500 dark:text-neutral-400 block mb-4 font-semibold">
                Online Profiles
              </span>
              <div className="flex flex-wrap gap-2.5">
                <a
                  href={PERSONAL_INFO.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 text-xs font-mono text-neutral-800 dark:text-neutral-200 hover:text-neutral-950 dark:hover:text-white hover:border-neutral-400 transition-colors shadow-xs"
                >
                  <Linkedin className="w-4 h-4 text-sky-600" />
                  <span>LinkedIn</span>
                </a>

                <a
                  href={PERSONAL_INFO.socials.behance}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 text-xs font-mono font-bold text-neutral-800 dark:text-neutral-200 hover:text-neutral-950 dark:hover:text-white hover:border-neutral-400 transition-colors shadow-xs"
                >
                  <span>Bē</span>
                  <span>Behance</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: 7 Cols (Direct Message Inquiry Form) */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl sm:rounded-3xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/60 shadow-xs">
              <h3 className="text-xl font-bold text-neutral-950 dark:text-white font-display mb-1">
                Send a Message
              </h3>
              <p className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 mb-6">
                Fill out the quick form below and I’ll get back to you promptly.
              </p>

              {formSubmitted ? (
                <div className="py-10 text-center">
                  <div className="w-12 h-12 rounded-full bg-neutral-950 dark:bg-white text-white dark:text-neutral-950 flex items-center justify-center mx-auto mb-4 shadow-md">
                    <Check className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold font-display text-neutral-950 dark:text-white mb-2">
                    Message Sent Successfully!
                  </h4>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 max-w-md mx-auto mb-6">
                    Thank you, {formData.fullName}. Your note has been received and I’ll respond to {formData.email} soon.
                  </p>
                  <button
                    onClick={() => {
                      setFormSubmitted(false);
                      setFormData({ fullName: '', email: '', subject: 'UI/UX Design Project', message: '' });
                    }}
                    className="px-5 py-2 rounded-full bg-neutral-100 dark:bg-neutral-800 text-xs font-mono font-semibold text-neutral-900 dark:text-white hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-neutral-600 dark:text-neutral-400 uppercase tracking-wider mb-1.5 font-semibold">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="Umang Patel"
                        className="w-full px-4 py-2.5 rounded-xl border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 text-neutral-900 dark:text-white text-sm focus:outline-hidden focus:ring-2 focus:ring-neutral-900 dark:focus:ring-white transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-neutral-600 dark:text-neutral-400 uppercase tracking-wider mb-1.5 font-semibold">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="you@company.com"
                        className="w-full px-4 py-2.5 rounded-xl border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 text-neutral-900 dark:text-white text-sm focus:outline-hidden focus:ring-2 focus:ring-neutral-900 dark:focus:ring-white transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-neutral-600 dark:text-neutral-400 uppercase tracking-wider mb-1.5 font-semibold">
                      Subject / Project Type
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="UI/UX Design Project, Consulting, Hiring"
                      className="w-full px-4 py-2.5 rounded-xl border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 text-neutral-900 dark:text-white text-sm focus:outline-hidden focus:ring-2 focus:ring-neutral-900 dark:focus:ring-white transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-neutral-600 dark:text-neutral-400 uppercase tracking-wider mb-1.5 font-semibold">
                      Your Message *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Share details about your idea, scope, or timeline..."
                      className="w-full px-4 py-2.5 rounded-xl border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 text-neutral-900 dark:text-white text-sm focus:outline-hidden focus:ring-2 focus:ring-neutral-900 dark:focus:ring-white transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full sm:w-auto px-7 py-3 rounded-full bg-neutral-950 dark:bg-white text-white dark:text-neutral-950 font-mono text-xs uppercase tracking-wider font-bold inline-flex items-center justify-center gap-2 hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-all cursor-pointer shadow-md"
                  >
                    <span>Send Message</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

        {/* Bottom Footer Bar */}
        <div className="pt-8 border-t border-neutral-200 dark:border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-neutral-500 dark:text-neutral-400">
          <div>
            © {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved.
          </div>

          <div className="flex items-center gap-4">
            {onOpenResume && (
              <button
                onClick={onOpenResume}
                className="hover:text-neutral-950 dark:hover:text-white transition-colors flex items-center gap-1.5 cursor-pointer"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>Resume</span>
              </button>
            )}

            <button
              onClick={scrollToTop}
              className="hover:text-neutral-950 dark:hover:text-white transition-colors flex items-center gap-1 cursor-pointer"
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
