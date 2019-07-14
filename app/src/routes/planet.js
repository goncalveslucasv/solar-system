'use strict';

const express = require('express');

const { oneYear } = require('../config');
const { weatherInSolarSystem } = require('../controller/');

const router = express.Router();

router
	.get('/', (req, res) => {
		res.send('Welcome. Please enter the day');
	})
	.get('/weather/day/:id(\\d+)/', (req, res, next) => {
		const day = req.params.id;

		if(day > (oneYear * 10))
			return next(new Error('date exceeded'));


		const [planets, weather] = weatherInSolarSystem(day);

		res.json({ day: req.params.id, weather });
	});

module.exports = router;
