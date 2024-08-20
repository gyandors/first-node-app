const http = require("http");

const server = http.createServer((req, res) => {
  const url = req.url;

  res.setHeader("Content-type", "text/html");

  if (url === "/") {
    res.write("<html>");
    res.write("<head>");
    res.write("<title> Welcome </title>");
    res.write("</head>");

    res.write("<body>");
    res.write("<h1> Welcome Sachin </h1>");
    res.write("</body>");

    res.write("</html>");
  } else if (url === "/home") {
    res.write("<html>");
    res.write("<head>");
    res.write("<title> Home </title>");
    res.write("</head>");

    res.write("<body>");
    res.write("<h1> Welcome to Home page </h1>");
    res.write("</body>");

    res.write("</html>");
  } else if (url === "/about") {
    res.write("<html>");
    res.write("<head>");
    res.write("<title> About </title>");
    res.write("</head>");

    res.write("<body>");
    res.write("<h1> Welcome to About page </h1>");
    res.write("</body>");

    res.write("</html>");
  } else if (url === "/node") {
    res.write("<html>");
    res.write("<head>");
    res.write("<title> Node </title>");
    res.write("</head>");

    res.write("<body>");
    res.write("<h1> Welcome to Node page </h1>");
    res.write("</body>");

    res.write("</html>");
  }

  res.end();
});

server.listen(4000);
