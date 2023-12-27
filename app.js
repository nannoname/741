const express = require('express');
const app = express();
const port = 3000;

let products = [];
let users = [];

app.use(express.json());

app.get('/products', (req, res) => {
    res.json(products);
});
app.get('/products/:id', (req, res) => {
    const product = products.find(p => p.id === parseInt(req.params.id));
    if (!product) return res.status(404).send('Not Found');
    else res.json(product);
});
app.post('/products', (req, res) => {
    const newProduct = {
        id: products.length + 1,
        name: req.body.name,
        price: req.body.price
    };
    products.push(newProduct);
    res.status(201).json(newProduct);
});
app.put('/products/:id', (req, res) => {
    let product = products.find(p => p.id === parseInt(req.params.id));
    if (!product) return res.status(404).send('Not Found');
});
app.delete('/products/:id', (req, res) => {
    product = products.filter(p => p.id === parseInt(req.params.id));
    res.status(204).send();
});
app.post('/users/register', (req, res) => {
    const newUser = {
        id: users.length + 1,
        name: req.body.name,
        surname: req.body.surname,
        patronymic: req.body.patronymic,
        city: req.body.city,
        role: req.body.role
    };
    users.push(newUser);
    res.status(201).json(newUser);
});
app.post('/users/login', (req, res) => {
    const user = users.find(p => p.id === parseInt(req.params.id));
    if (!user) return res.status(404).send('Not Found');
    else {
        
    }
});


app.listen(3000, function () {
    console.log('Server running on port ${port}');
});