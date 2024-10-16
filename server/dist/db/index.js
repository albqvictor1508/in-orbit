"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize');
var _database = require('../config/database'); var _database2 = _interopRequireDefault(_database);
var _AlunoModel = require('../models/AlunoModel');
var _UserModel = require('../models/UserModel');
var _PhotoModel = require('../models/PhotoModel');

 const connection = new (0, _sequelize.Sequelize)(_database2.default); exports.connection = connection;
const models = [_AlunoModel.Aluno, _UserModel.User, _PhotoModel.Photo];

models.forEach((model) => {
	model.init(exports.connection);
});

models.forEach(
	(model) => model.associate && model.associate(exports.connection.models),
);
