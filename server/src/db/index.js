import { Sequelize } from "sequelize";
import databaseConfig from "../config/database";
import { Aluno } from "../models/AlunoModel";
import { User } from "../models/UserModel";

const connection = new Sequelize(databaseConfig);

const models = [Aluno, User];
models.forEach(model => model.init(connection))


