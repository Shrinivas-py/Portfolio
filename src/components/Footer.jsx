import React from 'react';
import { GitHubIcon, LinkedInIcon, EmailIcon } from './ui';

const SOCIAL = [
  { label: 'GitHub', href: 'https://github.com/Shrinivas-py', Icon: GitHubIcon },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/shrinivas-rj/', Icon: LinkedInIcon },
  { label: 'Email', href: 'mailto:shrinivasrj734@gmail.com', Icon: EmailIcon },
];

function Footer() {
  return (
    <footer className="dark:bg-[#0D0F17] bg-gray-50 border-t border-white/5 py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <p className="font-display font-bold text-xl gradient-text mb-1">
            Shrinivas R J
          </p>
          <p className="font-body text-sm text-gray-500">
            Designed and Built By Myself · {new Date().getFullYear()}
          </p>
        </div>

        <div className="flex gap-4">
          {SOCIAL.map(({ label, href, Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-500 hover:text-[#00F5C4] hover:border-[#00F5C4]/30 transition-all duration-200"
            >
              <Icon className="w-4 h-4" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
