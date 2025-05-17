import { Router } from 'express';
import authRoutes from './authRoutes'
import userRoutes from './userRoutes'
import carRoutes from './carRoutes'
import { authMiddleware } from '../middlewares/authMiddleware';

const router = Router ();

router.use('/auth', authRoutes);
router.use('/users', userRoutes);
router.use('/cars', authMiddleware, carRoutes)

export default router;