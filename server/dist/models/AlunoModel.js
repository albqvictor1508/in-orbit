"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);

 class Aluno extends _sequelize.Model {
	static init(sequelize) {
		super.init(
			{
				nome: {
					type: _sequelize2.default.STRING,
					defaultValue: "",
					validate: {
						len: {
							args: [3, 255],
							msg: "Name must be between 3 and 255 characters",
						},
					},
				},
				sobrenome: {
					type: _sequelize2.default.STRING,
					defaultValue: "",
					validate: {
						len: {
							args: [3, 255],
							msg: "Surname must be between 3 and 255 characters",
						},
					},
				},
				idade: {
					type: _sequelize2.default.INTEGER,
					defaultValue: "",
					validate: {
						isInt: {
							msg: "Age must be a integer",
						},
						len: {
							args: [1, 3],
							msg: "Age must be between 1 and 3 characters",
						},
					},
				},
				email: {
					type: _sequelize2.default.STRING,
					defaultValue: "",
					validate: {
						isEmail: {
							msg: "Invalid email",
						},
					},
				},
				turno: {
					type: _sequelize2.default.STRING,
					defaultValue: "",
					validate: {
						len: {
							args: [6, 20],
							msg: "Invalid turn",
						},
					},
				},
			},
			{ sequelize },
		);

		return this;
	}

	static associate(models) {
		this.hasMany(models.Photo, { foreignKey: "student_id" });
	}
} exports.Aluno = Aluno;
