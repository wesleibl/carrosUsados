import express from 'express';
import dotenv from 'dotenv';
import router from './routes/router';
import helmet from 'helmet';
import cors from 'cors';
import morgan from 'morgan';
import fs from 'fs';
import path from 'path';
import { connectDatabase } from './config/database';
import { errorHandler } from './middlewares/errorHandler';

dotenv.config();

const corsOption = {
    origin: 'http://localhost:3000',
    credentials: true
}

const app = express();
app.use(express.json());

// middlewares
if (process.env.NODE_ENV === 'production') {
    app.use(helmet()); // force https when prod
} else {
    app.use(helmet({ hsts: false }));
}

app.use(cors(corsOption));
app.use(errorHandler);

// logs

const logStream = fs.createWriteStream(path.join(__dirname, 'logs', 'access.log'), {
    flags: 'a'
});

app.use(morgan('combined', { stream: logStream }));

// routes
app.use(router);

// db conn
async function startServer() {
    try {
        await connectDatabase();

        const PORT = process.env.PORT || 5000;
        app.listen(PORT, () => {
            console.log(`Servidor rodando na porta ${PORT}`);
        });
    } catch(error) {
        console.error('Erro ao iniciar servidor: ', error);
        process.exit(1);
    }
}

startServer();