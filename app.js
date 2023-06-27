const express = require('express');
const app = express();
const {Pool} = require('pg');
//database connecion config
const pool = new Pool({
    user: 'woodleygelin',
    host: 'localhost',
    database: 'assignment10',
    password: 'assignment10',
    port: '5432'
});
//list all orders
app.get('/', (req, res) => {
    let query = 'SELECT * FROM orders';
    pool.query(query, (err, result) =>{
        try {
            res.status(200).json(result.rows);
        } catch (error) {
            res.status(400).send("Error retrieving data.");
        }
    });
});
//Joining Two Tables 
app.get('/TwoTables', (req, res) => {
    let query = 'SELECT * FROM orders JOIN customer ON orders.customer_id = customer.customer_id';
    pool.query(query, (err, result) =>{
        try {
            res.status(200).json(result.rows);
        } catch (error) {
            res.status(400).send("Error retrieving data.");
        }
    });
});
//Joining Three Tables
app.get('/ThreeTables', (req, res) => {
    let query = 'SELECT * FROM customer JOIN orders ON customer.customer_id = orders.customer_id JOIN delivery ON orders.order_id = delivery.order_id';
    pool.query(query, (err, result) =>{
        try {
            res.status(200).json(result.rows);
        } catch (error) {
            res.status(400).send("Error retrieving data.");
        }
    });
});

//joinning Four Tables
app.get('/FourTables', (req, res) => {
    let query = 'SELECT * FROM customer JOIN orders ON customer.customer_id = orders.customer_id JOIN delivery ON orders.order_id = delivery.order_id JOIN payment ON customer.customer_id = payment.customer_id AND orders.order_id = payment.order_id';
    pool.query(query, (err, result) =>{
        try {
            res.status(200).json(result.rows);
        } catch (error) {
            res.status(400).send("Error retrieving data.");
        }
    });
});

//insert data into customer
app.get('/AddData', (req, res) => {
    let query = 'INSERT INTO customer (customer_id, fname, name, address) VALUES (1, John, Doe, 123 Main St)';
    pool.query(query, (err, result) =>{
        try {
            res.status(200).json(result.rows);
        } catch (error) {
            res.status(400).send("Error retrieving data.");
        }
    });
});
//initialize server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
