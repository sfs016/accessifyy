
import React from 'react';
import { AlertCircle, TrendingUp, ShieldAlert } from 'lucide-react';

export const Problem: React.FC = () => {
  return (
    <section id="problem" className="py-24 bg-white/[0.02]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-24 items-center">
          <div>
            <h2 className="text-accessify-pink font-bold uppercase tracking-widest text-xs mb-4">The Alarming Reality</h2>
            <h3 className="text-4xl lg:text-5xl font-bold mb-8 leading-tight">
              Accessibility is not optional, it's essential.
            </h3>

            <div className="space-y-6">
              <div className="flex gap-4 items-start p-6 rounded-2xl bg-accessify-pink/5 border border-accessify-pink/10 hover:border-accessify-pink/30 transition-all">
                <div className="bg-accessify-pink/20 p-3 rounded-xl text-accessify-pink">
                  <ShieldAlert size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-2 text-white">2,500+ Federal Lawsuits</h4>
                  <p className="text-gray-400">Filed in 2022 alone against companies with non-accessible websites. Compliance is a major legal risk.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-accessify-pink/30 transition-all">
                <div className="bg-white/10 p-3 rounded-xl text-white/60">
                  <TrendingUp size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-2 text-white">The Knowledge Gap</h4>
                  <p className="text-gray-400">Teams struggle to maintain WCAG standards as they scale. Education often lags behind development.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 lg:mt-0 relative">
             <div className="aspect-square bg-gradient-to-br from-accessify-pink/10 to-transparent rounded-3xl p-1 flex items-center justify-center border border-white/5">
                <div className="bg-accessify-dark w-full h-full rounded-[1.4rem] flex flex-col items-center justify-center text-center p-8">
                   <div className="text-7xl font-black text-accessify-pink mb-4">2,500+</div>
                   <div className="text-2xl font-semibold text-white/80">Federal Lawsuits in 2022</div>
                   <div className="mt-6 h-1 w-24 bg-accessify-pink rounded-full"></div>
                   <p className="mt-6 text-gray-500 max-w-xs mx-auto text-sm italic">"Claiming websites were not designed to be accessible to all users"</p>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};
