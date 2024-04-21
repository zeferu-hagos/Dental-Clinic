
import './App.css';
import Footer from './component/footer/Footer';
import Header from './component/headers/Header';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';
import Services from './pages/services/Services';


import { DentalClinicProvider } from './context/Context';
import AppointmentForm from './component/appointmentForm/AppointmentForm';
 import PatientList from './component/patientList/PatientList';
import PatientForm from './pages/patientForms/PatientForm';
import { BrowserRouter as Router,Routes, Route, } from 'react-router-dom';
import Home from './pages/home/Home';
function App() {
  return (

<DentalClinicProvider>
      <div className="App">
        <Router>
          <Header /> 
          <div>
          <div>
        {/* <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
                  </li>
                  <li>
              <Link to="/services">Services</Link>
                  </li>
                  <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
              </nav> */}
              <Routes>
                
                <Route path="/about" component={About} />                
                <Route path="/services" Component={Services} />
                <Route path="/home" Component={Home}/>
                <Route path="/contact" Component={Contact} />
                <Route path="/patientForm" Component={PatientForm} />
                <Route path="/appointmentForm" Component={AppointmentForm} />
                <Route path="/patientList" Component={PatientList} />
              </Routes>
        
      </div>
            </div>
          <Footer />
          </Router>
      </div>
      
</DentalClinicProvider>
  );
}

export default App;
