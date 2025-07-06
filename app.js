const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to our home page");
    return;
  }
  if (req.url === "/about") {
    res.end("Welcome to our about page");
    return;
  }
  res.end(`
        <h1>Oops!</h1>
        <p>We can't seem to find the page you are looking for</p>
        <a href="/">Back Home</a>
    `);
  return;
});

console.log("Server listening on port 5000");

server.listen(5000);
