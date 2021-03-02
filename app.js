const express = require("express");

const app = express();

app.use("/app-product", (req, res, next) => {
  res.send(
    '<form action="/product" method="POST"><input type="text" name="title"> <button type="submit">Add Product</button></button></form>'
  );
});

app.use("/product", (req, res, next) => {
  console.log(req.body); //By default, request does not parse the incoming request body
  res.redirect("/");
});

app.use("/", (req, res, next) => {
  res.send("page2");
});

app.listen(3000);
