import express from 'express';
import mysql from 'mysql2.promise'

const app = express();
const port = 3051;

app.post();

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})