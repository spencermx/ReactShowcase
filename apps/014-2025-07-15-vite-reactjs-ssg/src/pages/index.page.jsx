import { useState } from "react";
import { renderToString } from "react-dom/server";
import reactLogo from "../assets/react.svg";
import viteLogo from "/vite.svg";
import "../App.css";

export function Page() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noopener noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/pages/index.page.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export function render(pageContext) {
  const { Page } = pageContext;
  return {
    documentHtml: renderToString(<Page />),
    pageContext: {},
  };
}
