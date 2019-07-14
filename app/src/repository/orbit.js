'use strict';

const db = require('../database');

const sql = `insert into orbits (id_day, x, y, id_planet, id_weather) values (?, ?, ?, 
			(select id from planets where name = ?), 
			(select id from weather where name = ?))`;

const orbit = (day, planets, weather) => {
	planets.forEach(planet => {
		db.query({
			sql,
			timeout: 20000,
			values: [day, planet.x, planet.y, planet.name, weather]
		})
			.catch(() => {
				console.error('Error inserting data into database');
			});
	});

};

module.exports = orbit;
