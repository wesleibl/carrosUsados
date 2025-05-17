import mongoose, { Schema } from "mongoose";
import { ICar } from "../types/Car";

const CarSchema = new Schema<ICar>({
    model: { type: String, required: true},
    addons: { type: [String], required: false},
    brand: { type: String, required: true},
    imageUrl: { type: String, required: false},
    transmission: { type: String, required: true},
    year: {type: Number, required: true},
    km: { type: Number, required: true},
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }
});

export const CarModel = mongoose.model<ICar>('Car', CarSchema);
