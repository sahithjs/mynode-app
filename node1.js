const http = require('http');
const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  const msg = 'Hello Sampath...Happy New Year 2025!\n'
  res.end(msg);
});

server.listen(port, () => {
  console.log(`server running on http://localhost:${port}/`);
});