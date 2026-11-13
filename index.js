const express = require('express');
const { Client } = require('pg');
const app = express();
const port = 3000;

// Налаштування підключення до PostgreSQL
const client = new Client({
  user: process.env.POSTGRES_USER || 'postgres',
  host: process.env.DB_HOST || 'db', // 'db' - це назва сервісу в docker-compose
  database: process.env.POSTGRES_DB || 'postgres',
  password: process.env.POSTGRES_PASSWORD || 'secret',
  port: 5432,
});

client.connect()
  .then(() => console.log('✅ Успішне з\'єднання з PostgreSQL'))
  .catch(err => console.error('❌ Помилка підключення до БД', err.stack));

app.get('/', (req, res) => {
  res.send('Hello from Dockerized Node.js + Postgres!');
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});