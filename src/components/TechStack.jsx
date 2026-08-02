import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06 } },
};

const CATEGORIES = [
  {
    label: 'Frontend',
    color: '#2563EB',
    techs: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
  },
  {
    label: 'Backend',
    color: '#F97316',
    techs: ['Node.js', 'Python', 'Express', 'FastAPI', 'GraphQL'],
  },
  {
    label: 'Mobile',
    color: '#2563EB',
    techs: ['React Native', 'Flutter', 'Swift', 'Kotlin'],
  },
  {
    label: 'Database',
    color: '#F97316',
    techs: ['PostgreSQL', 'MongoDB', 'Redis', 'Firebase'],
  },
  {
    label: 'Cloud & DevOps',
    color: '#2563EB',
    techs: ['AWS', 'Azure', 'GCP', 'Docker', 'Kubernetes', 'Terraform'],
  },
  {
    label: 'AI / ML',
    color: '#F97316',
    techs: ['TensorFlow', 'PyTorch', 'OpenAI', 'LangChain', 'Hugging Face'],
  },
];

export default function TechStack() {
  return (
    <section id="tech" className="py-24 md:py-32 bg-[#FCFCFD]">
      <div className="container-main">
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
              className="text-xs font-semibold uppercase tracking-[0.2em] text-[#F97316] mb-4"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Technology Stack
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] leading-[1.1]"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Tools we{' '}
              <span className="text-[#2563EB]">trust.</span>
            </motion.h2>
          </div>

          {/* Category Rows */}
          <div className="flex flex-col gap-8">
            {CATEGORIES.map((cat) => (
              <motion.div
                key={cat.label}
                variants={fadeUp}
                className="flex flex-col sm:flex-row sm:items-center gap-4"
              >
                {/* Category label */}
                <div className="w-36 flex-shrink-0">
                  <span
                    className="text-xs font-bold uppercase tracking-wider"
                    style={{ fontFamily: 'var(--font-heading)', color: cat.color }}
                  >
                    {cat.label}
                  </span>
                </div>

                {/* Tech pills */}
                <div className="flex flex-wrap gap-2.5">
                  {cat.techs.map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 rounded-full text-sm font-medium text-[#475569] bg-white border border-[#E2E8F0] hover:border-[#CBD5E1] hover:text-[#0F172A] hover:shadow-sm transition-all cursor-default"
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
