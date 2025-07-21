import { createServer } from 'http';
import { parse } from 'url';
import next from 'next';

const port = parseInt(process.env.PORT || '3000', 10);
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  createServer((req, res) => {
    const parsedUrl = parse(req.url, true);
    const { pathname } = parsedUrl;

    // Custom route: /api/hello
    // if (pathname === '/api/hello') {
    //   res.setHeader('Content-Type', 'application/json');
    //   res.writeCode = 200;
    //   res.end(JSON.stringify({ message: 'Hello from the custom server!' }));
    //   return;
    // }

    // Custom route: /api/time
    if (pathname === '/api/time') {
      res.setHeader('Content-Type', 'application/json');
      res.writeCode = 200;
      res.end(JSON.stringify({ time: new Date().toISOString() }));
      return;
    }

    // Fallback to Next.js handler for all other routes
    handle(req, res, parsedUrl);
  }).listen(port);

  console.log(
    `> Server listening at http://localhost:${port} as ${
      dev ? 'development' : process.env.NODE_ENV
    }`
  );
});
