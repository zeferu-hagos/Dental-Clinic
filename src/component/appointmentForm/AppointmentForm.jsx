import React, { useState } from 'react';

function AppointmentForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to handle form submission
    console.log("form submitted");

    
  };

  return (
    <div style={{ maxWidth: '500px', margin: '30px',marginLeft: '400px', border: '1px solid #ccc', borderRadius: '5px' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Book an Appointment</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '15px' }}>
          <label>Name:</label><br />
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} style={{ width: '100%', padding: '6px', borderRadius: '5px', border: '1px solid #ccc' }} required />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label>Email:</label><br />
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} style={{ width: '100%', padding: '8px', borderRadius: '5px', border: '1px solid #ccc' }} required />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label>Phone:</label><br />
          <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} style={{ width: '100%', padding: '8px', borderRadius: '5px', border: '1px solid #ccc' }} required />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label>Date:</label><br />
          <input type="date" value={date} onChange={(e) => setDate(e.target.value)} style={{ width: '100%', padding: '8px', borderRadius: '5px', border: '1px solid #ccc' }} required />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label>Time:</label><br />
          <input type="time" value={time} onChange={(e) => setTime(e.target.value)} style={{ width: '100%', padding: '8px', borderRadius: '5px', border: '1px solid #ccc' }} required />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label>Message:</label><br />
          <textarea value={message} onChange={(e) => setMessage(e.target.value)} style={{ width: '100%', padding: '8px', borderRadius: '5px', border: '1px solid #ccc' }}></textarea>
        </div>
        <div>
          <button type="submit" style={{ width: '100%', padding: '10px', backgroundColor: '#007bff', color: '#fff', borderRadius: '5px', border: 'none', cursor: 'pointer' }}>Submit</button>
        </div>
      </form>
    </div>
  );
}

export default AppointmentForm;
