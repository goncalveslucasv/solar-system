'use strict';

const errorHandler = (err, req, res, next) => {
	const message = err && (err.message || 'Internal server error');
	res.status(500).json({ message });
};

module.exports = errorHandler;
