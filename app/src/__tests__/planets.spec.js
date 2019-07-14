'use strict';

const {
	SolarSystem,
	Planet,
	Clockwise,
	Counterclockwise
} = require('../domain/');

test('planet before 360 days', () => {
	const planet = new Planet({ speed: 1, orbit: 197, direction: new Clockwise() });
	planet.calculatePositionByDay(361);
	const coords = [
		planet.x,
		planet.y
	];
	expect(coords).toStrictEqual([197, 0]);
});

test('planet counterclockwise before 72 days', () => {
	const planet = new Planet({ speed: 5, orbit: 197, direction: new Counterclockwise() });
	planet.calculatePositionByDay(73);
	const coords = [
		planet.x,
		planet.y
	];
	expect(coords).toStrictEqual([197, 0]);
});

test('universe before 360 days', () => {
	const Universe = new SolarSystem([
		new Planet({ speed: 1, orbit: 500, direction: new Clockwise() }),
		new Planet({ speed: 5, orbit: 1000, direction: new Counterclockwise() }),
		new Planet({ speed: 3, orbit: 2000, direction: new Clockwise() })
	]);

	Universe.calculatePlanetsForTheDay(361);

	const { planets } = Universe;

	expect([planets[0].x, planets[0].y]).toStrictEqual([500, 0]);
	expect([planets[1].x, planets[1].y]).toStrictEqual([1000, 0]);
	expect([planets[2].x, planets[2].y]).toStrictEqual([2000, 0]);
});
