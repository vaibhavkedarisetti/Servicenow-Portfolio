import React, { useState } from 'react';
import { Search, Settings, Bell, MessageCircle, User, ChevronDown } from 'lucide-react';
import { personalInfo } from '../data/mockData';

const ServiceNowHeader = ({ onSearchCommand, onToggleNav, onOpenVirtualAgent, onHeaderNavigate, currentView }) => {
  const [searchValue, setSearchValue] = useState('');

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchValue.trim()) {
      onSearchCommand(searchValue);
      setSearchValue('');
    }
  };

  return (
    <header className="bg-black text-white h-16 flex items-center px-2 sm:px-4 relative z-50">
      {/* ServiceNow Logo and Nav Toggle */}
      <div className="flex items-center gap-2 sm:gap-4">
        <button 
          onClick={onToggleNav}
          className="text-white hover:bg-white/10 p-1 sm:p-2 rounded"
        >
          <div className="w-4 h-4 sm:w-5 sm:h-5 flex flex-col justify-center gap-1">
            <div className="w-full h-0.5 bg-white"></div>
            <div className="w-full h-0.5 bg-white"></div>
            <div className="w-full h-0.5 bg-white"></div>
          </div>
        </button>
        
        <button 
          onClick={() => window.location.reload()}
          className="flex items-center gap-1 sm:gap-2 hover:bg-white/10 p-1 sm:p-2 rounded"
        >
          <img 
            src={`${process.env.PUBLIC_URL}/logo.svg`} 
            alt="Logo" 
            className="h-6 sm:h-8 w-auto object-contain"
          />
        </button>
      </div>

      {/* Main Navigation - Hidden on mobile */}
            <nav className="hidden lg:flex items-center ml-4 gap-1 bg-black/20 p-1 rounded-lg">
        <button 
          onClick={onToggleNav} 
          className="px-3 py-1.5 text-base font-medium text-white/80 hover:bg-white/10 hover:text-white rounded-md transition-colors"
        >
          All
        </button>
        <button 
          onClick={() => onHeaderNavigate('history')} 
          className={`px-3 py-1.5 text-base font-medium rounded-md transition-colors ${currentView === 'u_experience' ? 'bg-white/10 text-white' : 'text-white/80 hover:bg-white/10 hover:text-white'}`}
        >
          History
        </button>
        <button 
          onClick={() => onHeaderNavigate('workspaces')} 
          className={`px-3 py-1.5 text-base font-medium rounded-md transition-colors ${currentView === 'u_projects_built' ? 'bg-white/10 text-white' : 'text-white/80 hover:bg-white/10 hover:text-white'}`}
        >
          Workspaces
        </button>
        <button 
          onClick={() => onHeaderNavigate('admin')} 
          className={`px-3 py-1.5 text-base font-medium rounded-md transition-colors ${currentView === 'sys_user_has_a_contact' ? 'bg-white/10 text-white' : 'text-white/80 hover:bg-white/10 hover:text-white'}`}
        >
          Admin
        </button>
      </nav>

      {/* Center Instance Badge - Hidden on small screens */}
      <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2">
        <div className="bg-[#0f3a5f] border border-white/20 px-2 sm:px-4 py-1 rounded-full flex items-center gap-1 sm:gap-2">
          <span className="text-base">ServiceNow</span>
          <svg className="w-3 h-3 text-yellow-400" fill="currentColor" aria-hidden="true" viewBox="0 0 16 16"><path d="M7.049 2.359c.3-.921 1.603-.921 1.902 0l1.183 3.64h3.827c.969 0 1.372 1.24.588 1.81l-3.096 2.249 1.182 3.64c.3.921-.755 1.687-1.539 1.118L8 12.566l-3.096 2.25c-.784.57-1.839-.197-1.54-1.118l1.183-3.64-3.096-2.25C.667 7.238 1.071 6 2.039 6h3.827zm.95.309L6.594 6.999H2.039l3.684 2.677-1.407 4.33L8 11.33l3.684 2.677-1.407-4.331 3.684-2.677H9.407z"></path></svg>
        </div>
      </div>

      {/* Right Side Controls */}
      <div className="ml-auto flex items-center gap-1 sm:gap-3">
        {/* Search Bar - Responsive width */}
        <form onSubmit={handleSearchSubmit} className="relative hidden md:flex">
          <div className="flex items-center bg-[#0f3a5f] border border-white/20 rounded">
            <Search className="w-3 h-3 sm:w-4 sm:h-4 text-white/60 ml-2 sm:ml-3" />
            <input
              type="text"
              placeholder="Search"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              className="bg-transparent text-white placeholder-white/60 px-2 sm:px-3 py-1 sm:py-2 text-xs sm:text-sm w-20 sm:w-48 focus:outline-none"
            />
          </div>
        </form>

        {/* Action Icons - Hide some on mobile */}
        <button className="hidden md:block p-2 hover:bg-white/10 rounded">
          <ChevronDown className="w-4 h-4" />
        </button>
        
        <button className="hidden md:block p-2 hover:bg-white/10 rounded">
          <Settings className="w-4 h-4" />
        </button>
        
        <button className="hidden md:block p-2 hover:bg-white/10 rounded">
          <Bell className="w-4 h-4" />
        </button>

        {/* User Profile - Smaller on mobile */}
        <div className="flex items-center gap-1 sm:gap-2 ml-1 sm:ml-2">
          <img 
            src={personalInfo.profileImage}
            alt={personalInfo.name}
            className="w-6 h-6 sm:w-8 sm:h-8 rounded-full border border-white/20"
          />
        </div>
      </div>
    </header>
  );
};

export default ServiceNowHeader;