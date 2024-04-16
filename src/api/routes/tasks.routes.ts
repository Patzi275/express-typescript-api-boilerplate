import { Router } from "express";
import { createTask, deleteTask, getAllTasks, getTask, updateTask } from "../controllers/tasks.controller";

const router = Router();

router.post('/', createTask);
router.get('/', getAllTasks);
router.get('/:id', getTask);
router.put('/:id', updateTask);
router.delete('/:id', deleteTask);

export default router;