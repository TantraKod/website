import { motion } from 'framer-motion';
import { Settings, Layers, Headphones, ShieldCheck, Zap, Handshake } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const REASONS = [
  {
    icon: Settings,
    title: '100% Custom Engineering',
    text: 'No templates. No page builders. Every system is architected from scratch to match your exact business requirements.',
  },
  {
    icon: Layers,
    title: 'Scalable Architecture',
    text: 'Microservices, modular codebases, and cloud-native infrastructure designed to handle growth without rewrites.',
  },
  {
    icon: Headphones,
    title: 'Responsive Engineering Support',
    text: 'Dedicated engineering team available for production issues and ongoing maintenance. Critical bugs addressed with urgency.',
  },
  {
    icon: ShieldCheck,
    title: 'Security-First Development',
    text: 'OWASP-compliant code, encrypted data pipelines, role-based access, and regular security audits built into every project.',
  },
  {
    icon: Zap,
    title: 'Agile Delivery',
    text: 'Two-week sprint cycles with transparent progress tracking. You see working software every iteration, not just reports.',
  },
  {
    icon: Handshake,
    title: 'Long-Term Partnership',
    text: 'We don\'t disappear after deployment. Ongoing maintenance, feature development, and strategic technology consulting.',
  },
];

export default function WhyChoose() {
  return (
    <section id="why-us" className="py-24 md:py-32 bg-[#F8FAFC]">
      <div className="container-main">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          variants={stagger}
        >
          {/* Header */}
          <div className="max-w-2xl mb-16">
            <motion.p
              variants={fadeUp}
              className="text-xs font-semibold uppercase tracking-[0.2em] text-[#F97316] mb-4"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Why TantraKod
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] leading-[1.1] mb-5"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Built different.{' '}
              <span className="text-[#2563EB]">Engineered better.</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="text-base text-[#475569] leading-relaxed">
              Six reasons companies choose TantraKod as their technology partner.
            </motion.p>
          </div>

          {/* Grid — 3 columns, each card with a colored left border */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {REASONS.map((reason, i) => (
              <motion.div
                key={reason.title}
                variants={fadeUp}
                className="group p-7 rounded-2xl bg-white border border-[#E2E8F0] hover:border-[#2563EB] transition-all hover:shadow-lg"
                style={{ borderLeftWidth: '4px', borderLeftColor: i % 2 === 0 ? '#2563EB' : '#F97316' }}
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center mb-5"
                  style={{
                    backgroundColor: i % 2 === 0 ? '#EFF6FF' : '#FFF7ED',
                  }}
                >
                  <reason.icon
                    className="w-5 h-5"
                    style={{ color: i % 2 === 0 ? '#2563EB' : '#F97316' }}
                    strokeWidth={2}
                  />
                </div>
                <h3
                  className="text-base font-bold text-[#0F172A] mb-2"
                  style={{ fontFamily: 'var(--font-heading)', letterSpacing: '-0.02em' }}
                >
                  {reason.title}
                </h3>
                <p className="text-sm text-[#475569] leading-relaxed">{reason.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
