import { Router } from "express";
import { createUser } from "../controllers/users.controller";
import registerValidator from "../middlewars/register.validator";

const router = Router();

router.post('/register', registerValidator, createUser);

export default router;