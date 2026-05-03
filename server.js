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
//? get by id
// /users/1
app.get("/products/:id", (req, res) => {
  console.log(req.params);
  const { id } = req.params;
  res.json({
    _id: id,
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

//! REST API 
//? REST -> REPRESENTATIONAL STATE TRANSFER
//? API -> Application Programming Interface  

//* client-server

//* stateless
//  R1 -> U1 -> RE1
//  R2 -> U1 ->

//* res cacheable

// * layered system

// c -> proxy server -> load balancer -> server

// ! resource => //{}
//! endpoint =>   /users/orders/1
//! route => app.get("/products", () => {})
//! representation => json

//!  uses standard http req methods 
//* GET -> get req/ query
//* POST -> create new data
//* PATH -> update  
//* PUT -> update data 
//* DELETE -> remove resource

//! uses standard http response status code
//* 100 -599
//? 100-199 -> informational res
//? 200-299 -> successful res
//? 300-399 -> redirectional res
//? 400-499 -> client side error
//? 500-599 -> server side  error

// * uniform interface
//get-user

// endpoint 
//? resource collections
// /users
// /products 

// single resource
// /users/1

//! parameters
// heep://localhost:8080/products?name=shirt&size=10&page=1&limit=5
//* search/query params => req.quqery => {name:'',email:'',page:'',limit:''}

//* route params =>
//  /users/1 => /users/:id =>  req.params => {id:1}
//  /users/1/orders/1 => /users/:id/orders/:order:id =>  req.params => {id:1}
//* /users/100 => req.params => {xyz:100}




