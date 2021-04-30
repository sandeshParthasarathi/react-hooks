import React, { ReactElement, useReducer } from 'react';
import ComponentA from '../ReducerContextChild/ComponentA';
import ComponentB from '../ReducerContextChild/ComponentB';
import ComponentC from '../ReducerContextChild/ComponentC';

// to share state between components

export const CountContext = React.createContext<any>({});

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

export default function ReducerWithContext(): ReactElement {
  const [count, dispatch] = useReducer(countReducer, initialCount);
  return (
    <div className="useState-example">
      <div>
        <h2># Simple example of useReducer with useContext hook</h2>
      </div>
      <CountContext.Provider value={{ countState: count, countDispatch: dispatch }}>
        <div className="parent">
          <h3>Parent Component</h3>
          <div>Count: {count}</div>
          <div className="reducer-context-wrapper">
            <div className="childComponent">
              <ComponentA />
            </div>
            <div className="childComponent">
              <ComponentB />
            </div>
            <div className="childComponent">
              <ComponentC />
            </div>
          </div>
        </div>
      </CountContext.Provider>
    </div>
  );
}
