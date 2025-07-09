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
    try{
        const usuario = req.body.
        const senha = req.body.
        const cpf = req.body.
        const email = req.body.
        const nascimento = req.body.
        const cidade = req.body.
        const estado = req.body.
        const [insercaoDados] = await mydb.query(
            'INSERT INTO dadosCliente() VALUES()',
            []
        );
    }catch(error){
        res.status(500).json({
            error: "Erro no banco de dados."
        });
    }
});

app.listen(PORT, () => {
    console.log(`Servidor ativo na porta ${PORT}`);
});