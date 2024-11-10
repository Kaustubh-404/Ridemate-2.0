import React from 'react';
import {
  LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid,
  Tooltip, ResponsiveContainer, PieChart, Pie, Cell
} from 'recharts';

const mockData = {
  weeklyDistance: [
    { day: 'Mon', distance: 15 },
    { day: 'Tue', distance: 20 },
    { day: 'Wed', distance: 10 },
    { day: 'Thu', distance: 25 },
    { day: 'Fri', distance: 15 },
    { day: 'Sat', distance: 30 },
    { day: 'Sun', distance: 22 },
  ],
  routeTypes: [
    { name: 'Urban', value: 45 },
    { name: 'Trail', value: 30 },
    { name: 'Mountain', value: 25 },
  ],
};

const COLORS = ['#3B82F6', '#10B981', '#F59E0B'];

const Analytics = () => {
  return (
    <div className="pb-20 pt-4 px-4">
      <h1 className="text-2xl font-bold mb-6 dark:text-white">Analytics</h1>

      <div className="space-y-6">
        <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow">
          <h2 className="text-lg font-semibold mb-4 dark:text-white">Weekly Distance</h2>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={mockData.weeklyDistance}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="day" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="distance" fill="#3B82F6" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow">
          <h2 className="text-lg font-semibold mb-4 dark:text-white">Route Types</h2>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={mockData.routeTypes}
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  dataKey="value"
                  label
                >
                  {mockData.routeTypes.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow">
            <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">
              Total Distance
            </h3>
            <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">
              437 km
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow">
            <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">
              Avg. Speed
            </h3>
            <p className="text-2xl font-bold text-green-600 dark:text-green-400">
              19.5 km/h
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;