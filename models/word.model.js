const { sequelize } = require("../config/db.connect");
const { DataTypes } = require("sequelize");

const Word = sequelize.define("words", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  word: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  mean: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  category: {
    type: DataTypes.STRING,
    allowNull: true,
  },
});

const createwordtable = async () => {
  sequelize
    .sync()
    .then(() => {
      console.log("word table creates succesfully");
    })
    .catch((error) => {
      console.error("unable to create table", error);
    });
};
module.exports = {
  Word,
  createwordtable,
};
