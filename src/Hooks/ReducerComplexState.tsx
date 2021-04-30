import React, { ReactElement, useReducer } from 'react';

// insted of state object, use multiple reducer to change multiplre
// state(2 in this case, firstCounter and secondCounter)

const initialCount = {
  firstCounter: 0,
  secondCounter: 10,
};

//  ...state: merge the state otherwise only one state will change
const countReducer = (state: any, action:any): any => {
  switch (action.type) {
    case 'increment1':
      return { ...state, firstCounter: state.firstCounter + action.value };
    case 'decrement1':
      return { ...state, firstCounter: state.firstCounter - action.value };
    case 'increment2':
      return { ...state, secondCounter: state.secondCounter + action.value };
    case 'decrement2':
      return { ...state, secondCounter: state.secondCounter - action.value };
    case 'reset':
      return initialCount;
    default:
      return state;
  }
};

export default function ReducerComplexState(): ReactElement {
  const [count, countDispatch] = useReducer(countReducer, initialCount);

  return (
    <div>
      <div className="useState-example">
        <h2># Complex example of useReducer hook: 2 state</h2>
        <div>
          <div>
            First Count: {count.firstCounter}
          </div>
          <div>
            Second Count: {count.secondCounter}
          </div>
        </div>
        <div className="action">
          <button type="button" className="btn" onClick={() => countDispatch({ type: 'increment1', value: 1 })}>
            Increment by 1
          </button>
          <button type="button" className="btn" onClick={() => countDispatch({ type: 'decrement1', value: 1 })}>
            Decrement by 1
          </button>
          <button type="button" className="btn" onClick={() => countDispatch({ type: 'increment1', value: 5 })}>
            Increment by 5
          </button>
          <button type="button" className="btn" onClick={() => countDispatch({ type: 'decrement1', value: 5 })}>
            Decrement by 5
          </button>
          <button type="button" className="btn" onClick={() => countDispatch({ type: 'increment2', value: 1 })}>
            Increment second-counter by 1
          </button>
          <button type="button" className="btn" onClick={() => countDispatch({ type: 'decrement2', value: 1 })}>
            Decrement second-counter by 1
          </button>
          <button type="button" className="btn" onClick={() => countDispatch({ type: 'reset' })}>
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}
