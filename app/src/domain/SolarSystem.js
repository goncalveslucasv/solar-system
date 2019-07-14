'use strict';

class SolarSystem {
	constructor(Planets) {
		this.planets = Planets;
	}

	calculatePlanetsForTheDay(day) {
		this.planets.forEach(planet => planet.calculatePositionByDay(day));
		return this.planets;
	}
}

module.exports = SolarSystem;
