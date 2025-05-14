import React from 'react';
import Header from './Components/Header';
import Hero from './Components/Hero';
import Portfolio from './Components/Portfolio';
import About from './Components/About';
import Services from './Components/Services';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

const App=() => {
  return (
    <div className="font-sans bg-black text-white">
      <Header />
      <main>
        <Hero />
        <Portfolio />
        <About />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;