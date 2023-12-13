require('dotenv').config();
const express = require('express');
const cors = require('cors');
const router = require('./Routes/router');
require('./DB/connection');

const server = express();

server.use(cors());
server.use(express.json());
server.use(router);
server.use('/uploads', express.static('./uploads'));

const PORT = process.env.PORT || 4000;
server.listen(PORT, () => {
  console.log(`Mughub server started at ${PORT} and waiting for client requests!!!`);
});

// Define your routes
server.get('/', (req, res) => {
  res.send(`<h1>Mughub server started</h1>`);
});
