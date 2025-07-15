import { renderToString } from "react-dom/server";

export function Page() {
  return (
    <div>
      <h1>Contact Page</h1>
      <p>This is the Contact page of the Vite + React app.</p>
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

// import { hydrateRoot } from "react-dom/client";
//
// export function Page() {
//   return (
//     <div>
//       <h1>Contact Page</h1>
//       <p>This is the Contact page of the Vite + React app.</p>
//     </div>
//   );
// }
//
// export function render({ Page }) {
//   hydrateRoot(document.getElementById("root"), <Page />);
// }

// function Contact() {
//      return (
//        <div>
//          <h1>Contact Page</h1>
//          <p>This is the Contact page of the Vite + React app.</p>
//        </div>
//      );
//    }
//
//    export default Contact;
