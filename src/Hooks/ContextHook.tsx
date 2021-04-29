import React, { ReactElement, useContext, useState } from 'react';

const themes = {
  light: {
    foreground: '#000000',
    background: '#eeeeee',
  },
  dark: {
    foreground: '#ffffff',
    background: '#222222',
  },
};

export default function ContextHook(): ReactElement {
  const [ThemeContext, setThemeContext] = useState(React.createContext(themes.dark));
  const theme = useContext(ThemeContext);
  return (
    <div className="useState-example">
      <h2># Simple example of multiple useContext hook</h2>
      <div style={{ background: theme.background, color: theme.foreground }}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        Aperiam suscipit voluptatibus, doloremque, nulla quam beatae dolores,
        iste obcaecati dolorum pariatur eligendi veritatis inventore laudantium ea blanditiis.
        Quam, commodi? Voluptatem, quo!
      </div>
      <div className="action">
        <button type="button" className="btn" onClick={() => setThemeContext(React.createContext(themes.dark))}>
          Dark
        </button>
        <button type="button" className="btn" onClick={() => setThemeContext(React.createContext(themes.light))}>
          Light
        </button>
      </div>
    </div>
  );
}
