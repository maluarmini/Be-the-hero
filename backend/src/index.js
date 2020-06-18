const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
// ANOTAÇÔES //
// rotas / recursos

// Metodos HTTP:

// Get : Buscar/listar uma informação do back-end
// Post : Criar uma informação no back-end
// Put : Alterar uma informaçao no back-end
// Delete: Deletar uma informação no back-end

// Tipos de Parametros:

// Query Params: Parâmetros nomeados enviados na rota apos o "?" (Filtros, paginação)
// Route Params: Parâmetros utilizados para identificar recursos
// Request Body: Corpo da requisição, utilizado para criar ou alterrar recursos

// Bancos de Dados:

// SQL
// NoSQL
// Query Builder Knex.js: npm instal knex -> npm install sqlite3 -> npx knex init


app.listen(3333);

