
import { Router } from 'express';

const router = Router();

const productsDB = [
    { id: 1, name: 'Notebook Gamer', category: 'eletronicos', price: 5000 },
    { id: 2, name: 'Mouse Sem Fio', category: 'acessorios', price: 50 },
    { id: 3, name: 'Teclado Mecânico', category: 'acessorios', price: 200 },
    { id: 4, name: 'Monitor 24pol', category: 'eletronicos', price: 1200 },
    { id: 5, name: 'Cadeira Ergonômica', category: 'moveis', price: 800 },
    { id: 6, name: 'Headset RGB', category: 'acessorios', price: 150 },
    { id: 7, name: 'Smartphone', category: 'eletronicos', price: 2500 },
    { id: 8, name: 'Mesa de Escritório', category: 'moveis', price: 400 }
];

// Rota GET /products
router.get('/', (req, res) => {
    // Pegamos os parâmetros da URL (Query Params)
    // Ex: ?category=eletronicos&page=1&limit=3
    const { category, page = 1, limit = 10 } = req.query;

    let result = productsDB;

    // 2. Aplicando Filtro (Se o usuário enviou uma categoria)
    if (category) {
        result = result.filter(item => item.category === category);
    }

    // 3. Aplicando Paginação
    const pageInt = parseInt(page);
    const limitInt = parseInt(limit);
    
    const startIndex = (pageInt - 1) * limitInt;
    const endIndex = pageInt * limitInt;

    const paginatedResult = result.slice(startIndex, endIndex);

    // 4. Resposta Final
    res.json({
        page: pageInt,
        limit: limitInt,
        total: result.length,
        data: paginatedResult
    });
});

export default router;