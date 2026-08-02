import { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import LogoContainer from './LogoContainer';

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Products', href: '#products' },
  { label: 'Process', href: '#process' },
  { label: 'Tech Stack', href: '#tech' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-[0_1px_3px_rgba(15,23,42,0.06)] border-b border-[#E2E8F0]'
          : 'bg-white border-b border-transparent'
      }`}
    >
      <nav
        className="container-main flex items-center justify-between"
        style={{ height: '90px' }}
        aria-label="Main navigation"
      >
        {/* ── Official Premium Logo Container ── */}
        <a
          href="#home"
          className="flex items-center focus-ring rounded-[10px] md:rounded-[14px]"
          aria-label="TantraKod Home"
        >
          <LogoContainer size="md" />
        </a>

        {/* ── Desktop Links ── */}
        <ul className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="relative text-sm font-medium text-[#475569] hover:text-[#2563EB] transition-colors focus-ring rounded py-1"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* ── Desktop CTA ── */}
        <a
          href="#contact"
          className="hidden lg:inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-sm font-semibold shadow-sm hover:shadow-md hover:-translate-y-px active:translate-y-0 transition-all focus-ring"
        >
          Contact Us
          <ArrowUpRight className="w-4 h-4" strokeWidth={2.5} />
        </a>

        {/* ── Mobile Toggle ── */}
        <button
          onClick={() => setMobileOpen((v) => !v)}
          className="lg:hidden p-2.5 rounded-lg text-[#475569] hover:text-[#0F172A] hover:bg-[#F8FAFC] transition-colors focus-ring"
          aria-label="Toggle navigation menu"
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* ── Mobile Drawer ── */}
      {mobileOpen && (
        <div
          id="mobile-nav"
          className="lg:hidden fixed inset-x-0 top-[90px] bottom-0 bg-white border-t border-[#E2E8F0] z-40"
        >
          <div className="container-main py-8 flex flex-col gap-6 h-full">
            <ul className="space-y-1">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block px-4 py-3 rounded-xl text-base font-medium text-[#475569] hover:text-[#2563EB] hover:bg-[#F8FAFC] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-auto pb-8">
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-center gap-2 w-full px-5 py-3.5 rounded-xl bg-[#2563EB] text-white text-base font-semibold shadow-sm"
              >
                Contact Us
                <ArrowUpRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
