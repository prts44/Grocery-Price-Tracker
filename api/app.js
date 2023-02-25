const express = require('express');
const app = express();
const port = 4000;
const mysql = require('mysql2');
const credentials = require('./credentials.js');
const connection = mysql.createConnection(credentials);
const cors = require('cors');
app.use(cors({
    origin: '*'
}));

connection.connect();

app.get('/', (req, res) => {
    res.send('Connected to GPT API.');
});

// read all items
app.get('/items/', (req, res) => {
    connection.query('SELECT * FROM items', (err, result, fields) => {
        res.send(JSON.stringify(result));
    });
});

// read a single item by its id
app.get('/items/:id', (req, res) => {
    connection.query('SELECT * FROM items WHERE id = ?', [req.params.id], (err, result, fields) => {
        res.send(JSON.stringify(result));
    });
});

// read all prices
app.get('/prices/', (req, res) => {
    connection.query('SELECT * FROM prices', (err, result, fields) => {
        res.send(JSON.stringify(result));
    });
});

// read a single price by its price id
app.get('/prices/:id', (req, res) => {
    connection.query('SELECT * FROM prices WHERE id = ?', [req.params.id], (err, result, fields) => {
        res.send(JSON.stringify(result));
    });
});

// read all prices for an item by its id
app.get('/prices/item/:id', (req, res) => {
    connection.query('SELECT * FROM prices WHERE item_id = ?', [req.params.id], (err, result, fields) => {
        res.send(JSON.stringify(result));
    });
});

// read all stores
app.get('/stores/', (req, res) => {
    connection.query('SELECT * FROM stores', (err, result, fields) => {
        res.send(JSON.stringify(result));
    });
});

// read single store by store id
app.get('/stores/:id', (req, res) => {
    connection.query(`SELECT * FROM stores WHERE id = ?`, [req.params.id], (err, result, fields) => {
        res.send(JSON.stringify(result));
    });
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});