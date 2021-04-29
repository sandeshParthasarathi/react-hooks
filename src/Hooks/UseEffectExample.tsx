import React, { ReactElement, useEffect, useState } from 'react';

export default function UseEffectExample(): ReactElement {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  }, [count]);

  // this event happens only once at the time of load(mount)
  useEffect(() => {
    console.log(count);
  }, []);

  return (
    <div>
      <div className="useState-example">
        <h2># Simple example of useEffect hook</h2>
        <button type="button" className="btn" onClick={() => setCount(count + 1)}>Click</button>
        <p>
          You clicked <span className="count"> {count} </span> times
        </p>
      </div>
    </div>
  );
}
