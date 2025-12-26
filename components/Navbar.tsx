
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const figmaLink = "https://www.figma.com/proto/Hx4YiQ73NrF0y0gNT8JZWu/Accessify?node-id=43-77&p=f&m=dev&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=43%3A77&show-proto-sidebar=1&t=UGbZWJyXsJQ6wNFz-1";

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-accessify-dark/95 backdrop-blur-md py-4 shadow-lg' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-accessify-pink rounded-xl flex items-center justify-center font-bold text-white text-xs">
              Ally
            </div>
            <span className="text-2xl font-bold text-white tracking-tight">
              Accessify<span className="text-accessify-pink">y</span>
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#problem" className="text-gray-300 hover:text-accessify-pink transition-colors font-medium">Problem</a>
            <a href="#features" className="text-gray-300 hover:text-accessify-pink transition-colors font-medium">Features</a>
            <a
              href={figmaLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 rounded-full border border-accessify-pink text-accessify-pink hover:bg-accessify-pink hover:text-white transition-all duration-300 font-medium"
            >
              Prototype
            </a>
            <button
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-5 py-2 rounded-full bg-accessify-pink text-white font-bold hover:brightness-110 transition-all duration-300 shadow-lg shadow-accessify-pink/20"
            >
              Coming Soon
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden absolute w-full bg-accessify-dark border-b border-white/10 transition-all duration-300 ease-in-out ${isOpen ? 'max-h-screen opacity-100 py-8' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <div className="px-4 space-y-6 text-center">
          <a href="#problem" onClick={() => setIsOpen(false)} className="block text-xl text-gray-300">The Problem</a>
          <a href="#features" onClick={() => setIsOpen(false)} className="block text-xl text-gray-300">Features</a>
          <a href="#team" onClick={() => setIsOpen(false)} className="block text-xl text-gray-300">Team</a>
          <a href={figmaLink} target="_blank" rel="noopener noreferrer" className="block text-xl text-accessify-pink font-semibold">View Prototype</a>
          <button
            onClick={(e) => {
              e.preventDefault();
              setIsOpen(false);
              document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="w-full py-4 bg-accessify-pink text-white font-bold rounded-xl shadow-lg shadow-accessify-pink/20"
          >
            Coming Soon
          </button>
        </div>
      </div>
    </nav>
  );
};
