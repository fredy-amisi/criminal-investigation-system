import React, { useState, useEffect } from 'react';
import { NavLink, Routes, Route } from 'react-router-dom';
import CrimeRecords from '../Pages/CrimeRecords'; 
import AddCrimeReport from './AddCrimeReport'; 
import axios from 'axios';
import '../Css/AdminDashboard.css';
import Suspects from './suspects';
import Users from './Users';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faFileAlt, faUsersCog, faPlus } from '@fortawesome/free-solid-svg-icons';

const AdminDashboard = () => {
    const [adminDetails, setAdminDetails] = useState({ name: '', image: '' });

    useEffect(() => {
        fetchAdminDetails();
    }, []);

    const fetchAdminDetails = async () => {
        try {
            const response = await axios.get('http://localhost/Abi/adminDetails');
            setAdminDetails(response.data); // Assuming response.data is { name: 'Admin_name', image: 'admin_image_url' }
        } catch (error) {
            console.error('Error fetching admin details:', error);
        }
    };

    return (
        <div className="admin_dashboard">
            <nav id="nav">
                <div className="adm_cont">
                    <h1>{adminDetails.name}</h1>
                    <div className="oval"></div>
                    <img className="t1" src={adminDetails.image} alt="Admin" />
                </div>
                <div className="dashb">
                    <h1>Admin Dashboard</h1>
                    <hr id="hr" />
                </div>
                <ul>
                    <li><NavLink to="Users" className={({ isActive }) => (isActive ? 'active' : '')}><FontAwesomeIcon  className="a-icons" icon={faUsers} /><span>Users</span></NavLink></li>
                    <li><NavLink to="CrimeRecords" className={({ isActive }) => (isActive ? 'active' : '')}><FontAwesomeIcon className="a-icons"  icon={faFileAlt} /><span>Crime Records</span></NavLink></li>
                    <li><NavLink to="suspects" className={({ isActive }) => (isActive ? 'active' : '')}><FontAwesomeIcon className="a-icons"  icon={faUsersCog} /><span>Suspects</span></NavLink></li>
                    <li><NavLink to="AddCrimeReport" className={({ isActive }) => (isActive ? 'active' : '')}><FontAwesomeIcon className="a-icons"  icon={faPlus} /><span>Add New Crime Report</span></NavLink></li>
                </ul>
            </nav>

            <div className="admin-content">
                <Routes>
                    <Route path="/" element={<Users />} />
                    <Route path="Users" element={<Users />} />
                    <Route path="CrimeRecords" element={<CrimeRecords />} />
                    <Route path="suspects" element={<Suspects />} />
                    <Route path="AddCrimeReport" element={<AddCrimeReport />} />
                </Routes>
            </div>
        </div>
    );
};

export default AdminDashboard;
