
import React from 'react';
import { Eye, MousePointer2, Type, Database, Info } from 'lucide-react';

const features = [
  {
    icon: <Eye className="w-8 h-8" />,
    title: "Perceivable",
    description: "Ensure users can identify information and UI components using their senses (e.g., color contrast, text alternatives)."
  },
  {
    icon: <MousePointer2 className="w-8 h-8" />,
    title: "Operable",
    description: "Components and navigation must be operable (e.g., keyboard accessibility, avoiding flashing content)."
  },
  {
    icon: <Type className="w-8 h-8" />,
    title: "Understandable",
    description: "Information and UI operation must be understandable (e.g., readable text, predictable functionality)."
  },
  {
    icon: <Database className="w-8 h-8" />,
    title: "Robust",
    description: "Content must be robust enough to be interpreted by a wide variety of user agents, including assistive technologies."
  }
];

export const Features: React.FC = () => {
  return (
    <section id="features" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-accessify-pink font-bold uppercase tracking-widest text-xs mb-4">Core Principles</h2>
          <h3 className="text-4xl lg:text-5xl font-bold mb-6">Built on WCAG Standards</h3>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Accessifyy integrates the four major principles of accessibility directly into your Figma workspace.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="group p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-accessify-pink/50 hover:bg-accessify-pink/[0.03] transition-all duration-500">
              <div className="w-16 h-16 rounded-2xl bg-accessify-pink/10 flex items-center justify-center text-accessify-pink mb-8 group-hover:scale-110 transition-transform duration-500 shadow-lg shadow-accessify-pink/5">
                {feature.icon}
              </div>
              <h4 className="text-2xl font-bold mb-4 text-white group-hover:text-accessify-pink transition-colors">{feature.title}</h4>
              <p className="text-gray-400 leading-relaxed text-sm group-hover:text-gray-300 transition-colors">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 p-8 rounded-2xl bg-accessify-pink/5 border border-accessify-pink/20 flex items-center gap-6">
            <div className="flex-shrink-0 bg-accessify-pink text-white p-3 rounded-full">
                <Info size={24} />
            </div>
            <p className="text-gray-300 text-sm md:text-base">
                <strong>Pro Tip:</strong> Using Accessifyy early in the SDLC (Software Development Life Cycle) can save your team hundreds of hours in refactoring.
            </p>
        </div>
      </div>
    </section>
  );
};
