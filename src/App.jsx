import React, { useState } from 'react';
import Dashboard, { OtherPageContent } from './Components/Dashboard';
import Sidebar from './Components/Sidebar';

function App() {
    // Controls which main view is currently displayed (Sidebar navigation)
    const [currentPage, setCurrentPage] = useState('Home');
    // Controls which content tab is active (Top bar navigation: TV Series/Movies/Animes)
    const [activeContentTab, setActiveContentTab] = useState('TV Series');

    // Conditional rendering of the main content
    const renderMainContent = () => {
        // Pass activeContentTab and its setter to Dashboard
        switch (currentPage) {
            case 'Home':
                return <Dashboard activeTab={activeContentTab} setActiveTab={setActiveContentTab} />;
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
                // For nested pages like Friends, Parties, Media, use a generic page
                return <OtherPageContent key={currentPage} title={currentPage} isMainPage />;
        }
    };

    return (
        <div className="flex min-h-screen bg-gray-900 text-white">
            {/* 1. Sidebar component (fixed at the left) */}
            <Sidebar 
                currentPage={currentPage} 
                setCurrentPage={setCurrentPage} 
                activeTab={activeContentTab} 
                setActiveTab={setActiveContentTab} 
            />

            {/* 2. Main content area container */}
            <div 
                className={`flex-1 bg-gray-900 transition-all duration-300 h-full min-h-screen
                            pt-16 // Margin top for the fixed header
                            ml-64 // Margin left for the open sidebar
                            px-8 pb-8 // <<< THE PADDING FIX: Consistent horizontal and bottom padding
                        `}
            >
                {/* Content will now be rendered inside the padded area */}
                {renderMainContent()}
            </div>
        </div>
    );
}

export default App;