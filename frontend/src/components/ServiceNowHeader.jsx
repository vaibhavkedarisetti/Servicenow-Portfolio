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
    <header className="bg-[#1a4d72] text-white h-16 flex items-center px-4 relative z-50">
      {/* ServiceNow Logo and Nav Toggle */}
      <div className="flex items-center gap-4">
        <button 
          onClick={onToggleNav}
          className="text-white hover:bg-white/10 p-2 rounded"
        >
          <div className="w-5 h-5 flex flex-col justify-center gap-1">
            <div className="w-full h-0.5 bg-white"></div>
            <div className="w-full h-0.5 bg-white"></div>
            <div className="w-full h-0.5 bg-white"></div>
          </div>
        </button>
        
        <button 
          onClick={() => window.location.href = '/'}
          className="flex items-center gap-2 hover:bg-white/10 p-2 rounded"
        >
          <div className="bg-white text-[#1a4d72] px-2 py-1 rounded text-sm font-bold">
            ServiceNow
          </div>
          <span className="text-sm">⭐</span>
        </button>
      </div>

      {/* Main Navigation */}
      <nav className="hidden md:flex ml-8 gap-6">
        <a href="#" className="text-white/80 hover:text-white text-sm">All</a>
        <a href="#" className="text-white/80 hover:text-white text-sm">Favorites</a>
        <a href="#" className="text-white/80 hover:text-white text-sm">History</a>
        <a href="#" className="text-white/80 hover:text-white text-sm">Workspaces</a>
        <a href="#" className="text-white/80 hover:text-white text-sm">Admin</a>
      </nav>

      {/* Center Instance Badge */}
      <div className="absolute left-1/2 transform -translate-x-1/2">
        <div className="bg-[#0f3a5f] border border-white/20 px-4 py-1 rounded-full flex items-center gap-2">
          <span className="text-xs">ServiceNow</span>
          <span className="text-xs">⭐</span>
        </div>
      </div>

      {/* Right Side Controls */}
      <div className="ml-auto flex items-center gap-3">
        {/* Search Bar */}
        <form onSubmit={handleSearchSubmit} className="relative">
          <div className="flex items-center bg-[#0f3a5f] border border-white/20 rounded">
            <Search className="w-4 h-4 text-white/60 ml-3" />
            <input
              type="text"
              placeholder="Search"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              className="bg-transparent text-white placeholder-white/60 px-3 py-2 text-sm w-48 focus:outline-none"
            />
          </div>
        </form>

        {/* Action Icons */}
        <button className="p-2 hover:bg-white/10 rounded">
          <ChevronDown className="w-4 h-4" />
        </button>
        
        <button 
          onClick={onOpenVirtualAgent}
          className="p-2 hover:bg-white/10 rounded relative"
          title="Open Virtual Agent"
        >
          <MessageCircle className="w-4 h-4" />
          <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full text-xs flex items-center justify-center text-white">
            1
          </span>
        </button>
        
        <button className="p-2 hover:bg-white/10 rounded">
          <Settings className="w-4 h-4" />
        </button>
        
        <button className="p-2 hover:bg-white/10 rounded">
          <Bell className="w-4 h-4" />
        </button>

        {/* User Profile */}
        <div className="flex items-center gap-2 ml-2">
          <img 
            src={personalInfo.profileImage}
            alt={personalInfo.name}
            className="w-8 h-8 rounded-full border border-white/20"
          />
        </div>
      </div>
    </header>
  );
};

export default ServiceNowHeader;