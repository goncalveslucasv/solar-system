'use strict';

const { profitMargin } = require('../config');

const {
	probabilityOfLinearCorrelationOfPlanets,
	centralPointInsideTriangle
} = require('../helpers/math');

const types = {
	DROUGHT: 'drought',
	RAIN: 'rain',
	UNKNOWN: 'unknown',
	OPTIMUM: 'optimum'
};

const detectWeather = planets => {
	const orbitWithSun = [...planets, {
		name: 'Sun', speed: 0, orbit: 0, position: 0, x: 0, y: 0
	}];
	const probabilityOfAlignmentWithSun = probabilityOfLinearCorrelationOfPlanets(orbitWithSun);

	if(probabilityOfAlignmentWithSun > profitMargin || isNaN(probabilityOfAlignmentWithSun))
		return types.DROUGHT;

	const probabilityOfAlignment = probabilityOfLinearCorrelationOfPlanets(planets);

	if(probabilityOfAlignment > profitMargin || isNaN(probabilityOfAlignment))
		return types.OPTIMUM;

	if(centralPointInsideTriangle(planets))
		return types.RAIN;

	return types.UNKNOWN;
};

module.exports = {
	detectWeather,
	types
};
