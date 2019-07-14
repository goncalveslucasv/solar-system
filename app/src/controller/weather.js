'use strict';

const { detectWeather } = require('../services/weather');
const { SolarSystem } = require('../config');

const weatherInSolarSystem = day => {
	const planets = SolarSystem.calculatePlanetsForTheDay(day);

	return [planets, detectWeather(planets)];
};

module.exports = weatherInSolarSystem;
