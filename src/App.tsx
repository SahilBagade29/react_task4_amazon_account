import React from "react";
import Sidebar from "./components/Sidebar";
import Profile from "./components/Profile";
import "./styles/global.css";

const App: React.FC = () => {
  const userProfile = {
    name: "Sahil Bagade",
    phone: "+314-987-4567",
    email: "sahil@gmail.com",
    activeAccount: "23x-456X-7896",
    blockedAccount: "556-456X-7896",
    orders: [
      { item: "Linen-spa 8 Inch Memory Foam and Spring", date: "Delivered 8/22/2018" },
      { item: "Adidas Falcons Shoes", date: "Delivered 6/11/2018" },
    ],
  };

  return (
    <div className="app">
      <Sidebar />
      <div className="content">
          <h2>My Amazon Account</h2>
          <p className='subtext'>Welcome to Amazon Account</p>  
          <li className="side-profile">
          <img src="/profile1.jpg" alt="profile"  />
          <h3>Hello Sahil &#9662;</h3></li>
        <div className="grid">
          <Profile {...userProfile} />
        </div>
      </div>
    </div>
  );
};

export default App;
