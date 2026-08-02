import { Linkedin, Youtube, Instagram, Twitter } from 'lucide-react';
import LogoContainer from './LogoContainer';
import { BRAND_INFO } from '../constants/brand';

const NAV_GROUPS = [
  {
    title: 'Company',
    links: [
      { label: 'About', href: '#about' },
      { label: 'Process', href: '#process' },
    ],
  },
  {
    title: 'Services',
    links: [
      { label: 'Web Development', href: '#services' },
      { label: 'Mobile Apps', href: '#services' },
      { label: 'AI Solutions', href: '#services' },
      { label: 'Cloud & DevOps', href: '#services' },
    ],
  },
];

const SOCIAL_LINKS = [
  { label: 'LinkedIn', href: 'https://linkedin.com/company/tantrakod', icon: Linkedin },
  { label: 'Instagram', href: 'https://instagram.com/tantrakod', icon: Instagram },
  { label: 'X (Twitter)', href: 'https://x.com/TantraKod', icon: Twitter },
  { label: 'YouTube', href: 'https://youtube.com/@TantraKod', icon: Youtube },
];

export default function Footer() {
  return (
    <footer className="bg-[#0F172A] pt-16 pb-8">
      <div className="container-main">
        {/* Top section: Brand + Nav */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-12 border-b border-[#1E293B]">
          {/* Brand Column */}
          <div className="lg:col-span-5">
            <a href="#home" className="inline-block mb-5">
              <LogoContainer />
            </a>
            
            <p className="text-sm font-semibold text-[#60A5FA] mb-3" style={{ fontFamily: 'var(--font-heading)' }}>
              {BRAND_INFO.tagline}
            </p>

            <p className="text-sm text-[#64748B] leading-relaxed max-w-sm mb-6">
              {BRAND_INFO.description}
            </p>

            {/* Social Icons Bar */}
            <div className="flex items-center gap-3">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="p-2.5 rounded-lg border border-[#334155] bg-[#1E293B] text-[#94A3B8] hover:text-white hover:border-[#60A5FA] hover:bg-[#2563EB]/10 transition-all hover:-translate-y-0.5 focus-ring"
                >
                  <social.icon className="w-4 h-4" strokeWidth={2} />
                </a>
              ))}
            </div>
          </div>

          {/* Nav Columns */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-8">
            {NAV_GROUPS.map((group) => (
              <div key={group.title}>
                <h4
                  className="text-xs font-bold uppercase tracking-wider text-[#94A3B8] mb-4"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  {group.title}
                </h4>
                <ul className="space-y-2.5">
                  {group.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="inline-flex items-center gap-1 text-sm text-[#64748B] hover:text-white transition-colors"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8">
          <p className="text-xs text-[#64748B]">
            © 2026 TantraKod. All Rights Reserved.
          </p>
          <p className="text-xs text-[#64748B]">
            Designed &amp; Developed by TantraKod
          </p>
        </div>
      </div>
    </footer>
  );
}
