import React, { useState, useRef } from "react";
import "./Stopwatch.css";

const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const [isRunning, SetIsRunning] = useState(false);
  const intervalRef = useRef(null);

  const start = () => {
    if (!isRunning) {
      SetIsRunning(true);
      intervalRef.current = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    }
  };

  const reset = () => {
    clearInterval(intervalRef.current);
    SetIsRunning(false);
    setTime(0);
  };

  const stop = () => {
    clearInterval(intervalRef.current);
    SetIsRunning(false);
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60000);
    const seconds = Math.floor((time % 60000) / 1000);
    // const milliseconds = Math.floor((time % 1000) / 10);

    return (
      (minutes < 10 ? "0" : "") + ":" + (seconds < 10 ? "0" : "") + seconds
    );
  };

  return (
    <div className="stopwatch">
      <h1>Stopwatch</h1>
      <p>Time:{formatTime(time)}</p>
      <div>
        {!isRunning ? (
          <button onClick={start}>Start</button>
        ) : (
          <button onClick={stop}>Stop</button>
        )}
        <button onClick={reset}>Reset </button>
      </div>
    </div>
  );
};

export default Stopwatch;
