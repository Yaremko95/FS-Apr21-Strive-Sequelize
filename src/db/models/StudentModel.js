import sequelize from "./index.js";
import s from "sequelize";
const { DataTypes } = s;

const Student = sequelize.define("student", {
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
  age: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  avatar: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

export default Student;
