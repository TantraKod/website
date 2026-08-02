import React from 'react';
import { Layers, Triangle, Circle, Square, Cloud, Star } from 'lucide-react';

export default function Marquee() {
  const brands = [
    { name: 'NEXUS LABS', icon: Layers },
    { name: 'APEX CORP', icon: Triangle },
    { name: 'QUANTUM AI', icon: Circle },
    { name: 'VELOCE SYSTEMS', icon: Square },
    { name: 'CLOUDIFY', icon: Cloud },
    { name: 'INNOSYS', icon: Star },
  ];

  return (
    <section className="py-10 bg-[#0d111d]/80 border-y border-white/10 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 mb-6 text-center">
        <p className="text-xs font-bold tracking-widest text-slate-500 uppercase">
          TRUSTED BY INNOVATIVE TEAMS &amp; GLOBAL ENTERPRISES
        </p>
      </div>

      <div className="relative w-full flex overflow-hidden mask-gradient">
        <div className="animate-marquee flex items-center gap-16 whitespace-nowrap">
          {brands.concat(brands).map((brand, idx) => {
            const Icon = brand.icon;
            return (
              <div key={idx} className="flex items-center gap-3 text-slate-400 hover:text-indigo-400 transition-colors cursor-pointer group">
                <Icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span className="font-heading font-extrabold text-sm tracking-wider">{brand.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
