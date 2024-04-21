// import React, { useContext } from 'react';
// import { DentalClinicContext } from '../../context/Context';

// const PatientList = () => {
//   const { patients } = useContext(DentalClinicContext);

//   return (
//     <div>
//       <h2>Patients</h2>
//       <ul>
//         {patients.map((patient, index) => (
//           <li key={index}>{patient.name}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default PatientList;



const Data  =  [
  {
    "FullName": "Zeferu Hagos",
    "Location": "Mekelle",
    "Age": "20",
    
  },
  {
    "tagname": "Manner",
    "wordname": "Angrily",
    "wordMeaning": "In an angry manner",
    "example": "He shouted angrily at the other driver."
  },

]

 
  
  const PatientList = () => {
    return (
      <div>
      {
        Data.map((verb, index) => (

          <div key={index} >

              <h1>FullName</h1>{verb.FullName}
              <h1>Location</h1>{verb.Location}
              <h1>Age</h1>{verb.Age}
            
            
          </div>
      
        ))}
      
     
      </div>
    )
  }
  
  export default PatientList
  