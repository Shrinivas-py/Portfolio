import React, { useRef } from 'react';
import { Section, SectionHeading } from './ui';
import { useIntersection } from '../hooks/useIntersection';
import { SKILLS, TOOLS_TAGS } from '../data/portfolioData';

function SkillBar({ name, level, visible }) {
  return (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-1.5">
        <span className="font-body text-sm dark:text-gray-300 text-gray-600">{name}</span>
        <span className="font-body text-xs text-[#00F5C4] font-medium">{level}%</span>
      </div>
      <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
        <div
          className="h-full rounded-full bg-gradient-to-r from-[#00F5C4] to-[#7B61FF] skill-bar"
          style={{ width: visible ? `${level}%` : '0%' }}
        />
      </div>
    </div>
  );
}

function SkillCard({ category, icon, items, visible }) {
  return (
    <div className="card-glow dark:bg-[#0D0F17]/80 bg-white rounded-2xl p-7 border border-white/5">
      <div className="flex items-center gap-3 mb-7">
        <span className="w-11 h-11 rounded-xl bg-[#00F5C4]/10 flex items-center justify-center text-[#00F5C4] font-display font-bold text-xl">
          {icon}
        </span>
        <h3 className="font-display font-semibold text-lg dark:text-white text-gray-800">
          {category}
        </h3>
      </div>
      {items.map((item) => (
        <SkillBar key={item.name} {...item} visible={visible} />
      ))}
    </div>
  );
}

function Skills() {
  const ref = useRef(null);
  const visible = useIntersection(ref);

  return (
    <Section id="skills" className="dark:bg-[#13162B] bg-gray-50">
      <SectionHeading label="What I Know" title="Technical" accent="Skills" />

      <div ref={ref} className="grid md:grid-cols-3 gap-8 mb-12">
        {SKILLS.map((cat) => (
          <SkillCard key={cat.category} {...cat} visible={visible} />
        ))}
      </div>

      {/* Tool badges */}
      <div className="flex flex-wrap gap-3 justify-center">
        {TOOLS_TAGS.map((tag) => (
          <span
            key={tag}
            className="font-body text-xs px-4 py-2 rounded-full border border-[#00F5C4]/20 text-[#00F5C4] bg-[#00F5C4]/5 hover:bg-[#00F5C4]/10 transition-colors cursor-default"
          >
            {tag}
          </span>
        ))}
      </div>
    </Section>
  );
}

export default Skills;
