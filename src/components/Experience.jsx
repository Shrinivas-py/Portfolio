import React from 'react';
import { Section, SectionHeading } from './ui';
import { EXPERIENCE } from '../data/portfolioData';

function Experience() {
  return (
    <Section id="experience" className="dark:bg-[#13162B] bg-white">
      <SectionHeading label="My Journey" title="Work" accent="Experience" />

      <div className="relative max-w-3xl mx-auto">
        {/* Vertical timeline line */}
        <div className="absolute left-5 top-2 bottom-2 w-0.5 timeline-line opacity-25 rounded-full" />

        {EXPERIENCE.map((exp, i) => (
          <div key={i} className="relative pl-16 mb-12 last:mb-0">
            {/* Numbered circle */}
            <div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-gradient-to-br from-[#00F5C4] to-[#7B61FF] flex items-center justify-center text-[#0D0F17] font-display font-bold text-sm shadow-lg shadow-[#00F5C4]/20">
              {String(i + 1).padStart(2, '0')}
            </div>

            <div className="card-glow dark:bg-[#0D0F17]/60 bg-gray-50 rounded-2xl p-6 border border-white/5">
              <div className="flex flex-wrap items-start justify-between gap-3 mb-1">
                <h3 className="font-display font-bold text-lg dark:text-white text-gray-900">
                  {exp.role}
                </h3>
                <span className="text-xs font-body text-[#00F5C4] bg-[#00F5C4]/10 px-3 py-1.5 rounded-full whitespace-nowrap">
                  {exp.duration}
                </span>
              </div>
              <p className="font-body text-sm text-[#7B61FF] mb-3 font-medium">
                {exp.company}
              </p>
              <p className="font-body text-gray-400 text-sm leading-relaxed">
                {exp.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

export default Experience;
