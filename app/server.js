const express = require("express");
const mysql = require("mysql2/promise");

const app = express();
const port = 3000;

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 5,
});

app.get("/", async (_req, res) => {
  const [rows] = await pool.query("SELECT message FROM app_messages LIMIT 1");
  res.json({
    status: "ok",
    service: "dockerized-multi-container-web-application",
    databaseMessage: rows[0]?.message || "Database is connected",
  });
});

app.listen(port, () => {
  console.log(`API listening on port ${port}`);
});
