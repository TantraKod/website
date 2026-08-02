import { motion } from 'framer-motion';
import Counter from './Counter';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const STATS = [
  { value: '50', suffix: '+', label: 'Projects Delivered' },
  { value: '30', suffix: '+', label: 'Engineers on Team' },
  { value: '10', suffix: '+', label: 'Industries Served' },
  { value: '99.9', suffix: '%', label: 'Uptime Guarantee' },
  { value: '24', suffix: '×7', label: 'Engineering Support' },
  { value: '5', suffix: '+', label: 'Years of Engineering' },
];

export default function Statistics() {
  return (
    <section className="py-20 md:py-24 bg-[#0F172A]">
      <div className="container-main">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={stagger}
        >
          <motion.p
            variants={fadeUp}
            className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-[#F97316] mb-12"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            TantraKod in Numbers
          </motion.p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {STATS.map((stat) => (
              <motion.div key={stat.label} variants={fadeUp} className="text-center">
                <p
                  className="text-3xl md:text-4xl font-extrabold text-white mb-2"
                  style={{ fontFamily: 'var(--font-heading)', letterSpacing: '-0.03em' }}
                >
                  <Counter target={stat.value} suffix={stat.suffix} />
                </p>
                <p className="text-xs text-[#94A3B8] font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
