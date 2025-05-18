import { Request, Response } from "express";
import { createCar } from "../services/carService";
import { CarModel } from "../models/Car";

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

export async function listByUser(req: Request, res: Response) {
    try {
        const user = req.user;
        const userId = typeof user === 'object' ? user.id || user.userId : user;

        const cars = await CarModel.find({ userId });
        res.status(200).json(cars);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Erro ao listar os carros' });
    }
}

export async function updateCar(req: Request, res: Response): Promise<void> {
    try {
        const updates = req.body;
        const { id } = updates;
        const user = req.user;

        if (!user) {
            res.status(500).json({ message: "Erro interno no servidor" });
            return;
        }
        const userId = (req.user as { userId: string }).userId;

        const car = await CarModel.findById(id);
        
        if (!car) {
            res.status(404).json({ message: "Carro não encontrado" });
            return;
        }

        if (car.userId.toString() !== userId) {
            res.status(403).json({ message: "Você não tem permissão para editar este carro" });
            return;
        }

        await CarModel.findByIdAndUpdate(id, updates);
        res.status(200).json({ message: "Carro atualizado com Sucesso" });
    } catch (err) {
        res.status(500).json({ message: "Erro ao atualizar o carro" });
    }
}

export async function carById(req: Request, res: Response) {
    try {
        const { id } = req.body;
        const car = await CarModel.findById(id);
        
        if (!car) {
            res.status(404).json({ message: 'Carro não encontrado' });
            return;
        }

        const { userId, ...carWithoutUserId } = car.toObject();
        res.status(200).json(carWithoutUserId);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Erro ao listar carro informado' });
    }
}

export async function deleteCar(req: Request, res: Response) {
    try {
        const { id } = req.body;
        const userId = (req.user as { userId: string }).userId;

        const deleted = await CarModel.findOneAndDelete({ _id: id, userId });

        if (!deleted) {
            res.status(404).json({ message: "Carro não encontrado ou não pertence ao usuário" });
            return;
        }

        res.status(200).json({ message: "Carro deletado com sucesso" });
        return;
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Erro ao deletar carro" });
        return;
    }
}