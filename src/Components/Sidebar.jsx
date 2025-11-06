// src/Components/Sidebar.jsx (FIXED)
import React, { useState } from 'react';
import { 
    FiHome, FiUsers, FiSearch, FiClock, FiUser, 
    FiGift, FiMusic, FiSettings, FiLogOut, FiMenu, FiBell
} from 'react-icons/fi';

const Sidebar = ({ currentPage, setCurrentPage, activeTab, setActiveTab }) => {
    const [isOpen, setIsOpen] = useState(true);

    // ... (menuItems, socialItems, generalItems definitions remain the same) ...
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
    // ... (renderNavSection function remains the same) ...
    const renderNavSection = (title, items) => (
        <div className="mb-8">
            <h3 className="text-gray-500 text-xs uppercase font-semibold mb-3 tracking-widest">
                {title}
            </h3>
            <nav>
                {items.map((item) => {
                    const isActive = item.name === currentPage;
                    return (
                        <a
                            key={item.name}
                            href="#"
                            onClick={(e) => { e.preventDefault(); setCurrentPage(item.name); }}
                            className={`flex items-center space-x-3 p-3 rounded-xl transition-colors duration-200 relative
                                ${isActive
                                    ? 'bg-red-600 text-white font-medium'
                                    : 'text-gray-400 hover:text-white hover:bg-gray-700'}
                            `}
                        >
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
        <>
            {/* --- Top bar: Fixed Header (h-16) --- */}
            <div className="bg-gray-900 text-white flex items-center justify-between px-6 py-3 fixed top-0 left-0 right-0 z-40 h-16">
                
                {/* Left Side: Logo and Hamburger */}
                <div className="flex items-center">
                    <button 
                        onClick={() => setIsOpen(!isOpen)} 
                        className="mr-6 focus:outline-none hover:text-red-500 transition-colors"
                    >
                        <FiMenu className="w-6 h-6" />
                    </button>
                    <span className="text-xl font-bold mr-10">
                        <span className="text-white tracking-wider">Mo</span>
                        <span className="text-red-400 tracking-wider">fi</span>
                    </span>
                </div>

                {/* Center: TV Series, Movies, Animes Tabs */}
                <div className="flex space-x-8 text-lg font-medium">
                    {['TV Series', 'Movies', 'Animes'].map(tab => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`pb-1 transition ${
                                tab === activeTab 
                                ? 'text-red-600 border-b-2 border-red-600' 
                                : 'text-gray-400 hover:text-white'
                            }`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                {/* Right Side: Search, Notifications, User Icons */}
                <div className="flex items-center space-x-6">
                    <FiSearch className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer" />
                    <FiBell className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer" />
                    <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center cursor-pointer hover:bg-red-600 transition">
                        <FiUser className="w-4 h-4 text-white" />
                    </div>
                </div>
            </div>

            {/* --- Sidebar (Fixed Left Navigation) --- */}
            {/* Added left-0 to fix position */}
            <div
                className={`bg-gray-800 text-white flex flex-col p-6 h-screen w-64
                fixed top-0 left-0 z-30 transition-transform duration-300 ease-in-out
                pt-16 // Starts below the fixed top bar
                ${isOpen ? 'translate-x-0' : '-translate-x-full'}
            `}
            >
                {renderNavSection('MENU', menuItems)}
                {renderNavSection('SOCIAL', socialItems)}
                {renderNavSection('GENERAL', generalItems)}
            </div>
            
            {/* REMOVED: The two spacer divs. Spacing is now handled in App.jsx */}
        </>
    );
};

export default Sidebar;