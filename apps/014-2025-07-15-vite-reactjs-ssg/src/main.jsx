import { hydrateRoot } from 'react-dom/client';
import { getPage } from 'vite-plugin-ssr/client';
import App from './App.jsx';
import './index.css';

async function hydrate() {
  const { Page, pageContext } = await getPage();
  hydrateRoot(
    document.getElementById('root'),
    <App>
      <Page {...pageContext} />
    </App>
  );
}

hydrate();

// No explicit rendering logic here; vite-plugin-ssr handles it via page files


// import { createRoot } from "react-dom/client";
// import { createPageRenderer } from "vite-plugin-ssr/client";
// import App from "./App.jsx";
// import "./index.css";
//
// const { hydrate, render } = createPageRenderer({ App });
//
// createRoot(document.getElementById("root")).render(<App />);

// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'
//
// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )
