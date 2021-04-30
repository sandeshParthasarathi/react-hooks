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

export default function MultipleReducers(): ReactElement {
  const [count, countDispatch] = useReducer(countReducer, initialCount);
  const [secondCount, secondCountDispatch] = useReducer(countReducer, initialCount);

  return (
    <div>
      <div className="useState-example">
        <h2># Simple example of Multiple useReducers hook</h2>
        <div>
          <div>First Count: {count}</div>
          <div>Second Count: {secondCount}</div>
        </div>
        <div className="action">
          <button type="button" className="btn" onClick={() => countDispatch('increment')}>
            Increment First Count
          </button>
          <button type="button" className="btn" onClick={() => countDispatch('decrement')}>
            Decrement First Count
          </button>
          <button type="button" className="btn" onClick={() => countDispatch('reset')}>
            Reset First Count
          </button>
          <button type="button" className="btn" onClick={() => secondCountDispatch('increment')}>
            Increment Second Count
          </button>
          <button type="button" className="btn" onClick={() => secondCountDispatch('decrement')}>
            Decrement Second Count
          </button>
          <button type="button" className="btn" onClick={() => secondCountDispatch('reset')}>
            Reset Second Count
          </button>
        </div>
      </div>
    </div>
  );
}
