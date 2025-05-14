import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  // Track scroll position
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent scrolling when menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'auto';
  }, [isOpen]);

  // Auto-close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrollPosition > 50
          ? 'bg-black/80 backdrop-blur-md py-3'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 flex font-marcellus justify-between items-center">
        <a
          href="#"
          className="text-white text-lg md:text-2xl lg:-ml-24  font-marcellus font-light tracking-widest"
        >
          Zachariah <span className="font-bold font-cinzel ">MODELPORTFOLIO</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex font-philosopher space-x-8">
          {['Portfolio', 'About', 'Services', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-white hover:text-white/70 font-light text-sm tracking-wider transition-all"
            >
              {item.toUpperCase()}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white z-50"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
  className={`
    fixed top-0 left-0 w-full h-screen bg-black z-40 
    transition-all duration-300 ease-in-out 
    flex flex-col justify-center items-center
    ${isOpen ? 'opacity-95 scale-100 pointer-events-auto' : 'opacity-0 scale-95 pointer-events-none'}
  `}
>
  <nav className="flex flex-col space-y-8 items-center">
    {['Portfolio', 'About', 'Services', 'Contact'].map((item) => (
      <a
        key={item}
        href={`#${item.toLowerCase()}`}
        className="text-white hover:text-white/70 font-light text-2xl tracking-widest transition-all"
        onClick={() => setIsOpen(false)}
      >
        {item.toUpperCase()}
      </a>
    ))}
  </nav>
</div>

    </header>
  );
};

export default Header;
