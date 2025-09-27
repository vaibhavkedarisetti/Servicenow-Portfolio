import React from 'react';
import { personalInfo } from '../data/mockData';
import { ExternalLink, Mail, Phone, Github, Linkedin } from 'lucide-react';
import ListView from './ListView';
import FormView from './FormView';

const MainContent = ({ currentView, selectedRecord, onRecordSelect, onBackToList }) => {
  if (currentView === 'form' && selectedRecord) {
    return <FormView record={selectedRecord} onBack={onBackToList} />;
  }

  if (currentView && currentView !== 'dashboard') {
    return <ListView table={currentView} onRecordSelect={onRecordSelect} />;
  }

  // Default Dashboard View
  return (
    <div className="flex-1 text-white">
      {/* Hero Section */}
      <div className="text-center py-20">
        <div className="max-w-4xl mx-auto px-6">
          {/* Profile Image */}
          <div className="mb-8">
            <img 
              src={personalInfo.profileImage}
              alt={personalInfo.name}
              className="w-32 h-32 rounded-full mx-auto border-4 border-white/20 shadow-xl"
            />
          </div>

          {/* Name and Title */}
          <h1 className="text-5xl font-bold mb-4 text-white">
            {personalInfo.name}
          </h1>
          <h2 className="text-2xl text-white/80 mb-8">
            {personalInfo.title}
          </h2>

          {/* Summary */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 mb-8 text-left">
            <h3 className="text-xl font-semibold mb-4 text-white">Summary</h3>
            <p className="text-white/90 leading-relaxed text-lg">
              {personalInfo.summary}
            </p>
          </div>

          {/* Resume Button */}
          <div className="mb-8">
            <a
              href={personalInfo.resumeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-[#1a4d72] px-8 py-3 rounded-lg font-semibold hover:bg-white/90 transition-colors inline-flex items-center gap-2 shadow-lg"
            >
              <ExternalLink className="w-5 h-5" />
              View Resume
            </a>
          </div>

          {/* Contact Information */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-4 text-white">Contact Information</h3>
            <div className="grid md:grid-cols-2 gap-4 text-left">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-white/60" />
                <a href={`mailto:${personalInfo.email}`} className="text-white/90 hover:text-white">
                  {personalInfo.email}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-white/60" />
                <span className="text-white/90">{personalInfo.phone}</span>
              </div>
              <div className="flex items-center gap-3">
                <Linkedin className="w-5 h-5 text-white/60" />
                <a 
                  href={personalInfo.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white/90 hover:text-white"
                >
                  LinkedIn Profile
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Github className="w-5 h-5 text-white/60" />
                <a 
                  href={personalInfo.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white/90 hover:text-white"
                >
                  GitHub Profile
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bg-white/5 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="text-center mb-12">
            <p className="text-white/60 text-sm uppercase tracking-wider mb-4">GO FURTHER</p>
            <h2 className="text-4xl font-bold text-white">
              Explore my ServiceNow expertise
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Experience Card */}
            <div className="bg-gradient-to-br from-green-600 to-blue-600 p-8 rounded-lg text-white">
              <h3 className="text-2xl font-bold mb-4">Experience & Projects</h3>
              <p className="mb-6 text-white/90">
                Discover my work at HCL Tech and innovative ServiceNow integrations including AI-powered solutions and custom applications.
              </p>
              <div className="text-sm opacity-80">
                <div>✓ PayPal Project Lead</div>
                <div>✓ Claude AI Integration</div>
                <div>✓ GenAI Summarization Tool</div>
              </div>
            </div>

            {/* Skills & Certifications Card */}
            <div className="bg-gradient-to-br from-blue-600 to-purple-600 p-8 rounded-lg text-white">
              <h3 className="text-2xl font-bold mb-4">Skills & Certifications</h3>
              <p className="mb-6 text-white/90">
                Explore my 5x ServiceNow certifications and expertise across ITSM, HRSD, and CSM modules with hands-on scripting experience.
              </p>
              <div className="text-sm opacity-80">
                <div>✓ 5 Core Certifications</div>
                <div>✓ 3 Micro-Certifications</div>
                <div>✓ Full-Stack Development</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;