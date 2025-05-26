import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import JobListings from './components/JobListings';
import ApplicationForm from './components/ApplicationForm';
import CompanyPartners from './components/CompanyPartners';
import AboutUs from './components/AboutUs';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <Navbar />
      <main>
        <Hero />
        <AboutUs />
        <JobListings />
        <ApplicationForm />
        <CompanyPartners />
      </main>
      <Footer />
    </div>
  );
}

export default App;