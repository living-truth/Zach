import React, { useState, useEffect } from 'react';

const portfolioItems = [
  {
    id: 1,
    category: 'editorial',
    image: 'https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=1600',
    title: 'Vogue Italia',
    description: 'Summer Collection 2025'
  },
  {
    id: 2,
    category: 'commercial',
    image: 'https://images.pexels.com/photos/247204/pexels-photo-247204.jpeg?auto=compress&cs=tinysrgb&w=1600',
    title: 'Luxury Brand',
    description: 'Spring Campaign'
  },
  {
    id: 3,
    category: 'runway',
    image: 'https://images.pexels.com/photos/3812743/pexels-photo-3812743.jpeg?auto=compress&cs=tinysrgb&w=1600',
    title: 'Paris Fashion Week',
    description: 'Designer Showcase'
  },
  {
    id: 4,
    category: 'editorial',
    image: 'https://images.pexels.com/photos/1689731/pexels-photo-1689731.jpeg?auto=compress&cs=tinysrgb&w=1600',
    title: 'Harper\'s Bazaar',
    description: 'Winter Editorial'
  },
  {
    id: 5,
    category: 'commercial',
    image: 'https://images.pexels.com/photos/7507786/pexels-photo-7507786.jpeg?auto=compress&cs=tinysrgb&w=1600',
    title: 'Cosmetics Campaign',
    description: 'Beauty Collection'
  },
  {
    id: 6,
    category: 'lifestyle',
    image: 'https://images.pexels.com/photos/1065058/pexels-photo-1065058.jpeg?auto=compress&cs=tinysrgb&w=1600',
    title: 'Travel Magazine',
    description: 'Destination Features'
  },
  {
    id: 7,
    category: 'runway',
    image: 'https://images.pexels.com/photos/6766250/pexels-photo-6766250.jpeg?auto=compress&cs=tinysrgb&w=1600',
    title: 'Milan Fashion Week',
    description: 'Couture Collection'
  },
  {
    id: 8,
    category: 'lifestyle',
    image: 'https://images.pexels.com/photos/247295/pexels-photo-247295.jpeg?auto=compress&cs=tinysrgb&w=1600',
    title: 'Wellness Brand',
    description: 'Product Campaign'
  }
];

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [filteredItems, setFilteredItems] = useState(portfolioItems);
  const [selectedItem, setSelectedItem] = useState(null);
  const [isVisible, setIsVisible] = useState({});
  
  const categories = ['all', 'editorial', 'commercial', 'runway', 'lifestyle'];
  
  useEffect(() => {
    if (activeFilter === 'all') {
      setFilteredItems(portfolioItems);
    } else {
      setFilteredItems(portfolioItems.filter(item => item.category === activeFilter));
    }
  }, [activeFilter]);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          setIsVisible(prev => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting
          }));
        });
      },
      { threshold: 0.1 }
    );
    
    document.querySelectorAll('.portfolio-item').forEach(item => {
      observer.observe(item);
    });
    
    return () => observer.disconnect();
  }, [filteredItems]);
  
  return (
    <section id="portfolio" className="py-24 px-4 bg-black font-marcellus">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-7xl font-light tracking-wider font-philosopher mb-6">P O R T F O L I O</h2>
          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`text-sm tracking-wider px-4 py-2 transition-all ${
                  activeFilter === category
                    ? 'text-white border-b border-white'
                    : 'text-white/60 hover:text-white/80'
                }`}
              >
                {category.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {filteredItems.map((item) => (
            <div
              id={`item-${item.id}`}
              key={item.id}
              className={`portfolio-item cursor-pointer group relative overflow-hidden aspect-3/4 ${
                isVisible[`item-${item.id}`] ? 'animate-fadeIn' : 'opacity-0'
              }`}
              onClick={() => setSelectedItem(item)}
            >
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <h3 className="text-xl font-medium text-white">{item.title}</h3>
                <p className="text-white/80 text-sm mt-2">{item.description}</p>
                <p className="text-white/60 text-xs mt-3 uppercase tracking-wider">{item.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Modal for full image view */}
      {selectedItem && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={() => setSelectedItem(null)}
        >
          <div className="relative max-w-5xl max-h-[90vh]">
            <button 
              className="absolute top-4 right-4 text-white p-2 bg-black/50 rounded-full"
              onClick={() => setSelectedItem(null)}
            >
              <X size={24} />
            </button>
            <img 
              src={selectedItem.image} 
              alt={selectedItem.title}
              className="max-w-full max-h-[90vh] object-contain"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black/75 p-4">
              <h3 className="text-xl font-medium text-white">{selectedItem.title}</h3>
              <p className="text-white/80 mt-1">{selectedItem.description}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;