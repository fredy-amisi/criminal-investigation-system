import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './index.css';
import Navbar from './COMPONENTS/Navbar';
import Footer from './COMPONENTS/Footer ';
import Signup from './Pages/Signup';
import CrimeInvestigation from './Pages/CrimeInvestigation';
import Index from './Pages/Index';
import Login from './Pages/Login ';
import AdminDashboard from './Pages/AdminDashboard ';

export default function App(){

  return(

    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Index/>} />
      <Route path="Index" element={<Index/>} />
      <Route path="Login" element={<Login/>} />
      <Route path="Signup" element={<Signup/>} />
      <Route path="CrimeInvestigation" element={<CrimeInvestigation/>} />
      <Route path="AdminDashboard/*" element={<AdminDashboard/>} />


    </Routes>
    <Footer/>
    </BrowserRouter>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);

