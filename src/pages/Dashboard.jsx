import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';
import { Calendar, Clock, MapPin } from 'lucide-react';

const mockData = {
  recentRides: [
    { date: '2024-03-01', distance: 25, duration: '1h 30m', route: 'City Loop' },
    { date: '2024-03-03', distance: 30, duration: '2h 15m', route: 'Mountain Trail' },
    { date: '2024-03-05', distance: 15, duration: '45m', route: 'River Route' },
  ],
  stats: [
    { name: 'Jan', distance: 150 },
    { name: 'Feb', distance: 200 },
    { name: 'Mar', distance: 180 },
  ],
};

const Dashboard = () => {
  return (
    <div className="pb-20 pt-4 px-4">
      <h1 className="text-2xl font-bold mb-6 dark:text-white">Dashboard</h1>
      
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="bg-blue-100 dark:bg-blue-900 p-4 rounded-lg">
          <h3 className="text-lg font-semibold mb-2 dark:text-white">Total Distance</h3>
          <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">530 km</p>
        </div>
        <div className="bg-green-100 dark:bg-green-900 p-4 rounded-lg">
          <h3 className="text-lg font-semibold mb-2 dark:text-white">Total Rides</h3>
          <p className="text-2xl font-bold text-green-600 dark:text-green-400">24</p>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg p-4 mb-6 shadow">
        <h2 className="text-xl font-semibold mb-4 dark:text-white">Monthly Progress</h2>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={mockData.stats}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Line type="monotone" dataKey="distance" stroke="#3B82F6" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow">
        <h2 className="text-xl font-semibold mb-4 dark:text-white">Recent Rides</h2>
        <div className="space-y-4">
          {mockData.recentRides.map((ride, index) => (
            <div key={index} className="flex items-center justify-between border-b pb-4 dark:border-gray-700">
              <div className="space-y-1">
                <div className="flex items-center text-gray-600 dark:text-gray-400">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>{ride.date}</span>
                </div>
                <div className="flex items-center text-gray-600 dark:text-gray-400">
                  <Clock className="w-4 h-4 mr-2" />
                  <span>{ride.duration}</span>
                </div>
                <div className="flex items-center text-gray-600 dark:text-gray-400">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span>{ride.route}</span>
                </div>
              </div>
              <span className="text-xl font-bold text-blue-600 dark:text-blue-400">
                {ride.distance} km
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
