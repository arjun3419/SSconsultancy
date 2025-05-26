import React from 'react';
import { Phone, Mail, MapPin, Briefcase, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer id="contact" className="bg-blue-900 text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 text-white font-bold text-xl mb-4">
              <Briefcase className="h-6 w-6" />
              <span>SS Consultancy</span>
            </div>
            <p className="text-blue-200 mb-6">
              Connecting talented individuals with rewarding work-from-home opportunities 
              across India since 2020.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-blue-200 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-blue-200 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-blue-200 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-blue-200 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Job Categories</h3>
            <ul className="space-y-2">
              <li>
                <a href="#jobs" className="text-blue-200 hover:text-white transition-colors">
                  Telecalling
                </a>
              </li>
              <li>
                <a href="#jobs" className="text-blue-200 hover:text-white transition-colors">
                  Data Entry
                </a>
              </li>
              <li>
                <a href="#jobs" className="text-blue-200 hover:text-white transition-colors">
                  Customer Support
                </a>
              </li>
              <li>
                <a href="#jobs" className="text-blue-200 hover:text-white transition-colors">
                  Freelance Writing
                </a>
              </li>
              <li>
                <a href="#jobs" className="text-blue-200 hover:text-white transition-colors">
                  Online Tutoring
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-blue-200 hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-blue-200 hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#jobs" className="text-blue-200 hover:text-white transition-colors">
                  Jobs
                </a>
              </li>
              <li>
                <a href="#apply" className="text-blue-200 hover:text-white transition-colors">
                  Apply Now
                </a>
              </li>
              <li>
                <a href="#partners" className="text-blue-200 hover:text-white transition-colors">
                  Our Partners
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Phone className="h-5 w-5 mr-3 text-blue-300 flex-shrink-0 mt-0.5" />
                <span className="text-blue-200">+91 9876543210</span>
              </li>
              <li className="flex items-start">
                <Mail className="h-5 w-5 mr-3 text-blue-300 flex-shrink-0 mt-0.5" />
                <span className="text-blue-200">info@ssconsultancy.com</span>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 text-blue-300 flex-shrink-0 mt-0.5" />
                <span className="text-blue-200">
                  123 Business Center, Main Street<br />
                  Bangalore, Karnataka 560001
                </span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-blue-800 mt-12 pt-8 text-center text-blue-300 text-sm">
          <p>&copy; {currentYear} SS Consultancy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;