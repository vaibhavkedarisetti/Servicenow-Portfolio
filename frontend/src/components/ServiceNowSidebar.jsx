import React, { useState } from 'react';
import { ChevronDown, ChevronRight, Filter, RotateCcw, Settings } from 'lucide-react';
import * as Icons from 'lucide-react';
import { navigationItems } from '../data/mockData';

const ServiceNowSidebar = ({ isOpen, onNavigate }) => {
  const [expandedCategories, setExpandedCategories] = useState({
    "My Portfolio": true,
    "Experience": true,
    "Education & Skills": true,
    "Contact": true
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

  if (!isOpen) return null;

  return (
    <div className="w-64 bg-[#0f3a5f] text-white h-screen overflow-y-auto">
      {/* Filter Header */}
      <div className="p-3 border-b border-white/10">
        <form onSubmit={handleFilterSubmit}>
          <div className="flex items-center gap-2 bg-[#1a4d72] px-3 py-2 rounded mb-2">
            <Filter className="w-4 h-4 text-white/60" />
            <input
              type="text"
              value={filterText}
              onChange={(e) => setFilterText(e.target.value)}
              placeholder="Type table name..."
              className="bg-transparent text-white placeholder-white/60 text-sm flex-1 focus:outline-none"
            />
          </div>
        </form>
        <div className="flex items-center gap-2">
          <button 
            onClick={() => setFilterText('')}
            className="p-1 hover:bg-white/10 rounded"
            title="Clear filter"
          >
            <RotateCcw className="w-4 h-4 text-white/60" />
          </button>
          <button className="p-1 hover:bg-white/10 rounded" title="Settings">
            <Settings className="w-4 h-4 text-white/60" />
          </button>
        </div>
        <div className="text-xs text-white/50 mt-2">
          Try: u_experience, u_certifications, u_projects_built
        </div>
      </div>

      {/* Navigation Items */}
      <div className="p-2">
        {navigationItems.map((section) => (
          <div key={section.category} className="mb-4">
            {/* Category Header */}
            <button
              onClick={() => toggleCategory(section.category)}
              className="flex items-center gap-2 w-full text-left px-2 py-2 hover:bg-white/10 rounded text-sm font-medium"
            >
              {expandedCategories[section.category] ? 
                <ChevronDown className="w-4 h-4" /> : 
                <ChevronRight className="w-4 h-4" />
              }
              {section.category}
            </button>

            {/* Category Items */}
            {expandedCategories[section.category] && (
              <div className="ml-6 mt-1">
                {section.items.map((item) => (
                  <button
                    key={item.table}
                    onClick={() => onNavigate(item.table, item.name)}
                    className="flex items-center gap-2 w-full text-left px-2 py-2 hover:bg-white/10 rounded text-sm text-white/80 hover:text-white transition-colors"
                  >
                    {getIcon(item.icon)}
                    {item.name}
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceNowSidebar;