"use strict";
exports.__esModule = true;
var express = require("express");
var app = express();
var IP_ADDR = process.env.OPENSHIFT_NODEJS_IP || "0.0.0.0";
var PORT = process.env.OPENSHIFT_NODEJS_PORT || 8080;
app.all("/**", function (req, res) {
    console.log("received request from " + req.ip + " to " + req.url);
    res.write("req.url:" + req.url + "\n");
    req.pipe(res);
});
app.listen(PORT, IP_ADDR, function () {
    console.log("Server listening on port " + PORT + " for host " + IP_ADDR);
});
