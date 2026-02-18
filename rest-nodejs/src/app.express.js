import 'dotenv/config';

import express from 'express';
import productsRouter from './routes/products.js';
import cors from 'cors';
import helmet from 'helmet';



const app = express();
const port = process.env.PORT || 3000;

//Middlewares Globais
app.use(express.json());
app.use(cors());
app.use(helmet());



// Rotas
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok', uptime: process.uptime() });
});

app.get('/hello', (req, res) => {
  res.json({ message: 'API REST com Node.Js funcionado!' });
});

app.use('/products', productsRouter);

app.use((req, res) => {
  res.status(404).json({ error: 'Not Found' });
});

//Error Handler
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: 'Internal Server Error' });
});

app.listen(port, () => {
  console.log(`Express em http://localhost:${port}`);
});