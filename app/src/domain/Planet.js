'use strict';

class Planet {
	constructor({ name, speed, orbit, direction }) {
		this.name = name;
		this.speed = speed;
		this.orbit = orbit;
		this.direction = direction;
		this.position = 0;
		this.x = orbit;
		this.y = 0;
	}

	calculatePositionByDay(day) {
		this.position = this.direction.calculatePosition(day, this.speed);

		const angle = (this.position * Math.PI) / 180;
		this.x = this.orbit * Math.cos(angle);
		this.y = this.orbit * Math.sin(angle);

	}

}

module.exports = Planet;
