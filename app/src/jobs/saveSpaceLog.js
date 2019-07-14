'use strict';

const travelInSpace = require('./');
const saveSpaceLog = require('../repository/orbit');

travelInSpace(({ day, planets, orbitWeather }) => {
	saveSpaceLog(day, planets, orbitWeather);
});
