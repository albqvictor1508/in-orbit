import { Sequelize } from "sequelize";
import databaseConfig from "../config/database";
import { Aluno } from "../models/AlunoModel";
import { User } from "../models/UserModel";
import { Photo } from "../models/PhotoModel";

export const connection = new Sequelize(databaseConfig);
const models = [Aluno, User, Photo];
//console.log(connection.models);

models.forEach((model) => {
	model.init(connection);
});

models.forEach(
	(model) => model.associate && model.associate(connection.models),
);
