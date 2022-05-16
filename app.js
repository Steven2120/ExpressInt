const express = require("express");
const app = express();
const port = 3001;

app.get("/", (req, res) => {
  res.status(200).send("Stevens");
});

app.get("/order", (req, res) => {
  res.status(201).send("Welcome to the order page!");
});

app.get("*", (req, res) => {
  res.status(404).send("Page not found");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
