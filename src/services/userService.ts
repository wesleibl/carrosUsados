import bcrypt from 'bcrypt';
import { UserModel } from '../models/User';
import { IUser } from '../interfaces/User';

export async function registerUser(userData: IUser) {
    const { name, email, password } = userData;

    const existingUser = await UserModel.findOne({ email });
    if (existingUser) {
        throw new Error('E-mail já esta em uso');
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new UserModel({ name, email, password : hashedPassword });
    await user.save();

    return { message: 'Usuário registrado com sucesso'};
}