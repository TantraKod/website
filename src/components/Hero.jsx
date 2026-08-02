import { motion } from 'framer-motion';
import { ArrowUpRight, ChevronRight, Globe, Code2, Brain, Sparkles, ShieldCheck } from 'lucide-react';
import { TANTRAKOD_BANNER, BRAND_INFO } from '../constants/brand';

/* ── Factual Core Pillars ── */
const PILLARS = [
  { icon: Sparkles, title: 'Student-Led Startup', label: 'Driven by Tech Talent' },
  { icon: Code2, title: 'Web & Custom Software', label: 'React & Modern Stack' },
  { icon: Brain, title: 'AI & Automation', label: 'Smart Digital Products' },
  { icon: ShieldCheck, title: 'Scalable Architecture', label: 'Production-Ready Code' },
];

/* ── Animation Variants ── */
const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-white"
      style={{ paddingTop: '70px', paddingBottom: '90px' }}
    >
      {/* ── Ambient Background Glows ── */}
      <div
        className="pointer-events-none absolute top-[-10%] left-[-5%] w-[50%] h-[60%] rounded-full opacity-[0.06]"
        style={{ background: 'radial-gradient(circle, #2563EB 0%, transparent 70%)' }}
      />
      <div
        className="pointer-events-none absolute bottom-[-10%] right-[-5%] w-[45%] h-[55%] rounded-full opacity-[0.05]"
        style={{ background: 'radial-gradient(circle, #F97316 0%, transparent 70%)' }}
      />

      <div className="container-main relative">
        {/* ── Left Accent Strip ── */}
        <div
          className="hidden lg:block absolute left-6 top-0 bottom-0 w-1.5 rounded-full"
          style={{
            background: 'linear-gradient(to bottom, #2563EB 0%, #FFFFFF 50%, #F97316 100%)',
          }}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center lg:pl-12">
          {/* ── Left Column: Content ── */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="lg:col-span-6 flex flex-col"
          >
            {/* Badges */}
            <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-2.5 mb-5">
              <span
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-[#E2E8F0] bg-[#F8FAFC] text-xs font-semibold tracking-wide text-[#2563EB]"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                {BRAND_INFO.regionBadge}
              </span>
              <span
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-[#E2E8F0] bg-[#F8FAFC] text-xs font-semibold tracking-wide text-[#475569] uppercase"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                {BRAND_INFO.tagline}
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              variants={fadeUp}
              className="text-4xl sm:text-5xl xl:text-[3.35rem] font-extrabold text-[#0F172A] leading-[1.12] mb-4"
              style={{ fontFamily: 'var(--font-heading)', letterSpacing: '-0.04em' }}
            >
              Where Innovation Meets{' '}
              <span className="text-[#2563EB]">Engineering Excellence.</span>
            </motion.h1>

            {/* Factual Geographic Scope Subtitle */}
            <motion.p
              variants={fadeUp}
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#2563EB] mb-5"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              <Globe className="w-4 h-4 text-[#F97316]" strokeWidth={2.2} />
              {BRAND_INFO.region}
            </motion.p>

            {/* Description */}
            <motion.p
              variants={fadeUp}
              className="text-base sm:text-lg text-[#475569] leading-relaxed max-w-xl mb-8"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              {BRAND_INFO.description}
            </motion.p>

            {/* CTAs */}
            <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-4 mb-10">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-sm font-semibold shadow-sm hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 transition-all focus-ring"
              >
                Start Your Project
                <ArrowUpRight className="w-4 h-4" strokeWidth={2.5} />
              </a>
              <a
                href="#services"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl border-2 border-[#F97316] text-[#F97316] hover:bg-[#F97316] hover:text-white text-sm font-semibold transition-all hover:-translate-y-0.5 active:translate-y-0 focus-ring"
              >
                Explore Our Services
                <ChevronRight className="w-4 h-4" strokeWidth={2.5} />
              </a>
            </motion.div>

            {/* Factual Focus Row (No fake numbers) */}
            <motion.div
              variants={fadeUp}
              className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 border-t border-[#E2E8F0]"
            >
              {PILLARS.map((item) => (
                <div key={item.title} className="text-left">
                  <div className="flex items-center gap-1.5 text-[#2563EB] mb-1">
                    <item.icon className="w-4 h-4 text-[#F97316]" strokeWidth={2} />
                    <p
                      className="text-xs sm:text-sm font-bold text-[#0F172A]"
                      style={{ fontFamily: 'var(--font-heading)' }}
                    >
                      {item.title}
                    </p>
                  </div>
                  <p className="text-[11px] sm:text-xs text-[#94A3B8] font-medium leading-snug">
                    {item.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* ── Right Column: High Quality Brand Banner ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 flex items-center justify-center"
          >
            <div className="relative w-full rounded-2xl overflow-hidden border border-[#E2E8F0] shadow-xl bg-white group transition-all duration-300 hover:shadow-2xl">
              <img
                src={TANTRAKOD_BANNER}
                alt="TantraKod Official Banner - We Build The Future"
                className="w-full h-auto object-contain block transition-transform duration-500 group-hover:scale-[1.01]"
                loading="eager"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
