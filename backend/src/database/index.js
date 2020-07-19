const Sequelize = require('sequelize');
const dbConfig = require('../config/database');
const Linha = require('../models/Linha');
const Parada = require('../models/Parada');
const Veiculo = require('../models/Veiculo');
const PosicaoVeiculo = require('../models/PosicaoVeiculo');

const connection = new Sequelize(dbConfig);

Linha.init(connection);
Parada.init(connection);
Veiculo.init(connection);
PosicaoVeiculo.init(connection);


Linha.associate(connection.models);
Parada.associate(connection.models);
Veiculo.associate(connection.models);
PosicaoVeiculo.associate(connection.models);


module.exports = connection;