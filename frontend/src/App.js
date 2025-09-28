import React, { useState } from 'react';
import "./App.css";
import ServiceNowHeader from './components/ServiceNowHeader';
import ServiceNowSidebar from './components/ServiceNowSidebar';
import ServiceNowBackground from './components/ServiceNowBackground';
import MainContent from './components/MainContent';
import VirtualAgent from './components/VirtualAgent';
import { Bot } from 'lucide-react';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [virtualAgentOpen, setVirtualAgentOpen] = useState(false);
  const [currentView, setCurrentView] = useState('dashboard');
  const [selectedRecord, setSelectedRecord] = useState(null);

  const handleNavigate = (table, name) => {
    if (table) {
      setCurrentView(table);
      setSelectedRecord(null);
    }
    setSidebarOpen(false); // Always close sidebar on navigate
  };

  const handleRecordSelect = (record, table) => {
    setSelectedRecord({ ...record, table });
    setCurrentView('form');
  };

  const handleBackToList = () => {
    const table = selectedRecord?.table;
    setCurrentView(table || 'dashboard');
    setSelectedRecord(null);
  };

  const handleHeaderNavigate = (view) => {
    const viewMap = {
      history: 'u_experience',
      workspaces: 'u_projects_built',
      admin: 'sys_user_has_a_contact'
    };
    const newView = viewMap[view];
    if (newView) {
      setCurrentView(newView);
      setSelectedRecord(null);
    }
  };

  const handleSearchCommand = (command) => {
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

    const table = commandMap[command.toLowerCase()];
    if (table) {
      handleNavigate(table, command);
      setSidebarOpen(false); // Close sidebar after navigation
    } else {
      alert(`Command "${command}" not recognized. Try: ${Object.keys(commandMap).slice(0, 7).join(', ')}`);
    }
  };

  return (
    <div className="App">
      <ServiceNowBackground>
        <div className="flex flex-col h-screen">
          {/* Header */}
          <ServiceNowHeader
            onSearchCommand={handleSearchCommand}
            onToggleNav={() => setSidebarOpen(!sidebarOpen)}
            onHeaderNavigate={handleHeaderNavigate}
            currentView={currentView}
          />

          {/* Main Layout */}
          <div className="flex flex-1 overflow-hidden relative">
            {/* Sidebar */}
            <ServiceNowSidebar
              isOpen={sidebarOpen}
              onNavigate={handleNavigate}
            />

            {/* Main Content - Make it scrollable */}
            <div className={`flex-1 transition-all duration-300 ease-in-out ${currentView === 'dashboard' ? 'overflow-hidden' : 'overflow-y-auto'} ${sidebarOpen && currentView !== 'dashboard' ? 'lg:ml-64' : 'lg:ml-0'}`}>
              <MainContent
                currentView={currentView}
                selectedRecord={selectedRecord}
                onRecordSelect={handleRecordSelect}
                onBackToList={handleBackToList}
              />
            </div>
          </div>
        </div>

        {/* Floating Action Button for Virtual Agent */}
        {!virtualAgentOpen && (
          <div className="fixed bottom-4 right-4 z-50 flex items-center gap-2">
            <div className="bg-white text-gray-800 text-xs font-semibold px-3 py-1 rounded-full shadow-lg animate-pulse">
              Click me!
            </div>
            <button
              onClick={() => setVirtualAgentOpen(true)}
              className="bg-[#1a4d72] text-white p-4 rounded-full shadow-lg hover:bg-[#0f3a5f] transition-colors"
              title="Open Virtual Agent"
            >
              <Bot className="w-6 h-6" />
            </button>
          </div>
        )}

        {/* Virtual Agent */}
        <VirtualAgent
          isOpen={virtualAgentOpen}
          onClose={() => setVirtualAgentOpen(false)}
        />

      </ServiceNowBackground>
    </div>
  );
}

export default App;