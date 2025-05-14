import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 px-4 bg-zinc-950 text-white/60 font-marcellus">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="#" className="text-white text-xl font-light tracking-widest">
              Zachariah<span className="font-bold">MODEL</span>
            </a>
          </div>
          
          <div className="flex flex-col md:flex-row items-center md:space-x-8 space-y-4 md:space-y-0">
            <nav className="flex space-x-6">
              {['Portfolio', 'About', 'Services', 'Contact'].map((item) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase()}`}
                  className="text-white/60 hover:text-white text-sm tracking-wider transition-all"
                >
                  {item}
                </a>
              ))}
            </nav>
            
            <div className="h-4 w-px bg-white/20 hidden md:block"></div>
            
            <div className="text-sm">
              &copy; {currentYear} Zach, Model. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;