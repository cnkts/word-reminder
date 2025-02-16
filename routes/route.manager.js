const { getAllWords } = require("../controllers/word.controller");
//const helloroute = require("./helloroute");
const indexroute = require("./index.route");
const wordRoute = require("./word.route");

const routeManager = (app) => {
  //app.use("/hello", helloroute);
  app.use("/", indexroute);
  app.use("/word", wordRoute);
};
module.exports = routeManager;
