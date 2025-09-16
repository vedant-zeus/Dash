import React from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import RightSidebar from './components/RightSidebar';

function Dashboard() {
  return (
    <div className="min-h-screen bg-[#E0E1DD]">
      <Header />
      <div className="flex">
        <Sidebar />
        <MainContent />
        <RightSidebar />
      </div>
    </div>
  );
}

export default Dashboard;