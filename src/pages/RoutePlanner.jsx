import React, { useState } from 'react';
import { MapPin, Navigation } from 'lucide-react';

const mockLocations = [
  'Downtown',
  'Mountain View Park',
  'Riverside Trail',
  'Beach Boulevard',
  'Forest Path',
];

const mockRoutes = [
  {
    id: 1,
    name: 'Scenic Route',
    distance: '15.5 km',
    duration: '1h 15m',
    difficulty: 'Medium',
    elevation: '+150m',
  },
  {
    id: 2,
    name: 'Quick Route',
    distance: '12.2 km',
    duration: '45m',
    difficulty: 'Easy',
    elevation: '+50m',
  },
];

const RoutePlanner = () => {
  const [start, setStart] = useState('');
  const [end, setEnd] = useState('');
  const [showRoutes, setShowRoutes] = useState(false);

  const handlePlan = () => {
    setShowRoutes(true);
  };

  return (
    <div className="pb-20 pt-4 px-4">
      <h1 className="text-2xl font-bold mb-6 dark:text-white">Route Planner</h1>

      <div className="bg-white dark:bg-gray-800 rounded-lg p-4 mb-6 shadow">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Start Location
            </label>
            <select
              value={start}
              onChange={(e) => setStart(e.target.value)}
              className="w-full p-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600"
            >
              <option value="">Select start point</option>
              {mockLocations.map((loc) => (
                <option key={loc} value={loc}>
                  {loc}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              End Location
            </label>
            <select
              value={end}
              onChange={(e) => setEnd(e.target.value)}
              className="w-full p-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600"
            >
              <option value="">Select destination</option>
              {mockLocations.map((loc) => (
                <option key={loc} value={loc}>
                  {loc}
                </option>
              ))}
            </select>
          </div>

          <button
            onClick={handlePlan}
            disabled={!start || !end}
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors disabled:bg-gray-400"
          >
            Plan Route
          </button>
        </div>
      </div>

      {showRoutes && (
        <div className="space-y-4">
          {mockRoutes.map((route) => (
            <div
               key={route.id}
              className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow"
            >
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-lg font-semibold dark:text-white">{route.name}</h3>
                <span className="text-blue-600 dark:text-blue-400 font-bold">
                  {route.distance}
                </span>
              </div>
              <div className="grid grid-cols-3 gap-4 text-sm text-gray-600 dark:text-gray-400">
                <div>
                  <span className="block font-medium">Duration</span>
                  {route.duration}
                </div>
                <div>
                  <span className="block font-medium">Difficulty</span>
                  {route.difficulty}
                </div>
                <div>
                  <span className="block font-medium">Elevation</span>
                  {route.elevation}
                </div>
              </div>
              <button className="w-full mt-4 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">
                Select Route
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default RoutePlanner;