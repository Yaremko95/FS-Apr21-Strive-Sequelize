import sequelize from "./index.js";
import s from "sequelize";
const { DataTypes } = s;

const Module = sequelize.define("module", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

export default Module;
