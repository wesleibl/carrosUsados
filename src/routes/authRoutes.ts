import { Router } from 'express';
import { validate } from "../middlewares/validateMiddleware";
import { login } from '../controllers/AuthController';
import { loginSchema } from "../schemas/authSchema";

const router = Router();

router.post('/login', validate(loginSchema), login);

export default router;