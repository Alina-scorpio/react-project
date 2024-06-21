import React, { useState } from 'react';

const StatefulComponent = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Stateful Component</h2>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default StatefulComponent;
