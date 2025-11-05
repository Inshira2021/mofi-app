// src/Components/Sidebar.jsx

import React from 'react';
import { 
    FiHome, FiUsers, FiSearch, FiClock, FiUser, 
    FiGift, FiMusic, FiSettings, FiLogOut 
} from 'react-icons/fi';

// Accept currentPage and setCurrentPage as props
const Sidebar = ({ currentPage, setCurrentPage }) => {
  // Update menu items to use their name as the navigation target
  const menuItems = [
    { name: 'Home', icon: FiHome },
    { name: 'Community', icon: FiUsers },
    { name: 'Discovery', icon: FiSearch },
    { name: 'Coming soon', icon: FiClock },
  ];

  const socialItems = [
    { name: 'Friends', icon: FiUser },
    { name: 'Parties', icon: FiGift },
    { name: 'Media', icon: FiMusic },
  ];

  const generalItems = [
    { name: 'Setting', icon: FiSettings },
    { name: 'Log Out', icon: FiLogOut },
  ];

  const renderNavSection = (title, items) => (
    <div className="mb-8">
      <h3 className="text-gray-500 text-xs uppercase font-semibold mb-3 tracking-widest">
        {title}
      </h3>
      <nav>
        {items.map((item) => {
             // Check if the current item is the active page
             const isActive = item.name === currentPage || (item.name === 'Home' && currentPage === 'Home');

             return (
               <a
                 key={item.name}
                 href="#"
                 // Set the new current page when clicked
                 onClick={(e) => { e.preventDefault(); setCurrentPage(item.name); }}
                 className={`
                    flex items-center space-x-3 p-3 rounded-xl transition-colors duration-200
                    ${isActive
                      ? 'bg-red-600 text-white font-medium relative' 
                      : 'text-gray-400 hover:text-white hover:bg-gray-700'
                    }
                  `}
               >
                 {/* The active indicator bar on the right */}
                 {isActive && (
                    <span className="absolute right-0 w-1 h-8 bg-red-600 rounded-l-lg"></span>
                 )}
                 
                 <item.icon className="w-5 h-5" />
                 <span>{item.name}</span>
               </a>
             );
           })}
      </nav>
    </div>
  );

  return (
    <div className="w-64 bg-gray-800 flex flex-col p-6 min-h-screen">
      
      {/* --- Logo/Brand --- */}
      <div className="flex items-center text-xl font-bold mb-10 text-white">
        <span className="text-white tracking-wider">Mo</span> 
        <span className="text-red-400 tracking-wider">fi</span>
      </div>

      {/* --- MENU Section --- */}
      {renderNavSection('MENU', menuItems)}

      {/* --- SOCIAL Section --- */}
      {renderNavSection('SOCIAL', socialItems)}

      {/* --- GENERAL Section --- */}
      {renderNavSection('GENERAL', generalItems)}
    </div>
  );
};

export default Sidebar;