import React from 'react';
import './Services.css';
const Services = () => {
  return (
    <div className="services-container">
      <div className="services-content">
        <h2>Our Services</h2>
        <div className="service-item">
          <h3>Preventive Care</h3>
          <p>Regular check-ups, cleanings, and screenings to maintain oral health.</p>
        </div>
        <div className="service-item">
          <h3>Restorative Dentistry</h3>
          <p>Repairing damaged or decayed teeth with fillings, crowns, and bridges.</p>
        </div>
        <div className="service-item">
          <h3>Cosmetic Dentistry</h3>
          <p>Improving the appearance of teeth with whitening, veneers, and bonding.</p>
        </div>
        <div className="service-item">
          <h3>Orthodontics</h3>
          <p>Straightening teeth and correcting bite issues with braces or aligners.</p>
        </div>
        <div className="service-item">
          <h3>Oral Surgery</h3>
          <p>Extractions, implants, and other surgical procedures for oral health needs.</p>
        </div>
      </div>
    </div>
  );
};

export default Services;
