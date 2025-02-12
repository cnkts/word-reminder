const express = require("express");
const route = express.Router();
const indexcontroller = require("../controllers/hello.controller");

route.get("/", indexcontroller.index);

module.exports = route;
