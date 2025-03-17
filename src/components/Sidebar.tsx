import React from "react";
import "../styles/Sidebar.css";
import { FaShoppingCart, FaUndo, FaUser, FaCheckCircle, FaEye, FaThumbsUp, FaFingerprint, FaMapMarkerAlt, FaHeart } from "react-icons/fa";

const Sidebar: React.FC = () => {
  return (
    <div className="navbar-container">
      <h2 className="navbar-title">My Dashboard</h2>
      <ul className="navbar-list">
        <li>{<FaShoppingCart className="icon" />} Payments</li><br />
        <li>{<FaUndo className="icon" />} Returns</li><br />
        <li>{<FaUser className="icon" />} Accounts</li><br />
        <li>{<FaCheckCircle className="icon" />} Coupons</li><br />
        <li>{<FaEye className="icon" />} Settings</li><br />
        <li>{<FaThumbsUp className="icon" />} Login</li><br />
        <li>{<FaFingerprint className="icon" />} Security</li><br />
        <li>{<FaMapMarkerAlt className="icon" />} Track orders</li><br />
        <li>{<FaHeart className="icon" />} Prime Account</li><br />
      </ul>
    </div>
  );
};

export default Sidebar;
