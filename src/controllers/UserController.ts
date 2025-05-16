import { Request, Response } from 'express';
import { registerUser } from '../services/userService';

export async function register(req : Request, res: Response) {
    try {
        const user = await registerUser(req.body);
        res.status(201).json({ message: 'Usuário criado', user });
    } catch(error : any) {
        res.status(400).json({ error: error.message });
    }
}