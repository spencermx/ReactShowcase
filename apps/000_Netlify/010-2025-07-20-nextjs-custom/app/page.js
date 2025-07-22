// app/page.js
export const dynamic = 'force-dynamic';

import DebugTest from './components/DebugTest'; // Adjust path based on your structure

export default function Home() {
  const time = JSON.stringify({ time: new Date().toISOString() });
  const processId = process.pid; // Access the Node.js process ID

  // Log the time and process ID to the server console
  console.log('My time:', time);
  console.log('Process ID:', processId);

  return (
    <div>
      <h1>My Next.js App</h1>
      <p>Server Time: {time}</p>
      <p>Process ID: {processId}</p>
      <DebugTest />
    </div>
  );
}
