'use strict';

const travelInSpace = require('./');
const { types } = require('../services/weather');

let weather = null;
const periods = {
	[types.RAIN]: 0,
	[types.DROUGHT]: 0,
	[types.UNKNOWN]: 0,
	[types.OPTIMUM]: 0
};

travelInSpace(({ orbitWeather }) => {

	if(weather === orbitWeather)
		return;

	weather = orbitWeather;
	periods[weather]++;

});

console.log('Los periodos de clima en diez años serán: ', periods);
