import React, { useState } from 'react';
import { X, Send, Bot, User } from 'lucide-react';
import { virtualAgentResponses } from '../data/mockData';

const VirtualAgent = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'bot',
      content: "Hi, I'm Magic Vaibhav's Virtual Agent. I can help you explore his profile. Type 'help' to see options.",
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    // Add user message
    const userMessage = {
      id: Date.now(),
      type: 'user',
      content: inputValue,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);

    // Generate bot response
    const botResponse = generateBotResponse(inputValue.toLowerCase().trim());
    setTimeout(() => {
      setMessages(prev => [...prev, botResponse]);
    }, 500);

    setInputValue('');
  };

  const generateBotResponse = (input) => {
    let response;

    if (input === 'help') {
      response = {
        id: Date.now() + 1,
        type: 'bot',
        content: virtualAgentResponses.help.message,
        options: virtualAgentResponses.help.options,
        timestamp: new Date()
      };
    } else if (input === 'certifications') {
      response = {
        id: Date.now() + 1,
        type: 'bot',
        content: virtualAgentResponses.certifications.message,
        data: virtualAgentResponses.certifications.data.slice(0, 3), // Show first 3
        timestamp: new Date()
      };
    } else if (input === 'experience') {
      response = {
        id: Date.now() + 1,
        type: 'bot',
        content: virtualAgentResponses.experience.message,
        data: virtualAgentResponses.experience.data,
        timestamp: new Date()
      };
    } else if (input === 'projects') {
      response = {
        id: Date.now() + 1,
        type: 'bot',
        content: virtualAgentResponses.projects.message,
        data: virtualAgentResponses.projects.data.slice(0, 2), // Show first 2
        timestamp: new Date()
      };
    } else {
      response = {
        id: Date.now() + 1,
        type: 'bot',
        content: "I didn't understand that command. Type 'help' to see available options, or try: certifications, experience, projects",
        timestamp: new Date()
      };
    }

    return response;
  };

  if (!isOpen) return null;

  return (
    <div className="fixed bottom-2 right-2 sm:bottom-4 sm:right-4 w-[calc(100vw-0.5rem)] sm:w-96 h-[calc(100vh-1rem)] sm:h-[500px] bg-white border border-gray-200 rounded-lg shadow-2xl z-50 flex flex-col">
      {/* Header */}
      <div className="bg-[#1a4d72] text-white p-2 sm:p-4 rounded-t-lg flex items-center justify-between">
        <div className="flex items-center gap-1 sm:gap-2">
          <Bot className="w-4 h-4 sm:w-5 sm:h-5" />
          <span className="font-medium text-sm sm:text-base truncate">Magic Vaibhav's Virtual Agent</span>
        </div>
        <button 
          onClick={onClose}
          className="hover:bg-white/10 p-1 rounded flex-shrink-0"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-2 sm:p-4 space-y-2 sm:space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex gap-2 sm:gap-3 ${message.type === 'user' ? 'flex-row-reverse' : ''}`}
          >
            <div className={`w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
              message.type === 'bot' ? 'bg-[#1a4d72] text-white' : 'bg-gray-200'
            }`}>
              {message.type === 'bot' ? <Bot className="w-3 h-3 sm:w-4 sm:h-4" /> : <User className="w-3 h-3 sm:w-4 sm:h-4" />}
            </div>
            
            <div className={`max-w-[75%] ${message.type === 'user' ? 'text-right' : ''}`}>
              <div className={`p-2 sm:p-3 rounded-lg ${
                message.type === 'bot' 
                  ? 'bg-gray-100 text-gray-800' 
                  : 'bg-[#1a4d72] text-white'
              }`}>
                <p className="text-xs sm:text-sm">{message.content}</p>
                
                {/* Options */}
                {message.options && (
                  <div className="mt-1 sm:mt-2 space-y-1">
                    {message.options.map((option, idx) => (
                      <div key={idx} className="text-xs bg-white/10 p-1 sm:p-2 rounded font-mono">
                        {option}
                      </div>
                    ))}
                  </div>
                )}

                {/* Data */}
                {message.data && (
                  <div className="mt-1 sm:mt-2 space-y-1 sm:space-y-2">
                    {message.data.map((item, idx) => (
                      <div key={idx} className="text-xs bg-white/10 p-1 sm:p-2 rounded">
                        <div className="font-semibold">{item.name || item.company || item.institution}</div>
                        <div className="text-white/80">{item.role || item.degree || item.issuer}</div>
                        {item.period && <div className="text-white/60">{item.period}</div>}
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <div className="text-xs text-gray-400 mt-1">
                {message.timestamp.toLocaleTimeString()}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Input */}
      <form onSubmit={handleSendMessage} className="p-2 sm:p-4 border-t">
        <div className="flex gap-1 sm:gap-2">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Type your message..."
            className="flex-1 p-1 sm:p-2 border border-gray-300 rounded focus:outline-none focus:border-[#1a4d72] text-sm sm:text-base"
          />
          <button
            type="submit"
            className="bg-[#1a4d72] text-white p-1 sm:p-2 rounded hover:bg-[#0f3a5f] transition-colors flex-shrink-0"
          >
            <Send className="w-3 h-3 sm:w-4 sm:h-4" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default VirtualAgent;