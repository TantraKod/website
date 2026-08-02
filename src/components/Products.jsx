import { motion } from 'framer-motion';
import {
  QrCode,
  Building2,
  Users,
  GraduationCap,
  Stethoscope,
  Bot,
} from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const PRODUCTS = [
  {
    icon: QrCode,
    name: 'QR Generator',
    category: 'Utility Platform',
    text: 'Dynamic QR code generation with analytics, custom branding, and batch processing for enterprise campaigns.',
    status: 'Live',
    accent: '#2563EB',
  },
  {
    icon: Building2,
    name: 'Enterprise ERP',
    category: 'Business Suite',
    text: 'End-to-end resource planning with inventory, HR, finance, and procurement modules for mid-to-large organizations.',
    status: 'In Development',
    accent: '#F97316',
  },
  {
    icon: Users,
    name: 'CRM Platform',
    category: 'Sales & Marketing',
    text: 'Customer relationship management with pipeline tracking, automated outreach, and real-time reporting dashboards.',
    status: 'In Development',
    accent: '#2563EB',
  },
  {
    icon: GraduationCap,
    name: 'School Management',
    category: 'EdTech',
    text: 'Complete academic management — admissions, attendance, grading, timetables, and parent-teacher communication.',
    status: 'In Development',
    accent: '#F97316',
  },
  {
    icon: Stethoscope,
    name: 'Hospital Management',
    category: 'HealthTech',
    text: 'Patient records, appointment scheduling, pharmacy management, billing, and lab integration for healthcare facilities.',
    status: 'In Development',
    accent: '#2563EB',
  },
  {
    icon: Bot,
    name: 'AI Chatbot',
    category: 'AI Product',
    text: 'Conversational AI assistant with NLP, multi-language support, knowledge base integration, and analytics.',
    status: 'In Development',
    accent: '#F97316',
  },
];

export default function Products() {
  return (
    <section id="products" className="py-24 md:py-32 bg-[#F8FAFC]">
      <div className="container-main">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          variants={stagger}
        >
          {/* Header — left-aligned */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
            <div className="max-w-xl">
              <motion.p
                variants={fadeUp}
                className="text-xs font-semibold uppercase tracking-[0.2em] text-[#F97316] mb-4"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                Featured Products
              </motion.p>
              <motion.h2
                variants={fadeUp}
                className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] leading-[1.1]"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                Products we&apos;re{' '}
                <span className="text-[#2563EB]">building.</span>
              </motion.h2>
            </div>
            <motion.p variants={fadeUp} className="text-sm text-[#475569] max-w-sm">
              Software products designed, built, and maintained by TantraKod — solving real problems across industries.
            </motion.p>
          </div>

          {/* 3-column product cards — each with a large numbered index */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PRODUCTS.map((product, i) => (
              <motion.div
                key={product.name}
                variants={fadeUp}
                className="group relative p-7 rounded-2xl bg-white border border-[#E2E8F0] hover:border-[#CBD5E1] hover:shadow-lg transition-all"
              >
                {/* Large faded index number */}
                <span
                  className="absolute top-4 right-5 text-5xl font-extrabold text-[#F1F5F9] select-none"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  {String(i + 1).padStart(2, '0')}
                </span>

                {/* Icon */}
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-5"
                  style={{
                    backgroundColor: product.accent === '#2563EB' ? '#EFF6FF' : '#FFF7ED',
                  }}
                >
                  <product.icon
                    className="w-5 h-5"
                    style={{ color: product.accent }}
                    strokeWidth={2}
                  />
                </div>

                {/* Category + Status */}
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-[#94A3B8]">
                    {product.category}
                  </span>
                  <span className="text-[10px] font-medium text-[#94A3B8]">•</span>
                  <span
                    className="text-[10px] font-semibold uppercase tracking-wider"
                    style={{ color: product.status === 'Live' ? '#16A34A' : '#F59E0B' }}
                  >
                    {product.status}
                  </span>
                </div>

                <h3
                  className="text-lg font-bold text-[#0F172A] mb-2"
                  style={{ fontFamily: 'var(--font-heading)', letterSpacing: '-0.02em' }}
                >
                  {product.name}
                </h3>
                <p className="text-sm text-[#475569] leading-relaxed">{product.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
