// Components/Sidebar.jsx

import React, { useState } from 'react';
import {
    FiHome, FiUsers, FiSearch, FiClock, FiUser,
    FiGift, FiMusic, FiSettings, FiMenu, FiBell
} from 'react-icons/fi';
import ProfileDropdown from './ProfileDropdown';

const Sidebar = ({
    currentPage, setCurrentPage, activeTab, setActiveTab, onToggleSidebar,
    isLoggedIn, onOpenAuthModal, isProfileDropdownOpen, onToggleProfileDropdown, onLogout
}) => {
    const [isOpen, setIsOpen] = useState(true);
    const [showTopSearchBar, setShowTopSearchBar] = useState(false);

    const toggleSidebar = () => {
        const newState = !isOpen;
        setIsOpen(newState);
        onToggleSidebar(newState);
    };

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
        { name: 'Settings', icon: FiSettings },
    ];

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
            {/* TOP BAR */}
            <div className="bg-gray-800 text-white flex items-center justify-between px-6 py-3 fixed top-0 left-0 right-0 z-40 h-16">
                {/* Left: Menu + Logo */}
                <div className="flex items-center">
                    <button onClick={toggleSidebar} className="mr-4 hover:text-red-500">
                        <FiMenu className="w-6 h-6" />
                    </button>
                    <span className="text-2xl font-extrabold">
                        <span className="text-white">MO</span>
                        <span className="text-red-600">FI</span>
                    </span>
                </div>

                {/* Center: Tabs */}
                <div className="flex space-x-8 text-lg font-medium">
                    {['TV Series', 'Movies', 'Animes'].map(tab => (
                        <button
                            key={tab}
                            onClick={() => {
                                setCurrentPage(tab); // go to that page
                                setActiveTab(tab);
                            }}
                            className={`pb-1 transition ${currentPage === tab
                                ? 'text-red-600 border-b-2 border-red-600'
                                : 'text-gray-400 hover:text-white'
                            }`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                {/* Right: Icons / Auth */}
                <div className="flex items-center space-x-6 relative">
                    <FiSearch
                        className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer"
                        onClick={() => setShowTopSearchBar(prev => !prev)}
                    />
                    {showTopSearchBar && (
                        <input
                            type="text"
                            placeholder="Search movies..."
                            className="absolute right-0 top-12 bg-gray-700 text-white rounded-lg px-4 py-2 w-64 border border-gray-600 focus:ring-1 focus:ring-red-600"
                            autoFocus
                        />
                    )}
                    <FiBell className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer" />

                    <div className="relative">
                        {!isLoggedIn ? (
                            <button
                                onClick={onOpenAuthModal}
                                className="bg-red-600 hover:bg-red-700 text-white font-semibold py-1 px-4 rounded-full"
                            >
                                Sign In
                            </button>
                        ) : (
                            <>
                                <button
                                    onClick={onToggleProfileDropdown}
                                    className="block rounded-full overflow-hidden w-9 h-9 border-2 hover:border-red-600"
                                >
                                    <FiUser className="w-full h-full p-1 bg-gray-700" />
                                </button>
                                {isProfileDropdownOpen && (
                                    <ProfileDropdown
                                        handleLogout={onLogout}
                                        setCurrentPage={setCurrentPage}
                                        onClose={onToggleProfileDropdown}
                                    />
                                )}
                            </>
                        )}
                    </div>
                </div>
            </div>

            {/* SIDEBAR */}
            <div
                className={`bg-gray-800 text-white flex flex-col p-6 h-screen w-64
                fixed top-0 left-0 z-30 transition-transform duration-300 ease-in-out
                pt-20 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
            >
                {renderNavSection('MENU', menuItems)}
                {renderNavSection('SOCIAL', socialItems)}
                {renderNavSection('GENERAL', generalItems)}
            </div>
        </>
    );
};

export default Sidebar;
