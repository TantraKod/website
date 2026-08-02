import { motion } from 'framer-motion';
import { Code, Brain, Cloud, Layers, Cpu, Sparkles } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const FOCUS_AREAS = [
  {
    icon: Code,
    title: 'Modern Web Development',
    text: 'High-performance web applications built using React, modern frameworks, and clean frontend architecture.',
    color: '#2563EB',
    bg: 'rgba(37, 99, 235, 0.12)',
  },
  {
    icon: Brain,
    title: 'AI Solutions',
    text: 'Conversational AI assistants, machine learning integration, and smart workflow automation.',
    color: '#F97316',
    bg: 'rgba(249, 115, 22, 0.12)',
  },
  {
    icon: Cloud,
    title: 'Cloud Technologies',
    text: 'Cloud infrastructure setup, deployment automation, containerization, and backend scalability.',
    color: '#60A5FA',
    bg: 'rgba(96, 165, 250, 0.12)',
  },
  {
    icon: Layers,
    title: 'Custom Software Development',
    text: 'Tailored digital solutions, API services, and enterprise software built from the ground up.',
    color: '#F97316',
    bg: 'rgba(249, 115, 22, 0.12)',
  },
  {
    icon: Cpu,
    title: 'Clean & Scalable Architecture',
    text: 'Maintainable codebases, security-first practices, and long-term modular system design.',
    color: '#2563EB',
    bg: 'rgba(37, 99, 235, 0.12)',
  },
  {
    icon: Sparkles,
    title: 'Student-Led Innovation',
    text: 'Driven by passionate technology talent committed to engineering quality and modern ideas.',
    color: '#FDBA74',
    bg: 'rgba(253, 186, 116, 0.12)',
  },
];

export default function OurFocus() {
  return (
    <section className="py-24 md:py-32 bg-[#0F172A] relative overflow-hidden">
      {/* Background ambient accents */}
      <div
        className="pointer-events-none absolute top-0 right-0 w-[40%] h-[50%] rounded-full opacity-[0.06]"
        style={{ background: 'radial-gradient(circle, #2563EB 0%, transparent 70%)' }}
      />
      <div
        className="pointer-events-none absolute bottom-0 left-0 w-[35%] h-[50%] rounded-full opacity-[0.05]"
        style={{ background: 'radial-gradient(circle, #F97316 0%, transparent 70%)' }}
      />

      <div className="container-main relative">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          variants={stagger}
        >
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-16">
            <motion.p
              variants={fadeUp}
              className="text-xs font-semibold uppercase tracking-[0.2em] text-[#F97316] mb-3"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Our Core Strengths
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="text-3xl sm:text-4xl font-extrabold text-white leading-[1.1] mb-4"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              What Drives <span className="text-[#60A5FA]">TantraKod.</span>
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="text-base text-[#94A3B8] leading-relaxed"
            >
              Focusing on modern engineering standards, practical innovation, and clean product development.
            </motion.p>
          </div>

          {/* 6 Feature Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {FOCUS_AREAS.map((item) => (
              <motion.div
                key={item.title}
                variants={fadeUp}
                className="group p-7 rounded-2xl bg-[#1E293B] border border-[#334155] hover:border-[#60A5FA] hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-105"
                  style={{ backgroundColor: item.bg }}
                >
                  <item.icon className="w-6 h-6" style={{ color: item.color }} strokeWidth={2} />
                </div>

                <h3
                  className="text-lg font-bold text-white mb-2"
                  style={{ fontFamily: 'var(--font-heading)', letterSpacing: '-0.02em' }}
                >
                  {item.title}
                </h3>
                
                <p className="text-sm text-[#94A3B8] leading-relaxed">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
