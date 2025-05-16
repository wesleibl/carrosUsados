import { Request, Response } from "express";
import { loginUser } from "../services/authService";

export async function login(req: Request, res: Response) {
    try {
        const { email, password } = req.body;
        const token = await loginUser(email, password);
        res.json({ token });
    } catch (error: any) {
        res.status(401).json({ error: error.message });
    }
}