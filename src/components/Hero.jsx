import React from 'react';
import { GitHubIcon, LinkedInIcon, EmailIcon } from './ui';

function Particles() {
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    size: Math.random() * 6 + 2,
    x: Math.random() * 100,
    y: Math.random() * 100,
    dur: `${Math.random() * 6 + 4}s`,
    delay: `${Math.random() * 4}s`,
    color: ['#00F5C4', '#7B61FF', '#FF6B8A'][i % 3],
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p) => (
        <div
          key={p.id}
          className="particle"
          style={{
            width: p.size,
            height: p.size,
            left: `${p.x}%`,
            top: `${p.y}%`,
            background: p.color,
            opacity: 0.4,
            '--dur': p.dur,
            '--delay': p.delay,
          }}
        />
      ))}
    </div>
  );
}

const SOCIAL = [
  { label: 'GitHub', href: 'https://github.com/Shrinivas-py', Icon: GitHubIcon },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/shrinivas-rj/', Icon: LinkedInIcon },
  { label: 'Email', href: 'mailto:shrinivasrj734@gmail.com', Icon: EmailIcon },
];

function Hero() {
  const scrollToContact = () =>
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section className="relative min-h-screen flex items-center justify-center hero-bg overflow-hidden noise-overlay">
      <Particles />

      <div className="orb w-96 h-96 bg-[#00F5C4]/10 top-10 -left-24" />
      <div className="orb w-80 h-80 bg-[#7B61FF]/15 bottom-10 -right-20" />
      <div className="orb w-64 h-64 bg-[#FF6B8A]/8 top-1/2 left-1/3" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 py-32 text-center">
        <div className="mb-8 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#00F5C4]/20 bg-[#00F5C4]/5 text-[#00F5C4] text-sm font-body font-medium">
          <span className="w-2 h-2 rounded-full bg-[#00F5C4] animate-pulse" />
          Available for opportunities
        </div>
        <h1 className="font-display font-black text-6xl md:text-7xl lg:text-8xl text-white mb-4 leading-[1.05] tracking-tight">
          Shrinivas
          <br />
          <span className="gradient-text">R J</span>
        </h1>
        <p className="font-display font-semibold text-xl md:text-2xl text-gray-500 mb-5 tracking-[0.2em] uppercase">
          Full Stack Developer | AI Automation | MCP | Finance | DSA
        </p>
        <p className="font-body text-gray-400 text-lg max-w-xl mx-auto mb-12 leading-relaxed">
          Building full stack web applications with modern technologies and AI integration. Passionate about creating seamless user experiences and efficient backend systems. Let's connect and create something amazing together!
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap gap-4 justify-center mb-16">
          <a
            href="/Shrinivas_resume.pdf"
            download="Shrinivas_resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary font-body font-semibold px-8 py-3.5 rounded-full text-[#0D0F17] text-sm tracking-wide"
          >
            ↓ Download Resume
          </a>
          <button
            onClick={scrollToContact}
            className="font-body font-medium px-8 py-3.5 rounded-full border border-[#00F5C4]/40 text-[#00F5C4] text-sm hover:bg-[#00F5C4]/10 transition-colors tracking-wide"
          >
            Let's Talk →
          </button>
        </div>
        <div className="flex justify-center gap-5">
          {SOCIAL.map(({ label, href, Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-[#00F5C4] hover:border-[#00F5C4]/40 hover:bg-[#00F5C4]/5 transition-all duration-200"
            >
              <Icon className="w-5 h-5" />
            </a>
          ))}
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-600 animate-bounce">
        <span className="text-xs font-body tracking-[0.3em] uppercase">Scroll</span>
        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </div>
    </section>
  );
}

export default Hero;
