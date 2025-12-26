
import React, { useState } from 'react';
import { ChevronRight, ExternalLink, X, Lock } from 'lucide-react';
import { EarlyAccessForm } from './EarlyAccessForm';

const PluginMockup = () => (
  <div className="w-full max-w-sm mx-auto bg-white rounded-lg shadow-2xl text-left font-sans border border-gray-200 overflow-visible">
    {/* Header */}
    <div className="flex items-center justify-between px-4 py-3 bg-white border-b border-gray-100">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-[#ed4680] rounded-lg flex items-center justify-center text-[10px] font-bold text-white">
          Ally
        </div>
        <div className="text-sm font-semibold text-gray-800 flex items-center gap-1">
          Accessify <span className="text-gray-400 font-normal">- WCAG details, fixes, resources.</span>
        </div>
      </div>
      <div className="p-1 bg-red-600 rounded-full text-white">
        <X size={14} strokeWidth={3} />
      </div>
    </div>

    {/* Hero Promo */}
    <div className="bg-black p-6 pb-8 flex gap-4 items-start relative overflow-visible">
      <div className="w-12 h-12 flex-shrink-0 relative flex items-center justify-center" style={{ marginBottom: '4px' }}>
        <div className="absolute inset-0 border-4 border-[#ed4680] rounded-full"></div>
        <Lock className="relative z-10 text-[#ed4680] w-6 h-6" strokeWidth={2.5} />
        <div className="absolute bottom-0 left-0 w-14 h-6 bg-[#ed4680] rounded-sm z-20 transform translate-y-1/2"></div>
      </div>
      <div className="space-y-1 flex-1">
        <h4 className="text-white font-medium text-base">Introducing Accessify</h4>
        <p className="text-gray-300 text-[11px] leading-relaxed">
          Save time by instantly identifying and outlining accessibility failures along with their solutions.
        </p>
      </div>
    </div>

    {/* Menu Items */}
    <div className="bg-white overflow-hidden rounded-b-lg">
      {[
        "Recently Used",
        "Most Common",
        "Percievable",
        "Operable",
        "Understandable",
        "Robust"
      ].map((item, idx) => (
        <div
          key={item}
          className={`flex items-center justify-between px-6 py-4 cursor-pointer hover:bg-gray-50 transition-colors ${idx !== 5 ? 'border-b border-gray-50' : ''}`}
        >
          <span className="text-gray-700 font-medium text-lg">{item}</span>
          <ChevronRight size={24} className="text-[#ed4680]" />
        </div>
      ))}
    </div>
  </div>
);

export const Hero: React.FC = () => {
  const [showForm, setShowForm] = useState(false);
  const figmaLink = "https://www.figma.com/proto/Hx4YiQ73NrF0y0gNT8JZWu/Accessify?node-id=43-77&p=f&m=dev&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=43%3A77&show-proto-sidebar=1&t=UGbZWJyXsJQ6wNFz-1";

  return (
    <section id="hero" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 flex items-center">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-1/4 -right-1/4 w-96 h-96 bg-accessify-pink/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-1/4 -left-1/4 w-96 h-96 bg-accessify-pink/5 rounded-full blur-[120px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 text-center lg:text-left">
            <a
              href="#hero"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center px-4 py-1.5 rounded-full bg-accessify-pink/10 border border-accessify-pink/20 text-accessify-pink font-bold text-xs uppercase tracking-widest mb-6 hover:bg-accessify-pink/20 hover:border-accessify-pink/30 transition-all cursor-pointer"
            >
              <span className="mr-2">✨</span> Figma Plugin Coming Soon
            </a>

            <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight mb-8 leading-[1.1]">
              Fostering <span className="text-accessify-pink">understanding</span> <br className="hidden lg:block" />
              across team roles.
            </h1>

            <p className="max-w-2xl mx-auto lg:mx-0 text-xl text-gray-400 mb-12 leading-relaxed">
              Identify and outline accessibility failures along with their solutions instantly.
              Accessifyy empowers designers to become accessibility advocates through the POUR principles.
            </p>

            {showForm ? (
              <div className="mb-8">
                <EarlyAccessForm onSuccess={() => setShowForm(false)} />
              </div>
            ) : (
              <div className="flex flex-col sm:flex-row justify-center lg:justify-start items-center gap-4">
                <button
                  onClick={() => setShowForm(true)}
                  className="group relative w-full sm:w-auto px-8 py-4 bg-accessify-pink text-white font-bold rounded-2xl shadow-[0_0_30px_rgba(237,70,128,0.3)] hover:scale-105 transition-all duration-300"
                >
                  <span className="flex items-center justify-center">
                    Get Early Access
                    <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </span>
                </button>
                <a
                  href={figmaLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-8 py-4 bg-white/5 border border-white/10 text-white font-semibold rounded-2xl hover:bg-white/10 transition-all duration-300 flex items-center justify-center"
                >
                  Try Prototype
                  <ExternalLink className="ml-2 w-4 h-4 text-gray-400" />
                </a>
              </div>
            )}
          </div>

          <div className="flex-1 w-full flex justify-center lg:justify-end relative">
            <div className="relative group">
              {/* Glow effect */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-accessify-pink to-blue-500 rounded-[2rem] blur-2xl opacity-20 group-hover:opacity-40 transition duration-1000"></div>

              {/* Plugin UI Re-creation */}
              <div className="relative transform hover:-translate-y-2 transition-transform duration-500">
                <PluginMockup />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
