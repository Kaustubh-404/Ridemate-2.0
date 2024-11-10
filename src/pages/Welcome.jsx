import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Bike } from 'lucide-react';

const Welcome = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-gradient-to-b from-blue-500 to-blue-700 text-white">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center space-y-4">
          <div className="rounded-full bg-white/10 p-6 w-24 h-24 mx-auto">
            <Bike className="w-full h-full" />
          </div>
          <h1 className="text-4xl font-bold">RideMate</h1>
          <p className="text-lg text-white/80">
            Your AI-powered companion for optimal bike routing and tracking
          </p>
        </div>
        
        <div className="space-y-4 mt-12">
          <button
            onClick={() => navigate('/login')}
            className="mobile-button w-full bg-white text-blue-600 px-6 py-4 rounded-2xl font-semibold shadow-lg"
          >
            Get Started
          </button>
          <button
            onClick={() => navigate('/login')}
            className="mobile-button w-full bg-transparent border border-white text-white px-6 py-4 rounded-2xl font-semibold"
          >
            I already have an account
          </button>
        </div>
      </div>
    </div>
  );
};

export default Welcome;