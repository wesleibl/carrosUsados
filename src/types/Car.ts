import { Types } from 'mongoose';

export interface ICar {
    brand: string;
    model: string;
    year: number;
    km: number;
    transmission: 'manual' | 'automatic';
    addons?: string[];
    imageUrl?: string;
    userId: string;
}