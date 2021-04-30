import React, { ReactElement } from 'react';
import ComponentF from './ComponentF';

export default function ComponentE(): ReactElement {
  return (
    <div className="componentE">
      Component E
      <ComponentF />
    </div>
  );
}
