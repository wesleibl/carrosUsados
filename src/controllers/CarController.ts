import { Request, Response } from "express";
import { createCar } from "../services/carService";

export async function create(req: Request, res: Response) {
    try{
        const user = req.user;
        const userId = user && typeof user === 'object' ? user.id || user.userId : user;

        const result = await createCar(req.body, userId);
        res.status(201).json(result);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Erro ao adicionar carro' });
    }
}