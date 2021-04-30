import React, { ReactElement } from 'react';
import ComponentE from './ComponentE';

export default function ComponentC(): ReactElement {
  return (
    <div className="componentC">
      Component C
      <ComponentE />
    </div>
  );
}
