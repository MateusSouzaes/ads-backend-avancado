// Carrega as variáveis de ambiente definidas no arquivo .env para process.env
import 'dotenv/config';
import products from './routes/products.js';
// Importa o framework Express, usado para criar o servidor HTTP e definir rotas
import express from 'express';


// Cria uma instância da aplicação Express
const app = express();

// Define a porta do servidor: usa a variável de ambiente PORT ou 3000 como padrão
const port = process.env.PORT || 3000;

// Middleware que faz o parsing automático do corpo das requisições com JSON
// Permite acessar req.body em rotas que recebem dados no formato JSON
app.use(express.json());
app.use('/products', products);

// Rota GET /health — usada para verificar se o servidor está no ar (healthcheck)
// Retorna status 200 com o tempo de atividade do processo em segundos
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok', uptime: process.uptime() });
});

// Rota GET /hello — rota simples que retorna uma mensagem de saudação em JSON
app.get('/hello', (req, res) => {
  res.json({ message: 'Hello from Express!' });
});

// Middleware de tratamento de rotas não encontradas (404)
// É executado quando nenhuma rota anterior correspondeu à requisição
app.use((req, res) => {
  res.status(404).json({ error: 'Not Found' });
});

// Middleware de tratamento de erros global
// Captura qualquer erro lançado nas rotas ou middlewares anteriores
// Recebe 4 parâmetros (err, req, res, next) — o Express identifica como error handler por isso
app.use((err, req, res, next) => {
  // Exibe o erro no console (em produção, substituir por um logger estruturado)
  console.error(err);
  // Retorna status 500 com mensagem genérica de erro interno
  res.status(500).json({ error: 'Internal Server Error' });
});

// Inicia o servidor na porta definida e exibe uma mensagem no console ao subir
app.listen(port, () => {
  console.log(`Express em http://localhost:${port}`);
});