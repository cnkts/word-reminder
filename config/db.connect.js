const { Sequelize } = require("sequelize");
const dbo = require("./db.config");

const sequelize = new Sequelize(dbo.database, dbo.username, dbo.password, {
  host: dbo.host,
  dialect: dbo.dialect,
});

async function connect() {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}

connect();

module.exports = {
  connect,
  sequelize,
};
