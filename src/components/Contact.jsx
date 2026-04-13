import React, { useState } from 'react';
import { Section, SectionHeading } from './ui';

const CONTACT_INFO = [
  {
    icon: '✉️',
    label: 'Email',
    value: 'shrinivasrj734@email.com',
    href: 'mailto:shrinivasrj734@email.com',
  },
  {
    icon: '💼',
    label: 'LinkedIn',
    value: 'https://www.linkedin.com/in/shrinivas-rj/',
    href: 'https://www.linkedin.com/in/shrinivas-rj/',
  },
  {
    icon: '🐙',
    label: 'GitHub',
    value: 'https://github.com/Shrinivas-py',
    href: 'https://github.com/Shrinivas-py',
  },
];

function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); 
  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('loading');
    setTimeout(() => {
      setStatus('sent');
      setForm({ name: '', email: '', message: '' });
    }, 1500);
  };

  if (status === 'sent') {
    return (
      <div className="text-center py-12">
        <div className="text-6xl mb-5">🎉</div>
        <h3 className="font-display font-bold text-2xl dark:text-white text-gray-900 mb-3">
          Message Sent!
        </h3>
        <p className="font-body text-gray-400">
          Thanks for reaching out! I'll get back to you soon.
        </p>
        <button
          onClick={() => setStatus('idle')}
          className="mt-6 text-sm font-body text-[#00F5C4] hover:underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {[
        { name: 'name', label: 'Your Name', type: 'text', placeholder: 'Ravi Kumar' },
        { name: 'email', label: 'Email Address', type: 'email', placeholder: 'ravi@example.com' },
      ].map((field) => (
        <div key={field.name}>
          <label className="block text-xs font-body text-gray-500 uppercase tracking-wider mb-2">
            {field.label}
          </label>
          <input
            type={field.type}
            name={field.name}
            placeholder={field.placeholder}
            value={form[field.name]}
            onChange={handleChange}
            required
            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 font-body text-sm dark:text-white text-gray-900 placeholder-gray-600 focus:border-[#00F5C4]/50 transition-colors"
          />
        </div>
      ))}

      <div>
        <label className="block text-xs font-body text-gray-500 uppercase tracking-wider mb-2">
          Message
        </label>
        <textarea
          name="message"
          placeholder="Tell me about your project or opportunity..."
          value={form.message}
          onChange={handleChange}
          rows={5}
          required
          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 font-body text-sm dark:text-white text-gray-900 placeholder-gray-600 focus:border-[#00F5C4]/50 transition-colors resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={status === 'loading'}
        className="btn-primary w-full py-3.5 rounded-xl font-body font-semibold text-[#0D0F17] text-sm tracking-wide disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === 'loading' ? 'Sending…' : 'Send Message →'}
      </button>
    </form>
  );
}

function Contact() {
  return (
    <Section id="contact" className="dark:bg-[#13162B] bg-white">
      <SectionHeading label="Get In Touch" title="Contact" accent="Me" />

      <div className="grid md:grid-cols-2 gap-16 items-start max-w-5xl mx-auto">

        <div>
          <p className="font-body text-gray-400 text-lg leading-relaxed mb-10">
            Whether you have a project in mind, a job opportunity, or just want
            to say hello — my inbox is always open. I'll try my best to get
            back to you!
          </p>

          <div className="space-y-6">
            {CONTACT_INFO.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center text-xl group-hover:border-[#00F5C4]/30 group-hover:bg-[#00F5C4]/5 transition-all duration-200">
                  {item.icon}
                </div>
                <div>
                  <p className="text-xs font-body text-gray-500 uppercase tracking-wider mb-0.5">
                    {item.label}
                  </p>
                  <p className="font-body text-sm dark:text-gray-300 text-gray-600 group-hover:text-[#00F5C4] transition-colors">
                    {item.value}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
        <div className="card-glow dark:bg-[#0D0F17]/80 bg-gray-50 rounded-2xl p-8 border border-white/5">
          <ContactForm />
        </div>
      </div>
    </Section>
  );
}

export default Contact;
