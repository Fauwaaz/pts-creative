const express = require('express');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();



app.prepare().then(() => {
  const server = express();
  const port = 3000;
  // Add your Express routes here

  // Handle all other routes with Next.js
  server.get('/hello', (req, res) => {
    res.send('Hello from Express!');
  });

 
  server.all('*', (req, res) => {
    return handle(req, res);
  });

  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});