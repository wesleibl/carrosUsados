import { Request, Response, NextFunction } from "express";
import jwt from 'jsonwebtoken';

export function authMiddleware( req: Request, res: Response, next: NextFunction): void {
    const authHeader = req.headers.authorization;

    if(!authHeader?.startsWith('Bearer ')) {
        res.status(401).json({ message: 'Token não informado' })
        return;
    }

    const token = authHeader.split(' ')[1];

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET as string);
        req.user = decoded;
        next();    
    } catch (err) {
        res.status(401).json({ message: 'Token inválido' });
        return 
    }
}