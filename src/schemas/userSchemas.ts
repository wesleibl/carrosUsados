import { z } from 'zod'

export const registerSchema = z.object({
    body: z.object({
        email: z.string({ required_error: "Email é obrigatório" }).email("Email inválido"),
        password: z.string({ required_error: "Senha obrigatória" }).min(6, "Mínimo 6 caracteres"),
         confirmPassword: z.string({ required_error: "Confirmação de senha obrigatória" }),
        name: z.string({ required_error: "Nome é obrigatório" }).min(1, "Nome não pode estar vazio"),
    }).refine((data) => data.password === data.confirmPassword, {
        message: "As senhas não coincidem",
        path: ["confirmPassword"],
    }),
});