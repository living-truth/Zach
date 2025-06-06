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
            <h2 className="text-3xl md:text-4xl tracking-wider font-philosopher  font-bold mb-8">ABOUT ME</h2>
            <p className="text-white/80 font-light leading-relaxed mb-6">
           Born in the heart of Bologna, Italy—a city revered for its timeless architecture, rich culture, and understated influence in the world of fashion—I’ve always felt drawn to the art of expression. I’m Zachariah Akuffo, a versatile creative born in January 2002. I began my modeling journey in 2022, and since then, I’ve had the privilege of working with renowned creative directors, visionary makeup artists, and respected brands based in France. For me, modeling is more than posing—it’s a dynamic form of storytelling, a space where one can channel emotion, attitude, and artistry. Beyond the camera, I’m also a graphic designer and writer, constantly exploring new ways to communicate visual and narrative identity. I’m the founder of Arcane Threads, a niche clothing brand that blends Japanese culture and anime aesthetics with bold, modern design. Whether I’m in front of the camera or building a brand, my mission is to give shape to the unseen and voice to the unspoken through creativity. Every project I take on is an extension of my passion for pushing boundaries and giving form to creative energy.
            </p>
            
            {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
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
            </div> */}
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