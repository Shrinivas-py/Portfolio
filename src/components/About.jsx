import React from 'react';
import { Section, SectionHeading } from './ui';

const STATS = [
  { label: 'Location', value: 'Bengaluru, India' },
  { label: 'Status', value: 'Open to Work ✅' },
  { label: 'Focus', value: 'Full Stack Dev' },
  { label: 'Education', value: 'B.E. CS 2024' },
];

function About() {
  return (
    <Section id="about" className="dark:bg-[#0D0F17] bg-gray-50">
      <SectionHeading label="Who I Am" title="About" accent="Me" />

      <div className="grid md:grid-cols-2 gap-16 items-center">
        {/* Profile visual */}
        <div className="flex justify-center order-2 md:order-1">
          <div className="relative">
            <div className="blob w-72 h-72 bg-gradient-to-br from-[#00F5C4]/20 to-[#7B61FF]/20 absolute inset-0 scale-110" />
            <div className="relative w-72 h-72 rounded-3xl overflow-hidden border-2 border-[#00F5C4]/20 bg-gradient-to-br from-[#13162B] to-[#1a1040] flex items-center justify-center shadow-2xl">
              {/* Replace the div below with an <img> tag for a real photo */}
              <div className="text-center select-none">
  <img
    src="/profile1.jpeg"
    alt="Shrinivas R J"
    className="w-full h-full object-cover rounded-2xl"
  />
</div>
            </div>
            <div className="absolute -bottom-4 -right-4 bg-[#00F5C4] text-[#0D0F17] rounded-2xl px-5 py-2.5 font-display font-bold text-sm shadow-lg shadow-[#00F5C4]/30">
              4+ Projects 🚀
            </div>
          </div>
        </div>

        {/* Bio */}
        <div className="order-1 md:order-2">
          <p className="font-body text-gray-400 text-lg leading-relaxed mb-5">
            Hi! I'm{' '}
            <span className="text-[#00F5C4] font-medium">Shrinivas R J</span>, a
            passionate Full Stack Developer based in Bengaluru, India. I love crafting
            web applications that are fast, accessible, and a joy to use.
          </p>
          <p className="font-body text-gray-400 text-lg leading-relaxed mb-5">
            My journey started with curiosity about how websites work, which
            evolved into deep interests in both frontend aesthetics and backend
            architecture — REST APIs, databases, cloud deployments, and beyond.
          </p>
          <p className="font-body text-gray-400 text-lg leading-relaxed mb-9">
            I'm currently seeking opportunities where I can contribute, grow,
            and continue learning alongside a passionate, collaborative team.
          </p>

          <div className="grid grid-cols-2 gap-4">
            {STATS.map(({ label, value }) => (
              <div
                key={label}
                className="bg-white/5 rounded-xl p-4 border border-white/5 hover:border-[#00F5C4]/20 transition-colors"
              >
                <p className="text-xs font-body text-gray-500 mb-1 uppercase tracking-wider">
                  {label}
                </p>
                <p className="font-body font-medium dark:text-white text-gray-800 text-sm">
                  {value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

export default About;
