import { motion } from 'framer-motion';

const PARTNERS = [
  'Enterprise Software',
  'Healthcare Systems',
  'EdTech Platforms',
  'Financial Services',
  'E-Commerce',
  'Government & Public',
  'Real Estate Tech',
  'Logistics & Supply Chain',
  'Manufacturing',
  'Retail Solutions',
];

export default function TrustedBy() {
  // Duplicate for seamless infinite scroll
  const items = [...PARTNERS, ...PARTNERS];

  return (
    <section className="py-14 bg-white border-y border-[#E2E8F0] overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p
          className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-[#94A3B8] mb-8"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          Serving industries across India &amp; Asia
        </p>

        <div className="relative">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10" />

          <div className="flex items-center gap-12 animate-marquee">
            {items.map((name, i) => (
              <span
                key={i}
                className="flex-shrink-0 text-sm font-semibold text-[#CBD5E1] tracking-wide uppercase whitespace-nowrap select-none"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
