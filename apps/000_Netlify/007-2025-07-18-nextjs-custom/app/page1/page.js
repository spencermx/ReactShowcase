// app/page1/page.js
export const dynamic = 'force-dynamic';

export default function Page1() {
  console.log(`Renderinggg /page1 on server at ${new Date().toISOString()}`);
  return (
    <div>
      <h1>Page 1</h1>
      <p>Welcome to the first page!</p>
      <a href="/page2">Go to Page 2</a>
    </div>
  );
}
