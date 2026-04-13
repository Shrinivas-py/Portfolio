import React from 'react';
import { Section, SectionHeading } from './ui';
import { EDUCATION } from '../data/portfolioData';

function EducationCard({ degree, institution, duration, gpa, highlights }) {
  return (
    <div className="card-glow dark:bg-[#13162B] bg-white rounded-2xl p-7 border border-white/5 h-full">
      <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#00F5C4]/20 to-[#7B61FF]/20 flex items-center justify-center text-2xl mb-5">
        🎓
      </div>
      <h3 className="font-display font-bold text-lg dark:text-white text-gray-900 mb-1 leading-snug">
        {degree}
      </h3>
      <p className="font-body text-sm text-[#7B61FF] font-medium mb-1">{institution}</p>
      <p className="font-body text-xs text-gray-500 mb-2">{duration}</p>
      <p className="font-body text-sm text-[#00F5C4] font-semibold mb-5">{gpa}</p>

      <div className="border-t border-white/5 pt-5">
        <p className="text-xs font-body text-gray-500 uppercase tracking-wider mb-3">
          Highlights
        </p>
        <ul className="space-y-2">
          {highlights.map((h, i) => (
            <li key={i} className="flex items-start gap-2.5 text-sm font-body text-gray-400">
              <span className="text-[#00F5C4] mt-0.5 flex-shrink-0">▸</span>
              {h}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function Education() {
  return (
    <Section id="education" className="dark:bg-[#0D0F17] bg-gray-50">
      <SectionHeading label="Academic Background" title="My" accent="Education" />
      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {EDUCATION.map((edu, i) => (
          <EducationCard key={i} {...edu} />
        ))}
      </div>
    </Section>
  );
}

export default Education;
