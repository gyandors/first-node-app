const fs = require("fs");

function requestHandler(req, res) {
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
    const body = [];
    req.on("data", (chunk) => {
      body.push(chunk);
      console.log(body);
    });

    req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      let data = parsedBody.split("=");
      console.log(data);
      fs.writeFileSync("text.txt", parsedBody);
    });

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
}

module.exports = { requestHandler, text: "Some hard text" };
