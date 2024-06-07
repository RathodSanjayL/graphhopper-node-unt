import cors from 'cors';
import express from 'express';

import { errorHandler } from './middlewares/globalErrorHandler.js';

import { rootRouter } from './routes/index.js';

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/healthz', (req, res) => {
    return res.send('healthy');
});

app.use('/v1', rootRouter);

app.use(errorHandler);

export { app };
