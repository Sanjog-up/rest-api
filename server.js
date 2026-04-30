const http = require("http");
const express = require("express");

const PORT = 8080;


const app = express();

const server = http.createServer(app);

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});
// const handler = (req, res) => {
//   console.log(req.url, req.method);
//   //   res.end("Hello world");
//   const url = req.url;
//   switch (url) {
//     case "/": {
//       res.end("<h1>Home Page</h1>");
//       break;
    
//     }
//     case "/users": {
//       res.end("<h1>Users List</h1>");
//       break;
//     }
//     default: {
//       res.end("<h1>404 Not Found</h1>");
//     }
//   }
// };


// const server = http.createServer(handler);

// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

app.get("/products", (req, res) => {
  res.json({
    _id: "1",
    name: "Pant",
    size: 10,
  });
});

app.post("/products", (req, res) => {
  res.json({
    message: "post uploaded",
  });
});


app.put("/products", (req, res) => {
  res.json({
    message: "product updated",
  });
});

app.delete("/products", (req, res) => {
  res.json({
    message: "product deleted",
  });
});


// app.listen(PORT, () => {
//   console.log(`Server running on http://localhost:${PORT}`);
// });

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log("press ctrl+c to close server");
});