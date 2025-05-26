import React, { useState, useEffect, useRef } from 'react';
import { Check, IndianRupee, Copy } from 'lucide-react';
import { JOBS } from '../utils/constants';
import { ApplicationFormData } from '../utils/types';

const ApplicationForm: React.FC = () => {
  const [formData, setFormData] = useState<ApplicationFormData>({
    name: '',
    qualification: '',
    contact: '',
    age: '',
    gender: '',
    location: '',
    jobInterest: ''
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showPayment, setShowPayment] = useState(false);
  const [copied, setCopied] = useState(false);
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowPayment(true);
  };

  const copyUpiId = () => {
    navigator.clipboard.writeText('kumar96967@axl');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePaymentComplete = () => {
    setIsSubmitted(true);
    setShowPayment(false);
    
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        qualification: '',
        contact: '',
        age: '',
        gender: '',
        location: '',
        jobInterest: ''
      });
    }, 3000);
  };

  return (
    <section 
      id="apply" 
      ref={sectionRef}
      className="section-padding bg-white opacity-0"
    >
      <div className="container-custom">
        <h2 className="section-title text-center">Apply Now</h2>
        <p className="section-subtitle text-center text-gray-600">
          Complete the form below to apply for our work-from-home opportunities.
        </p>
        
        <div className="max-w-2xl mx-auto mt-8">
          {isSubmitted ? (
            <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Check className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-green-800">Application Submitted!</h3>
              <p className="text-green-700">
                Thank you for your interest. Our team will review your application 
                and contact you shortly.
              </p>
            </div>
          ) : showPayment ? (
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Platform Fee Payment</h3>
              <p className="text-gray-600 mb-6">
                Please pay the platform fee of ₹10 using UPI to complete your application.
              </p>
              
              <div className="bg-gray-50 p-4 rounded-lg mb-6">
                <p className="text-sm text-gray-600 mb-2">UPI ID:</p>
                <div className="flex items-center justify-center gap-2">
                  <code className="bg-white px-4 py-2 rounded border">kumar96967@axl</code>
                  <button
                    onClick={copyUpiId}
                    className="text-blue-600 hover:text-blue-800"
                    title="Copy UPI ID"
                  >
                    <Copy className="h-5 w-5" />
                  </button>
                </div>
                {copied && (
                  <p className="text-green-600 text-sm mt-2">UPI ID copied!</p>
                )}
              </div>

              <div className="space-y-4">
                <button
                  onClick={handlePaymentComplete}
                  className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-6 rounded-md shadow-sm transition-all duration-300"
                >
                  I've Completed the Payment
                </button>
                <button
                  onClick={() => setShowPayment(false)}
                  className="text-gray-600 hover:text-gray-800 block w-full"
                >
                  Back to Form
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Your full name"
                  />
                </div>
                
                <div>
                  <label htmlFor="qualification" className="block text-sm font-medium text-gray-700 mb-1">
                    Qualification *
                  </label>
                  <input
                    type="text"
                    id="qualification"
                    name="qualification"
                    value={formData.qualification}
                    onChange={handleChange}
                    required
                    className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Your highest qualification"
                  />
                </div>
                
                <div>
                  <label htmlFor="contact" className="block text-sm font-medium text-gray-700 mb-1">
                    Mobile Number / Email *
                  </label>
                  <input
                    type="text"
                    id="contact"
                    name="contact"
                    value={formData.contact}
                    onChange={handleChange}
                    required
                    className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Your contact information"
                  />
                </div>
                
                <div>
                  <label htmlFor="age" className="block text-sm font-medium text-gray-700 mb-1">
                    Age *
                  </label>
                  <input
                    type="number"
                    id="age"
                    name="age"
                    value={formData.age}
                    onChange={handleChange}
                    required
                    min="18"
                    max="65"
                    className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Your age"
                  />
                </div>
                
                <div>
                  <label htmlFor="gender" className="block text-sm font-medium text-gray-700 mb-1">
                    Gender *
                  </label>
                  <select
                    id="gender"
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                    required
                    className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
                    Location *
                  </label>
                  <input
                    type="text"
                    id="location"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    required
                    className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Your city and state"
                  />
                </div>
                
                <div className="md:col-span-2">
                  <label htmlFor="jobInterest" className="block text-sm font-medium text-gray-700 mb-1">
                    Position of Interest *
                  </label>
                  <select
                    id="jobInterest"
                    name="jobInterest"
                    value={formData.jobInterest}
                    onChange={handleChange}
                    required
                    className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select a position</option>
                    {JOBS.map(job => (
                      <option key={job.id} value={job.title}>
                        {job.title} ({job.type} - ₹{job.salary}/month)
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              
              <div className="mt-8">
                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-md shadow-sm transition-all duration-300"
                >
                  Continue to Payment
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default ApplicationForm;