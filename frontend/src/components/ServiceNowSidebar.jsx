import React, { useState } from 'react';
import { ChevronDown, ChevronRight, Filter, RotateCcw, Settings } from 'lucide-react';
import * as Icons from 'lucide-react';
import { navigationItems } from '../data/mockData';

const ServiceNowSidebar = ({ isOpen, onNavigate }) => {
  const [expandedCategories, setExpandedCategories] = useState({
    "Portfolio Management": false,
    "Education & Credentials": false,
    "Service Management": false,
    "System": false
  });
  const [filterText, setFilterText] = useState('');

  const toggleCategory = (category) => {
    setExpandedCategories(prev => ({
      ...prev,
      [category]: !prev[category]
    }));
  };

  const handleFilterSubmit = (e) => {
    e.preventDefault();
    if (filterText.trim()) {
      const commandMap = {
        'experience.list': 'u_experience',
        'education.list': 'u_education',
        'certifications.list': 'u_certifications',
        'projects_built.list': 'u_projects_built',
        'snow_skills.list': 'u_snow_skills',
        'tech_worked_on.list': 'u_tech_worked_on',
        'sys_user_has_a_contact.list': 'sys_user_has_a_contact',
        'u_experience': 'u_experience',
        'u_education': 'u_education',
        'u_certifications': 'u_certifications',
        'u_projects_built': 'u_projects_built',
        'u_snow_skills': 'u_snow_skills',
        'u_tech_worked_on': 'u_tech_worked_on',
        'sys_user_has_a_contact': 'sys_user_has_a_contact'
      };

      const table = commandMap[filterText.toLowerCase()];
      if (table) {
        onNavigate(table, filterText);
        setFilterText('');
      }
    }
  };

  const getIcon = (iconName) => {
    const IconComponent = Icons[iconName];
    return IconComponent ? <IconComponent className="w-4 h-4" /> : <Icons.Circle className="w-4 h-4" />;
  };

  return (
    <>
      {/* Overlay for mobile */}
      <div
        className={`absolute inset-0 bg-black/40 z-30 lg:hidden transition-opacity ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={() => onNavigate(null)} // Close sidebar on overlay click
      />

      <div className={`absolute top-0 left-0 h-full bg-[#0f3a5f] text-white z-30 w-72 sm:w-80 lg:w-64 transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="h-full flex flex-col overflow-y-auto">
          {/* Filter Header */}
          <div className="p-3 border-b border-white/10">
            <form onSubmit={handleFilterSubmit}>
              <div className="flex items-center gap-2 bg-[#1a4d72] px-3 py-2 rounded mb-2">
                <Filter className="w-4 h-4 text-white/60" />
                <input
                  type="text"
                  value={filterText}
                  onChange={(e) => setFilterText(e.target.value)}
                  placeholder="Filter navigator..."
                  className="bg-transparent text-white placeholder-white/60 text-sm flex-1 focus:outline-none"
                />
              </div>
            </form>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setFilterText('')}
                className="p-1.5 hover:bg-white/10 rounded"
                title="Clear filter"
              >
                <RotateCcw className="w-4 h-4 text-white/60" />
              </button>
              <button className="p-1.5 hover:bg-white/10 rounded" title="Settings">
                <Settings className="w-4 h-4 text-white/60" />
              </button>
            </div>
            <div className="text-xs text-white/50 mt-2">
              Try: u_experience, u_certifications
            </div>
          </div>

          {/* Navigation Items */}
          <div className="flex-1 p-2">
            {navigationItems.map((section) => (
              <div key={section.category} className="mb-3">
                {/* Category Header */}
                <button
                  onClick={() => toggleCategory(section.category)}
                  className="flex items-center gap-2 w-full text-left px-2 py-2 hover:bg-white/10 rounded text-sm font-medium"
                >
                  {expandedCategories[section.category] ?
                    <ChevronDown className="w-4 h-4" /> :
                    <ChevronRight className="w-4 h-4" />
                  }
                  <span className="truncate">{section.category}</span>
                </button>

                {/* Category Items */}
                {expandedCategories[section.category] && (
                  <div className="ml-5 mt-1 border-l border-white/10 pl-3">
                    {section.items.map((item) => (
                      <button
                        key={item.table}
                        onClick={() => onNavigate(item.table, item.name)}
                        className="flex items-center gap-2 w-full text-left px-2 py-2 hover:bg-white/10 rounded text-sm text-white/80 hover:text-white transition-colors"
                      >
                        {getIcon(item.icon)}
                        <span className="truncate">{item.name}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceNowSidebar;