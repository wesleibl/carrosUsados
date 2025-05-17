import { Router } from "express";
import { validate } from "../middlewares/validateMiddleware";
import { create } from "../controllers/CarController";
import { carSchema } from "../schemas/carSchema";

const router = Router();

router.post('/add',  validate(carSchema), create);

export default router;