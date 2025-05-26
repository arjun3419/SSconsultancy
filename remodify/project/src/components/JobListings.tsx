import React, { useState, useEffect, useRef } from 'react';
import { Briefcase, Clock, IndianRupee, ChevronRight } from 'lucide-react';
import { JOBS } from '../utils/constants';
import { JobType } from '../utils/types';

const JobListings: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'Full Time' | 'Part Time'>('all');
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

  const filteredJobs = filter === 'all' 
    ? JOBS 
    : JOBS.filter(job => job.type === filter);

  return (
    <section 
      id="jobs" 
      ref={sectionRef}
      className="section-padding bg-gray-50 opacity-0"
    >
      <div className="container-custom">
        <h2 className="section-title text-center">Available Positions</h2>
        <p className="section-subtitle text-center text-gray-600">
          Explore our current work-from-home opportunities with leading companies.
        </p>
        
        <div className="flex justify-center mb-8">
          <div className="inline-flex rounded-md shadow-sm p-1 bg-white">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2 text-sm font-medium rounded-md ${
                filter === 'all' 
                  ? 'bg-blue-600 text-white' 
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              All Jobs
            </button>
            <button
              onClick={() => setFilter('Full Time')}
              className={`px-4 py-2 text-sm font-medium rounded-md ${
                filter === 'Full Time' 
                  ? 'bg-blue-600 text-white' 
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              Full Time
            </button>
            <button
              onClick={() => setFilter('Part Time')}
              className={`px-4 py-2 text-sm font-medium rounded-md ${
                filter === 'Part Time' 
                  ? 'bg-blue-600 text-white' 
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              Part Time
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredJobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      </div>
    </section>
  );
};

const JobCard: React.FC<{ job: JobType }> = ({ job }) => {
  return (
    <div className="card group hover:-translate-y-1">
      <div className="flex justify-between items-start mb-4">
        <div className="bg-blue-100 p-3 rounded-lg">
          <Briefcase className="h-6 w-6 text-blue-600" />
        </div>
        <span className={`text-sm font-medium px-3 py-1 rounded-full ${
          job.type === 'Full Time' 
            ? 'bg-green-100 text-green-800' 
            : 'bg-yellow-100 text-yellow-800'
        }`}>
          {job.type}
        </span>
      </div>
      
      <h3 className="text-xl font-semibold mb-2 text-blue-900">{job.title}</h3>
      <p className="text-gray-500 mb-1 text-sm">{job.company}</p>
      
      <div className="flex items-center text-gray-600 mb-4">
        <IndianRupee className="h-4 w-4 mr-1" />
        <span className="text-sm">{job.salary.toLocaleString()} per month</span>
      </div>
      
      <p className="text-gray-600 mb-4 text-sm">{job.description}</p>
      
      <div className="mb-4">
        <h4 className="text-sm font-medium mb-2 text-gray-700">Requirements:</h4>
        <ul className="text-sm text-gray-600 space-y-1">
          {job.requirements.map((req, index) => (
            <li key={index} className="flex items-start">
              <ChevronRight className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
              <span>{req}</span>
            </li>
          ))}
        </ul>
      </div>
      
      <a 
        href="#apply" 
        className="mt-auto text-blue-600 font-medium text-sm inline-flex items-center hover:text-blue-800 transition-colors"
      >
        Apply Now
        <ChevronRight className="h-4 w-4 ml-1" />
      </a>
    </div>
  );
};

export default JobListings;