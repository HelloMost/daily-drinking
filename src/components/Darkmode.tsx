import { useState, useEffect } from 'react';
import './DarkMode.css';

const Darkmode = () => {
  const [mode, setMode] = useState<string>('light');

  const toggleMode = () => {
    setMode(mode === 'light' ? 'dark' : 'light');
  };

  useEffect(() => {
    document.documentElement.className = mode;
  }, [mode]);

  return (
    <div className="app">
      <button onClick={toggleMode}>Toggle Mode</button>
    </div>
  );
};

export default Darkmode;
