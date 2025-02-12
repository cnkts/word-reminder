const express = require("express");
const app = express();
const routemanager = require("./routes/route.manager");

//ortam değişkenleri
require("dotenv").config();
//Route Yapısı
routemanager(app);

app.listen(process.env.PORT, () => {
  console.log(`app is runing on port ${process.env.PORT}`);
});
