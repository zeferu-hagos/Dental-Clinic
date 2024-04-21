import React from 'react';

const Home = () => {
  return (
    <div style={homeStyle}>
      <div className="container">
        <h2>Welcome to Our Dental Clinic</h2>
        <img src="/assets/1.PNG" alt=""
          style={{
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          height: '100vh',}}/>
       
        <p>Contact us today to schedule an appointment
          and experience the difference at our dental clinic!</p>
      </div>
    </div>
  );
};

const homeStyle = {
  padding: '50px 0',
  textAlign: 'center'
};

export default Home;
