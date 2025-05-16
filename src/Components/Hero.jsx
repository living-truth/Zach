import React, { useEffect, useState } from 'react';
import { ArrowDown } from 'lucide-react';
import herobg from '../assets/herobg.jpg';

const Hero = () => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.pageYOffset);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToPortfolio = () => {
    const portfolioSection = document.getElementById('portfolio');
    if (portfolioSection) {
      portfolioSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen overflow-hidden font-marcellus">
      {/* Background image with parallax effect */}
      <div
        className="absolute inset-0 bg-cover  brightness-75"
        style={{
          backgroundImage: `url(${herobg})`,
          transform: `translateY(${offset * 0.5}px)`
        }}
      />


      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-linear-to-b from-black/60 via-black/30 to-black" />

      {/* Content */}
      <div className="relative h-full flex flex-col justify-center items-center text-center px-4">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-wider text-white mb-4">
          <div className="text-left ml-0 md:ml-8 lg:ml-16">
            <span className="block text-4l md:text-7xl -mb-4 -ml-4 font-great-vibes">Zachariah</span>
            <span className="block font-bold text-5xl md:text-8xl ml-10 font-philosopher">A K U F F O</span>
          </div>
          <span className="block font-thin text-2xl md:text-3xl lg:text-4xl tracking-widest mt-8">
            <span className="block md:inline">I N T E R N A T I O N A L</span>
            <span className="hidden md:inline">&nbsp; <span className='text-transparent'>.</span>&nbsp;</span>
            <span className="block md:inline">M O D E L</span>
          </span>
        </h1>



        <p className="max-w-md text-white/80 font-light tracking-wide mt-2 mb-8">
          Runway • Editorial • Commercial • Lifestyle
        </p>

        <button
          onClick={scrollToPortfolio}
          className="mt-12 group flex flex-col items-center text-white/70 hover:text-white transition-all duration-300"
        >
          <span className="text-xs  tracking-widest mb-2">VIEW PORTFOLIO</span>
          <ArrowDown className="animate-bounce" size={24} />
        </button>
      </div>
    </section>
  );
};

export default Hero;