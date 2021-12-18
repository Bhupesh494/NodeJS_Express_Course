const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("welcome to home page");
  } else if (req.url === "/about") {
    res.end("This is About page.");
  }
  res.end(`
      <h1>Page Not Found</h1>
      <p>Please try again later.</p>
      <a href="/">back to home page</a>
      `);
});

server.listen(5000);
