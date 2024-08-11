const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  // console.log(req.url, req.method, req.headers);

  const url = req.url,
    method = req.method;

  if (url === "/") {
    res.setHeader("Content-Type", "text/html");

    res.write("<html>");
    res.write("<head> <title>Form</title> </head>");
    res.write(
      "<body> <form action='/message' method='POST'> <input type='text' name='fname'> <input type='text' name='lname'> <button type='submit'>Send</button> </form> </body>"
    );
    res.write("</html>");

    return res.end();
  }

  if (url === "/message" && method === "POST") {
    fs.writeFileSync("text.txt", "Dummy Text");
    res.statusCode = 302;
    res.setHeader("Location", "/");
    return res.end();
  }

  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head> <title>Hello Node.js</title> </head>");
  res.write("<body><h1>Hello World</h1></body>");
  res.write("</html>");
  res.end();
});

server.listen(3000);
