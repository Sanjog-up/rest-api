const express = require("express");
const app = express();
const PORT = 8080;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/products", (req, res) => {
  res.json({ _id: "1", name: "Pant", size: 10 });
});

app.post("/products", (req, res) => {
  res.json({ message: "post created" });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
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

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
