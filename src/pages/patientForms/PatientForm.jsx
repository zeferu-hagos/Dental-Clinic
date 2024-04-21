import React, { useState, useContext } from 'react';
import { DentalClinicContext } from '../../context/Context';

const PatientForm = () => {
  const { addPatient } = useContext(DentalClinicContext);
  const [name, setName] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [dob, setDob] = useState('');
  const [address, setAddress] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addPatient({ name });
    setName('');
  };

  return (
    <div style={{ maxWidth: '500px', margin: 'auto', padding: '20px', border: '1px solid #ccc', borderRadius: '5px' }}>
    <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Patient Information Form</h2>
    <form onSubmit={handleSubmit}>
      <div style={{ display: 'flex', marginBottom: '15px' }}>
        <div style={{ flex: '1', marginRight: '10px' }}>
          <label>First Name:</label><br />
          <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} style={{ width: '100%', padding: '8px', borderRadius: '5px', border: '1px solid #ccc' }} required />
        </div>
        <div style={{ flex: '1' }}>
          <label>Last Name:</label><br />
          <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} style={{ width: '100%', padding: '8px', borderRadius: '5px', border: '1px solid #ccc' }} required />
        </div>
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
        <label>Date of Birth:</label><br />
        <input type="date" value={dob} onChange={(e) => setDob(e.target.value)} style={{ width: '100%', padding: '8px', borderRadius: '5px', border: '1px solid #ccc' }} required />
      </div>
      <div style={{ marginBottom: '15px' }}>
        <label>Address:</label><br />
        <textarea value={address} onChange={(e) => setAddress(e.target.value)} style={{ width: '100%', padding: '8px', borderRadius: '5px', border: '1px solid #ccc' }}></textarea>
      </div>
      <div>
        <button type="submit" style={{ width: '100%', padding: '10px', backgroundColor: '#007bff', color: '#fff', borderRadius: '5px', border: 'none', cursor: 'pointer' }}>Submit</button>
      </div>
    </form>
  </div>
  );
};

export default PatientForm;