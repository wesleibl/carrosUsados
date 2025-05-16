import { Router } from "express";
import { validate } from "../middlewares/validate";
import { register } from "../controllers/UserController";
import { registerSchema } from "../schemas/userSchemas";

const router = Router();

router.post('/register', validate(registerSchema), register);

export default router;