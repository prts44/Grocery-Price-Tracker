const express = require('express');
const app = express();
const port = 4000;
const mysql = require('mysql2');
const credentials = require('./credentials.js');
const connection = mysql.createConnection(credentials);

connection.connect();

app.get('/', (req, res) => {
    res.send('Connected to GPT API.');
});

app.get('/stores/', (req, res) => {
    connection.query('SELECT * FROM stores', (err, result, fields) => {
        console.log(result);
        res.send(JSON.stringify(result));
    });
});

app.get('/stores/:id', (req, res) => {
    connection.query(`SELECT * FROM stores WHERE id = ?`, [req.params.id], (err, result, fields) => {
        console.log(result);
        res.send(JSON.stringify(result));
    });
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});