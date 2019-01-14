// centos中部署上传.. pm2 start app.js
// pm2 stop app
//定义目录
const fs = require("fs");
const path = require("path");
const express = require("express");
const http = require("http");
const https = require("https");
const app = express();
//vue目录
app.use(express.static(path.resolve(__dirname, "./dist")));

app.get("/", function(req, res) {
  const html = fs.readFileSync(
    path.resolve(__dirname, "./dist/index.html"),
    "utf-8"
  );
  res.send(html);
});

const options = {
  key: fs.readFileSync("./https/www.vrfe.top.key"),
  cert: fs.readFileSync("./https/www.vrfe.top.pem")
};
//定义启动的端口号
app.listen(80);
// http.createServer(app).listen(80);
// https.createServer(options, app).listen(443);
