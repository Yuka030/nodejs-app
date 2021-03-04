const express = require("express");

const router = express.Router();

router.get("/", (req, res, next) => {
  res.send("page2");
});

module.exports = router;
