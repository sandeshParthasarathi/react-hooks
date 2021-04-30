import React, { ReactElement } from 'react';

import './App.css';
import ContextHook from './Hooks/ContextHook';
import MultipleReducers from './Hooks/MultipleReducers';
import MultiUseState from './Hooks/MultiUseState';
import ReducerComplexState from './Hooks/ReducerComplexState';
import ReducerHook from './Hooks/ReducerHook';
import ReducerWithContext from './Hooks/ReducerWithContext';
import UseEffectExample from './Hooks/UseEffectExample';
import UseStateExample from './Hooks/UseStateExample';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Props {
}

// eslint-disable-next-line no-empty-pattern
export default function App({}: Props): ReactElement {
  return (
    <div className="wrapper">
      <div className="container">
        <UseStateExample />
      </div>
      <div className="container">
        <MultiUseState />
      </div>
      <div className="container">
        <UseEffectExample />
      </div>
      <div className="container">
        <ContextHook />
      </div>
      <div className="container">
        <ReducerHook />
      </div>
      <div className="container">
        <ReducerComplexState />
      </div>
      <div className="container">
        <MultipleReducers />
      </div>
      <div className="container">
        <ReducerWithContext />
      </div>
    </div>

  );
}
