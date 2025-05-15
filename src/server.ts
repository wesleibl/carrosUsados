import app from './app';
import dotenv from 'dotenv';
import { connectDatabase } from './config/database';

dotenv.config();

const PORT = process.env.PORT || 3000;

async function startServer() {
    try{
        await connectDatabase();
        app.listen(PORT, () => {
            console.log(`Servidor rodando na porta ${PORT}`);
        });
    } catch (error) {
        console.error('Erro ao iniciar a aplicação: ', error)
    }
}

startServer();