import { motion } from 'framer-motion';
import { Search, PenTool, Code2, TestTube, Rocket, LifeBuoy } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const STEPS = [
  {
    icon: Search,
    phase: '01',
    title: 'Discovery & Research',
    text: 'Stakeholder interviews, requirements analysis, competitive research, and technical feasibility assessment.',
    duration: '1–2 Weeks',
  },
  {
    icon: PenTool,
    phase: '02',
    title: 'Design & Architecture',
    text: 'Wireframes, UI prototypes, system architecture design, database modeling, and API contract definition.',
    duration: '2–3 Weeks',
  },
  {
    icon: Code2,
    phase: '03',
    title: 'Development',
    text: 'Agile sprint-based development with code reviews, automated testing, and bi-weekly client demos.',
    duration: '6–12 Weeks',
  },
  {
    icon: TestTube,
    phase: '04',
    title: 'Quality Assurance',
    text: 'Unit tests, integration tests, performance benchmarks, security audits, and user acceptance testing.',
    duration: '2–3 Weeks',
  },
  {
    icon: Rocket,
    phase: '05',
    title: 'Deployment & Launch',
    text: 'CI/CD pipeline setup, staging validation, production deployment, DNS configuration, and go-live support.',
    duration: '1 Week',
  },
  {
    icon: LifeBuoy,
    phase: '06',
    title: 'Support & Iteration',
    text: 'Post-launch monitoring, bug fixes, feature iterations, performance optimization, and ongoing engineering support.',
    duration: 'Ongoing',
  },
];

export default function Process() {
  return (
    <section id="process" className="py-24 md:py-32 bg-[#F8FAFC]">
      <div className="container-main">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          variants={stagger}
        >
          {/* Header */}
          <div className="max-w-2xl mb-16">
            <motion.p
              variants={fadeUp}
              className="text-xs font-semibold uppercase tracking-[0.2em] text-[#F97316] mb-4"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Development Process
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] leading-[1.1] mb-5"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              From concept to{' '}
              <span className="text-[#2563EB]">production.</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="text-base text-[#475569] leading-relaxed">
              A proven six-phase engineering process that delivers predictable, high-quality outcomes.
            </motion.p>
          </div>

          {/* Vertical Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="hidden md:block absolute left-[28px] top-0 bottom-0 w-px bg-[#E2E8F0]" />

            <div className="flex flex-col gap-6">
              {STEPS.map((step, i) => (
                <motion.div
                  key={step.phase}
                  variants={fadeUp}
                  className="relative flex items-start gap-6 md:gap-8"
                >
                  {/* Phase number circle */}
                  <div
                    className="relative z-10 flex-shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center border-2"
                    style={{
                      borderColor: i % 2 === 0 ? '#2563EB' : '#F97316',
                      backgroundColor: i % 2 === 0 ? '#EFF6FF' : '#FFF7ED',
                    }}
                  >
                    <step.icon
                      className="w-5 h-5"
                      style={{ color: i % 2 === 0 ? '#2563EB' : '#F97316' }}
                      strokeWidth={2}
                    />
                  </div>

                  {/* Content card */}
                  <div className="flex-1 pb-6 border-b border-[#E2E8F0] last:border-0">
                    <div className="flex items-center gap-3 mb-2">
                      <span
                        className="text-xs font-bold tracking-wider uppercase"
                        style={{
                          fontFamily: 'var(--font-heading)',
                          color: i % 2 === 0 ? '#2563EB' : '#F97316',
                        }}
                      >
                        Phase {step.phase}
                      </span>
                      <span className="text-xs text-[#94A3B8] font-medium">
                        {step.duration}
                      </span>
                    </div>
                    <h3
                      className="text-lg font-bold text-[#0F172A] mb-2"
                      style={{ fontFamily: 'var(--font-heading)', letterSpacing: '-0.02em' }}
                    >
                      {step.title}
                    </h3>
                    <p className="text-sm text-[#475569] leading-relaxed max-w-2xl">
                      {step.text}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
