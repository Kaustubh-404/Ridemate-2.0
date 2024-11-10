import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AppHeader from '../components/AppHeader';

const Login = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);

  return (
    <>
      <AppHeader 
        title={isLogin ? "Sign In" : "Create Account"} 
        showBack={true}
      />
      <div className="mobile-container px-6">
        <div className="space-y-6 pt-8">
          <div className="space-y-2">
            <input
              type="email"
              placeholder="Email address"
              className="w-full px-4 py-4 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-4 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          <button
            onClick={() => navigate('/dashboard')}
            className="mobile-button w-full bg-blue-600 text-white py-4 rounded-xl font-semibold"
          >
            {isLogin ? 'Sign in' : 'Create account'}
          </button>

          <button
            onClick={() => setIsLogin(!isLogin)}
            className="mobile-button w-full py-4 text-blue-600 dark:text-blue-400"
          >
            {isLogin ? "Don't have an account? Sign up" : 'Already have an account? Sign in'}
          </button>
        </div>
      </div>
    </>
  );
};

export default Login;