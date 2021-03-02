const express = require("express");

const app = express();

app.use("/app-product", (req, res, next) => {
  console.log("In the middleware");
  res.send("page1");
});

app.use("/", (req, res, next) => {
  console.log("In another middleware");
  res.send("page2");
});

app.listen(3000);
