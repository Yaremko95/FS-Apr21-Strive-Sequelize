import { Router } from "express";
import { Tutor } from "../../db/index.js";
const router = Router();

router
  .route("/")
  .get(async (req, res, next) => {
    try {
    } catch (error) {
      console.log(error);
      next(error);
    }
  })
  .post(async (req, res, next) => {
    try {
      const records = [
        { name: "Riccardo", surname: "Gullin", expertise: "BE" },
        { name: "Stefano", surname: "Casasola", expertise: "FE" },
        { name: "Stefano", surname: "Miceli", expertise: "FE" },
      ];

      const data = await Tutor.bulkCreate(records);
      res.send(data);
    } catch (error) {
      console.log(error);
      next(error);
    }
  });

router
  .route("/:id")
  .get(async (req, res, next) => {
    try {
    } catch (error) {
      console.log(error);
      next(error);
    }
  })
  .put(async (req, res, next) => {
    try {
    } catch (error) {
      console.log(error);
      next(error);
    }
  })
  .delete(async (req, res, next) => {
    try {
    } catch (error) {
      console.log(error);
      next(error);
    }
  });

export default router;
