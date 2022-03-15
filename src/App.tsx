import React, { useState } from 'react';
import './App.css';
import { HelloWorld } from './molecules/HelloWorld';

function App() {
  const [isRed, setIsRed] = useState<boolean>(true);
  return (
    <div className="bg-gray-100 min-h-screen min-w-full px-8 py-8">
      <button
        type="button"
        onClick={() => {
          setIsRed(!isRed);
        }}
      >
        Is red?
      </button>
      <HelloWorld isRed={isRed} />
    </div>
  );
}

export default App;
