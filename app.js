const express = require("express");
const app = express();
const routemanager = require("./routes/route.manager");
const { connect } = require("./config/db.connect");
const { createwordtable } = require("./models/word.model");
//ortam değişkenleri
require("dotenv").config();
//Route Yapısı
routemanager(app);
connect();
createwordtable();

app.listen(process.env.PORT, () => {
  console.log(`app is runing on port ${process.env.PORT}`);
});
