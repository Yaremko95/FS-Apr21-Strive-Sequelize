import sequelize from "./index.js";
import s from "sequelize";
const { DataTypes } = s;

const Exam = sequelize.define("exam", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  moduleId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

export default Exam;
