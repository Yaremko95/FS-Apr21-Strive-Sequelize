import sequelize from "./models/index.js";
import Student from "./models/StudentModel.js";
import Tutor from "./models/TutorModel.js";
import Module from "./models/ModuleModel.js";
import Exam from "./models/ExamModel.js";

Module.hasMany(Exam); // => moduleId
Exam.belongsTo(Module);
Module.belongsToMany(Student, {
  through: "student_module",
  timestamps: false,
});

Module.belongsToMany(Tutor, { through: "tutor_module", timestamps: false });

Student.beforeValidate((user) => {
  console.log({ user });
  if (!user.avatar) {
    user.avatar = `https://${user.name}-${user.surname}.png`;
  }
});
export { sequelize, Student, Tutor, Module, Exam };
