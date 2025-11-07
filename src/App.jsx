import React, { useState } from 'react';
import Dashboard, { OtherPageContent } from './Components/Dashboard';
import Sidebar from './Components/Sidebar';
import { FiSearch, FiBell, FiUser } from 'react-icons/fi';

function App() {
    // Sidebar navigation (main section)
    const [currentPage, setCurrentPage] = useState('Home');

    // Top tab navigation (TV Series, Movies, etc.)
    const [activeContentTab, setActiveContentTab] = useState('TV Series');

    // ✅ New: Controls visibility of the sidebar search bar
    const [isSearchVisible, setIsSearchVisible] = useState(false);

    // Toggle sidebar search bar when top bar search icon is clicked
    const handleSearchToggle = () => setIsSearchVisible((prev) => !prev);

    // Conditional rendering for main section
    const renderMainContent = () => {
        switch (currentPage) {
            case 'Home':
                return (
                    <Dashboard
                        activeTab={activeContentTab}
                        setActiveTab={setActiveContentTab}
                        isSearchVisible={isSearchVisible} // ✅ pass search visibility
                    />
                );
            case 'Discovery':
                return <OtherPageContent key="Discovery" title="Discovery" isMainPage />;
            case 'Community':
                return <OtherPageContent key="Community" title="Community" isMainPage />;
            case 'Coming soon':
                return <OtherPageContent key="Coming soon" title="Coming Soon" isMainPage />;
            case 'Settings':
                return <OtherPageContent key="Settings" title="Settings" isMainPage />;
            case 'Log Out':
                return <OtherPageContent key="Log Out" title="Log Out" isMainPage />;
            default:
                return <OtherPageContent key={currentPage} title={currentPage} isMainPage />;
        }
    };

    return (
        <div className="flex min-h-screen bg-gray-900 text-white">
            {/* 1. Sidebar (fixed left) */}
            <Sidebar
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                activeTab={activeContentTab}
                setActiveTab={setActiveContentTab}
            />

            {/* 2. Main area (with top bar + dashboard content) */}
            <div
                className={`flex-1 bg-gray-900 transition-all duration-300 h-full min-h-screen 
                    pt-16 ml-64 px-8 pb-8`}
            >
                {/* --- ✅ Top Bar Section --- */}
                <header className="fixed top-0 left-64 right-0 bg-gray-800 border-b border-gray-700 z-20 flex items-center justify-between px-8 py-4 shadow-md">
                    {/* Left side: Title or current tab */}
                    <h1 className="text-2xl font-bold tracking-wide">
                        {currentPage === 'Home' ? activeContentTab : currentPage}
                    </h1>

                    {/* Right side: Icons */}
                    <div className="flex items-center space-x-6">
                        {/* 🔍 Search Icon toggles sidebar search bar */}
                        <button
                            onClick={handleSearchToggle}
                            className="text-gray-300 hover:text-white transition"
                            title="Toggle Search"
                        >
                            <FiSearch className="w-6 h-6" />
                        </button>

                        <button className="text-gray-300 hover:text-white transition" title="Notifications">
                            <FiBell className="w-6 h-6" />
                        </button>

                        <button className="text-gray-300 hover:text-white transition" title="Profile">
                            <FiUser className="w-6 h-6" />
                        </button>
                    </div>
                </header>

                {/* --- Main Content (Dashboard or other pages) --- */}
                {renderMainContent()}
            </div>
        </div>
    );
}

export default App;
