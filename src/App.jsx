import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import JsonInput from './components/JsonInput';
import JsonOutput from './components/JsonOutput';
import { prettifyJson } from './utils/jsonUtils';

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });
  const [input, setInput] = useState('');
  const [formatted, setFormatted] = useState('');
  const [error, setError] = useState(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [darkMode]);

  useEffect(() => {
    const { formatted, error } = prettifyJson(input);
    setFormatted(formatted);
    setError(error);
  }, [input]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(formatted);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <div className="d-flex flex-column min-vh-100">
      <Header darkMode={darkMode} onToggleDarkMode={() => setDarkMode(!darkMode)} />
      <div className="app-container flex-grow-1">
        <div className="row g-4 h-100">
          <div className="col-md-6">
            <JsonInput
              value={input}
              onChange={setInput}
              error={error}
            />
          </div>
          <div className="col-md-6">
            <JsonOutput
              value={formatted}
              onCopy={handleCopy}
              copied={copied}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;