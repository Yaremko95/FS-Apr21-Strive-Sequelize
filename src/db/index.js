import sequelize from "./models/index.js";
import Student from "./models/StudentModel.js";
import Tutor from "./models/TutorModel.js";
import Module from "./models/ModuleModel.js";
import Exam from "./models/ExamModel.js";

Module.hasMany(Exam); // => moduleId
Exam.belongsTo(Module);

Student.beforeCreate((user) => {
  if (!user.avatar) {
    user.avatar = `https://${user.name}-${user.surname}`;
  }
});

export default { sequelize, Student, Tutor, Module, Exam };
