const express = require("express");
const app = express();
const config = require("./config");
const port = config.serverPort;
// const host = "127.0.0.1";
const host = "127.0.0.1";
require("./grpc");

app.listen(port, host, () => {
  console.log("Express: Listening to: " + host + ":" + port);
});

app.get("/", (req, res, next) => {
  res.send("Response From Home");
});

app.get("/json", (req, res, next) => {
  res.send({
    data: [1, 2, 3]
  });
});
