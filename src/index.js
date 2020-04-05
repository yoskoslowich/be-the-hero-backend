const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);

/**
 * M�todos HTTP
 *
 * GET: Obter recursos
 * POST: Criar recurso
 * PUT: Atualizar recurso
 * DELETE: Remover recurso
 */

/**
 * Tipos de parametros
 *
 * Query Params: Par�metros nomeados enviados na rota ap�s o "?" (Filtros, pagina��o)
 * Route Params: Par�metros utilizados para identificar recursos
 * Request Body: 
 */


