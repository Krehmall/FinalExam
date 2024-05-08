import express from "express";
import { getTeachers, getPoorestTeachers, createTeacher } from "../modules/teachersModule.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const teachers = await getTeachers();
    console.log({ teachers });

    res.send(teachers);
  } catch (error) {
    return res.status(500).send({ message: error.message || "Internal Server Error" });
  }
});

router.post("/poorestTeachers", async (req, res) => {
  try {
    const { salary } = req.body;
    const teachers = await getPoorestTeachers(salary);
    console.log({ teachers });
    res.send(teachers);
  } catch (error) {
    return res.status(500).send({ message: error.message || "Internal Server Error" });
  }
});

router.post("/", async (req, res) => {
  try {
    const { fullName, passportId, salary, profession } = req.body;
    const newTeacher = await createTeacher(fullName, passportId, salary, profession);
    res.send(newTeacher);
  } catch (error) {
    return res.status(500).send({ message: error.message || "Internal Server Error" });
  }
});

export default router;
