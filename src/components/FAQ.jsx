import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const FAQS = [
  {
    q: 'What types of projects does TantraKod take on?',
    a: 'We build enterprise web applications, mobile apps, AI-powered systems, cloud infrastructure, SaaS platforms, and custom business software. Our sweet spot is complex, production-grade systems that need to scale.',
  },
  {
    q: 'How does the engagement process work?',
    a: 'We start with a discovery phase to understand your requirements, followed by architecture design, sprint-based development, QA, and deployment. You get visibility into every sprint through demos and progress reports.',
  },
  {
    q: 'What is your technology stack?',
    a: 'Our core stack includes React, Next.js, Node.js, Python, PostgreSQL, MongoDB, AWS, Azure, and GCP. We choose technologies based on your project requirements, not trends.',
  },
  {
    q: 'Do you provide ongoing support after launch?',
    a: 'Yes. We offer ongoing maintenance, feature development, performance monitoring, and security updates. We treat post-launch as seriously as pre-launch.',
  },
  {
    q: 'How do you handle project pricing?',
    a: 'We offer both fixed-price and time-and-materials models depending on the project scope. Every engagement starts with a detailed estimate based on the discovery phase. No hidden costs.',
  },
  {
    q: 'Can you work with our existing development team?',
    a: 'Absolutely. We regularly embed with client engineering teams, participate in their sprint ceremonies, and follow their coding standards and Git workflows.',
  },
  {
    q: 'What industries do you serve?',
    a: 'We serve healthcare, education, finance, e-commerce, real estate, manufacturing, logistics, and government sectors. Our experience spans regulated and high-scale environments.',
  },
];

function FAQItem({ item, isOpen, onToggle }) {
  return (
    <div className="border-b border-[#E2E8F0]">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-5 text-left focus-ring rounded-lg"
        aria-expanded={isOpen}
      >
        <span
          className="text-sm font-bold text-[#0F172A] pr-8"
          style={{ fontFamily: 'var(--font-heading)', letterSpacing: '-0.01em' }}
        >
          {item.q}
        </span>
        <ChevronDown
          className={`w-5 h-5 text-[#94A3B8] flex-shrink-0 transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
          strokeWidth={2}
        />
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <p className="text-sm text-[#475569] leading-relaxed pb-5 pr-12">
              {item.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="py-24 md:py-32 bg-[#FCFCFD]">
      <div className="container-main">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          variants={stagger}
          className="grid grid-cols-1 lg:grid-cols-12 gap-16"
        >
          {/* Left: Header */}
          <div className="lg:col-span-4">
            <motion.p
              variants={fadeUp}
              className="text-xs font-semibold uppercase tracking-[0.2em] text-[#F97316] mb-4"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              FAQ
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] leading-[1.1] mb-5"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Common{' '}
              <span className="text-[#2563EB]">questions.</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="text-base text-[#475569] leading-relaxed">
              Everything you need to know about working with TantraKod.
            </motion.p>
          </div>

          {/* Right: Accordion */}
          <motion.div variants={fadeUp} className="lg:col-span-8">
            {FAQS.map((faq, i) => (
              <FAQItem
                key={i}
                item={faq}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
              />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
