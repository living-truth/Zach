import React, { useEffect, useState } from 'react';

const services = [
  {
    id: 1,
    title: 'Commercial Modeling',
    description: 'From print campaigns to television commercials, I bring products and services to life with authenticity and polished professionalism.',
    image: 'https://images.pexels.com/photos/6182567/pexels-photo-6182567.jpeg?auto=compress&cs=tinysrgb&w=1600'
  },
  {
    id: 2,
    title: 'Editorial & Fashion',
    description: 'Expert storytelling through high-fashion editorial work for magazines, lookbooks, and brand campaigns with creative versatility.',
    image: 'https://images.pexels.com/photos/7775636/pexels-photo-7775636.jpeg?auto=compress&cs=tinysrgb&w=1600'
  },
  {
    id: 3,
    title: 'Runway',
    description: 'Experienced runway model for major fashion weeks and designer showcases with confident poise and professional technique.',
    image: 'https://images.pexels.com/photos/7681468/pexels-photo-7681468.jpeg?auto=compress&cs=tinysrgb&w=1600'
  },
  {
    id: 4,
    title: 'Brand Ambassadorship',
    description: 'Long-term representation for brands seeking a consistent face and personality that embodies their values and aesthetic.',
    image: 'https://images.pexels.com/photos/2693849/pexels-photo-2693849.jpeg?auto=compress&cs=tinysrgb&w=1600'
  }
];

const Services = () => {
  const [activeService, setActiveService] = useState(1);
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
    
    observer.observe(document.querySelector('#services'));
    
    return () => observer.disconnect();
  }, []);
  
  // Auto rotate through services
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveService(prev => prev === services.length ? 1 : prev + 1);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);
  
  const activeServiceData = services.find(service => service.id === activeService);
  
  return (
    <section id="services" className="py-24 px-4 bg-zinc-900 ">
      <div className="container mx-auto">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl md:text-4xl font-light tracking-wider mb-6 font-philosopher">SERVICES</h2>
          <p className="text-white/70 max-w-2xl mx-auto font-cardo">
            Versatile modeling services tailored to meet the unique vision and requirements of your creative projects.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="relative aspect-3/4 overflow-hidden ">
              {services.map(service => (
                <img
                  key={service.id}
                  src={service.image}
                  alt={service.title}
                  className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${
                    service.id === activeService 
                      ? 'opacity-100 scale-100' 
                      : 'opacity-0 scale-110'
                  }`}
                />
              ))}
              
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent" />
              
              {/* Description overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h3 className="text-2xl font-light mb-4 font-marcellus  tracking-wider">
                  {activeServiceData?.title}
                </h3>
                <p className="text-white/80 leading-relaxed font-cardo">
                  {activeServiceData?.description}
                </p>
              </div>
            </div>
          </div>
          
          <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="space-y-6">
              {services.map(service => (
                <div 
                  key={service.id}
                  className={`p-6 border-l-2 transition-all duration-300 cursor-pointer ${
                    service.id === activeService 
                      ? 'border-white bg-white/5' 
                      : 'border-white/20 hover:border-white/40'
                  }`}
                  onClick={() => setActiveService(service.id)}
                >
                  <h3 className={`text-xl transition-colors font-marcellus ${
                    service.id === activeService ? 'text-white' : 'text-white/70'
                  }`}>
                    {service.title}
                  </h3>
                  
                  <div className={`overflow-hidden transition-all duration-300 font-cardo ${
                    service.id === activeService ? 'max-h-24 mt-4 opacity-100' : 'max-h-0 opacity-0'
                  }`}>
                    <p className="text-white/70 text-sm">
                      {service.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            
            <a 
              href="#contact" 
              className="inline-block mt-10 px-8 py-4 border border-white/20 hover:bg-white hover:text-black transition-all duration-300 tracking-wider text-sm"
            >
              REQUEST BOOKING
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;