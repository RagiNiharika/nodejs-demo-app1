const http = require('http');
const port = 3000;

const requestHandler = (req, res) => {
  res.end('Hello from Node.js app automate deployment task1 on EC2!');
};

const server = http.createServer(requestHandler);
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
