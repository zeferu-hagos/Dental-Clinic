import React from 'react';

const Header = () => {
  return (
    <header style={headerStyle}>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h1>Dental Clinic</h1>
          </div>
          <div className="col-md-6">
            <nav>
              <ul style={navStyle}>
              <li><a href="/home" style={{color:"white"}}>Home</a></li>
                <li><a href="/services" style={{ color: "white" }}>Services</a></li>
                <li><a href="/about"  style={{color:"white"}}>About</a></li>
                <li><a href="/contact" style={{ color: "white" }}>Contact</a></li>
                <li><a href="/patientForm" style={{ color: "white" }}>Patient Form</a></li>
                <li><a href="/appointmentForm" style={{ color: "white" }}>Appointment Form</a></li>
                <li><a href="/patientList"  style={{color:"white"}}>Patient List</a></li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

const headerStyle = {
  backgroundColor: '#343a40',
  color: '#fff',
  padding: '20px 0'
};

const navStyle = {
  listStyleType: 'none',
  display: 'flex',
  justifyContent: 'space-between',
  padding: "20px",
};

export default Header;
