'use strict';

function Counterclockwise() {
	this.calculatePosition = (day, speed) => {
		const absolutePosition = (speed * (day - 1)) % 360;
		let position = 360 - absolutePosition;

		if(absolutePosition === 0)
			position = 0;

		if(absolutePosition < 0)
			position = 360;

		return position;
	};
}

module.exports = Counterclockwise;
