const express = require("express");
const app = express();
const routemanager = require("./routes/route.manager");
const { connect } = require("./config/db.connect");
const { createwordtable } = require("./models/word.model");
const bodyparser = require("body-parser");

//body-parser
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));
//ortam değişkenleri
require("dotenv").config();
//Route Manager Yapısı
routemanager(app);
//db bağlantısı
//connect();
//word tablosu
//createwordtable();

app.listen(process.env.PORT, () => {
  console.log(`app is runing on port ${process.env.PORT}`);
});
