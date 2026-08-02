import { motion } from 'framer-motion';
import {
  Heart,
  GraduationCap,
  Landmark,
  ShoppingCart,
  Building,
  Factory,
  Truck,
  BarChart3,
} from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07 } },
};

const INDUSTRIES = [
  { icon: Heart, name: 'Healthcare', text: 'Patient management, telemedicine, and clinical systems' },
  { icon: GraduationCap, name: 'Education', text: 'Learning platforms, school ERPs, and EdTech solutions' },
  { icon: Landmark, name: 'Finance', text: 'Fintech apps, payment gateways, and banking platforms' },
  { icon: ShoppingCart, name: 'E-Commerce', text: 'Marketplace platforms, inventory, and fulfillment' },
  { icon: Building, name: 'Real Estate', text: 'Property management, listings, and CRM systems' },
  { icon: Factory, name: 'Manufacturing', text: 'Production tracking, quality control, and ERP' },
  { icon: Truck, name: 'Logistics', text: 'Fleet management, route optimization, and tracking' },
  { icon: BarChart3, name: 'Analytics', text: 'Business intelligence dashboards and data pipelines' },
];

export default function Industries() {
  return (
    <section className="py-24 md:py-32 bg-[#FCFCFD]">
      <div className="container-main">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          variants={stagger}
        >
          {/* Header — centered */}
          <div className="text-center max-w-2xl mx-auto mb-16">
            <motion.p
              variants={fadeUp}
              className="text-xs font-semibold uppercase tracking-[0.2em] text-[#F97316] mb-4"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Industries We Serve
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] leading-[1.1]"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Technology built for{' '}
              <span className="text-[#2563EB]">your industry.</span>
            </motion.h2>
          </div>

          {/* 4-column minimal grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {INDUSTRIES.map((ind) => (
              <motion.div
                key={ind.name}
                variants={fadeUp}
                className="group flex flex-col items-center text-center p-6 rounded-2xl border border-transparent hover:border-[#E2E8F0] hover:bg-white hover:shadow-sm transition-all cursor-default"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#F8FAFC] group-hover:bg-[#EFF6FF] flex items-center justify-center mb-4 transition-colors">
                  <ind.icon className="w-5 h-5 text-[#94A3B8] group-hover:text-[#2563EB] transition-colors" strokeWidth={1.8} />
                </div>
                <h3
                  className="text-sm font-bold text-[#0F172A] mb-1"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  {ind.name}
                </h3>
                <p className="text-xs text-[#94A3B8] leading-relaxed">{ind.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
