import React, { useState } from 'react';
import { Search, Settings, Bell, MessageCircle, User, ChevronDown } from 'lucide-react';
import { personalInfo } from '../data/mockData';

const ServiceNowHeader = ({ onSearchCommand, onToggleNav, onOpenVirtualAgent }) => {
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
      <nav className="hidden lg:flex ml-8 gap-6">
        <button 
          onClick={onToggleNav} 
          className="text-white/80 hover:text-white text-sm"
        >
          All
        </button>
        <a href="#" className="text-white/80 hover:text-white text-sm">Favorites</a>
        <a href="#" className="text-white/80 hover:text-white text-sm">History</a>
        <a href="#" className="text-white/80 hover:text-white text-sm">Workspaces</a>
        <a href="#" className="text-white/80 hover:text-white text-sm">Admin</a>
      </nav>

      {/* Center Instance Badge - Hidden on small screens */}
      <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2">
        <div className="bg-[#0f3a5f] border border-white/20 px-2 sm:px-4 py-1 rounded-full flex items-center gap-1 sm:gap-2">
          <span className="text-xs">ServiceNow</span>
          <span className="text-xs">⭐</span>
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
        
        <button 
          onClick={onOpenVirtualAgent}
          className="p-1 sm:p-2 hover:bg-white/10 rounded relative"
          title="Open Virtual Agent"
        >
          <MessageCircle className="w-3 h-3 sm:w-4 sm:h-4" />
          <span className="absolute -top-1 -right-1 w-2 h-2 sm:w-3 sm:h-3 bg-red-500 rounded-full text-xs flex items-center justify-center text-white">
            1
          </span>
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