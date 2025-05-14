import React, { useEffect, useState } from 'react';
import { Camera, Award, Clock, MapPin } from 'lucide-react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );
    
    observer.observe(document.querySelector('#about'));
    
    return () => observer.disconnect();
  }, []);
  
  // Stats to be animated
  const stats = [
    { icon: <Camera size={20} />, value: 120, label: 'PHOTOSHOOTS' },
    { icon: <Clock size={20} />, value: 8, label: 'YEARS EXP.' },
    { icon: <MapPin size={20} />, value: 24, label: 'COUNTRIES' }
  ];

  return (
    <section id="about" className="py-24 px-4 bg-linear-to-b from-black to-zinc-900 font-cardo">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <h2 className="text-3xl md:text-4xl font-light tracking-wider font-philosopher  font-bold mb-8">ABOUT ME</h2>
            <p className="text-white/80 font-light leading-relaxed mb-6">
              With over 8 years of professional modeling experience spanning global markets, I've had
              the privilege of working with prestigious brands and publications across four continents.
              My versatile portfolio includes editorial, commercial, runway, and lifestyle work.
            </p>
            <p className="text-white/80 font-light leading-relaxed mb-10">
              Known for professionalism and adaptability, I bring each client's vision to life with
              precision and artistry. My background in fine arts informs my understanding of
              composition, light, and narrative—allowing me to contribute meaningfully to creative processes.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-3 text-white/80">
                    {stat.icon}
                  </div>
                  <div className="text-2xl md:text-3xl font-medium mb-1">
                    {isVisible ? stat.value : 0}+
                  </div>
                  <div className="text-xs text-white/60 tracking-wider">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className={`relative transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            {/* Main image */}
            <div className="relative z-10 ml-8 mt-8">
              <img 
                src="https://images.pexels.com/photos/2681751/pexels-photo-2681751.jpeg?auto=compress&cs=tinysrgb&w=1600" 
                alt="Model portrait" 
                className="w-full h-[600px] object-cover"
              />
            </div>
            
            {/* Background frame */}
            <div className="absolute top-0 left-0 w-full h-full border-2 border-white/20" />
            
            {/* Experience badge */}
            <div className="absolute bottom-8 -left-8 bg-white text-black px-6 py-4 z-20">
              <span className="block text-2xl font-medium">8+</span>
              <span className="text-xs tracking-wider">YEARS EXPERIENCE</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;