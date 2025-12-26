
import React from 'react';
import { Users, Zap, Eye } from 'lucide-react';

const values = [
  {
    number: "01",
    icon: <Users className="w-6 h-6" />,
    title: "Cross-Collaboration",
    description: "Coordination between designers, testers, developers, and experts in one shared Figma environment."
  },
  {
    number: "02",
    icon: <Zap className="w-6 h-6" />,
    title: "Faster Production",
    description: "Automated accessibility audits that speed up production cycles and eliminate late-stage fixes."
  },
  {
    number: "03",
    icon: <Eye className="w-6 h-6" />,
    title: "Increased Awareness",
    description: "Upskill your team with continuous education on WCAG guidelines integrated into their daily tools."
  }
];

export const ValueProps: React.FC = () => {
  return (
    <section className="py-24 bg-accessify-pink/[0.03]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-accessify-pink font-bold uppercase tracking-widest text-xs mb-4">The Impact</h2>
          <h3 className="text-4xl font-bold">Designing for Everyone</h3>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {values.map((val, idx) => (
            <div key={idx} className="relative p-8 rounded-3xl border border-white/5 bg-accessify-dark hover:border-accessify-pink/20 transition-all">
              <div className="text-8xl font-black text-accessify-pink/[0.03] absolute -top-4 -left-2 select-none">
                {val.number}
              </div>
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                   <div className="text-accessify-pink p-3 bg-accessify-pink/10 rounded-xl">{val.icon}</div>
                   <h4 className="text-2xl font-bold text-white leading-tight">{val.title}</h4>
                </div>
                <p className="text-gray-400 leading-relaxed text-lg">
                  {val.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
