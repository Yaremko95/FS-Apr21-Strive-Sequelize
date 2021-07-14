import { Router } from "express";
import { Student } from "../../db/index.js";
import sequelize from "sequelize";
const { Op } = sequelize;
const router = Router();

// {
//     [Op.or]: [
//       {
//         title: {
//           [Op.like]: 'Boat%'
//         }
//       },
//       {
//         description: {
//           [Op.like]: '%boat%'
//         }
//       }
//     ]
//   }

router
  .route("/")
  .get(async (req, res, next) => {
    try {
      const filters = [];

      const keys = Object.keys(req.query);
      keys.forEach((key) => {
        let element;
        if (key === "age") {
          element = { [key]: { [Op.eq]: parseInt(req.query[key]) } };
        } else {
          element = { [key]: { [Op.substring]: req.query[key] } };
        }

        filters.push(element);
      });
      console.log(filters);

      const data = await Student.findAll({
        attributes: { exclude: ["avatar"] },
        where: filters.length > 0 ? { [Op.or]: filters } : {},
      });
      res.send(data);
    } catch (error) {
      console.log(error);
      next(error);
    }
  })
  .post(async (req, res, next) => {
    try {
      const data = await Student.create(req.body);
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
      const data = await Student.findByPk(req.params.id);

      res.send(data);
    } catch (error) {
      console.log(error);
      next(error);
    }
  })
  .put(async (req, res, next) => {
    try {
      const data = await Student.update(req.body, {
        where: { id: req.params.id },
        returning: true,
      });
      res.send(data[1][0]);
    } catch (error) {
      console.log(error);
      next(error);
    }
  })
  .delete(async (req, res, next) => {
    try {
      const rowsCount = await Student.destroy({ where: { id: req.params.id } });
      if (rowsCount === 0) {
        res.status(404).send("not found");
      } else {
        res.send("ok");
      }
    } catch (error) {
      console.log(error);
      next(error);
    }
  });

export default router;
