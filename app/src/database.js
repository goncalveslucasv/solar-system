'use strict';

const mysql = require('mysql');
const util = require('util');

const pool = mysql.createPool({
	host: process.env.HOST_MYSQL || 'localhost',
	user: process.env.ROOT_USER_MYSQL || 'root',
	password: process.env.MYSQL_ROOT_PASSWORD || 'root',
	database: process.env.DB_MYSQL || 'planets',
	connectionLimit: 10

});

pool.getConnection((err, connection) => {
	if(err)
		console.error('Database connection error.');

	if(connection)
		connection.release();

});

pool.query = util.promisify(pool.query);

module.exports = pool;
