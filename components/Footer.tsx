
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="py-16 border-t border-white/5 bg-accessify-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="md:flex md:justify-between md:items-start gap-12">
          <div className="mb-12 md:mb-0">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-accessify-pink rounded-lg flex items-center justify-center font-bold text-white text-[10px]">
                Ally
              </div>
              <span className="text-2xl font-bold text-white tracking-tight">
                Accessify<span className="text-accessify-pink">y</span>
              </span>
            </div>
            <p className="text-gray-500 text-sm max-w-xs leading-relaxed">
              Identifying accessibility failures and providing solutions directly within your design workflow.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-12 gap-y-10">
             <div>
                <h5 className="text-white font-bold mb-6 text-xs uppercase tracking-widest">Platform</h5>
                <ul className="space-y-3 text-sm text-gray-500">
                    <li><a href="#" className="hover:text-accessify-pink transition-colors">Figma Plugin</a></li>
                    <li><a href="#" className="hover:text-accessify-pink transition-colors">Early Access</a></li>
                </ul>
             </div>
             <div>
                <h5 className="text-white font-bold mb-6 text-xs uppercase tracking-widest">Resources</h5>
                <ul className="space-y-3 text-sm text-gray-500">
                    <li><a href="https://accessibility.umich.edu/basics/concepts-principles/pour" className="hover:text-accessify-pink transition-colors">POUR Principles</a></li>
                    <li><a href="https://www.w3.org/WAI/standards-guidelines/wcag/" className="hover:text-accessify-pink transition-colors">WCAG Docs</a></li>
                </ul>
             </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-600 text-[10px] uppercase tracking-widest text-center md:text-left">
            &copy; {new Date().getFullYear()} Accessifyy.com - Tech for all.
          </p>
          <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-accessify-pink/10 border border-accessify-pink/20">
             <div className="w-2 h-2 rounded-full bg-accessify-pink animate-pulse"></div>
             <span className="text-xs font-bold text-accessify-pink uppercase tracking-widest">System Status: Online</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
