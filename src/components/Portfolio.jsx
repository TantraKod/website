import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const PROJECTS = [
  {
    title: 'Enterprise Resource Planning System',
    client: 'Manufacturing Sector',
    scope: 'Full-Stack Development',
    techs: ['React', 'Node.js', 'PostgreSQL', 'AWS'],
    text: 'Custom ERP system managing inventory, production workflows, HR operations, and financial reporting for a mid-size manufacturing firm.',
    color: '#2563EB',
  },
  {
    title: 'Healthcare Patient Portal',
    client: 'Healthcare Provider',
    scope: 'Web + Mobile Application',
    techs: ['React Native', 'FastAPI', 'MongoDB', 'Azure'],
    text: 'HIPAA-compliant patient management portal with appointment scheduling, telemedicine integration, and electronic health records.',
    color: '#F97316',
  },
  {
    title: 'EdTech Learning Platform',
    client: 'Education Institution',
    scope: 'SaaS Platform',
    techs: ['Next.js', 'Python', 'Redis', 'GCP'],
    text: 'Multi-tenant learning management system with live classes, assessments, progress tracking, and analytics dashboards.',
    color: '#2563EB',
  },
  {
    title: 'E-Commerce Marketplace',
    client: 'Retail Industry',
    scope: 'Full-Stack + DevOps',
    techs: ['React', 'Express', 'PostgreSQL', 'Docker'],
    text: 'Multi-vendor marketplace with real-time inventory sync, payment gateway integration, and automated order fulfillment.',
    color: '#F97316',
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 md:py-32 bg-[#F8FAFC]">
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
              Portfolio
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] leading-[1.1] mb-5"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Projects that{' '}
              <span className="text-[#2563EB]">deliver results.</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="text-base text-[#475569]">
              A selection of systems we&apos;ve engineered across industries.
            </motion.p>
          </div>

          {/* 2-column large cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {PROJECTS.map((project) => (
              <motion.div
                key={project.title}
                variants={fadeUp}
                className="group p-8 rounded-2xl bg-white border border-[#E2E8F0] hover:border-[#CBD5E1] hover:shadow-lg transition-all"
              >
                {/* Meta row */}
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-2">
                    <span
                      className="w-2 h-2 rounded-full"
                      style={{ backgroundColor: project.color }}
                    />
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#94A3B8]">
                      {project.client}
                    </span>
                  </div>
                </div>

                <h3
                  className="text-xl font-bold text-[#0F172A] mb-2"
                  style={{ fontFamily: 'var(--font-heading)', letterSpacing: '-0.02em' }}
                >
                  {project.title}
                </h3>

                <p className="text-xs font-medium text-[#94A3B8] uppercase tracking-wider mb-4">
                  {project.scope}
                </p>

                <p className="text-sm text-[#475569] leading-relaxed mb-6">
                  {project.text}
                </p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2">
                  {project.techs.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-md text-xs font-medium bg-[#F8FAFC] text-[#475569] border border-[#E2E8F0]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
