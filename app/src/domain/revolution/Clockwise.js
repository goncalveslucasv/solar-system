'use strict';

function Clockwise() {
	this.calculatePosition = (day, speed) => {
		return (speed * (day - 1)) % 360;
	};
}

module.exports = Clockwise;
