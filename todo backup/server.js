const express = require("express");
const morgan = require("morgan");
const dotenv = require("dotenv");
const path = require("path");

const board = [{ id: 1, title: "시험용", posting: "", createdAt: "" }];

dotenv.config();

const app = express();
app.set("port", process.env.PORT || 3000);

app.use((req, res, next) => {
  if (process.env.NODE_ENV == "deploy") morgan("combined")(req, res, next);
  else morgan("combined")(req, res, next);
});

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/", express.static("todoBoard"));

app.post("/", (req, res) => {
  res.send(
    JSON.stringify((item, idx) => ({
      title: item.title,
      posting: item.posting,
    }))
  );
});

app.post("/write", (req, res) => {});

app.listen(app.get("port")),
  () => {
    console.log("open server", app.get("port"));
  };
