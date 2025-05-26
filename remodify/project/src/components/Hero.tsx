import React, { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section 
      id="home" 
      className="pt-24 pb-16 md:pt-32 md:pb-24 lg:pt-40 lg:pb-32 relative bg-gradient-to-r from-blue-900 to-blue-700 text-white"
    >
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover bg-center mix-blend-overlay opacity-20"></div>
      
      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 
            className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 transition-all duration-700 ${
              isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform -translate-y-10'
            }`}
          >
            Find Your Perfect <span className="text-yellow-300">Work-From-Home</span> Opportunity
          </h1>
          
          <p 
            className={`text-lg md:text-xl mb-8 text-blue-100 transition-all delay-300 duration-700 ${
              isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'
            }`}
          >
            SS Consultancy connects talented professionals with remote positions at leading companies. 
            Start your work-from-home journey today.
          </p>
          
          <div 
            className={`flex flex-col sm:flex-row gap-4 justify-center transition-all delay-500 duration-700 ${
              isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'
            }`}
          >
            <a 
              href="#jobs" 
              className="bg-yellow-500 hover:bg-yellow-400 text-blue-900 font-semibold py-3 px-8 rounded-md shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
            >
              Browse Jobs
              <ArrowRight size={18} />
            </a>
            <a 
              href="#apply" 
              className="bg-transparent hover:bg-blue-800 text-white border-2 border-white font-semibold py-3 px-8 rounded-md transition-all duration-300"
            >
              Apply Now
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-gray-50 to-transparent"></div>
    </section>
  );
};

export default Hero;