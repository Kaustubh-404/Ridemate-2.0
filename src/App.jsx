import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Navbar from './components/Navbar';
import Welcome from './pages/Welcome';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import RoutePlanner from './pages/RoutePlanner';
import RideTracking from './pages/RideTracking';
import Analytics from './pages/Analytics';
import Profile from './pages/Profile';
import { ThemeProvider } from './context/ThemeContext';
import AppHeader from './components/AppHeader';

const App = () => {
  return (
    <ThemeProvider>
      <Router>
        <div className="max-w-md mx-auto relative min-h-screen bg-gray-50 dark:bg-gray-900">
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={
              <>
                <AppHeader title="Dashboard" actions={true} />
                <div className="mobile-container">
                  <Dashboard />
                </div>
                <Navbar />
              </>
            } />
             <Route path="/route-planner" element={
              <>
                <Navbar />
                <RoutePlanner />
              </>
            } />
            <Route path="/ride-tracking" element={
              <>
                <Navbar />
                <RideTracking />
              </>
            } />
            <Route path="/analytics" element={
              <>
                <Navbar />
                <Analytics />
              </>
            } />
            <Route path="/profile" element={
              <>
                <Navbar />
                <Profile />
              </>
            } />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
};


export default App;