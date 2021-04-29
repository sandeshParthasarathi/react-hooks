import React, { ReactElement, useState } from 'react';

export default function UseStateExample(): ReactElement {
  const [count, setCount] = useState(0);

  return (
    <div>
      <div className="useState-example">
        <h2># Simple example of useState hook</h2>
        <button type="button" className="btn" onClick={() => setCount(count + 1)}>Click</button>
        <p>
          You clicked <span className="count"> {count} </span> times
        </p>
      </div>
    </div>
  );
}
