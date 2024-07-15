import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../Css/Suspects.css";

const Suspects = () => {
    const [suspects, setSuspects] = useState([]);

    useEffect(() => {
        fetchSuspects();
    }, []);

    const fetchSuspects = async () => {
        try {
            const response = await axios.get("http://localhost/Abi/suspects.php");
            setSuspects(response.data);
        } catch (error) {
            console.error("Error fetching suspects:", error);
        }
    };

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost/api/suspects/${id}`);
            // Refresh suspects list after deletion
            fetchSuspects();
            alert("Suspect deleted successfully!");
        } catch (error) {
            console.error("Error deleting suspect:", error);
            alert("Error deleting suspect: " + error.message);
        }
    };

    return (
        <div className="suspects-container">
            <h1>Suspects</h1>
            <table className="suspects-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Gender</th>
                        <th>Address</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {suspects.map((suspect) => (
                        <tr key={suspect.id}>
                            <td>{suspect.id}</td>
                            <td>{suspect.name}</td>
                            <td>{suspect.age}</td>
                            <td>{suspect.gender}</td>
                            <td>{suspect.address}</td>
                            <td>
                                <Link to={`/suspects/${suspect.id}/details`} className="details-link">Details</Link>
                                <button onClick={() => handleDelete(suspect.id)} className="delete-btn">Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Suspects;
