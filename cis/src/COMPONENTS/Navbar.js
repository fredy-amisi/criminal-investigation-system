import React, { useState } from "react";
import { Link } from "react-router-dom";
import '../Css/styling.css';
import { FaBell, FaSignOutAlt, FaQuestionCircle, FaCog, FaHome, FaDatabase, FaSearch, FaChartBar, FaFileAlt } from "react-icons/fa";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

 

  return (
    <header>
      <nav>
        <div className="menu-icon" onClick={toggleMenu}>
          <div className={isMenuOpen ? "bar1 change" : "bar1"}></div>
          <div className={isMenuOpen ? "bar2 change" : "bar2"}></div>
          <div className={isMenuOpen ? "bar3 change" : "bar3"}></div>
        </div>
        <ul className={isMenuOpen ? "nav-links show" : "nav-links"}>
          <li><Link to="/Index"><FaHome /><span>Home</span></Link></li>
          <li><Link to="/CrimeInvestigation"><FaDatabase /><span>Crime Records</span></Link></li>
          <li><Link to="/suspects"><FaSearch /><span>Suspects</span></Link></li>
          <li><Link to="/data-collection"><FaDatabase /><span>Data Collection</span></Link></li>
          <li><Link to="/analysis"><FaChartBar /><span>Analysis</span></Link></li>
          <li><Link to="/reports"><FaFileAlt /><span>Reports</span></Link></li>
          <li><Link to="/notifications"><FaBell /><span>Notifications</span></Link></li>
          <li><Link to="/settings"><FaCog /><span>Settings</span></Link></li>
          <li><Link to="/help"><FaQuestionCircle /><span>Help</span></Link></li>
          <li><Link to="/logout"><FaSignOutAlt /><span>Logout</span></Link></li>
        </ul>
      </nav>
      
    </header>
  );
};

export default Navbar;
