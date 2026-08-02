import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const TESTIMONIALS = [
  {
    quote: 'TantraKod didn\'t just build our platform — they understood our business first. The architecture they delivered has scaled without a single rewrite in two years.',
    role: 'CTO',
    company: 'Healthcare Technology Firm',
    accent: '#2563EB',
  },
  {
    quote: 'Their engineering team operates like an extension of ours. Sprint planning, code reviews, deployment — everything runs like a well-oiled machine.',
    role: 'VP of Engineering',
    company: 'EdTech Company',
    accent: '#F97316',
  },
  {
    quote: 'We evaluated five vendors. TantraKod was the only team that asked the right questions about our data model before showing us mockups. That told us everything.',
    role: 'Founder',
    company: 'Logistics SaaS Startup',
    accent: '#2563EB',
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 md:py-32 bg-[#F8FAFC]">
      <div className="container-main">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          variants={stagger}
        >
          {/* Header — centered */}
          <div className="text-center max-w-2xl mx-auto mb-16">
            <motion.p
              variants={fadeUp}
              className="text-xs font-semibold uppercase tracking-[0.2em] text-[#F97316] mb-4"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Testimonials
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] leading-[1.1]"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              What our clients{' '}
              <span className="text-[#2563EB]">say.</span>
            </motion.h2>
          </div>

          {/* 3-column quote cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="relative p-7 pt-9 rounded-2xl bg-white border border-[#E2E8F0] hover:shadow-md transition-all"
              >
                {/* Quote icon */}
                <div
                  className="absolute -top-4 left-7 w-8 h-8 rounded-lg flex items-center justify-center"
                  style={{ backgroundColor: t.accent }}
                >
                  <Quote className="w-4 h-4 text-white" strokeWidth={2.5} />
                </div>

                <p className="text-sm text-[#475569] leading-relaxed mb-6 italic">
                  &ldquo;{t.quote}&rdquo;
                </p>

                <div className="pt-5 border-t border-[#E2E8F0]">
                  <p
                    className="text-sm font-bold text-[#0F172A]"
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    {t.role}
                  </p>
                  <p className="text-xs text-[#94A3B8] mt-0.5">{t.company}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
