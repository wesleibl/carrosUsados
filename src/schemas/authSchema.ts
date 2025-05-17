import { z } from 'zod';

export const loginSchema = z.object({
    body: z.object({
        email: z.string({ required_error: 'Email é obrigatório' }).email('Email inválido'),
        password: z.string({ required_error: 'Senha é obrigatória'}).min(6, ' Senha deve ter pelo menos 6 caracteres')
    })
});