import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const CASES = [
  {
    industry: 'Healthcare',
    title: 'Digital Transformation for a Regional Healthcare Network',
    challenge: 'Manual patient records, fragmented scheduling, and no telemedicine capability across 12 clinics.',
    solution: 'Built a unified patient portal with EHR integration, automated appointment scheduling, and video consultation. Deployed on Azure with HIPAA compliance.',
    results: ['Significant reduction in admin overhead', 'Improved patient satisfaction scores', 'Full HIPAA compliance achieved'],
    techs: ['React', 'FastAPI', 'Azure', 'PostgreSQL'],
    accent: '#2563EB',
  },
  {
    industry: 'Education',
    title: 'SaaS Learning Platform for a Private University Network',
    challenge: 'Disconnected tools for classes, assessments, and grading. No unified analytics for academic performance.',
    solution: 'Engineered a multi-tenant LMS with live video classes, automated grading, progress tracking, and institutional analytics. Scaled to support concurrent users.',
    results: ['Adopted across multiple campuses', 'Real-time academic insights', 'Reduced administrative workload'],
    techs: ['Next.js', 'Node.js', 'MongoDB', 'AWS'],
    accent: '#F97316',
  },
];

export default function CaseStudies() {
  return (
    <section className="py-24 md:py-32 bg-[#FCFCFD]">
      <div className="container-main">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          variants={stagger}
        >
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-16">
            <motion.p
              variants={fadeUp}
              className="text-xs font-semibold uppercase tracking-[0.2em] text-[#F97316] mb-4"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Case Studies
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] leading-[1.1]"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Real problems.{' '}
              <span className="text-[#2563EB]">Engineered solutions.</span>
            </motion.h2>
          </div>

          {/* Full-width horizontal case study cards */}
          <div className="flex flex-col gap-8">
            {CASES.map((cs) => (
              <motion.div
                key={cs.title}
                variants={fadeUp}
                className="group p-8 md:p-10 rounded-2xl bg-white border border-[#E2E8F0] hover:shadow-lg transition-all"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                  {/* Left: Context */}
                  <div className="lg:col-span-4">
                    <span
                      className="inline-block px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider mb-4"
                      style={{
                        color: cs.accent,
                        backgroundColor: cs.accent === '#2563EB' ? '#EFF6FF' : '#FFF7ED',
                      }}
                    >
                      {cs.industry}
                    </span>
                    <h3
                      className="text-xl font-bold text-[#0F172A] mb-4"
                      style={{ fontFamily: 'var(--font-heading)', letterSpacing: '-0.02em' }}
                    >
                      {cs.title}
                    </h3>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {cs.techs.map((t) => (
                        <span key={t} className="px-2.5 py-1 text-[10px] font-medium rounded bg-[#F8FAFC] text-[#475569] border border-[#E2E8F0]">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Right: Challenge → Solution → Results */}
                  <div className="lg:col-span-8 flex flex-col gap-5">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-[#94A3B8] mb-1.5">Challenge</p>
                      <p className="text-sm text-[#475569] leading-relaxed">{cs.challenge}</p>
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-[#94A3B8] mb-1.5">Solution</p>
                      <p className="text-sm text-[#475569] leading-relaxed">{cs.solution}</p>
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-[#94A3B8] mb-1.5">Results</p>
                      <ul className="space-y-1">
                        {cs.results.map((r) => (
                          <li key={r} className="flex items-center gap-2 text-sm text-[#0F172A] font-medium">
                            <ArrowRight className="w-3.5 h-3.5 flex-shrink-0" style={{ color: cs.accent }} strokeWidth={2.5} />
                            {r}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
