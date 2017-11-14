import express = require("express");
import crypto = require("crypto");

let app = express();
let IP_ADDR = process.env.OPENSHIFT_NODEJS_IP || "0.0.0.0";
let instanceId = crypto.randomBytes(8).toString("hex");

let PORT = process.env.OPENSHIFT_NODEJS_PORT || 8080;

app.all("/**",(req, res) => {
    console.log(`${instanceId}: received request from ${req.ip} to ${req.url}`);
    res.write(`req.url:${req.url}\n`);
    req.pipe(res);
})

app.listen(PORT, IP_ADDR, () => {
    console.log(`${instanceId}: Server listening on port ${PORT} for host ${IP_ADDR}`);
})