import { renderToString } from "react-dom/server";

export function Page() {
  return (
    <div>
      <h1>About Page</h1>
      <p>This is the About page of the Vite + React app.</p>
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

// function About() {
//      return (
//        <div>
//          <h1>About Page</h1>
//          <p>This is the About page of the Vite + React app.</p>
//        </div>
//      );
//    }
//
//    export default About;
