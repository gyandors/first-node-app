const fs = require("fs");

const requestHandler = (req, res) => {
  const url = req.url;
  const method = req.method;

  res.setHeader("content-type", "text/html");

  if (url === "/") {
    res.write("<html>");
    res.write("<head>");
    res.write("<title> Chat </title>");
    res.write("</head>");

    res.write("<body>");
    res.write(`<p> ${fs.readFileSync("chat.txt").toString()} </p>`);
    res.write(
      "<form action='/message' method='POST'> <input type='text' name='message' /> <button>Send</button> </form>"
    );
    res.write("</body>");

    res.write("</html>");
  }

  if (url === "/message" && method === "POST") {
    const data = [];

    req.on("data", (chunk) => {
      data.push(chunk);
    });

    req.on("end", () => {
      const parsedData = Buffer.concat(data).toString();
      const message = parsedData.split("=")[1];
      fs.writeFileSync("chat.txt", message);
    });

    res.writeHead(302, { location: "/" });
  }

  if (url === "/home") {
    res.write("<html>");
    res.write("<head>");
    res.write("<title> Home </title>");
    res.write("</head>");

    res.write("<body>");
    res.write("<h1> Welcome to Home page </h1>");
    res.write("</body>");

    res.write("</html>");
  }

  if (url === "/about") {
    res.write("<html>");
    res.write("<head>");
    res.write("<title> About </title>");
    res.write("</head>");

    res.write("<body>");
    res.write("<h1> Welcome to About page </h1>");
    res.write("</body>");

    res.write("</html>");
  }

  if (url === "/node") {
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
};

module.exports = requestHandler;
