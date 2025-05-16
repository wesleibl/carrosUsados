import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { UserModel } from '../models/User';
import { IUser } from '../interfaces/User';

export async function loginUser(email: string, password: string) {
    const user = await UserModel.findOne({ email });
    
    if (!user) throw new Error('Email ou senha inválidos');

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) throw new Error('Email ou senha inválidos');

    const token = jwt.sign(
        { userId: user._id },
        process.env.JWT_SECRET as string,
        { expiresIn: '7d'}
    );

    return { token }
}