import { CarModel } from "../models/Car";
import { ICar } from "../types/Car";
import { Types } from "mongoose";

export async function createCar(carData: ICar, userId: Types.ObjectId) {
    const { model, brand, year, km, transmission, addons, imageUrl, price} = carData;

    const car = new CarModel({ 
        addons, 
        brand, 
        imageUrl, 
        km, 
        model, 
        transmission,
        year,
        price,
        userId
    });
    
    await car.save();

    return { message: 'Carro registrado com sucesso'};
}