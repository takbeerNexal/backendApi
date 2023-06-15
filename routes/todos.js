import express from "express";
import {
  getTasks,
  createTask,
  updateTask,
  deletTask,
} from "../controllers/todos.js";

const router = express.Router();

router.get("/", getTasks);
router.post("/", createTask);
router.patch("/:id", updateTask);
router.delete("/:id", deletTask);

export default router;
