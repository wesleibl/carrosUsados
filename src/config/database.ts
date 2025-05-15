import mongoose from "mongoose";

export async function connectDatabase() {
    try{
        await mongoose.connect(
            `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.pcnudxz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`);
        console.log('Conectado ao MongoDB');
    } catch (error){
        console.error('Erro ao conectar ao mongoDB: ', error);
        process.exit(1);
    }
}