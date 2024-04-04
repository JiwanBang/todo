const express = require("express");
const path = require("path");

const app = express();
const board = [];

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/", express.static("board"));

app.post("/", (req, res) => {
  res.send(
    JSON.stringify((item, idx) => ({
      title: item.title,
      posting: item.posting,
    }))
  );
});

// const RootPath = path.join(__dirname, "/board");

// app.get("/", (req, res) => {
//   res.sendFile(path.join(RootPath, "index.html"));
// });

// app.get("/view.css", (req, res) => {
//   res.sendFile(path.join(RootPath, "view.css"));
// });

// app.get("/view.js", (req, res) => {
//   res.sendFile(path.join(RootPath, "view.js"));
// });

app.listen(3000, () => {
  console.log("express server open of 3000 port");
});
