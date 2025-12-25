
import React from 'react';
import { PolicyContent } from '../lib/policies';

interface PolicyPageProps {
  policy: PolicyContent;
}

const PolicyPage: React.FC<PolicyPageProps> = ({ policy }) => {
  return (
    <div className="min-h-screen pt-40 pb-24">
      {/* Header with Grid background like Hero */}
      <header className="relative py-20 px-4 bg-grid border-b border-gray-100 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-4">
            Legal & Compliance
          </div>
          <h1 className="text-4xl md:text-6xl font-medium font-heading tracking-tight mb-4">
            {policy.title}
          </h1>
          <p className="text-sm text-gray-400 font-medium">
            Last Updated: {policy.lastUpdated}
          </p>
        </div>
      </header>

      {/* Main Content */}
      <article className="max-w-3xl mx-auto px-6 pt-20">
        <div className="space-y-16">
          {policy.sections.map((section, idx) => (
            <section key={idx} className="group">
              <h2 className="text-2xl font-medium font-heading mb-6 group-hover:text-black transition-colors">
                {section.heading}
              </h2>
              <div className="text-lg text-gray-600 leading-relaxed font-serif space-y-4">
                {Array.isArray(section.content) ? (
                  <ul className="space-y-4 list-disc pl-5 marker:text-gray-300">
                    {section.content.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                ) : (
                  <p>{section.content}</p>
                )}
              </div>
            </section>
          ))}
        </div>

        <div className="mt-24 pt-12 border-t border-gray-100">
          <p className="text-sm text-gray-400 italic">
            Questions regarding this policy can be directed to our legal department at legal@kisslead.com
          </p>
        </div>
      </article>
    </div>
  );
};

export default PolicyPage;
