'use strict';

const { weatherInSolarSystem } = require('../controller/');
const { oneYear } = require('../config');

const travelInSpace = strategy => {

	for(let day = 1; day <= oneYear * 10; day++) {
		const [planets, orbitWeather] = weatherInSolarSystem(day);

		strategy && strategy({ day, planets, orbitWeather });
	}

};

module.exports = travelInSpace;
