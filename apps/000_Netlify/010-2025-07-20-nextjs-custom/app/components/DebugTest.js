"use client"

import React, { useState } from 'react';

const DebugTest = () => {
  const [count, setCount] = useState(0);

  // Function to increment the counter
  const handleIncrement = () => {
    console.log('Increment button clicked, current count:', count);
    setCount((prevCount) => {
      const newCount = prevCount + 1;
      console.log('New count after increment:', newCount);
      return newCount;
    });
  };

  // Function to decrement the counter
  const handleDecrement = () => {
    console.log('Decrement button clicked, current count:', count);
    setCount((prevCount) => {
      const newCount = prevCount - 1;
      console.log('New count after decrement:', newCount);
      return newCount;
    });
  };

  // Conditional message based on count
  const getMessage = () => {
    if (count > 5) {
      return 'Count is greater than 5!';
    } else if (count < 0) {
      return 'Count is negative!';
    } else {
      return 'Count is between 0 and 5.';
    }
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h2>Debug Test Component</h2>
      <p>Current Count: {count}</p>
      <p>Message: {getMessage()}</p>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement} style={{ marginLeft: '10px' }}>
        Decrement
      </button>
    </div>
  );
};

export default DebugTest;
