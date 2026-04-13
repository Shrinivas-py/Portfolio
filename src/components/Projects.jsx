import React from 'react';
import { Section, SectionHeading, GitHubIcon, ExternalLinkIcon } from './ui';
import { PROJECTS } from '../data/portfolioData';

function ProjectCard({ title, desc, tech, github, live, color }) {
  return (
    <div className="project-card card-glow dark:bg-[#13162B] bg-white rounded-2xl overflow-hidden border border-white/5 flex flex-col h-full">
      {/* Colour accent strip */}
      <div className={`h-1.5 bg-gradient-to-r ${color}`} />

      <div className="p-7 flex flex-col flex-1">
        <h3 className="font-display font-bold text-xl dark:text-white text-gray-900 mb-3">
          {title}
        </h3>
        <p className="font-body text-gray-400 text-sm leading-relaxed mb-5 flex-1">
          {desc}
        </p>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-2 mb-6">
          {tech.map((t) => (
            <span
              key={t}
              className="text-xs font-body px-3 py-1 rounded-full bg-white/5 dark:text-gray-300 text-gray-600 border border-white/10"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-5 border-t border-white/5 pt-5">
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-body text-gray-400 hover:text-[#00F5C4] transition-colors"
            >
              <GitHubIcon className="w-4 h-4" />
              GitHub
            </a>
          )}
          {live && (
            <a
              href={live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-body text-[#00F5C4] hover:text-white transition-colors"
            >
              <ExternalLinkIcon className="w-4 h-4" />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

function Projects() {
  return (
    <Section id="projects" className="dark:bg-[#0D0F17] bg-gray-50">
      <SectionHeading label="What I've Built" title="Featured" accent="Projects" />
      <div className="grid md:grid-cols-2 gap-8">
        {PROJECTS.map((project, i) => (
          <ProjectCard key={i} {...project} />
        ))}
      </div>
    </Section>
  );
}

export default Projects;
