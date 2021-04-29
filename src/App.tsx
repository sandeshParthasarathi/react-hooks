import React, { ReactElement } from 'react';

import './App.css';
import ContextHook from './Hooks/ContextHook';
import MultiUseState from './Hooks/MultiUseState';
import UseEffectExample from './Hooks/UseEffectExample';
import UseStateExample from './Hooks/UseStateExample';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Props {
}

// eslint-disable-next-line no-empty-pattern
export default function App({}: Props): ReactElement {
  return (
    <div>
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
    </div>

  );
}
