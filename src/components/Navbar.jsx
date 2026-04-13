import React, { useState, useEffect } from 'react';

const NAV_LINKS = ['About', 'Skills', 'Projects', 'Experience', 'Education', 'Contact'];

function Navbar({ dark, setDark }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigateTo = (id) => {
    setOpen(false);
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 font-body ${
        scrolled
          ? 'bg-[#0D0F17]/90 backdrop-blur-md shadow-lg shadow-black/30 border-b border-white/5 dark:bg-[#0D0F17]/90'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <span className="font-display font-bold text-xl gradient-text tracking-wide">SRJ</span>
        </button>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-7">
          {NAV_LINKS.map((link) => (
            <button
              key={link}
              onClick={() => navigateTo(link)}
              className="nav-link text-sm text-gray-400 hover:text-white dark:text-gray-400 dark:hover:text-white transition-colors font-medium tracking-wide"
            >
              {link}
            </button>
          ))}
          <button
            onClick={() => setDark(!dark)}
            className="ml-2 p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors text-base"
            aria-label="Toggle dark mode"
          >
            {dark ? '☀️' : '🌙'}
          </button>
        </div>

        {/* Mobile controls */}
        <div className="flex md:hidden items-center gap-3">
          <button
            onClick={() => setDark(!dark)}
            className="p-2 rounded-full bg-white/5"
            aria-label="Toggle theme"
          >
            {dark ? '☀️' : '🌙'}
          </button>
          <button
            onClick={() => setOpen(!open)}
            className="flex flex-col gap-1.5 p-2"
            aria-label="Toggle menu"
          >
            <span
              className={`hamburger-line ${open ? 'rotate-45 translate-y-2' : ''}`}
            />
            <span className={`hamburger-line ${open ? 'opacity-0' : ''}`} />
            <span
              className={`hamburger-line ${open ? '-rotate-45 -translate-y-2' : ''}`}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[#13162B]/95 backdrop-blur-md border-t border-white/5 px-6 py-5 flex flex-col gap-5">
          {NAV_LINKS.map((link) => (
            <button
              key={link}
              onClick={() => navigateTo(link)}
              className="text-left text-gray-300 hover:text-[#00F5C4] transition-colors font-medium py-1"
            >
              {link}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}

export default Navbar;
