const express = require('express');
const app = express();
const sub_list = require("./subdom-list/subdom");
const route = require("./routes/route");
const cors = require('cors');
// const cap = require('./midlleware/capture');

app.use(cors());
app.use(express.json());
// app.use(cap);

console.log(sub_list);

app.use("/api",route);


module.exports = app;