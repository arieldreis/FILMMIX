import express from 'express';
import mysql from 'mysql2/promise';

const app = express();
const PORT = 3050;

app.post('/', (req, res) => {
    const mydb = mysql.createPool({
        host: "localhost",
        user: "root", 
        password: "",
        database: "FilmMix"
    });
});

app.listen(PORT, () => {
    console.log(`Servidor ativo na porta ${PORT}`);
});