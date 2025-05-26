import React, { useEffect, useRef } from 'react';
import { COMPANY_PARTNERS } from '../utils/constants';

const CompanyPartners: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in');
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      id="partners" 
      ref={sectionRef}
      className="section-padding bg-gray-50 opacity-0"
    >
      <div className="container-custom">
        <h2 className="section-title text-center">Our Partner Companies</h2>
        <p className="section-subtitle text-center text-gray-600">
          We work with leading companies to bring you the best work-from-home opportunities.
        </p>
        
        <div className="mt-12 grid grid-cols-2 md:grid-cols-5 gap-6">
          {COMPANY_PARTNERS.map((company) => (
            <div 
              key={company.id} 
              className="bg-white rounded-lg shadow-sm p-6 flex items-center justify-center hover:shadow-md transition-all duration-300"
            >
              <div className="text-center">
                <div className="h-16 flex items-center justify-center mb-4">
                  {/* Using placeholder colored div instead of actual logos due to copyright */}
                  <div className="bg-blue-600 h-12 w-12 rounded-md flex items-center justify-center text-white font-bold">
                    {company.name.charAt(0)}
                  </div>
                </div>
                <h3 className="text-sm font-medium text-gray-800">{company.name}</h3>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-6">
            Join our growing network of professionals working with India's top companies.
          </p>
          <a 
            href="#apply" 
            className="btn-primary"
          >
            Apply Today
          </a>
        </div>
      </div>
    </section>
  );
};

export default CompanyPartners;