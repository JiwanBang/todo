const net = require("net");
const fs = require("fs");
const path = require("path");

const { makeReq } = require("./req");
const { makeResponse, redirect, sendFile } = require("./res");

const createRes = (client) => ({
  end: (data) => {
    client.write(makeResponse("text/html", data));
    client.end();
  },
  sendFile: (_path) => {
    const file = fs.readFileSync(_path); //_path 파일을 가져옴
    let type = "text/" + path.extname(_path).slice(1);
    if (type == "text/js") type = "application/javascript";
    console.log(type);
    client.write(sendFile(type, file));
    client.end();
    // 함수 안 sendFile은 res에서 가져옴
    // path.extname(_path): 확장자를 가져옴
  },
});

const app = {
  funclist: [],
  add: (method, path, func) => {
    app.funclist.push({ method, path, func });
  },
  execList: (req, res) => {
    const { method, path } = req.header;
    let isRun = false;
    app.funclist.forEach((callback) => {
      if (method != callback.method) return;
      if (path != callback.path) return;
      callback.func(req, res);
      isRun = true;
    });
    return isRun;
  },
  get: (path, func) => {
    app.add("GET", path, func);
  },
};

const server = net.createServer((client) => {
  client.on("data", (data) => {
    const req = makeReq(data);
    const res = createRes(client);

    if (!app.execList(req, res)) res.end("error");
  });
});

app.listen = (port, func) => {
  server.listen(port, "127.0.0.1", func);
};

module.exports = () => {
  return app;
};
