import { Router } from 'express';
import authRoutes from './authRoutes'
import userRoutes from './userRoutes'
import { authMiddleware } from '../middlewares/authMiddleware';

const router = Router ();

router.use('/auth', authRoutes);
router.use('/users', userRoutes);

export default router;