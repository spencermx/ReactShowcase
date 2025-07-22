
export default function TempHomePage(){
  const time = JSON.stringify({ time: new Date().toISOString() });
  const processId = process.pid; // Access the Node.js process ID

  // Log the time and process ID to the server console
  console.log('My time:', time);
  console.log('Process ID:', processId);

  return (
    <h1>temp home page</h1>
  );
}
