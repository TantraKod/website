import { motion } from 'framer-motion';
import {
  Code,
  Smartphone,
  Brain,
  Cloud,
  Palette,
  Shield,
  GitBranch,
  Package,
} from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const SERVICES = [
  {
    icon: Code,
    title: 'Website Development',
    text: 'High-performance web platforms built with React, Next.js, and modern frontend architecture. From corporate sites to complex web applications.',
    accent: '#2563EB',
  },
  {
    icon: Smartphone,
    title: 'Mobile App Development',
    text: 'Cross-platform and native mobile applications for iOS and Android. React Native and Flutter for fast, reliable mobile experiences.',
    accent: '#F97316',
  },
  {
    icon: Brain,
    title: 'AI Solutions',
    text: 'Machine learning models, natural language processing, computer vision, and AI-powered automation integrated into your existing workflows.',
    accent: '#2563EB',
  },
  {
    icon: Cloud,
    title: 'Cloud Services',
    text: 'AWS, Azure, and GCP infrastructure setup, migration, and management. Auto-scaling, containerization, and cost optimization.',
    accent: '#F97316',
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    text: 'Research-driven interface design. Wireframes, prototypes, design systems, and usability testing for products people actually want to use.',
    accent: '#2563EB',
  },
  {
    icon: Shield,
    title: 'Cyber Security',
    text: 'Penetration testing, vulnerability assessments, secure code reviews, and compliance auditing. Protecting your data and your users.',
    accent: '#F97316',
  },
  {
    icon: GitBranch,
    title: 'DevOps',
    text: 'CI/CD pipelines, infrastructure as code, monitoring, and automated deployments. Ship faster without sacrificing reliability.',
    accent: '#2563EB',
  },
  {
    icon: Package,
    title: 'SaaS Products',
    text: 'End-to-end SaaS development from MVP to scale. Multi-tenant architecture, billing integration, and analytics built in.',
    accent: '#F97316',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-32 bg-[#FCFCFD]">
      <div className="container-main">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          variants={stagger}
        >
          {/* Header — centered */}
          <div className="text-center max-w-2xl mx-auto mb-16">
            <motion.p
              variants={fadeUp}
              className="text-xs font-semibold uppercase tracking-[0.2em] text-[#F97316] mb-4"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Core Services
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] leading-[1.1] mb-5"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Full-spectrum{' '}
              <span className="text-[#2563EB]">engineering capabilities.</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="text-base text-[#475569] leading-relaxed">
              From initial concept to production deployment and beyond — we cover every layer of the technology stack.
            </motion.p>
          </div>

          {/* 2×4 Grid — each card has a top accent bar */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {SERVICES.map((service) => (
              <motion.div
                key={service.title}
                variants={fadeUp}
                className="group relative p-6 pt-8 rounded-2xl bg-white border border-[#E2E8F0] hover:shadow-lg hover:border-[#CBD5E1] transition-all overflow-hidden"
              >
                {/* Top accent bar */}
                <div
                  className="absolute top-0 left-6 right-6 h-1 rounded-b-full"
                  style={{ backgroundColor: service.accent }}
                />

                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center mb-4"
                  style={{
                    backgroundColor: service.accent === '#2563EB' ? '#EFF6FF' : '#FFF7ED',
                  }}
                >
                  <service.icon
                    className="w-5 h-5"
                    style={{ color: service.accent }}
                    strokeWidth={2}
                  />
                </div>

                <h3
                  className="text-sm font-bold text-[#0F172A] mb-2"
                  style={{ fontFamily: 'var(--font-heading)', letterSpacing: '-0.01em' }}
                >
                  {service.title}
                </h3>
                <p className="text-xs text-[#475569] leading-relaxed">{service.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
