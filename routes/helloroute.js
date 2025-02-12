const express = require("express");
const route = express.Router();
const hellocontroller = require("../controllers/hello.controller");

route.get("/", hellocontroller.hello);

module.exports = route;
