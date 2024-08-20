const fs = require("fs");

function requestHandler(req, res) {
  const url = req.url,
    method = req.method;

  if (url === "/") {
    res.setHeader("Content-Type", "text/html");

    res.write("<html>");
    res.write("<head> <title>Form</title> </head>");
    res.write(
      "<body> <h1>User Form</h1> <form action='/create-user' method='POST'> <input type='text' name='fname' placeholder='Enter your first name'> <input type='text' name='lname' placeholder='Enter your second name'> <button type='submit'>Send</button> </form> <div> <a href='/users'>Users</a> </div> </body>"
    );
    res.write("</html>");

    res.end();
  }

  if (url === "/users") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head> <title>Users</title> </head>");
    res.write(
      "<body> <h1>Users</h1> <ul> <li>Sachin</li> <li>Shiva</li> <li>Sanvi</li> </ul> <div> <a href='/'>Go back</a> </div> </body>"
    );
    res.write("</html>");

    res.end();
  }

  if (url === "/create-user" && method === "POST") {
    const body = [];
    req.on("data", (chunk) => {
      body.push(chunk);
    });

    req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      fs.writeFileSync("text.txt", parsedBody);
    });

    res.statusCode = 302;
    res.setHeader("Location", "/");
    res.end();
  }
}

module.exports = { requestHandler, text: "Some hard text" };
