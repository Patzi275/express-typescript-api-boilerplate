import { Router } from "express";
import { createUser, loginUser } from "../controllers/users.controller";
import registerValidator from "../middlewars/register.validator";
import loginValidator from "../middlewars/login.validator";

const router = Router();

router.post('/register', registerValidator, createUser);
router.post('/login', loginValidator, loginUser);
router.post('/refresh-token', () => {});

export default router;