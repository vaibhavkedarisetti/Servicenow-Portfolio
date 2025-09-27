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

  const toggleCategory = (category) => {
    setExpandedCategories(prev => ({
      ...prev,
      [category]: !prev[category]
    }));
  };

  const getIcon = (iconName) => {
    const IconComponent = Icons[iconName];
    return IconComponent ? <IconComponent className="w-4 h-4" /> : <Icons.Circle className="w-4 h-4" />;
  };

  if (!isOpen) return null;

  return (
    <div className="w-64 bg-[#0f3a5f] text-white h-screen overflow-y-auto">
      {/* Filter Header */}
      <div className="p-4 border-b border-white/10">
        <div className="flex items-center gap-2 bg-[#1a4d72] px-3 py-2 rounded">
          <Filter className="w-4 h-4 text-white/60" />
          <span className="text-sm text-white/80">Filter</span>
        </div>
        <div className="flex items-center gap-2 mt-2">
          <button className="p-1 hover:bg-white/10 rounded">
            <RotateCcw className="w-4 h-4 text-white/60" />
          </button>
          <button className="p-1 hover:bg-white/10 rounded">
            <Settings className="w-4 h-4 text-white/60" />
          </button>
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