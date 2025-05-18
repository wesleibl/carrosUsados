import { Router } from "express";
import { validate } from "../middlewares/validateMiddleware";
import { carById, create, deleteCar, listByUser, updateCar} from "../controllers/CarController";
import { carSchema } from "../schemas/carSchema";
import { authMiddleware } from "../middlewares/authMiddleware";

const router = Router();

router.post('/add', validate(carSchema), create);
router.post('/updateByid', validate(carSchema), updateCar)
router.post('/findCarById', carById)
router.post('/deleteCarById', deleteCar)

router.get('/carsById', listByUser);

export default router;