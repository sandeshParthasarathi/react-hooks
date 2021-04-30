import React, { ReactElement, useReducer } from 'react';

const initialCount = 0;
const countReducer = (state:number, action:any): any => {
  switch (action) {
    case 'increment':
      return state + 1;
    case 'decrement':
      return state - 1;
    case 'reset':
      return initialCount;
    default:
      return state;
  }
};

export default function ReducerHook(): ReactElement {
  const [count, countDispatch] = useReducer(countReducer, initialCount);

  return (
    <div>
      <div className="useState-example">
        <h2># Simple example of useReducer hook</h2>
        <div>
          Count: {count}
        </div>
        <div className="action">
          <button type="button" className="btn" onClick={() => countDispatch('increment')}>
            Increment
          </button>
          <button type="button" className="btn" onClick={() => countDispatch('decrement')}>
            Decrement
          </button>
          <button type="button" className="btn" onClick={() => countDispatch('reset')}>
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}
