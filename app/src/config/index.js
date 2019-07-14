'use strict';

const {
	SolarSystem,
	Planet,
	Clockwise,
	Counterclockwise
} = require('../domain/');

module.exports = {
	oneYear: 365,
	profitMargin: 0.8,
	SolarSystem: new SolarSystem([
		new Planet({ name: 'Ferengi', speed: 1, orbit: 500, direction: new Clockwise() }),
		new Planet({ name: 'Vulcano', speed: 5, orbit: 1000, direction: new Counterclockwise() }),
		new Planet({ name: 'Betasoide', speed: 3, orbit: 2000, direction: new Clockwise() })
	])
};
