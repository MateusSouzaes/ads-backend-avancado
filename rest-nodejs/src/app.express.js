import 'dotenv/config';
import express from 'express';

const app = express();
const port = process.env.PORT || 3000;

// Middlewares essenciais
app.use(express.json());

// Healthcheck
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok', uptime: process.uptime() });
});

// Rota simples
app.get('/hello', (req, res) => {
  res.json({ message: 'Hello from Express!' });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: 'Not Found' });
});

// Error handler
app.use((err, req, res, next) => {
  console.error(err); // trocar por logger estruturado em prod
  res.status(500).json({ error: 'Internal Server Error' });
});

app.listen(port, () => {
  console.log(`Express em http://localhost:${port}`);
});