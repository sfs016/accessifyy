
import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Problem } from './components/Problem';
import { Features } from './components/Features';
import { ValueProps } from './components/ValueProps';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-accessify-dark overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <Features />
        <ValueProps />
      </main>
      <Footer />
    </div>
  );
};

export default App;
