import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { User, Settings, Moon, Sun, Bell } from 'lucide-react';

const Profile = () => {
  const { darkMode, toggleDarkMode } = useTheme();

  return (
    <div className="pb-20 pt-4 px-4">
      <h1 className="text-2xl font-bold mb-6 dark:text-white">Profile</h1>

      <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow mb-6">
        <div className="flex items-center space-x-4">
          <div className="bg-blue-100 dark:bg-blue-900 p-4 rounded-full">
            <User className="w-8 h-8 text-blue-600 dark:text-blue-400" />
          </div>
          <div>
            <h2 className="text-xl font-semibold dark:text-white">John Doe</h2>
            <p className="text-gray-600 dark:text-gray-400">john.doe@example.com</p>
          </div>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow">
        <div className="p-4 border-b dark:border-gray-700">
          <h3 className="text-lg font-semibold dark:text-white">Settings</h3>
        </div>

        <div className="divide-y dark:divide-gray-700">
          <div className="flex items-center justify-between p-4">
            <div className="flex items-center space-x-3">
              {darkMode ? (
                <Moon className="w-5 h-5 text-gray-600 dark:text-gray-400" />
              ) : (
                <Sun className="w-5 h-5 text-gray-600 dark:text-gray-400" />
              )}
              <span className="text-gray-700 dark:text-gray-300">Dark Mode</span>
            </div>
            <button
              onClick={toggleDarkMode}
              className={`w-12 h-6 rounded-full p-1 transition-colors ${
                darkMode ? 'bg-blue-600' : 'bg-gray-300'
              }`}
            >
              <div
                className={`w-4 h-4 rounded-full bg-white transform transition-transform ${
                  darkMode ? 'translate-x-6' : 'translate-x-0'
                }`}
              />
            </button>
          </div>

          <div className="flex items-center justify-between p-4">
            <div className="flex items-center space-x-3">
              <Bell className="w-5 h-5 text-gray-600 dark:text-gray-400" />
              <span className="text-gray-700 dark:text-gray-300">Notifications</span>
            </div>
            <button
              className="w-12 h-6 rounded-full p-1 bg-blue-600"
            >
              <div className="w-4 h-4 rounded-full bg-white transform translate-x-6" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
