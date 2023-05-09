import React, { useState } from 'react';
function IncrementFunc() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <button className='increment' onClick={() => setCount(count + 1)}>
        You clicked me {count} times.
      </button>
    </div>
  );
}

export default IncrementFunc;

export function IncrementFuncMultiStates() {
  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(1);
  return (
    <div>
      <button className='increment' onClick={() => setCount(count + 1)}>
        You clicked me {count + count1} times
      </button>
    </div>
  );
}
