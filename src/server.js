import express from "express";
import { sequelize } from "./db/index.js";
import cors from "cors";
import studentsRouter from "./services/students/index.js";
import tutorsRouter from "./services/tutors/index.js";
import modulesRouter from "./services/modules/index.js";
import examsRouter from "./services/exam/index.js";
const app = express();

const port = process.env.PORT || 5000;

app.use(cors());

app.use(express.json());
app.use("/students", studentsRouter);
app.use("/tutors", tutorsRouter);
app.use("/modules", modulesRouter);
app.use("/exams", examsRouter);
sequelize
  .sync()
  .then(() => {
    app.listen(port, () => console.log("🚀 Server is running on port ", port));

    app.on("error", (error) =>
      console.log("🚀 Server is crashed due to ", error)
    );
  })
  .catch((e) => console.log());
