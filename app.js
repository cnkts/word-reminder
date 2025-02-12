const express = require("express");
const app = express();

require("dotenv").config();

app.get("/", (req, res) => {
  res.send("merhaba");
  console.log(process.env.PORT);
});

app.listen(process.env.PORT, () => {
  console.log(`app is runing on port ${process.env.PORT}`);
});
