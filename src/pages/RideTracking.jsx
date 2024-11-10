import React, { useState, useEffect } from 'react';
import { Play, Pause, StopCircle, Clock, Navigation } from 'lucide-react';

const RideTracking = () => {
  const [isTracking, setIsTracking] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [time, setTime] = useState(0);
  const [distance, setDistance] = useState(0);

  useEffect(() => {
    let interval;
    if (isTracking && !isPaused) {
      interval = setInterval(() => {
        setTime(prev => prev + 1);
        setDistance(prev => prev + 0.01);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isTracking, isPaused]);

  const formatTime = (seconds) => {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleStart = () => {
    setIsTracking(true);
    setIsPaused(false);
  };

  const handlePause = () => {
    setIsPaused(!isPaused);
  };

  const handleStop = () => {
    setIsTracking(false);
    setIsPaused(false);
    setTime(0);
    setDistance(0);
  };

  return (
    <div className="pb-20 pt-4 px-4">
      <h1 className="text-2xl font-bold mb-6 dark:text-white">Track Your Ride</h1>

      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow mb-6">
        <div className="grid grid-cols-2 gap-4 mb-8">
          <div className="text-center">
            <div className="text-gray-600 dark:text-gray-400 mb-2">
              <Clock className="w-6 h-6 mx-auto mb-1" />
              Time
            </div>
            <div className="text-2xl font-bold dark:text-white">
              {formatTime(time)}
            </div>
          </div>
          <div className="text-center">
            <div className="text-gray-600 dark:text-gray-400 mb-2">
              <Navigation className="w-6 h-6 mx-auto mb-1" />
              Distance
            </div>
            <div className="text-2xl font-bold dark:text-white">
              {distance.toFixed(2)} km
            </div>
          </div>
        </div>

        <div className="flex justify-center space-x-4">
          {!isTracking ? (
            <button
              onClick={handleStart}
              className="bg-green-600 text-white p-4 rounded-full hover:bg-green-700 transition-colors"
            >
              <Play className="w-8 h-8" />
            </button>
          ) : (
            <>
              <button
                onClick={handlePause}
                className="bg-yellow-600 text-white p-4 rounded-full hover:bg-yellow-700 transition-colors"
              >
                {isPaused ? <Play className="w-8 h-8" /> : <Pause className="w-8 h-8" />}
              </button>
              <button
                onClick={handleStop}
                className="bg-red-600 text-white p-4 rounded-full hover:bg-red-700 transition-colors"
              >
                <StopCircle className="w-8 h-8" />
              </button>
            </>
          )}
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow">
        <h2 className="text-lg font-semibold mb-4 dark:text-white">Current Stats</h2>
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <span className="text-gray-600 dark:text-gray-400">Average Speed</span>
            <span className="font-bold dark:text-white">18.5 km/h</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-600 dark:text-gray-400">Calories Burned</span>
            <span className="font-bold dark:text-white">245 kcal</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-600 dark:text-gray-400">Elevation Gain</span>
            <span className="font-bold dark:text-white">125 m</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RideTracking;