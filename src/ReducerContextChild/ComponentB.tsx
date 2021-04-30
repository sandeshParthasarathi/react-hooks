import React, { ReactElement } from 'react';
import ComponentD from './ComponentD';

export default function ComponentB(): ReactElement {
  return (
    <div>
      Component B
      <ComponentD />
    </div>
  );
}
