const express = require('express');
const route = express.Router();
const {subFinder,loop_clsoe} = require("../controller/subfinder");
const {check_Port,cancel_req} = require('../controller/port');


route.get("/subdomain",subFinder);
route.get("/cancel",loop_clsoe);
route.get("/port",check_Port);
route.get("/cancel",cancel_req);


module.exports = route;