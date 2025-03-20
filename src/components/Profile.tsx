import React from "react";
import { useUserProfile } from "../context/UserProfileContext";
import "../styles/Profile.css";

const Profile: React.FC = () => {
  const { name, phone, email, activeAccount, blockedAccount, orders } = useUserProfile();

  return (
    <div className="container">
      <div className="full-card">
        <img src="/profile1.jpg" alt="Profile" className="profile-pic" />
        <div className="profile-info">
          <h1>My Profile</h1>
          <h3>{name} <span className="space">{phone}</span></h3><hr />
          <p className='phone'>{email}</p><hr />
          <div className="notification">
            <label>SMS Alert Notification</label>
            <span className="close">✖</span>
          </div>
          <button className="btn save">Save</button>
        </div>
      </div>

      <div className="half-cards">
        <div className="half-card">
          <div className="search-container">
            <h4>My Recent Accounts</h4>
            <div className="search-box">
              <input type="text" placeholder="Search..." />
              <button className="search-button">🔍</button>
            </div>
          </div>
          <hr />
          <div className="account">
            <p>Active Account</p>
            <p className="subtext">{activeAccount}</p>
            <button className="btn block">Block Account</button>
          </div>
          <div className="account">
            <p>Blocked Account</p><br />
            <p className="subtext">{blockedAccount}</p>
            <button className="btn unblock">Unblock Account</button>
          </div>
        </div>

        <div className="half-card">
          <h4>My Orders</h4>
          <hr />
          {orders.map((order, index) => (
            <div key={index} className="order">
              <p>{order.item}</p>
              <p>{order.date}</p>
              <button className="btn order">Order Again</button>
            </div>
          ))}
          <a href="/" className="archive">Archive Orders &#9013;</a>
        </div>
      </div>
    </div>
  );
};

export default Profile;
