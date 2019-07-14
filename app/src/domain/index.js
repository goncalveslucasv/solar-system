'use strict';

const SolarSystem = require('./SolarSystem');
const Planet = require('./Planet');
const Clockwise = require('./revolution/Clockwise');
const Counterclockwise = require('./revolution/Counterclockwise');

module.exports = {
	SolarSystem,
	Planet,
	Clockwise,
	Counterclockwise
};
