import React from 'react';

function JsonInput({ value, onChange, error }) {
  return (
    <div className="card h-100">
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">Input JSON</h5>
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="form-control font-monospace flex-grow-1"
          style={{ resize: 'none' }}
          placeholder="Paste your JSON here..."
        />
        {error && (
          <div className="alert alert-danger mt-2">
            {error}
          </div>
        )}
      </div>
    </div>
  );
}

export default JsonInput;