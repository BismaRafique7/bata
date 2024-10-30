import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import AboutUs from './Pages/AboutUs';
import ContactUs from './Pages/ContactUs';

// import Kids from './Pages/Kids';
// import Men from './Pages/Men';
// import Women from './Pages/Women';
// import Peshwari from './Pages/KPeshwari';
// import Sandals from './Pages/KSandals';
// import School from './Pages/KSchool';
// import Sneakers from './Pages/KSneakers';
// import MFormal from './Pages/MFormal';
// import Mloungewear from './Pages/Mloungewear';
// import MSandels from './Pages/MSandels';
// import MSenekers from './Pages/MSenekers';
// import WFormal from './Pages/WFormal';
// import Wloungewear from './Pages/Wloungewear';
// import WSandals from './Pages/WSandals';
// import WSneakers from './Pages/WSneakers';
// import Login from './Pages/Login';         // Import the Login component
// import Register from './Pages/Register';   // Import the Register component
import Section from './Component/Section';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/Section" element={<Section />}  />
       
         {/* <Route path="/Kids" element={<Kids />} />
        <Route path="/Men" element={<Men />} />
        <Route path="/Women" element={<Women />} />

        <Route path="/Peshwari" element={<Peshwari />} />
        <Route path="/Sandals" element={<Sandals />} />
        <Route path="/School" element={<School />} />
        <Route path="/Sneakers" element={<Sneakers />} />

        <Route path="/MFormal" element={<MFormal />} />
        <Route path="/Mloungewear" element={<Mloungewear />} />
        <Route path="/MSandels" element={<MSandels />} />
        <Route path="/MSenekers" element={<MSenekers />} />

        <Route path="/WFormal" element={<WFormal />} />
        <Route path="/Wloungewear" element={<Wloungewear />} />
        <Route path="/WSandals" element={<WSandals />} />
        <Route path="/WSneakers" element={<WSneakers />} />

    

        // {/* Add Login and Register routes */}
         {/* <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />   */} 
      </Routes>
    </Router>
  );
}

export default App;