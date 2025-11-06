import { Router } from "express";
import studentsController from "../controllers/students.controller.js";
const router = Router();
router.get("/getAll", studentsController.getAll);
router.get("/getOne/:student_id", studentsController.getOne);
router.post("/insertOne", studentsController.insertOne);
router.post("/updateOne/:student_id", studentsController.updateOne);
router.get("/deleteOne/:student_id", studentsController.deleteOne);
export default router;
