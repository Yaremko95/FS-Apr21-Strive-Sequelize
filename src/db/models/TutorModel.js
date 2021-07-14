import sequelize from "./index.js";
import s from "sequelize";
const { DataTypes } = s;

const Tutor = sequelize.define("tutor", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  surname: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  expertise: {
    type: DataTypes.STRING,
    allowNull: true,
    validate: {
      isIn: [["FS", "FE", "BE"]],
    },
  },
});

export default Tutor;
