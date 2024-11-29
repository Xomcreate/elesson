import React, { useState } from 'react';
import { MdDashboard } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import Details from '../DashboardmenuComponets/Details';
import Profile from '../DashboardmenuComponets/Profile';
import Log from '../DashboardmenuComponets/Log';
import Welcome from '../DashboardmenuComponets/Welcome';

function User() {
  const [activeSection, setActiveSection] = useState(''); // Default: no section is active
  const navigate = useNavigate();

  const handleLogout = () => {
    console.log('User logged out'); // You can also clear session storage or cookies here
    navigate('/'); // Redirect to the Logout component
  };

  return (
    <div className="grid min-h-[100vh] w-full grid-cols-8">
      {/* Sidebar */}
      <div className="col-span-2 bg-[#b8b6b6] grid grid-rows-4 " >
        <div className="row-span-3 grid-rows-5 grid ">
          {/* Dashboard Header */}
          <div className="row-span-1 flex justify-center border border-b-black items-center hover:text-[orangered] text-[black] font-serif text-[25px] ">
            <MdDashboard className="text-30px text-[orangered] font-bold" />
            Dashboard
          </div>

          {/* Sidebar Options */}
          <div
            className="row-span-1 flex justify-center items-center cursor-pointer border-b-black border"
            
            onClick={() => setActiveSection('details')} // Show Details on click
          >
            <h1 className="hover:text-[orangered] text-[black]  font-bold text-[20px] ">Profile</h1>
          </div>
          <div
            className="row-span-1 flex justify-center items-center cursor-pointer  border-b-black border"
          
            onClick={() => setActiveSection('login')} // Show Log on click
          >
            <h1 className="hover:text-[orangered] text-[black] font-bold text-[20px]">CBT Results</h1>
          </div>
          <div
            className="row-span-1 flex justify-center items-center cursor-pointer border-b-black border"
            onClick={() => setActiveSection('profile')} // Show Profile on click
          >
            <h1 className="hover:text-[orangered] text-[black] font-bold text-[20px]">Edit Details</h1>
          </div>
        </div>
        {/* Logout Button */}
        <div
          className="row-span-1 flex justify-center items-center cursor-pointer"
          onClick={handleLogout}
        >
          <h1 className="text-[black] text-[20px] ">Logout</h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="col-span-6 bg-slate-900">
        {/* Conditionally render based on activeSection */}
        {activeSection === 'details' && <Details />}
        {activeSection === 'login' && <Log />}
        {activeSection === 'profile' && <Profile />}
        {activeSection === '' && (
          <div >
            <Welcome/>
          </div>
        )}
      </div>
    </div>
  );
}

export default User;
