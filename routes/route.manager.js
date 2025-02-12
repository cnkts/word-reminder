const helloroute = require("./helloroute");
const indexroute = require("./index.route");

const routeManager = (app) => {
  app.use("/hello", helloroute);
  app.use("/", indexroute);
}
module.exports = routeManager;
