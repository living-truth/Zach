import React, { useState } from 'react';
import { Send, Mail, Instagram, Linkedin } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    project: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        project: '',
        message: ''
      });
      
      // Reset submission status after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
  };
  
  return (
    <section id="contact" className="py-24 px-4 bg-black font-marcellus">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-light font-philosopher tracking-wider mb-6">GET IN TOUCH</h2>
          <p className="text-white/70 max-w-2xl mx-auto font-cardo">
            Interested in working together? Let's discuss how I can bring your creative vision to life.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="lg:order-2">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-white/60 text-sm mb-2">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-zinc-900 border border-zinc-800 text-white px-4 py-3 focus:outline-none focus:border-white/40 transition-colors"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-white/60 text-sm mb-2">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-zinc-900 border border-zinc-800 text-white px-4 py-3 focus:outline-none focus:border-white/40 transition-colors"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="project" className="block text-white/60 text-sm mb-2">Project Type</label>
                <select
                  id="project"
                  name="project"
                  value={formData.project}
                  onChange={handleChange}
                  required
                  className="w-full bg-zinc-900 border border-zinc-800 text-white px-4 py-3 focus:outline-none focus:border-white/40 transition-colors appearance-none"
                >
                  <option value="">Select Project Type</option>
                  <option value="Commercial">Commercial</option>
                  <option value="Editorial">Editorial</option>
                  <option value="Runway">Runway</option>
                  <option value="Brand Ambassador">Brand Ambassador</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-white/60 text-sm mb-2">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full bg-zinc-900 border border-zinc-800 text-white px-4 py-3 focus:outline-none focus:border-white/40 transition-colors resize-none"
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting || isSubmitted}
                className={`flex items-center justify-center space-x-2 w-full py-4 transition-all duration-300 ${
                  isSubmitted
                    ? 'bg-green-600 text-white cursor-default'
                    : 'bg-white text-black hover:bg-white/90'
                }`}
              >
                {isSubmitting ? (
                  <span>SENDING...</span>
                ) : isSubmitted ? (
                  <span>MESSAGE SENT</span>
                ) : (
                  <>
                    <span>SEND MESSAGE</span>
                    <Send size={16} />
                  </>
                )}
              </button>
            </form>
          </div>
          
          <div className="lg:order-1">
            <h3 className="text-xl font-light tracking-wider mb-8 font-marcellus">CONTACT INFORMATION</h3>
            
            <div className="space-y-10 font-cardo">
              <div className="flex items-start space-x-4">
                <Mail className="text-white/70 mt-1" size={20} />
                <div>
                  <h4 className="text-sm tracking-wider mb-2">EMAIL</h4>
                  <p className="text-white/80">bookings@elainemodel.com</p>
                  <p className="text-white/80">agency@elainemodel.com</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <h4 className="text-sm tracking-wider mb-2">REPRESENTATION</h4>
                <p className="text-white/80">Elite Models (New York)</p>
                <p className="text-white/80">IMG Models (Paris)</p>
                <p className="text-white/80">Storm Management (London)</p>
              </div>
              
              <div className="pt-6">
                <h4 className="text-sm tracking-wider mb-4">FOLLOW</h4>
                <div className="flex space-x-4">
                  <a href="#" className="p-3 border border-white/20 hover:border-white/60 transition-colors">
                    <Instagram size={20} />
                  </a>
                  <a href="#" className="p-3 border border-white/20 hover:border-white/60 transition-colors">
                    <Linkedin size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;