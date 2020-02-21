const express = require('express');

const cars = require('./carsModel');

const router = express.Router();

router.get('/', (req, res) => {
    cars.find()
        .then(cars => {
            res.status(200).json(cars);
        })
        .catch(err => {
            res.status(500).json({
                error: 'Failed to get cars.'
            })
        })
});

module.exports = router