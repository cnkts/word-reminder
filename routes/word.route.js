const express = require("express");
const route = express.Router();
const wordController = require("../controllers/word.controller");

route.get("/", wordController.getAllWords);
route.get("/:id", wordController.getWord);
route.post("/", wordController.createWord);
route.put("/:id", wordController.updateWord);
route.delete("/:id", wordController.deleteWord);

module.exports = route;
