import express from 'express';
import dotenv from 'dotenv';
import router from './routes/router';
import helmet from 'helmet';
import cors from 'cors';
import { connectDatabase } from './config/database';

dotenv.config();

const corsOption = {
    origin: 'http://localhost:3000',
    credentials: true
}

const app = express();

// security
if (process.env.NODE_ENV === 'production') {
    app.use(helmet()); // force https when prod
} else {
    app.use(helmet({ hsts: false }));
}

app.use(cors(corsOption));

// middlewares
app.use(express.json());

// routes
app.use(router);

// db conn
async function startServer() {
    try {
        await connectDatabase();

        const PORT = process.env.PORT || 5000;
        app.listen(PORT, () => {
            console.log(`Servidor rodadndo na porta ${PORT}`);
        });
    } catch(error) {
        console.error('Erro ao iniciar servidor: ', error);
        process.exit(1);
    }
}

startServer();