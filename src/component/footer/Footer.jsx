import React from 'react';

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h3>Contact Us</h3>
            <p> HELAS SPECIALIST DETAL CLIIC</p>
            <p>18, ADI HAWSI, MEKELLE</p>
            <p>Phone: 0914595406</p>
            <p>Email: tesfawt1521@.com</p>
          </div>
          <div className="col-md-6">
            <h3>Opening Hours</h3>
            <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
            <p>Saturday: 9:00 AM - 2:00 PM</p>
            <p>Sunday: Closed</p>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-md-12">
            <p>&copy; {new Date().getFullYear()} Dental Clinic. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

const footerStyle = {
  backgroundColor: '#f8f9fa',
  color: '#343a40',
  padding: '50px 0',
  textAlign: 'center'
};

export default Footer;

