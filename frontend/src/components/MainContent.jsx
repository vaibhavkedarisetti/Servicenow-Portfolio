import React from 'react';
import { personalInfo } from '../data/mockData';
import { ExternalLink, Mail, Phone, Github, Linkedin } from 'lucide-react';
import ListView from './ListView';
import FormView from './FormView';

const MainContent = ({ currentView, selectedRecord, onRecordSelect, onBackToList }) => {
  const renderContent = () => {
    if (currentView === 'form' && selectedRecord) {
      return <FormView record={selectedRecord} onBack={onBackToList} />;
    }
  
    if (currentView && currentView !== 'dashboard') {
      return <ListView table={currentView} onRecordSelect={onRecordSelect} />;
    }
  
    // Default Dashboard View
    return (
      <div className="text-white min-h-full flex flex-col min-w-[320px]">
        {/* Hero Section */}
        <div className="text-center py-6 sm:py-10 lg:py-12 bg-gray-800/10 flex-shrink-0">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 min-w-0">
            {/* Profile Image */}
            <div className="mb-4 sm:mb-6">
              <img 
                src={personalInfo.profileImage}
                alt={personalInfo.name}
                className="w-28 h-28 sm:w-32 sm:h-32 lg:w-40 lg:h-40 rounded-full mx-auto border-2 sm:border-4 border-white/40 shadow-2xl backdrop-blur-sm bg-white/10"
              />
            </div>

            {/* Name and Title */}
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-2 sm:mb-3 text-white px-2">
              {personalInfo.name}
            </h1>
            <h2 className="text-base sm:text-lg lg:text-xl text-white/80 px-2 flex items-center justify-center gap-2">
              <span>ServiceNow Developer</span>
            </h2>
          </div>
        </div>

        {/* Summary Section */}
        <div className="bg-gray-100 py-10 sm:py-12 lg:py-16 flex-grow flex-shrink-0 pb-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 min-w-0">
            <p className="text-black leading-relaxed text-sm sm:text-lg lg:text-xl max-w-xs sm:max-w-lg lg:max-w-2xl mx-auto font-medium text-center break-words">
              {personalInfo.summary}
            </p>

            {/* Resume Button */}
            <div className="text-center mt-8 sm:mt-12">
              <a
                href="https://drive.google.com/file/d/1wNOuL9khx1mL5JftfdiTd_PeCVFWgR7H/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#1a4d72] text-white px-4 sm:px-6 lg:px-8 py-2 sm:py-3 lg:py-4 rounded-lg font-semibold hover:bg-[#0f3a5f] transition-colors inline-flex items-center gap-2 shadow-lg text-xs sm:text-sm lg:text-base min-w-fit"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="sm:w-5 sm:h-5 flex-shrink-0">
                  <path d="M15 3h6v6"></path>
                  <path d="M10 14 21 3"></path>
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                </svg>
                <span>View Resume</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className={`w-full min-h-full ${currentView !== 'dashboard' ? 'h-full' : ''}`}>
      {renderContent()}
    </div>
  );
};

export default MainContent;