import { z } from 'zod';

export const carSchema = z.object({
    body: z.object({
        model: z.string().min(1, "Modelo é obrigatório"),
        brand: z.string().min(1, "Marca é obrigatória"),
        km: z.number({
                required_error: "Quilometragem é obrigatória",
                invalid_type_error: "Quilometragem precisa ser numérica",
            })
            .positive('Quilometragem não pode ser menor que 0')
            .int(),
        year: z.number()
            .int()
            .gte(1900, "Ano inválido")
            .lte(new Date().getFullYear(), "Ano inválido"),
        transmission: z.enum(["manual", "automatic"], {
            required_error: "Tipo de câmbio é obrigatório",
            invalid_type_error: "Câmbio inválido"
        }),
        addons: z.array(z.string()).optional(),
        price: z.number({
            required_error: "Preço é obrigatório",
            invalid_type_error: "Preço precisa ser numérico"
        }).positive('Preço não pode ser menor que 0'),
    })
})