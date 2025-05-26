import React, { useEffect, useRef } from 'react';
import { Users, Award, ThumbsUp } from 'lucide-react';

const AboutUs: React.FC = () => {
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
      id="about" 
      ref={sectionRef}
      className="section-padding bg-white opacity-0"
    >
      <div className="container-custom">
        <h2 className="section-title text-center">About SS Consultancy</h2>
        <p className="section-subtitle text-center text-gray-600">
          We connect talented individuals with rewarding work-from-home opportunities 
          at India's leading companies.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <div className="card text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-blue-800">Expert Placement</h3>
            <p className="text-gray-600">
              Our team of recruiters specializes in matching qualified candidates with 
              the perfect work-from-home positions that align with their skills and career goals.
            </p>
          </div>
          
          <div className="card text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-blue-800">Top Companies</h3>
            <p className="text-gray-600">
              We partner with leading companies like Flipkart, Amazon, Mahindra, Isuzu, and ITC 
              to provide exclusive remote work opportunities.
            </p>
          </div>
          
          <div className="card text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <ThumbsUp className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-blue-800">Satisfying Careers</h3>
            <p className="text-gray-600">
              Whether you're looking for part-time or full-time positions, we help you 
              find fulfilling work-from-home opportunities that offer competitive compensation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;