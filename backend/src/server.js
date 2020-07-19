const express = require('express');
const routes = require('./routes');
require('./database/index');

const app = express();
app.use(express.json());
app.use(routes);
const port = 3333
const host = '0.0.0.0'
app.listen(port,host);