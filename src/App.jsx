// src/App.jsx

import React, { useState } from 'react';
import Sidebar from './Components/Sidebar';
import Dashboard from './Components/Dashboard';
// Import new placeholder components (or just use OtherPageContent from Dashboard)
import { OtherPageContent } from './Components/Dashboard'; 

function App() {
  // Central State: Controls which main view is currently displayed (e.g., 'Home', 'Discovery', 'Community')
  const [currentPage, setCurrentPage] = useState('Home');

  // Conditional Rendering based on the currentPage state
  const renderMainContent = () => {
    switch (currentPage) {
      case 'Home':
        // The Dashboard component now controls the TV Series/Movies/Animes tabs internally
        return <Dashboard />;
      case 'Discovery':
        // Use the placeholder component for other main views
        return <OtherPageContent key="Discovery" title="Discovery" isMainPage={true} />; 
      case 'Community':
        return <OtherPageContent key="Community" title="Community" isMainPage={true} />;
      case 'Coming soon':
        return <OtherPageContent key="Coming soon" title="Coming Soon" isMainPage={true} />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-900 text-white">
      {/* 1. Pass the currentPage and the setter to Sidebar */}
      <Sidebar currentPage={currentPage} setCurrentPage={setCurrentPage} />

      {/* 2. Render the conditionally chosen main content */}
      <div className="flex-1 bg-gray-900 p-8 overflow-y-auto">
        {renderMainContent()}
      </div>
    </div>
  );
}

export default App;