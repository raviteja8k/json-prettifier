import React from 'react';
import { BsClipboard, BsCheck } from 'react-icons/bs';

function JsonOutput({ value, onCopy, copied }) {
  const lines = value.split('\n');

  return (
    <div className="card h-100">
      <div className="card-body d-flex flex-column">
        <div className="d-flex justify-content-between align-items-center mb-2">
          <h5 className="card-title mb-0">Prettified JSON</h5>
          <button
            onClick={onCopy}
            className={`btn btn-sm ${copied ? 'btn-success' : 'btn-primary'}`}
          >
            {copied ? (
              <>
                <BsCheck className="me-1" />
                Copied!
              </>
            ) : (
              <>
                <BsClipboard className="me-1" />
                Copy
              </>
            )}
          </button>
        </div>
        <div className="form-control line-numbers font-monospace flex-grow-1 overflow-auto" style={{ resize: 'none' }}>
          {lines.map((line, index) => (
            <span key={index} className="line-content">
              {line}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default JsonOutput;