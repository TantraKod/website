import React from 'react';
import { motion } from 'framer-motion';

export default function WhyUs() {
  const reasons = [
    {
      num: '01',
      title: 'Ultra-Fast Performance',
      desc: 'Sub-second response times, optimized bundle sizes, and perfect 100/100 Lighthouse performance metrics.'
    },
    {
      num: '02',
      title: 'Enterprise Security',
      desc: 'End-to-end data encryption, granular RBAC permissions, and continuous automated penetration testing.'
    },
    {
      num: '03',
      title: '99.9% Uptime Guarantee',
      desc: 'Multi-region server clusters with automated failovers guarantee unbroken operational business continuity.'
    },
    {
      num: '04',
      title: 'Agile Time-to-Market',
      desc: 'Bi-weekly sprint iterations, continuous delivery pipelines, and rapid feedback loops ensure fast deployment.'
    },
    {
      num: '05',
      title: 'Dedicated Senior Squads',
      desc: 'Get direct access to handpicked senior architects, full-stack engineers, and UI designers.'
    },
    {
      num: '06',
      title: 'Scalable Architecture',
      desc: 'Microservices and serverless infrastructure built to scale effortlessly from early MVP to millions of users.'
    }
  ];

  return (
    <section id="why-us" className="py-24 bg-[#0d111d]/70 relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-block px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold uppercase tracking-wider">
            Value Proposition
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gradient-primary">
            Why Engineering Leaders Choose TantraKod
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            We combine battle-tested technical expertise with an obsessive focus on product quality and speed.
          </p>
        </div>

        {/* Why Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((item, idx) => (
            <motion.div
              key={item.num}
              className="glass-panel p-8 rounded-3xl relative group hover:border-indigo-500/50 transition-all duration-300"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
            >
              <div className="text-4xl font-black text-indigo-500/40 group-hover:text-indigo-400 font-heading mb-4 transition-colors">
                {item.num}
              </div>
              <h3 className="text-xl font-bold text-white mb-3 font-heading">
                {item.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
