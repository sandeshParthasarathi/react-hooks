import React, { ReactElement, useContext } from 'react';
import { CountContext } from '../Hooks/ReducerWithContext';

export default function ComponentD(): ReactElement {
  const { countState, countDispatch } = useContext(CountContext);
  return (
    <div className="counterChild">
      <div>Count D: {countState}</div>
      <div className="counterChildActions">
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
  );
}
