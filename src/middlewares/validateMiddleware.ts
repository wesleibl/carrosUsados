import { RequestHandler } from "express";
import { AnyZodObject } from "zod";

export const validate = (schema: AnyZodObject): RequestHandler => {
    return (req, res, next) => {
        const result = schema.safeParse({
                body: req.body,
                query: req.query,
                params: req.params
        });

        if (!result.success) {
            const errors = result.error.errors.map((err) => ({
                path:err.path.join("."),
                message: err.message,
            }));
            res.status(400).json({errors});
            return 
        }

        next();
    }
}