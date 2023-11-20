import React, { useState, useEffect } from 'react';

// Custom hook for handling a timer
const useTimer = () => {
  const [elapsedTime, setElapsedTime] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setElapsedTime(prevElapsedTime => prevElapsedTime + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return elapsedTime;
};

// Timer component using the useTimer custom hook
const Timer = () => {
  const elapsedTime = useTimer();

  // Function to format elapsed time as HH:MM:SS
  const formatTime = (timeInSeconds) => {
    const hours = Math.floor(timeInSeconds / 3600);
    const minutes = Math.floor((timeInSeconds % 3600) / 60);
    const seconds = timeInSeconds % 60;

    const displayHours = hours < 10 ? `0${hours}` : `${hours}`;
    const displayMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
    const displaySeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;

    return `${displayHours}:${displayMinutes}:${displaySeconds}`;
  };

  return (
    <div>
      <h2>Elapsed Time: {formatTime(elapsedTime)}</h2>
    </div>
  );
};

export default Timer;