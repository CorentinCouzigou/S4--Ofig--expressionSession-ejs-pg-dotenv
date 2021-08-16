// 1. require le module
const { Client } = require ('pg');

const client = new Client();

client.connect();
// const pg = require('pg');

// // 2. Créer un client
// const client = new pg.Client(process.env.PG_URL);

// // 3. Connecter le client
// client.connect();

// 4. Exporter le client connecté
module.exports = client;