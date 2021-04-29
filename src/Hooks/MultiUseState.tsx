import React, { ReactElement, useState } from 'react';

let status = false;

export default function MultiUseState(): ReactElement {
  const [age, setAge] = useState(42);
  const [fruit, setFruit] = useState('banana');
  const [todos, setTodos] = useState([{ text: 'Learn Hooks' }]);

  const handleChange = (): any => {
    status = !status;
    if (status) {
      setAge(27);
      setFruit('halasu');
      setTodos([{ text: 'test' }]);
    } else {
      setAge(28);
      setFruit('halasu');
      setTodos([{ text: 'test' }]);
    }
  };

  return (
    <div className="useState-example">
      <h2># Simple example of multiple useState hook</h2>
      <ul>
        <li>{age}</li>
        <li>{fruit}</li>
        {
          todos.map((item: any) => (
            <li key={`${item.text}`}>{item.text}</li>
          ))
        }
      </ul>
      <button type="button" className="btn" onClick={handleChange}>Click</button>
    </div>
  );
}
