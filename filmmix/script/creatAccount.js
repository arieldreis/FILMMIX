import express from 'express';
import mysql from 'mysql2/promise';

const app = express();
const PORT = 3050;

// Middleware para ler JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Direcionamento para outra pagina
app.use(express.static('public'));

app.post('/createAccount', async (req, res) => {
    const mydb = mysql.createPool({
        host: "localhost",
        user: "root", 
        password: "",
        database: "FilmMix"
    });
    try{
        const usuario = req.body.name
        const senha = req.body.senhaname
        const cpf = req.body.cpfname
        const email = req.body.emailname
        const nascimento = req.body.nascimentoname
        const estado = req.body.estadosname;
        const [insercaoDados] = await mydb.query(
            'INSERT INTO dadosCliente(usuario, senha, cadPessoaFisico, email, nascimento, estado) VALUES(?, ?, ?, ?, ?, ?)',
            [usuario, senha, cpf, email, nascimento, estado]
        );
        res.redirect('/sucesso.html');
    }catch(error){
        res.status(500).json({
            error: "Erro no banco de dados."
        });
    }
});

app.listen(PORT, () => {
    console.log(`Servidor ativo na porta ${PORT}`);
});