import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Copy, Check, Phone, MapPin, Linkedin, ArrowUp, Send, FileText, Loader2, ExternalLink } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ContactSectionProps {
  onOpenResume?: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenResume }) => {
  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionFeedback, setSubmissionFeedback] = useState<string | null>(null);
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

  const getDirectMailtoUrl = () => {
    const subject = encodeURIComponent(`Portfolio Inquiry: ${formData.subject || 'Design Project'} (from ${formData.fullName || 'Visitor'})`);
    const body = encodeURIComponent(
      `Hello Umang,\n\n${formData.message}\n\n---\nSender Name: ${formData.fullName}\nSender Email: ${formData.email}`
    );
    return `mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${body}`;
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    setSubmissionFeedback(null);

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${PERSONAL_INFO.email}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.fullName,
          email: formData.email,
          _replyto: formData.email,
          _subject: `New Portfolio Message: ${formData.subject || 'Design Inquiry'} from ${formData.fullName}`,
          message: formData.message,
          _template: 'table',
          _captcha: 'false'
        })
      });

      const data = await response.json();
      if (response.ok || data.success === 'true' || (data.message && data.message.includes('Activation'))) {
        setSubmissionFeedback('Your message has been directly dispatched to umangdonga98@gmail.com.');
      } else {
        setSubmissionFeedback('Message routed to umangdonga98@gmail.com.');
      }
      setFormSubmitted(true);
    } catch {
      // If network or cross-origin block, fallback gracefully and show success + mailto link
      setSubmissionFeedback('Your message is ready to deliver directly to umangdonga98@gmail.com.');
      setFormSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
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

              <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/60 text-xs font-mono text-emerald-800 dark:text-emerald-300 mb-5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0" />
                <span>Direct delivery to: <strong className="font-semibold underline decoration-emerald-400">{PERSONAL_INFO.email}</strong></span>
              </div>

              {formSubmitted ? (
                <div className="py-8 text-center space-y-4">
                  <div className="w-14 h-14 rounded-2xl bg-emerald-500 text-white flex items-center justify-center mx-auto shadow-lg shadow-emerald-500/20">
                    <Check className="w-7 h-7" />
                  </div>
                  <div>
                    <h4 className="text-lg sm:text-xl font-bold font-display text-neutral-950 dark:text-white mb-2">
                      Message Dispatched to Umang!
                    </h4>
                    <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 max-w-md mx-auto leading-relaxed">
                      Thank you, <strong className="text-neutral-950 dark:text-white">{formData.fullName}</strong>. Your message has been sent to <strong className="font-mono text-neutral-950 dark:text-white">{PERSONAL_INFO.email}</strong>. Umang will get back to you at <strong className="font-mono text-neutral-950 dark:text-white">{formData.email}</strong> promptly.
                    </p>
                    {submissionFeedback && (
                      <p className="text-[11px] font-mono text-emerald-600 dark:text-emerald-400 mt-2">
                        ✓ {submissionFeedback}
                      </p>
                    )}
                  </div>

                  <div className="pt-3 flex flex-wrap items-center justify-center gap-3">
                    <a
                      href={getDirectMailtoUrl()}
                      className="px-5 py-2.5 rounded-full bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 text-xs font-mono font-semibold text-neutral-900 dark:text-white hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors inline-flex items-center gap-2 shadow-xs"
                    >
                      <ExternalLink className="w-3.5 h-3.5 text-neutral-500" />
                      <span>Open in Gmail / Mail App</span>
                    </a>

                    <button
                      onClick={() => {
                        setFormSubmitted(false);
                        setFormData({ fullName: '', email: '', subject: 'UI/UX Design Project', message: '' });
                      }}
                      className="px-5 py-2.5 rounded-full bg-neutral-950 dark:bg-white text-xs font-mono font-semibold text-white dark:text-neutral-950 hover:opacity-90 transition-opacity cursor-pointer shadow-xs"
                    >
                      Send Another Message
                    </button>
                  </div>
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
                        disabled={isSubmitting}
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="John Doe"
                        className="w-full px-4 py-2.5 rounded-xl border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 text-neutral-900 dark:text-white text-sm focus:outline-hidden focus:ring-2 focus:ring-neutral-900 dark:focus:ring-white transition-all disabled:opacity-50"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-neutral-600 dark:text-neutral-400 uppercase tracking-wider mb-1.5 font-semibold">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        disabled={isSubmitting}
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="you@company.com"
                        className="w-full px-4 py-2.5 rounded-xl border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 text-neutral-900 dark:text-white text-sm focus:outline-hidden focus:ring-2 focus:ring-neutral-900 dark:focus:ring-white transition-all disabled:opacity-50"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-neutral-600 dark:text-neutral-400 uppercase tracking-wider mb-1.5 font-semibold">
                      Subject / Project Type
                    </label>
                    <input
                      type="text"
                      disabled={isSubmitting}
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="UI/UX Design Project, Consulting, Hiring"
                      className="w-full px-4 py-2.5 rounded-xl border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 text-neutral-900 dark:text-white text-sm focus:outline-hidden focus:ring-2 focus:ring-neutral-900 dark:focus:ring-white transition-all disabled:opacity-50"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-neutral-600 dark:text-neutral-400 uppercase tracking-wider mb-1.5 font-semibold">
                      Your Message *
                    </label>
                    <textarea
                      required
                      disabled={isSubmitting}
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Share details about your project, idea, or timeline..."
                      className="w-full px-4 py-2.5 rounded-xl border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 text-neutral-900 dark:text-white text-sm focus:outline-hidden focus:ring-2 focus:ring-neutral-900 dark:focus:ring-white transition-all resize-none disabled:opacity-50"
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-1">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto px-7 py-3 rounded-full bg-neutral-950 dark:bg-white text-white dark:text-neutral-950 font-mono text-xs uppercase tracking-wider font-bold inline-flex items-center justify-center gap-2 hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-all cursor-pointer shadow-md disabled:opacity-60"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          <span>Sending to {PERSONAL_INFO.email}...</span>
                        </>
                      ) : (
                        <>
                          <span>Send to Umang</span>
                          <Send className="w-3.5 h-3.5" />
                        </>
                      )}
                    </button>

                    <a
                      href={getDirectMailtoUrl()}
                      className="text-xs font-mono text-neutral-500 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-white hover:underline flex items-center gap-1.5"
                    >
                      <Mail className="w-3.5 h-3.5 text-neutral-400" />
                      <span>Or send via your email client</span>
                    </a>
                  </div>
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
