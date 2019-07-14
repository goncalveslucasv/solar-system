'use strict';

const probabilityOfLinearCorrelationOfPlanets = Positions => {

	const sum = {
		XY: 0, X: 0, Y: 0, powX: 0, powY: 0
	};

	Positions.forEach(position => {
		sum.XY += position.x * position.y;
		[sum.X, sum.Y] = [sum.X += position.x, sum.Y += position.y];
		[sum.powX, sum.powY] = [sum.powX += Math.pow(position.x, 2), sum.powY += Math.pow(position.y, 2)];
	});

	const positionsCount = Positions.length;
	const numerator = (positionsCount * sum.XY) - (sum.X * sum.Y);

	const denominatorX = Math.sqrt((positionsCount * sum.powX) - Math.pow(sum.X, 2));
	const denominatorY = Math.sqrt((positionsCount * sum.powY) - Math.pow(sum.Y, 2));
	const denominator = denominatorX * denominatorY;

	return Math.abs(Math.pow(numerator / denominator, 2));

};

const centralPointInsideTriangle = Points => {
	const differenceOfTheProductsOfTheDifference = (a, b, c) => (b.x - a.x) * (c.y - a.y) - (b.y - a.y) * (c.x - a.x);
	const centralPoint = { x: 0, y: 0 };

	const [pointA, pointB, pointC] = Points;

	const abc = differenceOfTheProductsOfTheDifference(pointA, pointB, pointC);
	const AA = differenceOfTheProductsOfTheDifference(pointA, pointB, centralPoint);
	const BB = differenceOfTheProductsOfTheDifference(pointB, pointC, centralPoint);
	const CC = differenceOfTheProductsOfTheDifference(pointC, pointA, centralPoint);

	return abc * AA > 0 &&
	abc * BB > 0 &&
	abc * CC > 0;


};

module.exports = {
	probabilityOfLinearCorrelationOfPlanets,
	centralPointInsideTriangle
};
