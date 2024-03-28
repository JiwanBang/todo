const express = require("express");
const path = require("path");

const app = express();

const RootPath = path.join(__dirname, "..");

app.get("/", (req, res) => {
  res.sendFile(path.join(RootPath, "index.html"));
});

const boardRoot = path.join(__dirname, "..", "board");

app.get("/board", (req, res) => {
  // res.send("게시판 구현중");
  res.sendFile(path.join(boardRoot, "board.html"));
});

app.get("/board.css", (req, res) => {
  // res.send("게시판 구현중");
  res.sendFile(path.join(boardRoot, "board.css"));
});

app.get("/board.js", (req, res) => {
  // res.send("게시판 구현중");
  res.sendFile(path.join(boardRoot, "board.js"));
});

app.listen(3000, () => {
  console.log("express server open of 3000 port");
});
