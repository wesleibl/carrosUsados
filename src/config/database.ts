import mongoose from "mongoose";

export async function connectDatabase() {
    try{
        await mongoose.connect(`${process.env.DB_STRING}`);
        console.log('Conectado ao MongoDB');
    } catch (error){
        console.error('Erro ao conectar ao mongoDB: ', error);
        process.exit(1);
    }
}