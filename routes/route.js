const express = require('express');
const route = express.Router();
const {subFinder,loop_clsoe} = require("../controller/subfinder");
const {check_Port,cancel_req} = require('../controller/port');
const sleepOnreq = require("../controller/sleepOn");


route.get("/subdomain",subFinder);
route.post("/cancel",loop_clsoe);
route.get("/port",check_Port);
route.post("/cancel",cancel_req);
route.get("/sleep",sleepOnreq);


module.exports = route;