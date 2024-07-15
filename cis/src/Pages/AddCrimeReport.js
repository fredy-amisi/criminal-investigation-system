import React, { useState } from 'react';
import axios from 'axios';
import '../Css/AddCrimeReport.css';

const AddCrimeReport = () => {
    const [crimeDetails, setCrimeDetails] = useState({
        crimeType: '',
        location: '',
        date: '',
        description: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCrimeDetails(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost/Abi/addCrimeReport.php', crimeDetails);
            console.log('Crime report added successfully:', response.data);
            // Optionally, handle success UI or navigation
            alert('Crime report added successfully!');
            // Clear the form after submission
            setCrimeDetails({
                crimeType: '',
                location: '',
                date: '',
                description: ''
            });
        } catch (error) {
            console.error('Error adding crime report:', error);
            // Optionally, handle error UI or show error message
            alert('Error adding crime report: ' + error.message);
        }
    };

    return (
        <div className="add-crime-report">
            <h2>Add Crime Report</h2>
            <form onSubmit={handleSubmit}>
                <label>Crime Type:</label>
                <input 
                    type="text" 
                    name="crimeType" 
                    value={crimeDetails.crimeType} 
                    onChange={handleChange} 
                    required 
                />

                <label>Location:</label>
                <input 
                    type="text" 
                    name="location" 
                    value={crimeDetails.location} 
                    onChange={handleChange} 
                    required 
                />

                <label>Date:</label>
                <input 
                    type="date" 
                    name="date" 
                    value={crimeDetails.date} 
                    onChange={handleChange} 
                    required 
                />

                <label>Description:</label>
                <textarea 
                    name="description" 
                    value={crimeDetails.description} 
                    onChange={handleChange} 
                    required 
                ></textarea>

                <button id="a-ssubmit" type="submit">Submit Report</button>
            </form>
        </div>
    );
};

export default AddCrimeReport;
