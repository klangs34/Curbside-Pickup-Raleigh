const express = require('express');
const Router = express.Router();

const db = require('../models')

Router.get('/get-restaurants', (req, res) => {
    db.Restaurants.find({})
        .then(data => {
            console.log(data)
            res.json(data)
        })
})


Router.get('/get-restaurant/:id', (req, res) => {
    const { id } = req.params;

    db.Restaurants.findOne({id})
        .then(data => {
            console.log(data)
            res.json(data)
        })
})

module.exports = Router;