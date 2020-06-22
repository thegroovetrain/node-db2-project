const express = require('express');
const server = express();
const port = 5000;
const db = require('./data/db');

server.use(express.json());

server.get('/', (req, res) => res.send('hello!'));

server.get('/api/cars', (req, res) => {
    db('cars').then(cars => {
        res.status(200).json(cars);
    }).catch(err => {
        res.status(500).json({message: 'Failed to get cars'});
    });
});

server.get('/api/cars/:id', (req, res) => {
    db('cars').where({id: parseInt(req.params.id, 10)}).then(car => {
        if (car.length) {
            res.status(200).json(car);
        } else {
            res.status(404).json({message: 'ID not found'});
        }
    }).catch(err => {
        res.status(500).json({message: 'Failed to get car'});
    });
});

server.post('/api/cars', (req, res) => {
    db('cars').insert({
        vin: req.body.vin,
        make: req.body.make,
        model: req.body.model,
        mileage: req.body.mileage,
        transmission_type: req.body.transmission_type || null,
        title_status: req.body.title_status || null
    }).then(id => {
        res.status(201).json(id);
    }).catch(err => {
        res.status(500).json({message: 'Failed to create car'});
    });
});

server.listen(port, () => console.log('Server running at localhost:5000'));