import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Map, Activity, BarChart2, User } from 'lucide-react';

const Navbar = () => {
  const location = useLocation();
  
  return (
    <nav className="bottom-nav">
      <div className="flex justify-around items-center h-16 px-6">
        <NavLink to="/dashboard" active={location.pathname === '/dashboard'}>
          <Home className="w-6 h-6" />
          <span className="text-xs mt-1">Home</span>
        </NavLink>
        <NavLink to="/route-planner" active={location.pathname === '/route-planner'}>
          <Map className="w-6 h-6" />
          <span className="text-xs mt-1">Routes</span>
        </NavLink>
        <NavLink to="/ride-tracking" active={location.pathname === '/ride-tracking'}>
          <Activity className="w-6 h-6" />
          <span className="text-xs mt-1">Track</span>
        </NavLink>
        <NavLink to="/analytics" active={location.pathname === '/analytics'}>
          <BarChart2 className="w-6 h-6" />
          <span className="text-xs mt-1">Stats</span>
        </NavLink>
        <NavLink to="/profile" active={location.pathname === '/profile'}>
          <User className="w-6 h-6" />
          <span className="text-xs mt-1">Profile</span>
        </NavLink>
      </div>
    </nav>
  );
};

const NavLink = ({ children, to, active }) => (
  <Link
    to={to}
    className={`flex flex-col items-center py-2 px-3 ${
      active
        ? 'text-blue-600 dark:text-blue-400'
        : 'text-gray-500 dark:text-gray-400'
    }`}
  >
    {children}
  </Link>
);

export default Navbar;