const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);

/**
 * Métodos HTTP
 *
 * GET: Obter recursos
 * POST: Criar recurso
 * PUT: Atualizar recurso
 * DELETE: Remover recurso
 */

/**
 * Tipos de parametros
 *
 * Query Params: Parâmetros nomeados enviados na rota após o "?" (Filtros, paginação)
 * Route Params: Parâmetros utilizados para identificar recursos
 * Request Body: 
 */


