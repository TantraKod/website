import { motion } from 'framer-motion';
import { Target, Users, Lightbulb, MapPin } from 'lucide-react';
import { TANTRAKOD_BANNER, BRAND_INFO } from '../constants/brand';

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const PILLARS = [
  {
    icon: Target,
    title: 'Our Mission',
    text: 'To engineer software that solves real business problems — scalable, maintainable, and built to last.',
    color: '#2563EB',
    bg: '#EFF6FF',
  },
  {
    icon: Users,
    title: 'Our Approach',
    text: 'We embed with your team. Every project starts with deep discovery, not assumptions. Engineering decisions are driven by business outcomes.',
    color: '#F97316',
    bg: '#FFF7ED',
  },
  {
    icon: Lightbulb,
    title: 'Our Commitment',
    text: 'Long-term partnerships over one-off projects. We build, deploy, and support systems that grow with your organization.',
    color: '#2563EB',
    bg: '#EFF6FF',
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-white">
      <div className="container-main">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20"
        >
          {/* Left: Narrative & Official Company Scope */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <motion.p
                variants={fadeUp}
                className="text-xs font-semibold uppercase tracking-[0.2em] text-[#F97316] mb-3"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                About TantraKod
              </motion.p>

              <motion.h2
                variants={fadeUp}
                className="text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold text-[#0F172A] leading-[1.1] mb-5"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                Engineering software that{' '}
                <span className="text-[#2563EB]">businesses depend on.</span>
              </motion.h2>

              {/* Geographic Reach Line */}
              <motion.div
                variants={fadeUp}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-[#EFF6FF] text-xs font-bold text-[#2563EB] mb-5"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                <MapPin className="w-3.5 h-3.5 text-[#2563EB]" />
                {BRAND_INFO.region}
              </motion.div>

              <motion.p
                variants={fadeUp}
                className="text-base text-[#475569] leading-relaxed mb-6"
              >
                {BRAND_INFO.description}
              </motion.p>

              <motion.p
                variants={fadeUp}
                className="text-base text-[#475569] leading-relaxed mb-8"
              >
                Every system we build is designed for production — clean code, thorough documentation, scalable architecture, and long-term business partnerships.
              </motion.p>
            </div>

            {/* Official Brand Banner Preview */}
            <motion.div
              variants={fadeUp}
              className="rounded-2xl overflow-hidden border border-[#E2E8F0] shadow-md bg-white hover:shadow-lg transition-all"
            >
              <img
                src={TANTRAKOD_BANNER}
                alt="TantraKod Official Brand Banner"
                className="w-full h-auto object-contain block"
                loading="lazy"
              />
            </motion.div>
          </div>

          {/* Right: Pillar Cards */}
          <div className="lg:col-span-7 flex flex-col gap-6 justify-center">
            {PILLARS.map((pillar) => (
              <motion.div
                key={pillar.title}
                variants={fadeUp}
                className="flex items-start gap-5 p-7 rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] hover:bg-white hover:border-[#CBD5E1] hover:shadow-md transition-all"
              >
                <div
                  className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: pillar.bg }}
                >
                  <pillar.icon className="w-6 h-6" style={{ color: pillar.color }} strokeWidth={2} />
                </div>
                <div>
                  <h3
                    className="text-lg font-bold text-[#0F172A] mb-1.5"
                    style={{ fontFamily: 'var(--font-heading)', letterSpacing: '-0.02em' }}
                  >
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-[#475569] leading-relaxed">{pillar.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
