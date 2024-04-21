import React, { createContext, useState } from 'react';

export const DentalClinicContext = createContext();

export const DentalClinicProvider = ({ children }) => {
  const [patients, setPatients] = useState([]);
  const [appointments, setAppointments] = useState([]);

  const addPatient = (patient) => {
    setPatients([...patients, patient]);
  };

  const addAppointment = (appointment) => {
    setAppointments([...appointments, appointment]);
  };

  return (
    <DentalClinicContext.Provider
      value={{ patients, appointments, addPatient, addAppointment }}
    >
      {children}
    </DentalClinicContext.Provider>
  );
};