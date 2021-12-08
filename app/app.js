// 모듈
const express = require('express');
const app = express();
const bodyParser = require("body-parser");

// 라우팅
const router = require("./src/routes");

// 앱 세팅
app.set("views", __dirname + "/src/views");
app.set("view engine", "ejs");
app.use(express.static(`${__dirname}/src/public`));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use("/", router);
app.use(express.static( __dirname + "/src/views"));

module.exports = app;