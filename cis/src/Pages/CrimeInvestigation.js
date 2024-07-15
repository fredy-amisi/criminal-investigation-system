import React, { useEffect, useState } from "react";
import axios from "axios";
import "../Css/CrimeInvestigation.css"; // Updated CSS file name
import { useNavigate } from "react-router-dom";
import Scrollbutton from "../COMPONENTS/Scrollbutton ";

const CrimeInvestigation = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/Booking');
  }

  const [investigationItems, setInvestigationItems] = useState([]);

  useEffect(() => {
    const fetchInvestigationItems = async () => {
      try {
        const response = await axios.get("http://localhost/CrimeInvestigation/getInvestigationItems.php"); // Adjusted API endpoint
        setInvestigationItems(response.data);
      } catch (error) {
        console.error("Error fetching investigation items:", error);
      }
    };

    fetchInvestigationItems();
  }, []);

  return (
    <div>
      <div className="crime-investigation-section"> {/* Updated class name */}
        <div className="vertical-crime-investigation"></div> {/* Updated class name */}
        <h1>
          MOST WANTED<span> INVESTIGATION</span> <br />
          ITEMS
        </h1>
        <div className="crime-investigation-container"> {/* Updated class name */}
          {investigationItems.map((item) => (
            <div className="crime-investigation-item" key={item.id}> {/* Updated class name */}
              <img src={`http://localhost/CrimeInvestigation/${item.item_image}`} alt={item.item_name} className="cii-images" /> {/* Updated class name */}
              <h3>{item.item_name}</h3>
              <p>{item.description}</p>
              <button className="b-appointment" onClick={handleClick}>View Details</button>
            </div>
          ))}
        </div>
      </div>
      <Scrollbutton />
    </div>
  );
};

export default CrimeInvestigation;
