import React from "react";
import Sidebar from "./components/Sidebar";
import Profile from "./components/Profile";
import { UserProfileProvider } from "./context/UserProfileContext";
import "./styles/global.css";

const App: React.FC = () => {
  return (
    <UserProfileProvider>
      <div className="app">
        <Sidebar />
        <div className="content">
          <h2>My Amazon Account</h2>
          <p className='subtext'>Welcome to Amazon Account</p>  
          <li className="side-profile">
            <img src="/profile1.jpg" alt="profile" />
            <h3>Hello Sahil &#9662;</h3>
          </li>
          <div className="grid">
            <Profile />
          </div>
        </div>
      </div>
    </UserProfileProvider>
  );
};

export default App;
