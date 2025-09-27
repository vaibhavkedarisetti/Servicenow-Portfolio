import React, { useState } from 'react';
import "./App.css";
import ServiceNowHeader from './components/ServiceNowHeader';
import ServiceNowSidebar from './components/ServiceNowSidebar';
import ServiceNowBackground from './components/ServiceNowBackground';
import MainContent from './components/MainContent';
import VirtualAgent from './components/VirtualAgent';

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
            onOpenVirtualAgent={() => setVirtualAgentOpen(true)}
          />
          
          {/* Main Layout */}
          <div className="flex flex-1 overflow-hidden">
            {/* Sidebar */}
            <ServiceNowSidebar 
              isOpen={sidebarOpen}
              onNavigate={handleNavigate}
            />
            
            {/* Main Content - Make it scrollable */}
            <div className={`flex-1 ${currentView === 'dashboard' ? 'overflow-hidden' : 'overflow-y-auto'}`}>
              <MainContent 
                currentView={currentView}
                selectedRecord={selectedRecord}
                onRecordSelect={handleRecordSelect}
                onBackToList={handleBackToList}
              />
            </div>
          </div>
        </div>

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