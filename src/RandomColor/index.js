import React, { useState, useEffect } from "react";
import "./index.css";

const RandomColorApp = () => {
  const [color, setColor] = useState("#ffffff");
  const [history, setHistory] = useState([]);
  const [autoChange, setAutoChange] = useState(false);
  const [intervalId, setIntervalId] = useState(null);

  const getRandomColor = () => {
    const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    return randomColor;
  };

  const changeColor = (newColor) => {
    if (!history.includes(newColor)) {
      setColor(newColor);
      setHistory((prevHistory) => [...prevHistory, newColor]);
    }
  };

  const undoColor = () => {
    if (history.length > 1) {
      const updatedHistory = history.slice(0, -1);
      setHistory(updatedHistory);
      setColor(updatedHistory[updatedHistory.length - 1]);
    }
  };

  const toggleAutoChange = () => {
    setAutoChange((prev) => !prev);
  };

  useEffect(() => {
    if (autoChange) {
      const id = setInterval(() => changeColor(getRandomColor()), 1000);
      setIntervalId(id);
    } else if (intervalId) {
      clearInterval(intervalId);
      setIntervalId(null);
    }

    return () => clearInterval(intervalId);
  }, [autoChange]);

  return (
    <div className="random-color-app" style={{ backgroundColor: color }}>
      <h1>Random Color App</h1>
      <div className="buttons-container">
        <button className="color-button" onClick={() => changeColor(getRandomColor())}>
          Change Background Color
        </button>
        <button className="color-button" onClick={undoColor} disabled={history.length <= 1}>
          Undo
        </button>
        <button className="color-button" onClick={toggleAutoChange}>
          {autoChange ? "Stop Auto Change" : "Start Auto Change"}
        </button>
      </div>

      <div className="color-info">
        <div>
          <h2>Current Color:</h2>
          <div className="color-box" style={{ backgroundColor: color }} />
        </div>

        <div>
          <h2>Color History:</h2>
          <ul>
            {history.map((col, index) => (
              <li key={index} style={{ color: col }}>
                {col}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RandomColorApp;
