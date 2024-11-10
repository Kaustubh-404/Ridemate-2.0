import React from 'react';
import { ChevronLeft, MoreVertical } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const AppHeader = ({ title, showBack, actions }) => {
  const navigate = useNavigate();

  return (
    <>
      <div className="status-bar" />
      <header className="app-header">
        <div className="flex items-center">
          {showBack && (
            <button 
              onClick={() => navigate(-1)}
              className="mobile-button mr-2 p-2 -ml-2"
            >
              <ChevronLeft className="w-6 h-6 text-gray-800 dark:text-white" />
            </button>
          )}
          <h1 className="text-lg font-semibold text-gray-800 dark:text-white">
            {title}
          </h1>
        </div>
        {actions && (
          <button className="mobile-button p-2 -mr-2">
            <MoreVertical className="w-6 h-6 text-gray-800 dark:text-white" />
          </button>
        )}
      </header>
    </>
  );
};

export default AppHeader;