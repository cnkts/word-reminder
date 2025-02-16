const express = require("express");
const route = express.Router();
const indexcontroller = require("../controllers/index.controller");

route.get("/", indexcontroller.getIndex);

module.exports = route;
