import React, { useState } from "react";
import { Mail, ArrowUpRight, Copy, Check, Send, Github, Linkedin } from "lucide-react";
import { SOCIAL_LINKS } from "../data/portfolioData";

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    topic: "Collaboration",
    message: ""
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(SOCIAL_LINKS.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    // Simulate instantaneous clean message dispatch
    setTimeout(() => {
      setSubmitting(false);
      setFormSubmitted(true);
    }, 400);
  };

  return (
    <section id="contact" className="py-24 px-6 md:px-10 max-w-6xl mx-auto border-t border-[#E0E0DA]">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column: Headline & Direct Links */}
        <div className="lg:col-span-6">
          <div className="text-xs font-mono uppercase tracking-wider text-emerald-800 mb-2">
            Get In Touch
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#111111] mb-4 text-balance">
            Have an idea worth building?
          </h2>
          <p className="text-base sm:text-lg text-[#6B6B6B] font-normal leading-relaxed mb-8 max-w-lg">
            I'm always interested in interesting products, collaborations, and creative experiments.
          </p>

          {/* Direct Email Card */}
          <div className="p-6 bg-white rounded-lg border border-[#E0E0DA] shadow-sm mb-6">
            <div className="text-xs font-mono uppercase tracking-wider text-[#888] mb-1">
              Direct Inquiries
            </div>
            <div className="text-lg font-bold text-[#111111] break-all mb-4">
              {SOCIAL_LINKS.email}
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href={`mailto:${SOCIAL_LINKS.email}`}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#111111] hover:bg-emerald-900 rounded-md transition-colors cursor-pointer"
              >
                <span>Email Me</span>
                <Mail className="w-3.5 h-3.5" />
              </a>

              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-[#111111] bg-[#F7F7F5] hover:bg-[#EAEAE5] border border-[#DDD] rounded-md transition-colors cursor-pointer"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-700" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-[#6B6B6B]" />
                    <span>Copy Email</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Social Profiles (Clearly labeled placeholders per requirements) */}
          <div className="pt-2">
            <div className="text-xs font-mono uppercase tracking-wider text-[#888] mb-3">
              Profiles & Repositories
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-2 px-4 py-2 text-xs font-medium text-[#111111] bg-white hover:bg-[#F2F2EE] border border-[#E0E0DA] rounded-md transition-colors"
              >
                <Github className="w-4 h-4 text-[#444]" />
                <span>GitHub (Placeholder)</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#888]" />
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-2 px-4 py-2 text-xs font-medium text-[#111111] bg-white hover:bg-[#F2F2EE] border border-[#E0E0DA] rounded-md transition-colors"
              >
                <Linkedin className="w-4 h-4 text-[#0077B5]" />
                <span>LinkedIn (Placeholder)</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#888]" />
              </a>
            </div>
            <p className="text-[11px] text-[#888] mt-2 font-mono">
              * Official professional handles can also be provided directly via email.
            </p>
          </div>
        </div>

        {/* Right Column: Interactive Direct Message Form */}
        <div className="lg:col-span-6 bg-white p-6 sm:p-8 rounded-lg border border-[#E0E0DA] shadow-sm">
          {formSubmitted ? (
            <div className="py-8 text-center space-y-3">
              <div className="w-12 h-12 bg-emerald-100 text-emerald-800 rounded-full flex items-center justify-center mx-auto">
                <Check className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[#111111]">Message Received</h3>
              <p className="text-sm text-[#6B6B6B] max-w-sm mx-auto">
                Thank you for reaching out, {formState.name || "there"}. I will reply directly to <span className="font-medium text-[#111]">{formState.email}</span>.
              </p>
              <div className="pt-4">
                <button
                  onClick={() => {
                    setFormSubmitted(false);
                    setFormState({ name: "", email: "", topic: "Collaboration", message: "" });
                  }}
                  className="px-4 py-2 text-xs font-semibold text-[#111111] bg-[#F7F7F5] border border-[#DDD] rounded hover:bg-[#EAEAE5] transition-colors"
                >
                  Send another message
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleFormSubmit} className="space-y-4">
              <div>
                <h3 className="text-lg font-bold text-[#111111] mb-1">Send a Message</h3>
                <p className="text-xs text-[#6B6B6B]">
                  Looking for an intern, product collaboration, or discussing an experiment? Leave a note.
                </p>
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-[#6B6B6B] mb-1.5">
                  Opportunity Type
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {["Internship", "Collaboration", "Freelance", "Other"].map((t) => (
                    <button
                      key={t}
                      type="button"
                      onClick={() => setFormState({ ...formState, topic: t })}
                      className={`py-2 px-2.5 text-xs rounded border text-center transition-colors cursor-pointer ${
                        formState.topic === t
                          ? "bg-[#111111] text-white font-medium border-[#111111]"
                          : "bg-white text-[#6B6B6B] border-[#DDD] hover:border-[#999]"
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-[#6B6B6B] mb-1.5">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    placeholder="e.g. Jordan Lee"
                    className="w-full bg-[#FAFAFA] border border-[#DDD] rounded px-3 py-2 text-sm text-[#111] focus:outline-none focus:border-emerald-800"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-[#6B6B6B] mb-1.5">
                    Your Email
                  </label>
                  <input
                    type="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    placeholder="jordan@example.com"
                    className="w-full bg-[#FAFAFA] border border-[#DDD] rounded px-3 py-2 text-sm text-[#111] focus:outline-none focus:border-emerald-800"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-[#6B6B6B] mb-1.5">
                  Message Details
                </label>
                <textarea
                  required
                  rows={4}
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  placeholder="Tell me about the project, role, or concept..."
                  className="w-full bg-[#FAFAFA] border border-[#DDD] rounded px-3 py-2 text-sm text-[#111] focus:outline-none focus:border-emerald-800"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="w-full py-3 bg-[#111111] hover:bg-emerald-900 text-white font-semibold text-xs uppercase tracking-wider rounded transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-sm"
              >
                <span>{submitting ? "Sending..." : "Dispatch Message"}</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
