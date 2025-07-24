
"use client";
import { useState, useEffect } from "react";

export default function AboutPage() {
  const [data, setData] = useState(null);
  const [isExpanded, setIsExpanded] = useState(false);

  // Fetch data client-side
  useEffect(() => {
    // Simulate API call (replace with real API if needed)
    setTimeout(() => {
      setData({
        title: "About Us",
        description:
          "This is a fully client-side rendered page. All content is fetched and rendered in the browser.",
      });
    }, 1000); // Simulate network delay
  }, []);

  // Show loading state until data is fetched
  if (!data) {
    return <div className="max-w-2xl mx-auto p-4">Loading...</div>;
  }

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{data.title}</h1>
      <p className="mb-4">{data.description}</p>
      <button
        onClick={() => alert("Button clicked! This is client-side interactivity.")}
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Click Me
      </button>
      <div className="mt-4">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700"
        >
          {isExpanded ? "Collapse" : "Expand"} Section
        </button>
        {isExpanded && (
          <div className="mt-2 p-4 bg-gray-100 rounded">
            This is an expandable section toggled client-side.
          </div>
        )}
      </div>
    </div>
  );
}



// "use client";
// import { useState } from "react";
//
// export default function AboutPage() {
//
//   // Static data (simulating build-time data for SSG)
//   const data = {
//     title: "About Us",
//     description:
//       "This is a statically generated page with client-side interactivity. The HTML is pre-rendered at build time, but buttons and toggles work client-side.",
//   };
//
//   // State for expand/collapse
//   const [isExpanded, setIsExpanded] = useState(false);
//
//   return (
//     <div className="max-w-2xl mx-auto p-4">
//       <h1 className="text-3xl font-bold mb-4">{data.title}</h1>
//       <p className="mb-4">{data.description}</p>
//       <button
//         onClick={() => alert("Button clicked! This is client-side interactivity.")}
//         className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
//       >
//         Click Me
//       </button>
//       <div className="mt-4">
//         <button
//           onClick={() => setIsExpanded(!isExpanded)}
//           className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700"
//         >
//           {isExpanded ? "Collapse" : "Expand"} Section
//         </button>
//         {isExpanded && (
//           <div className="mt-2 p-4 bg-gray-100 rounded">
//             This is an expandable section toggled client-side.
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }
