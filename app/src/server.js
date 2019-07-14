'use strict';

const express = require('express');

const app = express();
const { planetRoute } = require('./routes');
const { errorHandler } = require('./middleware');

app.use(planetRoute);

app.use(errorHandler);

app.listen(3000);
