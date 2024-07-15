import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../Css/CrimeRecords.css";

const CrimeRecords = () => {
    const [crimeRecords, setCrimeRecords] = useState([]);

    useEffect(() => {
        fetchCrimeRecords();
    }, []);

    // Fetch crime records from API
    const fetchCrimeRecords = async () => {
        try {
            const response = await axios.get('http://localhost/Abi/crime-records.php');
            setCrimeRecords(response.data);
        } catch (error) {
            console.error('Error fetching crime records:', error);
        }
    };

    return (
        <div className="crime-records">
            <h1>Crime Records</h1>
            <table className="crime-table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Crime Type</th>
                        <th>Location</th>
                        <th>Date Reported</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {crimeRecords.map((record, index) => (
                        <tr key={record.id}>
                            <td>{index + 1}</td>
                            <td>{record.crime_type}</td>
                            <td>{record.location}</td>
                            <td>{record.date_reported}</td>
                            <td>{record.status}</td>
                            <td>
                                <Link to={`/crime-record/${record.id}/details`} className="details-link">Details</Link>
                                <button className="delete-btn">Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default CrimeRecords;
