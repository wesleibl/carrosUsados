import { CarModel } from "../models/Car";
import { ICar } from "../types/Car";

export async function createCar(carData: ICar) {
    const { model, brand, year, km, transmission, addons, imageUrl, userId} = carData;

    const car = new CarModel({ addons, brand, imageUrl, km, model, transmission, year, userId});
    
    await car.save();

    return { message: 'Carro registrado com sucesso'};
}