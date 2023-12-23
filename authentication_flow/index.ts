import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello world!");
});

app.listen(3003, () => {
  console.log("Server is listening on port 3003");
});