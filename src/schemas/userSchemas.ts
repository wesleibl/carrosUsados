import { z } from 'zod'

export const registerSchema = z.object({
    body: z.object({
        email: z.string({ required_error: "Email é obrigatório" }).email("Email inválido"),
        password: z.string({ required_error: "Senha obrigatória" }).min(6, "Mínimo 6 caracteres"),
        name: z.string({ required_error: "Nome é obrigatório" }).min(1, "Nome não pode estar vazio"),
    }),
});